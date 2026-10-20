# 📘 Manual de Edição do Site — Primas Tecnologia

Este guia explica como alterar qualquer informação do seu site de forma simples, rápida e sem necessidade de mexer em códigos complicados de HTML ou CSS.

---

## 📁 Onde ficam os dados?

Todos os textos, links, números, e-mails, telefones e portfólios estão centralizados em um único arquivo:

📍 **`site-config.js`** *(localizado na mesma pasta do `index.html`)*

Você pode abrir e editar este arquivo com qualquer editor de texto (como o **VS Code**, **Notepad++**, ou até o **Bloco de Notas** do Windows).

---

## ⚡ Regras de Ouro ao Editar

1. **Textos entre aspas:** Qualquer frase, link ou palavra deve estar sempre entre aspas: `"meu texto aqui"`.
2. **Vírgulas:** Cada propriedade termina com uma vírgula `,`. Não remova as vírgulas ao final das linhas.
3. **Salvar e Atualizar:** Depois de editar, salve o arquivo (`Ctrl + S`) e pressione **F5** no seu navegador para ver o resultado imediatamente.

---

## 🛠️ Como fazer alterações comuns:

### 1. Alterar Email, Telefone e WhatsApp

Procure a seção `empresa` no início do `site-config.js`:

```javascript
empresa: {
  nome: "Primas",
  destaqueNome: "Tech",
  
  // Seu e-mail de contato:
  email: "seuemail@primastecnologia.com",
  
  // Telefone visível:
  telefone: "+55 (11) 99999-9999",
  
  // Número do WhatsApp (DDI + DDD + Número, sem traços ou parênteses):
  whatsappNumero: "5511999999999",
  
  // Mensagem inicial que o cliente enviará ao clicar:
  whatsappMensagem: "Olá! Gostaria de solicitar um orçamento.",
  
  localizacao: "São Paulo · Brasil · Remoto",
  tempoResposta: "< 24h",
  anoFundacao: "2025"
}
```

> **Nota:** Ao alterar o `whatsappNumero`, todos os botões de WhatsApp do site serão atualizados automaticamente!

---

### 2. Projetos Reais em Destaque & Tipos de Sistemas

No arquivo `site-config.js`, a área de sistemas agora é dividida em duas partes bem organizadas:

#### A. Projetos Reais em Grande Destaque (`sistemas.projetos`):
Aqui ficam os seus **sistemas de verdade**, com botão de acesso e selo de "NO AR":
- **FC Gestão · ERP, PDV & Emissor Fiscal** (com link para a página de planos)
- **Consulta Avançada de CNPJ** (ferramenta com consulta da Receita Federal em tempo real)
- **Lumière · Loja de Roupas & Alta Moda** (e-commerce real na nuvem Firebase)

Você pode adicionar ou editar qualquer projeto real colocando `tamanho: "featured"`, o `linkAcesso` e o `statusBadge`.

#### B. Tipos de Sites & Sistemas que Desenvolvemos (`sistemas.tiposDeSistemas`):
Aqui ficam as **legendas e especialidades técnicas** (Dashboards, ERPs Modulares, Lojas Virtuais, Integrações de APIs, Interfaces Responsivas e IA). Cada item possui:
- `icone`: emoji ou ícone (ex: `"📊"`, `"⚙️"`, `"🛍️"`, `"🔄"`)
- `tag`: rótulo superior (ex: `"Analytics & BI"`)
- `titulo`: nome da especialidade
- `descricao`: legenda explicativa do que você constrói
- `tecnologias`: lista de palavras-chave/tecnologias em destaque

---

### 3. Alterar os Serviços de Marketing

Procure a seção `marketing.servicos`. Você pode editar os títulos, descrições, ícones e cores:

```javascript
{
  icone: "🎬",
  corIcone: "purple", // Opções: 'purple', 'blue', 'green', 'orange'
  titulo: "Vídeos Publicitários com IA",
  descricao: "Produção de vídeos promocionais em alta definição com modelos generativos."
},
```

---

### 4. Alterar as Estatísticas da Tela Inicial (Hero)

Procure a seção `hero.estatisticas`:

```javascript
estatisticas: [
  { valor: 50, sufixo: "+", label: "Projetos Entregues" },
  { valor: 99, sufixo: "%", label: "Clientes Satisfeitos" },
  { valor: 10, sufixo: "×", label: "ROI Médio em Marketing" }
]
```

O site irá animar automaticamente o contador até o número que você definir!

---

### 5. Alterar a Prévia do Vídeo de IA

Procure por `videoCard` dentro de `marketing`:

```javascript
videoCard: {
  badgeFlutuante: "✨ Powered by AI",
  tituloJanela: "AI Video Studio · Preview",
  tituloCampanha: "Campanha: Lançamento de Produto 2025",
  detalhesCampanha: "Duração: 0:45 · Formato: 9:16 · Resolução 4K",
  tags: ["✦ IA Generativa", "📐 Multi-formato", "🎵 Trilha Sonora", "🌐 Legendas"]
}
```

---

## 🚀 Como testar localmente?

Basta dar um duplo clique no arquivo **`index.html`** para abrir no seu navegador preferido (Google Chrome, Microsoft Edge, Firefox, etc.). Ele lê o arquivo `site-config.js` na hora!

---

## 🎬 Como Colocar o Seu Vídeo Real

No arquivo **`site-config.js`**, localize a seção `videoCard` dentro de `marketing`. Você tem **duas formas** muito simples de adicionar o seu vídeo:

