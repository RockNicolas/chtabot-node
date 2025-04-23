# 🤖 Chat IA com Node.js + OpenAI

Este é um projeto simples de **chat com inteligência artificial** usando:

- **Node.js + Express** no back-end
- **OpenAI (ChatGPT API)** para gerar respostas inteligentes
- **HTML/CSS/JS** no front-end

---

## 🔥 Demonstração

O usuário digita uma mensagem e recebe uma resposta inteligente da IA, como um mini ChatGPT em sua própria máquina!

---

## 📦 Requisitos

- Node.js instalado (versão 14 ou superior)
- Conta na [OpenAI](https://platform.openai.com/)
- Uma chave da API da OpenAI (você pode gerar aqui: [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys))

---

## 🛠️ Como rodar o projeto

### 1. Clone o repositório ou baixe os arquivos

```bash
git clone https://github.com/seu-usuario/chat-ia-node.git
cd chat-ia-node

⚠️ Problemas comuns
❌ Erro: 429 - You exceeded your current quota
Esse erro aparece quando:

Você usou todos os créditos gratuitos da OpenAI

Sua conta não tem um cartão de crédito ativo

✅ Solução:
Vá em https://platform.openai.com/account/billing e adicione um método de pagamento

Ou crie uma nova conta com outro e-mail para um novo crédito gratuito

ESTRUTURA
├── public/
│   ├── index.html       ← Interface do chat
│   ├── style.css        ← Estilos
│   └── script.js        ← Lógica do front-end
├── index.js             ← Servidor Node.js
├── .env                 ← Sua chave da OpenAI
├── package.json
└── README.md

Feito com 💙 por NICOLAS ROCK 

Baseado na API oficial do ChatGPT da OpenAI