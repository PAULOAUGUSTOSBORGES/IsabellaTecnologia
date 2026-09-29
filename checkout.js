// ================================================================
// checkout.js — Lógica Client-Side de Checkout
// Isabella Tecnologia · Sistema de Assinaturas SaaS
//
// INSTRUÇÕES PARA CONFIGURAR:
//   1. Substitua SEU_TOKEN_PUBLIC_AQUI pelo token público do
//      Mercado Pago (obtido no painel do desenvolvedor).
//   2. Substitua URL_DA_SUA_CLOUD_FUNCTION pela URL que o Firebase
//      vai gerar para a função "criarPagamento" (ver webhook).
//   3. Não coloque tokens secretos aqui — este ficheiro é público!
// ================================================================

// ── CONFIGURAÇÃO (editar aqui) ──────────────────────────────────
const CHECKOUT_CONFIG = {
  // Token PÚBLICO do Mercado Pago (começa com APP_USR-...)
  // Obtenha em: https://www.mercadopago.com.br/developers/panel
  mercadoPagoPublicKey: 'SEU_TOKEN_PUBLIC_AQUI',

  // URL da sua Cloud Function que inicia o pagamento
  // Exemplo: 'https://us-central1-SEU_PROJETO.cloudfunctions.net/criarPagamento'
  urlCriarPagamento: 'URL_DA_SUA_CLOUD_FUNCTION/criarPagamento',

  // URL da Cloud Function que verifica o status do PIX
  urlVerificarPix: 'URL_DA_SUA_CLOUD_FUNCTION/verificarPix',
};


// ================================================================
// FUNÇÃO: Gerar Chave PIX para o plano escolhido
//
// Na versão completa, isso chama sua Cloud Function que cria uma
// "preferência de pagamento" no Mercado Pago e retorna o
// código copia-e-cola do PIX.
//
// Por agora, retorna uma mensagem de placeholder.
// ================================================================
async function gerarChavePix(valorCentavos) {
  // Verifica se o token já foi configurado
  if (CHECKOUT_CONFIG.mercadoPagoPublicKey === 'SEU_TOKEN_PUBLIC_AQUI') {
    return '⚠️ Configure SEU_TOKEN_PUBLIC_AQUI no arquivo checkout.js para gerar o QR Code PIX real.';
  }

  try {
    const resposta = await fetch(CHECKOUT_CONFIG.urlCriarPagamento, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        tipo: 'pix',
        valorCentavos: valorCentavos,
      }),
    });

    if (!resposta.ok) throw new Error('Servidor retornou erro ' + resposta.status);

    const dados = await resposta.json();
    // O backend deve retornar { pixCopiaCola: "..." }
    return dados.pixCopiaCola || 'Erro: chave PIX não retornada pelo servidor.';

  } catch (err) {
    console.error('[checkout.js] Erro ao gerar chave PIX:', err);
    return 'Erro ao gerar PIX: ' + err.message;
  }
}


// ================================================================
// FUNÇÃO: Verificar Status do Pagamento PIX
//
// Chamada quando o usuário clica "Já fiz o pagamento via PIX".
// Consulta a Cloud Function que pergunta ao Mercado Pago se o
// pagamento foi aprovado. Se sim, o backend cria o usuário no
// Firebase Auth e retorna { aprovado: true }.
// ================================================================
async function verificarStatusPix(plano) {
  if (CHECKOUT_CONFIG.mercadoPagoPublicKey === 'SEU_TOKEN_PUBLIC_AQUI') {
    // MODO DEMO: simula aprovação após 1,5 segundos
    await new Promise(r => setTimeout(r, 1500));
    return { aprovado: false, mensagem: 'Configure o token para pagamentos reais.' };
  }

  const resposta = await fetch(CHECKOUT_CONFIG.urlVerificarPix, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nomePlano: plano.nome }),
  });

  if (!resposta.ok) throw new Error('Erro ao consultar status: ' + resposta.status);
  return await resposta.json();
  // Esperado: { aprovado: true/false, mensagem: "..." }
}


// ================================================================
// FUNÇÃO: Processar Pagamento com Cartão de Crédito
//
// IMPORTANTE: Nunca envie dados brutos do cartão para o seu
// servidor. Use o SDK do Mercado Pago para TOKENIZAR o cartão
// no navegador. O token gerado é seguro e tem curta duração.
// ================================================================
async function processarPagamentoCartao({ nome, numero, val, cvv, email, plano }) {
  if (CHECKOUT_CONFIG.mercadoPagoPublicKey === 'SEU_TOKEN_PUBLIC_AQUI') {
    // MODO DEMO: simula processamento
    await new Promise(r => setTimeout(r, 2000));
    return {
      aprovado: false,
      mensagem: 'Configure o token em checkout.js para processar cartões reais.',
    };
  }

  // ── PASSO 1: Tokenizar o cartão com o SDK do Mercado Pago ─────
  // O SDK é carregado via script do Mercado Pago (adicionar no <head> do acesso.html
  // quando for ao ar: <script src="https://sdk.mercadopago.com/js/v2"></script>)
  const mp = new MercadoPago(CHECKOUT_CONFIG.mercadoPagoPublicKey);

  const [mesExp, anoExp] = val.split('/');

  let cardToken;
  try {
    cardToken = await mp.createCardToken({
      cardNumber:      numero,
      cardholderName:  nome,
      cardExpirationMonth: mesExp,
      cardExpirationYear:  '20' + anoExp,
      securityCode:    cvv,
    });
  } catch (err) {
    throw new Error('Falha ao tokenizar cartão: ' + err.message);
  }

  // ── PASSO 2: Enviar token para a Cloud Function ───────────────
  // O backend usa o token para cobrar via Mercado Pago.
  // O token NÃO contém os dados do cartão — é seguro enviá-lo.
  const resposta = await fetch(CHECKOUT_CONFIG.urlCriarPagamento, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      tipo:            'cartao',
      cardToken:       cardToken.id,
      emailPagador:    email,
      nomePlano:       plano.nome,
      valorCentavos:   plano.valorCentavos,
    }),
  });

  if (!resposta.ok) throw new Error('Erro no servidor: ' + resposta.status);
  return await resposta.json();
  // Esperado: { aprovado: true/false, mensagem: "..." }
}
