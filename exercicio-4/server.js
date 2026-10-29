const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'http://localhost:5500'
}));

app.get('/usuarios', (req, res) => {
  res.json([
    { id: 1, nome: 'Brenno' }
  ]);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
