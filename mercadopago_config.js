// ==========================================================================
// MERCADOPAGO_CONFIG.JS - PRIMAS TECNOLOGIA
// Integracao Oficial de Recebimentos via API Mercado Pago (Mercado Livre)
// ==========================================================================
//
// COMO ATIVAR A API DO MERCADO PAGO / MERCADO LIVRE:
// 1. Acesse: https://www.mercadopago.com.br/developers/panel
// 2. Crie uma aplicacao (ex: "Primas Tecnologia SaaS")
// 3. Em "Credenciais de Producao", copie:
//    - Public Key (comeca com APP_USR-...) e cole abaixo em publicKey
//    - Access Token (comeca com APP_USR-...) -> usado no backend webhook-pagamento
// ==========================================================================

const MERCADO_PAGO_CONFIG = {
    // Chave Publica do Mercado Pago (Frontend - Produção)
    publicKey: "APP_USR-8bb88320-79d8-44b6-86f4-d7d0da57d9e1",

    // URL da Cloud Function para criar a cobrança
    apiUrl: "https://us-central1-lojafc-a31f9.cloudfunctions.net/criarPagamento",
    urlVerificarPix: "https://us-central1-lojafc-a31f9.cloudfunctions.net/verificarPix",

    // Ativacao do modo automatico
    ativo: true
};

window.MERCADO_PAGO_CONFIG = MERCADO_PAGO_CONFIG;
