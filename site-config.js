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

    // LISTA DE PROJETOS DO PORTFÓLIO
    // tamanho pode ser:
    //   'wide'  -> Cartão largo (ocupa 8 colunas, perfeito para destaque)
    //   'tall'  -> Cartão alto vertical (ocupa 4 colunas)
    //   'third' -> Cartão padrão de 1/3 (ocupa 4 colunas)
    projetos: [
      {
        tag: "⚡ ERP & PDV Comercial",
        icone: "🏪",
        titulo: "FC Gestão · ERP, PDV & Emissor Fiscal",
        descricao: "A solução completa para varejo, comércio e lojas de móveis: frente de caixa PDV ágil, controle de showroom e estoque, pedidos sob medida, fluxo de montagem e entrega, comissões de vendedores e emissão fiscal nativa SEFAZ (NFC-e/NF-e). Planos flexíveis do MEI à grande rede.",
        tecnologias: ["PDV Frente de Caixa", "Emissão Fiscal SEFAZ", "Showroom & Móveis", "Financeiro DRE", "Multi-lojas", "IA Gemini"],
        tamanho: "wide",
        mostrarBarrasPreview: true,
        // Link direto para a página de planos e acesso do sistema:
        linkAcesso: "acesso.html?sistema=fc_gestao",
        textoBotaoAcesso: "Ver Planos & Acessar"
      },
      {
        tag: "📊 Analytics",
        icone: "📈",
        titulo: "Dashboards Interativos",
        descricao: "Visualização de dados em tempo real com filtros avançados, drill-down por período e exportação PDF/Excel.",
        tecnologias: ["Chart.js", "D3.js", "REST API"],
        tamanho: "tall",
        mostrarBarrasPreview: false
      },
      {
        tag: "🏭 ERP Modular",
        icone: "⚙️",
        titulo: "Sistema de Gestão Empresarial (ERP)",
        descricao: "Plataforma modular com gestão de stock, financeiro, RH e CRM integrados. Dashboards em tempo real com WebSockets, permissões granulares por perfil e exportação avançada em múltiplos formatos.",
        tecnologias: ["Node.js", "PostgreSQL", "WebSocket", "Docker", "Redis"],
        tamanho: "wide",
        mostrarBarrasPreview: true
      },
      {
        tag: "🛒 E-commerce",
        icone: "🛍️",
        titulo: "Loja B2B Multi-Tenancy",
        descricao: "Gestão de catálogo, preços por segmento, checkout customizável e integração com gateways de pagamento.",
        tecnologias: ["Multi-tenant", "Stripe", "PWA"],
        tamanho: "third",
        mostrarBarrasPreview: false
      },
      {
        tag: "🔗 Integração",
        icone: "🔄",
        titulo: "API Gateway & Integrações",
        descricao: "Middleware de integração entre sistemas legados, ERPs externos e plataformas de terceiros via REST, GraphQL e SOAP.",
        tecnologias: ["GraphQL", "Kafka", "OAuth 2.0"],
        tamanho: "third",
        mostrarBarrasPreview: false
      },
      {
        tag: "📱 Mobile-First",
        icone: "📲",
        titulo: "Interfaces Responsivas",
        descricao: "Design system consistente com componentes reutilizáveis, acessibilidade WCAG 2.1 e performance Core Web Vitals.",
        tecnologias: ["WCAG 2.1", "PWA", "CSS Grid"],
        tamanho: "third",
        mostrarBarrasPreview: false
      },

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
      { texto: "Marketing", link: "#marketing" }
    ],
    botaoCta: { texto: "Fale Connosco ↗", link: "#contato" }
  },

  rodape: {
    textoCopyright: "Todos os direitos reservados.",
    links: [
      { texto: "Sistemas", link: "#sistemas" },
      { texto: "Planos FC Gestão", link: "acesso.html?sistema=fc_gestao" },
      { texto: "Marketing", link: "#marketing" },
      { texto: "Contacto", link: "#contato" }
    ]
  }
};
