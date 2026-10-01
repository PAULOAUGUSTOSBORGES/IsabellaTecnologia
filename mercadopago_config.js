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
    // Chave Publica do Mercado Pago (Frontend)
    publicKey: "APP_USR-4ba9c308-52b4-45bb-93cd-e89978a699b8",

    // URL do seu servidor ou Cloud Function para criar o PIX / Cobranca
    apiUrl: "https://us-central1-lojafc-a31f9.cloudfunctions.net/criarPagamento",
    urlVerificarPix: "https://us-central1-lojafc-a31f9.cloudfunctions.net/verificarPix",

    // Ativacao do modo automatico
    ativo: true
};

window.MERCADO_PAGO_CONFIG = MERCADO_PAGO_CONFIG;
