const connection = require('../connection');

const editProduct = (req, res) =>  {
    const codigo = req.params.codigo;

    // Execute a atualização do produto no banco de dados
    const query = `UPDATE produto SET cod_de_barras = ?, nome = ?, qtd_estoque = ?, preco = ?, percent_comissao = ? WHERE cod_de_barras = ${codigo}`;

    const values = [
        req.body.codigo,
        req.body.nome,
        req.body.estoque,
        req.body.preco,
        req.body.percent,
    ];

    connection.query(query, values, (err, result) => {
        if (err) {
            console.error('Erro ao atualizar o produto:', err);
            res.status(500).json({ error: 'Erro ao atualizar o produto' });
        } else {
            res.status(200).json({ message: 'Produto atualizado com sucesso' });
        }
    });
}

module.exports = { editProduct };
