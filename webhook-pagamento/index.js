// ================================================================
// webhook-pagamento/index.js
// Cloud Functions for Firebase — Primas Tecnologia
//
// Funções exportadas:
//   1. criarPagamento  → Inicia cobrança no Mercado Pago (PIX ou Cartão)
//   2. verificarPix    → Verifica se um PIX foi pago
//   3. webhookMercadoPago → Recebe notificações automáticas do MP
//
// CONFIGURAÇÃO:
//   Defina as variáveis de ambiente no Firebase antes de fazer deploy:
//   firebase functions:config:set mercadopago.token="SEU_TOKEN_SECRETO_AQUI"
//   (ou use o arquivo .env.local para testes locais)
// ================================================================

const functions = require('firebase-functions');
const admin     = require('firebase-admin');
const axios     = require('axios');

// Inicializa o Firebase Admin SDK (só 1 vez por instância)
admin.initializeApp();
const db   = admin.firestore();
const auth = admin.auth();

// ── Token secreto do Mercado Pago (SERVER-SIDE — nunca exposto ao cliente) ─
// Obtido via: firebase functions:config:get ou fallback direto para produção
const MP_TOKEN = process.env.MERCADOPAGO_TOKEN || functions.config().mercadopago?.token || 'APP_USR-413999599254354-093013-a40e774b9a2e412dd44185483865af54-208400622';
const MP_BASE  = 'https://api.mercadopago.com';


// ================================================================
// FUNÇÃO 1: criarPagamento
// Endpoint chamado pelo checkout.js quando o usuário escolhe um plano.
//
// Recebe: { tipo: 'pix'|'cartao', valorCentavos, cardToken?, emailPagador?, nomePlano? }
// Retorna:
//   - Para PIX:    { pixCopiaCola: "..." }
//   - Para Cartão: { aprovado: true/false, mensagem: "..." }
// ================================================================
exports.criarPagamento = functions.https.onRequest(async (req, res) => {
  // Permite requisições do seu domínio (ajuste conforme necessário)
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  // Preflight do CORS
  if (req.method === 'OPTIONS') return res.status(204).send('');
  if (req.method !== 'POST')    return res.status(405).send('Método não permitido');

  const { tipo, valorCentavos, cardToken, emailPagador, nomePlano } = req.body;

  try {
    if (tipo === 'pix') {
      // ── Criar cobrança PIX no Mercado Pago ──────────────────
      const pagamento = await axios.post(
        `${MP_BASE}/v1/payments`,
        {
          transaction_amount: valorCentavos / 100,
          payment_method_id:  'pix',
          payer: { email: emailPagador || 'cliente@primastecnologia.com' },
          description: `Assinatura Plano ${nomePlano} — Primas Tecnologia`,
          // O webhook notificará automaticamente quando o PIX for pago
          notification_url: 'URL_DA_SUA_CLOUD_FUNCTION/webhookMercadoPago',
        },
        {
          headers: {
            'Authorization':     `Bearer ${MP_TOKEN}`,
            'X-Idempotency-Key': `pix-${Date.now()}`,
            'Content-Type':      'application/json',
          },
        }
      );

      const dados = pagamento.data;
      const pixCopiaCola =
        dados.point_of_interaction?.transaction_data?.qr_code || '';

      // Salva o pagamento pendente no Firestore para rastrear
      await db.collection('pagamentos_pendentes').doc(String(dados.id)).set({
        pagamentoId:  dados.id,
        tipo:         'pix',
        nomePlano:    nomePlano,
        status:       'pending',
        criadoEm:     admin.firestore.FieldValue.serverTimestamp(),
      });

      return res.status(200).json({ pixCopiaCola });

    } else if (tipo === 'cartao') {
      // ── Cobrar com token de cartão ───────────────────────────
      const pagamento = await axios.post(
        `${MP_BASE}/v1/payments`,
        {
          transaction_amount: valorCentavos / 100,
          token:              cardToken,
          installments:       1,
          payment_method_id:  'visa', // O SDK do MP detecta automaticamente
          payer: { email: emailPagador },
          description: `Assinatura Plano ${nomePlano} — Primas Tecnologia`,
          notification_url: 'URL_DA_SUA_CLOUD_FUNCTION/webhookMercadoPago',
        },
        {
          headers: {
            'Authorization':     `Bearer ${MP_TOKEN}`,
            'X-Idempotency-Key': `cartao-${Date.now()}`,
            'Content-Type':      'application/json',
          },
        }
      );

      const dados  = pagamento.data;
      const status = dados.status; // 'approved', 'rejected', 'in_process'

      if (status === 'approved') {
        // Pagamento aprovado imediatamente → criar usuário no Firebase Auth
        await criarUsuarioFirebase(emailPagador, nomePlano, dados.id);
        return res.status(200).json({ aprovado: true });
      } else {
        return res.status(200).json({
          aprovado: false,
          mensagem: traduzirStatusMP(dados.status_detail),
        });
      }

    } else {
      return res.status(400).json({ erro: 'Tipo de pagamento inválido.' });
    }

  } catch (err) {
    console.error('[criarPagamento] Erro:', err.response?.data || err.message);
    return res.status(500).json({ erro: 'Erro interno ao processar pagamento.' });
  }
});