### OPÇÃO A: Arquivo de Vídeo no seu Computador (MP4 / WebM)
1. Pegue o seu arquivo de vídeo (ex: `meu-video.mp4`).
2. Cole o arquivo na **mesma pasta** onde está o `index.html`.
3. No `site-config.js`, preencha o campo `arquivoVideo`:
```javascript
videoCard: {
  badgeFlutuante: "✨ Powered by AI",
  tituloJanela: "Vídeo Promocional",
  tituloCampanha: "Demonstração de Produto",
  detalhesCampanha: "Resolução 4K · Alta Definição",
  tags: ["✦ IA Generativa", "📐 16:9", "🎵 Áudio Incluso"],

  // COLOQUE O NOME DO ARQUIVO AQUI:
  arquivoVideo: "meu-video.mp4", 
  urlYoutubeOuEmbed: "",

  autoplay: true,        // Toca automaticamente
  loop: true,            // Fica repetindo
  mutado: true,          // Começa sem som (obrigatório para autoplay no navegador)
  mostrarControles: true // Mostra barra de play/pause e volume
}
```

---

### OPÇÃO B: Vídeo do YouTube ou Vimeo
1. Copie o link do vídeo no YouTube (pode ser vídeo normal ou Shorts, ex: `https://www.youtube.com/watch?v=dQw4w9WgXcQ` ou `https://youtu.be/dQw4w9WgXcQ`).
2. Cole no campo `urlYoutubeOuEmbed`:
```javascript
videoCard: {
  badgeFlutuante: "✨ Powered by AI",
  tituloJanela: "Apresentação Primas Tech",
  tituloCampanha: "Nosso Portfólio em Vídeo",
  detalhesCampanha: "Campanha Oficial",
  tags: ["✦ Produção IA", "📐 Full HD", "🌐 YouTube"],

  arquivoVideo: "",
  // COLE SEU LINK DO YOUTUBE AQUI:
  urlYoutubeOuEmbed: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",

  autoplay: true,
  loop: true,
  mutado: true,
  mostrarControles: true
}
```
3. Salve o arquivo e aperte **F5** no seu navegador! O player do YouTube/Vimeo se ajustará perfeitamente com bordas arredondadas e controles nativos.

---

## 🔍 Módulo de Consulta Avançada de CNPJ

O site agora conta com o módulo interativo de **Consulta Avançada de CNPJ**:
- **Arquivo da Página:** `consulta-cnpj.html` (pode ser aberto diretamente com duplo clique ou pelo link do catálogo).
- **Código Fonte TSX:** `consulta_avan_ada_de_cnpj.tsx`
- **Script da Aplicação:** `consulta-cnpj.js` (gerado automaticamente via `node build-cnpj.js`).
- **No Catálogo:** O card está registrado em `site-config.js` na seção `sistemas.projetos`, com link direto para `consulta-cnpj.html`.

---

## 👗 Lumière — Loja de Roupas & Alta Moda (Nuvem)

O catálogo de sistemas inclui o e-commerce de vestuário **Lumière**:
- **Link Oficial na Nuvem:** [https://loja-de-roupa-a00b6.web.app](https://loja-de-roupa-a00b6.web.app)
- **Painel Administrativo da Loja:** [https://loja-de-roupa-a00b6.web.app/admin](https://loja-de-roupa-a00b6.web.app/admin) (senha: `admin123`)
- **No Catálogo:** Configurado no `site-config.js` com o botão **"Ver Loja na Nuvem"** que abre diretamente a loja online em uma nova aba.

---

## 🚀 Publicação Online Individual (Arquivos .BAT)

Assim como no FC Gestão, agora você possui **arquivos executáveis `.bat` individuais** que compilam e lançam as atualizações para a nuvem Firebase com **apenas 2 cliques**:

### 📁 1. Arquivos Dentro de Cada Pasta:
- **Primas Tecnologia:** Na pasta `PrimasTecnologia`, clique duas vezes em:
  `PUBLICAR_NA_NUVEM.bat`
  *(Compila o projeto, renova o cache e publica em `https://primas-tecnologia.web.app`)*
- **Consulta CNPJ:** Na pasta `PrimasTecnologia`, clique duas vezes em:
  `PUBLICAR_CONSULTA_CNPJ.bat`
  *(Compila o arquivo TSX da Consulta e envia para `https://primas-tecnologia.web.app/consulta-cnpj.html`)*
- **Loja de Móveis (FC Gestão):** Na pasta `FC-Gest-o`, clique duas vezes em:
  `PUBLICAR_NA_NUVEM.bat`
  *(Atualiza e publica o ERP & PDV em `https://lojafc-a31f9.web.app`)*
- **Loja de Roupa (Lumière):** Na pasta `site de loja de roupa`, clique duas vezes em:
  `PUBLICAR_NA_NUVEM.bat`
  *(Publica o e-commerce em `https://loja-de-roupa-a00b6.web.app`)*

---

### 🌟 2. Central de Lançadores Rápidos (Pasta Raiz `site sistema`):
Diretamente na pasta `g:\VERSOES DO SISTEMA\site sistema\`, você encontra os atalhos diretos sem precisar entrar nas pastas:
1. `PUBLICAR_1_PRIMAS_TECNOLOGIA.bat`
2. `PUBLICAR_2_CONSULTA_CNPJ.bat`
3. `PUBLICAR_3_LOJA_MOVEIS_FC_GESTAO.bat`
4. `PUBLICAR_4_LOJA_DE_ROUPA.bat`
5. `CENTRAL_PUBLICADOR_NUVEM.bat` *(Menu interativo que permite escolher qual atualizar ou publicar todos de uma vez)*




