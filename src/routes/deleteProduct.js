const connection = require('../connection');

const deleteProduct = (req, res) => {
    const codigo = req.params.codigo;
    const sql = `DELETE FROM produto WHERE cod_de_barras = '${codigo}'`;

   connection.query(sql, (error, results) => {
      if (error) {
        console.error('Erro ao remover item:', error);
        res.status(500).json({ message: 'Erro ao remover item' });
      } else {
        console.log('Item removido com sucesso!');
        res.status(200).json({ message: 'Item removido com sucesso!' });
      }
    });
}

module.exports = { deleteProduct };
