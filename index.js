require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { OpenAI } = require('openai');
const path = require('path');

const app = express();
const port = 3000;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.use(cors());
app.use(bodyParser.json());

// Servir os arquivos estáticos do front-end
app.use(express.static(path.join(__dirname, 'public')));

app.post('/mensagem', async (req, res) => {
  const userMessage = req.body.mensagem;

  try {
    const resposta = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "Você é um assistente amigável." },
        { role: "user", content: userMessage }
      ]
    });

    res.json({ resposta: resposta.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao chamar a IA' });
  }
});

app.listen(port, () => {
  console.log(`✅ Servidor rodando em: http://localhost:${port}`);
});
