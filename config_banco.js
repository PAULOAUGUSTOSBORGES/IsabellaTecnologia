// ==========================================================================
// CONFIG_BANCO.JS - PRIMAS TECNOLOGIA (CONEXÃO COM OS BANCOS OFICIAIS)
// 1. BANCO OFICIAL DO SISTEMA (lojafc-a31f9) -> Onde clientes e lojas operam
// 2. BANCO SAAS MASTER (fcgestao-testes) -> Gestão de leads e catálogo global
// ==========================================================================

const BANCO_OFICIAL = {
    apiKey: "AIzaSyDIlmd3zUTof-lwxyT7j3UxmenPKs_sMJg",
    authDomain: "lojafc-a31f9.firebaseapp.com",
    projectId: "lojafc-a31f9",
    storageBucket: "lojafc-a31f9.firebasestorage.app",
    messagingSenderId: "221558052645",
    appId: "1:221558052645:web:ed942d019727a472096ccc"
};

const BANCO_SAAS = {
    apiKey: "AIzaSyAvaDdhJSFP6WKs8UFRvlQmNGFlc1ZKgFk",
    authDomain: "fcgestao-testes.firebaseapp.com",
    projectId: "fcgestao-testes",
    storageBucket: "fcgestao-testes.firebasestorage.app",
    messagingSenderId: "126917183785",
    appId: "1:126917183785:web:32cdc3fd9b8e1064658f38",
    measurementId: "G-G08C2WPKYP"
};

const firebaseConfig = BANCO_OFICIAL;
window.BANCO_OFICIAL = BANCO_OFICIAL;
window.BANCO_SAAS = BANCO_SAAS;

// Mapeamento dos sistemas gerenciados pelo SaaS e suas URLs oficiais de login/producao
const SISTEMAS_SAAS_CONFIG = {
    fc_gestao: {
        id: "fc_gestao",
        nome: "FC Gestão",
        tagline: "ERP, PDV & Emissor Fiscal para Varejo e Móveis",
        loginUrl: "https://lojafc-a31f9.web.app/sistema/login.html",
        cadastroUrl: "https://lojafc-a31f9.web.app/sistema/login.html?tab=cadastro",
        sistemaUrl: "https://lojafc-a31f9.web.app/sistema/index.html",
        icone: "fa-layer-group",
        logoUrl: "icone_fc_gestao.png",
        corDestaque: "#3b82f6"
    }
};
window.SISTEMAS_SAAS_CONFIG = SISTEMAS_SAAS_CONFIG;

// Inicialização automática das conexões
if (typeof firebase !== 'undefined') {
    if (!firebase.apps.length) {
        try {
            firebase.initializeApp(BANCO_OFICIAL);
            console.log("🔥 Primas.Tech conectado ao Banco Oficial do Sistema: lojafc-a31f9");
        } catch (err) {
            console.error("Erro ao inicializar Firebase Oficial:", err);
        }
    }
    // Inicializa conexão secundária com o SaaS Master para monitoramento
    try {
        if (!firebase.apps.some(a => a.name === 'saasCentral')) {
            firebase.initializeApp(BANCO_SAAS, 'saasCentral');
            console.log("🔥 Conexão secundária com SaaS Master ativa: fcgestao-testes");
        }
    } catch(e) {}
}