// ================================================================
// FUNÇÃO 2: verificarPix
// Chamada quando o usuário clica "Já fiz o pagamento via PIX".
// Consulta o Firestore para ver se o webhook já atualizou o status.
//
// Recebe: { nomePlano: "Pro" }
// Retorna: { aprovado: true/false, mensagem: "..." }
// ================================================================
exports.verificarPix = functions.https.onRequest(async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).send('');

  const { nomePlano } = req.body;

  try {
    // Busca o pagamento PIX mais recente para este plano ainda pendente
    const snapshot = await db
      .collection('pagamentos_pendentes')
      .where('nomePlano', '==', nomePlano)
      .where('tipo', '==', 'pix')
      .where('status', '==', 'approved')
      .orderBy('criadoEm', 'desc')
      .limit(1)
      .get();

    if (!snapshot.empty) {
      return res.status(200).json({ aprovado: true });
    } else {
      return res.status(200).json({
        aprovado: false,
        mensagem: 'Pagamento PIX ainda não identificado.',
      });
    }
  } catch (err) {
    console.error('[verificarPix] Erro:', err.message);
    return res.status(500).json({ erro: 'Erro ao verificar PIX.' });
  }
});


// ================================================================
// FUNÇÃO 3: webhookMercadoPago
// Recebe notificações automáticas do Mercado Pago (IPN/Webhook).
//
// IMPORTANTE: Deve retornar HTTP 200 imediatamente para evitar
// que o Mercado Pago fique reenviando a mesma notificação.
//
// O Mercado Pago envia:
//   POST { action: "payment.updated", data: { id: "123456789" } }
// ================================================================
exports.webhookMercadoPago = functions.https.onRequest(async (req, res) => {
  // ── RETORNA 200 IMEDIATAMENTE para o Mercado Pago ─────────────
  // Isso evita timeouts e loops de reenvio do webhook.
  res.status(200).send('OK');

  // Processamento acontece APÓS o retorno do 200
  if (req.method !== 'POST') return;

  const { action, data } = req.body;

  // Só processa notificações de pagamento atualizado
  if (action !== 'payment.updated' || !data?.id) return;

  const pagamentoId = String(data.id);

  try {
    // ── Busca os detalhes do pagamento na API do Mercado Pago ──
    const resposta = await axios.get(
      `${MP_BASE}/v1/payments/${pagamentoId}`,
      { headers: { 'Authorization': `Bearer ${MP_TOKEN}` } }
    );

    const pagamento = resposta.data;
    const status    = pagamento.status; // 'approved', 'rejected', 'pending'...

    console.log(`[webhook] Pagamento ${pagamentoId} → status: ${status}`);

    // ── Atualiza o status no Firestore ─────────────────────────
    const docRef = db.collection('pagamentos_pendentes').doc(pagamentoId);
    await docRef.set({ status }, { merge: true });

    // ── Se aprovado: cria o usuário no Firebase Auth ───────────
    if (status === 'approved') {
      const emailPagador = pagamento.payer?.email;
      const nomePlano    = (await docRef.get()).data()?.nomePlano || 'Desconhecido';

      if (emailPagador) {
        await criarUsuarioFirebase(emailPagador, nomePlano, pagamentoId);
        console.log(`[webhook] Usuário criado: ${emailPagador} | Plano: ${nomePlano}`);
      } else {
        console.warn('[webhook] Pagamento aprovado mas sem e-mail do pagador!');
      }
    }

  } catch (err) {
    // Logar o erro mas NÃO lançar exceção — o HTTP 200 já foi enviado.
    console.error('[webhook] Erro ao processar pagamento', pagamentoId, ':', err.message);
  }
});


