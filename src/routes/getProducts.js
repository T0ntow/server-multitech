const connection = require('../connection');

const getProdutos = (req, res) => {
  // Executar uma consulta SQL para recuperar os produtos
  connection.query('SELECT * FROM produtos', (err, results) => {
    if (err) {
      console.error('Erro ao consultar produtos:', err);
      res.status(500).json({ error: 'Erro ao consultar produtos' });
      return;
    }
    // Enviar os resultados como uma resposta JSON
    res.json(results);
  });
}


module.exports =  { getProdutos };
