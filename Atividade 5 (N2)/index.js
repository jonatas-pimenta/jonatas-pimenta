const express = require('express');
const app = express();
const port = 3000;

const alunos = [
  { RA: '123456', nome: 'Alice', email: 'alice@example.com' },
  { RA: '654321', nome: 'Bob', email: 'bob@example.com' },
  { RA: '789012', nome: 'Carol', email: 'carol@example.com' },
  { RA: '210987', nome: 'Dave', email: 'dave@example.com' }
];

app.get('/aluno', (req, res) => {
  res.json(alunos);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
