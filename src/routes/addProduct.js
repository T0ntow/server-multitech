const connection = require('../connection');

const addProduto = (req, res) => {
    const sql = `INSERT INTO produtos (cod_de_barras, nome, qtd_estoque, preco, percent_comissao) VALUES (?, ?, ?, ?, ?);`;

    const values = [
        req.body.codigo,
        req.body.nome,
        req.body.estoque,
        req.body.preco,
        req.body.percent,
    ];

    connection.query(sql, values, (err, result) => {
        if (err) {
          console.error('Erro ao inserir dados no banco de dados:', err);
          res.status(500).json({ error: 'Erro ao inserir dados no banco de dados' });
          return;
        }

        console.log('Dados inseridos com sucesso no banco de dados');
        res.status(200).json({ message: 'Dados inseridos com sucesso' });
    });
}


module.exports = { addProduto };
