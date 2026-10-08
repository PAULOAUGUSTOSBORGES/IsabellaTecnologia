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

### 2. Adicionar ou Alterar Projetos no Portfólio de Sistemas

Procure a seção `sistemas.projetos`. Para adicionar um novo projeto, copie o modelo abaixo e cole dentro da lista `projetos: [ ... ]`, lembrando de colocar uma vírgula `,` antes:

```javascript
{
  tag: "🤖 Inteligência Artificial",
  icone: "🧠",
  titulo: "Agentes Cognitivos & Atendimento IA",
  descricao: "Automatização inteligente de processos internos e atendimento via WhatsApp integrado a ERPs.",
  tecnologias: ["Python", "FastAPI", "OpenAI", "PostgreSQL"],
  tamanho: "third", // 'wide' (largo), 'tall' (alto) ou 'third' (1/3)
  mostrarBarrasPreview: false
},
```

#### Opções de Tamanho do Cartão:
- `"wide"`: Ocupa 8 colunas da grade (ideal para projetos de maior destaque, com gráfico).
- `"tall"`: Ocupa 4 colunas com altura vertical estendida.
- `"third"`: Ocupa 4 colunas (tamanho padrão de 1/3 da linha).

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
