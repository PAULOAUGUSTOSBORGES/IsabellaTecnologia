/**
 * ====================================================================
 * ARQUIVO DE CONFIGURAÇÃO - PRIMAS TECNOLOGIA
 * ====================================================================
 * 
 * Aqui você pode alterar TODAS as informações do site sem precisar mexer no código HTML!
 * 
 * GUIA RÁPIDO:
 * - Para alterar qualquer texto, edite o valor que está entre aspas ("...").
 * - Cuidado para NÃO apagar as aspas nem as vírgulas no final das linhas.
 * - Para adicionar mais projetos ao portfólio ou mais serviços, basta copiar
 *   um bloco existente, colar abaixo com vírgula e mudar os textos.
 * - Ao salvar este arquivo e atualizar o navegador (F5), as mudanças aparecem na hora!
 */

const SITE_CONFIG = {

  // ------------------------------------------------------------------
  // 1. DADOS DA EMPRESA E CONTATOS PRINCIPAIS
  // ------------------------------------------------------------------
  empresa: {
    nome: "Primas",
    destaqueNome: "Tech", // Exibido no logo como: Primas.Tech
    logoUrl: "logo_primas.png", // Arquivo oficial da logo

    // E-mail de contacto (usado no botão de e-mail e links)
    email: "pauloaugusto.silvaborges@gmail.com",

    // Telefone exibido
    telefone: "+55 (62) 999676874",

    // Número do WhatsApp (somente números: Código do País + DDD + Número)
    // Exemplo: 5511999999999 para Brasil (55), DDD 11
    whatsappNumero: "5562999676874",

    // Mensagem padrão que a pessoa enviará quando clicar no botão do WhatsApp
    whatsappMensagem: "Olá! Gostaria de solicitar um orçamento para o meu projeto com a empresa Primas Tecnologia.",

    // Informações de atendimento
    localizacao: "Brasil · Portugal · Remoto",
    tempoResposta: "< 24h",
    anoFundacao: "2026"
  },

  // ------------------------------------------------------------------
  // 2. HERO SECTION (PRIMEIRA TELA DO SITE)
  // ------------------------------------------------------------------
  hero: {
    badge: "Software House & Agência de Marketing",

    // Título Principal (permite tags <span> para degradê)
    titulo: `Sistemas que <br><span class="gradient-text">escalam.</span> Marketing<br>que <span class="gradient-green">converte.</span>`,

    subtitulo: "Desenvolvemos ERPs modulares, dashboards em tempo real e campanhas de marketing com vídeos gerados por IA — da estratégia ao deploy.",

    botaoPrimario: {
      texto: "Ver Portfólio →",
      link: "#sistemas"
    },
    botaoSecundario: {
      texto: "Iniciar Projeto",
      link: "#contato"
    },

    // Números em destaque (animados ao carregar a página)
    estatisticas: [
      { valor: 40, sufixo: "+", label: "Projetos Entregues" },
      { valor: 98, sufixo: "%", label: "Clientes Satisfeitos" },
      { valor: 5, sufixo: "×", label: "ROI Médio em Marketing" }
    ],

    // Card simulando um dashboard de ERP
    dashboardPreview: {
      titulo: "ERP · Painel de Controlo",
      metricas: [
        { valor: "R$ 248K", label: "Receita Mensal", delta: "↑ +18.4%" },
        { valor: "1.247", label: "Pedidos Ativos", delta: "↑ +6.1%" },
        { valor: "99.9%", label: "Uptime", delta: "● Online" },
        { valor: "3.2s", label: "Tempo Médio", delta: "↓ −0.4s" }
      ],
      badgeFlutuante: {
        icone: "⚡",
        titulo: "Integração em Tempo Real",
        subtitulo: "WebSocket · REST · GraphQL"
      }
    }
  },

  // ------------------------------------------------------------------
  // 3. PORTFÓLIO DE SISTEMAS
  // ------------------------------------------------------------------
  sistemas: {
    badge: "Portfólio de Sistemas",
    titulo: `Soluções <span class="gradient-text">enterprise-grade</span><br>feitas para crescer.`,
    subtitulo: "Arquitecturas modulares, interfaces intuitivas e integrações que funcionam — mesmo quando o negócio exige escalabilidade instantânea.",

    // ------------------------------------------------------------------
    // A. PROJETOS REAIS EM PRODUÇÃO (Em Grande Destaque no Catálogo)
    // ------------------------------------------------------------------
    projetos: [
      {
        tag: "⚡ ERP & PDV Comercial",
        statusBadge: "● No Ar · SaaS Ativo",
        icone: '<img src="icone_fc_gestao.png" alt="FC Gestão" style="width: 52px; height: 52px; border-radius: 14px; object-fit: contain; box-shadow: 0 4px 18px rgba(37, 99, 235, 0.45); display: inline-block;">',
        logoImg: "icone_fc_gestao.png",
        titulo: "FC Gestão · ERP, PDV & Emissor Fiscal",
        descricao: "A solução completa para varejo, comércio e lojas de móveis: frente de caixa PDV ágil, controle de showroom e estoque, pedidos sob medida, fluxo de montagem e entrega, comissões de vendedores e emissão fiscal nativa SEFAZ (NFC-e/NF-e). Planos flexíveis do MEI à grande rede.",
        tecnologias: ["PDV Frente de Caixa", "Emissão Fiscal SEFAZ", "Showroom & Móveis", "Financeiro DRE", "Multi-lojas", "IA Gemini"],
        tamanho: "featured",
        mostrarBarrasPreview: true,
        linkAcesso: "landing.html",
        textoBotaoAcesso: "Conhecer FC Gestão"
      },
      {
        tag: "🔍 Inteligência Fiscal & Compliance",
        statusBadge: "● Online · Ferramenta Ativa",
        icone: "🏢",
        titulo: "Consulta Avançada de CNPJ · Receita Federal",
        descricao: "Plataforma de inteligência cadastral e diagnóstico fiscal em tempo real. Consulta automática à base pública oficial: quadro societário (QSA), capital social, CNAEs primário e secundários, situação cadastral, inscrições estaduais e explorador dinâmico de dados da API pública.",
        tecnologias: ["API Pública CNPJ.ws", "Diagnóstico Cadastral", "QSA & Sócios", "CNAE & Fiscal", "JSON Explorer"],
        tamanho: "featured",
        mostrarBarrasPreview: true,
        linkAcesso: "consulta-cnpj.html",
        textoBotaoAcesso: "Acessar Consulta CNPJ"
      },
      {
        tag: "👗 E-commerce & Alta Moda",
        statusBadge: "● Na Nuvem · E-commerce Ativo",
        icone: "🛍️",
        titulo: "Lumière · Loja de Roupas & Alta Moda",
        descricao: "Molde comercial e e-commerce de alta conversão para marcas de moda, vestuário e confecção: vitrine visual interativa, checkout via WhatsApp, sacola de compras inteligente, catálogo lookbook em PDF e painel de personalização da loja na nuvem.",
        tecnologias: ["E-commerce", "Catálogo Lookbook", "Checkout WhatsApp", "Painel da Loja", "Nuvem Firebase"],
        tamanho: "featured",
        mostrarBarrasPreview: true,
        linkAcesso: "https://loja-de-roupa-a00b6.web.app",
        textoBotaoAcesso: "Ver Loja na Nuvem"
      }
    ],

    // ------------------------------------------------------------------
    // B. TIPOS DE SITES E SISTEMAS QUE DESENVOLVEMOS (Legendas & Especialidades)
    // ------------------------------------------------------------------
    secaoTipos: {
      badge: "Especialidades & Tipos de Soluções",
      titulo: `Tipos de Sites & Sistemas que <span class="gradient-green">Desenvolvemos.</span>`,
      subtitulo: "Além dos nossos sistemas já publicados e no ar, projetamos e construímos qualquer tipo de aplicação digital personalizada para sua empresa:"
    },
    tiposDeSistemas: [
      {
        icone: "📊",
        tag: "Analytics & BI",
        titulo: "Dashboards Interativos & Analytics",
        descricao: "Visualização de dados em tempo real com filtros avançados, KPIs dinâmicos, drill-down por período e exportação de relatórios em PDF/Excel.",
        tecnologias: ["Chart.js", "D3.js", "REST API", "Power BI / Dashboards"]
      },
      {
        icone: "⚙️",
        tag: "Gestão Corporativa",
        titulo: "Sistemas de Gestão & ERP Modular",
        descricao: "Plataformas modulares com controle de estoque, faturamento, DRE, contas a pagar/receber, permissões por perfil e regras sob medida.",
        tecnologias: ["Node.js", "PostgreSQL", "WebSocket", "Docker"]
      },
      {
        icone: "🛍️",
        tag: "Comércio Digital",
        titulo: "Lojas Virtuais & E-commerces",
        descricao: "Vitrines online de alta conversão, gestão de catálogo, preços por segmento, sacola de compras, checkout customizável e vendas pelo WhatsApp.",
        tecnologias: ["Multi-tenant", "Stripe / PIX", "PWA", "Lookbook"]
      },
      {
        icone: "🔄",
        tag: "Comunicação & Dados",
        titulo: "API Gateway & Integrações",
        descricao: "Middleware e conexões seguras entre sistemas legados, gateways de pagamento, emissão fiscal SEFAZ, Receita Federal e serviços de terceiros.",
        tecnologias: ["GraphQL", "Kafka", "OAuth 2.0", "SEFAZ / Receita"]
      },
      {
        icone: "📱",
        tag: "Experiência Mobile",
        titulo: "Interfaces Responsivas & Mobile-First",
        descricao: "Design system moderno e consistente com componentes reutilizáveis, acessibilidade WCAG 2.1 e performance máxima em celulares e desktops.",
        tecnologias: ["WCAG 2.1", "PWA", "Mobile-First", "CSS Grid"]
      },
      {
        icone: "🤖",
        tag: "IA & Automação",
        titulo: "Agentes Cognitivos & Automações com IA",
        descricao: "Automatização inteligente de processos internos, triagem de leads, atendimento inteligente via WhatsApp integrado a ERPs e fluxos IA.",
        tecnologias: ["IA Gemini", "Python", "FastAPI", "Chatbots"]
      }
    ]
  },

  // ------------------------------------------------------------------
  // 4. MARKETING & INOVAÇÃO
  // ------------------------------------------------------------------
  marketing: {
    badge: "Marketing & Inovação",
    titulo: `Campanhas que <span class="gradient-text">impactam.</span><br>Nós <span class="gradient-green">fazemos.</span>`,
    subtitulo: "Criamos campanhas visuais de alto impacto combinando estratégia de conteúdo, design de marca e vídeos, do conceito à publicação.",

    // Lista de serviços oferecidos
    // corIcone pode ser: 'purple', 'blue', 'green', 'orange'
    servicos: [
      {
        icone: "🎬",
        corIcone: "purple",
        titulo: "Vídeos Publicitários ",
        descricao: "Produção de vídeos promocionais de alto impacto."
      },
      {
        icone: "📣",
        corIcone: "blue",
        titulo: "Gestão de Campanhas Digitais",
        descricao: "Meta Ads, Google Ads e SEO orientados por dados — com relatórios em tempo real e otimização contínua."
      },
      {
        icone: "🎨",
        corIcone: "green",
        titulo: "Identidade Visual & Branding",
        descricao: "Brand design estratégico: logotipo, design system e guias de marca para presença consistente em todos os canais."
      },
      {
        icone: "✍️",
        corIcone: "orange",
        titulo: "Copywriting & Conteúdo",
        descricao: "Textos persuasivos, landing pages otimizadas e conteúdo editorial com foco em conversão e posicionamento de marca."
      }
    ],

    // Card do player de vídeo com IA
    videoCard: {
      badgeFlutuante: "✨ Powered by AI",
      tituloJanela: "AI Video Studio · Preview",
      tituloCampanha: "Campanha: Lançamento Produto Q4",
      detalhesCampanha: "Duração: 0:30 · Formato: 9:16 · Gerado em 4min",
      tags: ["✦ IA Generativa", "📐 Multi-formato", "🎵 Áudio Incluso", "🌐 Legendas Auto"],

      // ──────────────────────────────────────────────────────────────
      // 🎬 COMO COLOCAR O SEU VÍDEO (Escolha a Opção 1 OU Opção 2):
      // ──────────────────────────────────────────────────────────────

      // OPÇÃO 1: Arquivo de vídeo no seu computador (MP4, WebM)
      // Coloque o arquivo do vídeo na mesma pasta do site e escreva o nome aqui:
      // Exemplo: "meu-video.mp4" ou "videos/apresentacao.mp4"
      arquivoVideo: "videos/agenda.mp4",

      // OPÇÃO 2: Link do YouTube ou Vimeo
      // Cole aqui qualquer link normal do YouTube (vídeo comum, Shorts ou embed) ou Vimeo
      // Exemplo: "https://www.youtube.com/watch?v=SEU_VIDEO" ou "https://youtu.be/SEU_VIDEO"

      urlYoutubeOuEmbed: "",

      // Configurações do Player:
      autoplay: true,        // Iniciar automaticamente ao abrir o site
      loop: true,            // Repetir continuamente em loop
      mutado: true,          // Iniciar sem som (obrigatório para autoplay funcionar no navegador)
      mostrarControles: true // Mostrar botões de play/pause/volume
    }
  },

  // ------------------------------------------------------------------
  // 5. CALL TO ACTION & CONTACTO
  // ------------------------------------------------------------------
  contato: {
    badge: "Vamos Construir Juntos",
    titulo: `Pronto para o<br><span class="gradient-text">próximo nível?</span>`,
    subtitulo: "Seja um sistema ERP complexo ou uma campanha de marketing. Estamos prontos para transformar a sua visão em resultados.",

    botaoEmailTexto: "✉ Enviar Email",
    botaoWhatsappTexto: "💬 WhatsApp",

    // Badges de garantias / diferenciais exibidos abaixo dos botões
    chipsInformativos: [
      "📍 Brasil · Portugal · Remoto",
      "🕐 Resposta em < 24h",
      "🆓 Consulta Inicial Gratuita"
    ]
  },

  // ------------------------------------------------------------------
  // 6. LINKS DE NAVEGAÇÃO E RODAPÉ
  // ------------------------------------------------------------------
  navegacao: {
    links: [
      { texto: "Sistemas", link: "#sistemas" },
      { texto: "Planos SaaS", link: "acesso.html?sistema=fc_gestao" },
      { texto: "Consulta CNPJ", link: "consulta-cnpj.html" },
      { texto: "Loja de Roupas", link: "https://loja-de-roupa-a00b6.web.app" },
      { texto: "Marketing", link: "#marketing" }
    ],
    botaoCta: { texto: "Fale Conosco ↗", link: "#contato" }
  },

  rodape: {
    textoCopyright: "Todos os direitos reservados.",
    links: [
      { texto: "Sistemas", link: "#sistemas" },
      { texto: "Planos FC Gestão", link: "acesso.html?sistema=fc_gestao" },
      { texto: "Consulta CNPJ", link: "consulta-cnpj.html" },
      { texto: "Loja de Roupas (Nuvem)", link: "https://loja-de-roupa-a00b6.web.app" },
      { texto: "Marketing", link: "#marketing" },
      { texto: "Contacto", link: "#contato" }
    ]
  }
};
