// ==========================================================================
// CONFIG_BANCO.JS - PRIMAS TECNOLOGIA (CONEXAO BANCO CENTRAL SAAS)
// Conecta com o Firestore do SaaS Master (fcgestao-testes) para sincronizar
// planos, sistemas e direcionar acessos oficiais.
// ==========================================================================

const firebaseConfig = {
    apiKey: "AIzaSyAvaDdhJSFP6WKs8UFRvlQmNGFlc1ZKgFk", // Web API Key do projeto central fcgestao-testes
    authDomain: "fcgestao-testes.firebaseapp.com",
    projectId: "fcgestao-testes",
    storageBucket: "fcgestao-testes.firebasestorage.app",
    messagingSenderId: "126917183785",
    appId: "1:126917183785:web:32cdc3fd9b8e1064658f38",
    measurementId: "G-G08C2WPKYP"
};

// Mapeamento dos sistemas gerenciados pelo SaaS e suas URLs oficiais de login/producao
const SISTEMAS_SAAS_CONFIG = {
    fc_gestao: {
        id: "fc_gestao",
        nome: "FC Gestao",
        tagline: "ERP, PDV & Emissor Fiscal para Varejo e Moveis",
        loginUrl: "https://lojafc-a31f9.web.app/sistema/login.html",
        cadastroUrl: "https://lojafc-a31f9.web.app/sistema/login.html?tab=cadastro",
        sistemaUrl: "https://lojafc-a31f9.web.app/sistema/index.html",
        icone: "fa-layer-group",
        logoUrl: "icone_fc_gestao.png",
        corDestaque: "#3b82f6"
    }
};

window.SISTEMAS_SAAS_CONFIG = SISTEMAS_SAAS_CONFIG;

// Inicializa o Firebase apenas se o SDK estiver presente e nenhuma app estiver ativa
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
    try {
        firebase.initializeApp(firebaseConfig);
        console.log("Primas.Tech conectado com sucesso ao banco central SaaS: fcgestao-testes");
    } catch (err) {
        console.error("Erro ao inicializar Firebase no site Primas.Tech:", err);
    }
} else if (typeof firebase === 'undefined') {
    console.warn("Firebase SDK ainda nao carregado. Carregue firebase-app e firebase-firestore antes de chamar as APIs.");
}