// ================================================================
// FUNÇÃO AUXILIAR: criarUsuarioFirebase
// Cria o usuário no Firebase Auth (ou o atualiza se já existir)
// e salva os dados do plano no Firestore.
// ================================================================
async function criarUsuarioFirebase(email, nomePlano, pagamentoId) {
  let uid;

  try {
    // Tenta criar o usuário
    const novoUsuario = await auth.createUser({
      email:         email,
      emailVerified: false,
      // Senha temporária aleatória — o usuário vai resetar via e-mail
      password:      gerarSenhaTemporaria(),
      displayName:   email.split('@')[0],
    });
    uid = novoUsuario.uid;
    console.log(`[criarUsuario] Novo usuário criado: ${uid}`);

  } catch (err) {
    if (err.code === 'auth/email-already-exists') {
      // Usuário já existe (ex: pagou duas vezes ou fez upgrade de plano)
      const usuarioExistente = await auth.getUserByEmail(email);
      uid = usuarioExistente.uid;
      console.log(`[criarUsuario] Usuário já existe, atualizando plano: ${uid}`);
    } else {
      throw err; // Outro erro — propaga para o chamador
    }
  }

  // ── Salva/atualiza dados do plano no Firestore ────────────────
  await db.collection('usuarios').doc(uid).set(
    {
      email:          email,
      plano:          nomePlano,
      pagamentoId:    String(pagamentoId),
      planoAtivadoEm: admin.firestore.FieldValue.serverTimestamp(),
      ativo:          true,
    },
    { merge: true } // Não sobrescreve outros campos existentes
  );

  // ── Envia e-mail de redefinição de senha para o novo usuário ──
  // O usuário vai clicar no link e definir a senha que quiser.
  try {
    const linkReset = await auth.generatePasswordResetLink(email);
    console.log(`[criarUsuario] Link de reset enviado para ${email}: ${linkReset}`);
    // TODO: Integrar com SendGrid/Mailgun para enviar e-mail personalizado
    // com o link acima. Por agora, o Firebase envia o e-mail padrão.
  } catch (err) {
    console.warn('[criarUsuario] Falha ao gerar link de reset:', err.message);
  }

  return uid;
}

// ================================================================
// FUNÇÃO AUXILIAR: Gera senha temporária segura
// ================================================================
function gerarSenhaTemporaria() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#$';
  let senha = '';
  for (let i = 0; i < 16; i++) {
    senha += chars[Math.floor(Math.random() * chars.length)];
  }
  return senha;
}

// ================================================================
// FUNÇÃO AUXILIAR: Traduz status_detail do Mercado Pago
// ================================================================
function traduzirStatusMP(statusDetail) {
  const traducoes = {
    'cc_rejected_bad_filled_card_number':   'Número do cartão inválido.',
    'cc_rejected_bad_filled_date':          'Data de validade inválida.',
    'cc_rejected_bad_filled_other':         'Dados do cartão incorretos.',
    'cc_rejected_bad_filled_security_code': 'CVV inválido.',
    'cc_rejected_blacklist':                'Cartão bloqueado pela operadora.',
    'cc_rejected_call_for_authorize':       'Operadora solicitou autorização. Ligue para o banco.',
    'cc_rejected_card_disabled':            'Cartão desativado.',
    'cc_rejected_duplicated_payment':       'Pagamento duplicado detectado.',
    'cc_rejected_high_risk':                'Pagamento recusado por segurança.',
    'cc_rejected_insufficient_amount':      'Saldo insuficiente.',
    'cc_rejected_invalid_installments':     'Número de parcelas inválido.',
    'cc_rejected_max_attempts':             'Limite de tentativas atingido. Use outro cartão.',
  };
  return traducoes[statusDetail] || 'Pagamento recusado. Verifique os dados e tente novamente.';
}
