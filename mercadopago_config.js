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
    // Cole aqui sua Public Key de Producao ou Teste (Sandbox)
    publicKey: "APP_USR-COLE_SUA_PUBLIC_KEY_AQUI",

    // URL do seu servidor ou Cloud Function para criar o PIX / Cobranca
    // Exemplo: https://us-central1-fcgestao-testes.cloudfunctions.net/criarPagamento
    apiUrl: "",

    // Ativacao do modo automatico
    // Se false ou se publicKey for a padrao, o sistema usa o PIX direto da Primas Tecnologia
    ativo: false
};

window.MERCADO_PAGO_CONFIG = MERCADO_PAGO_CONFIG;
