const mysql = require('mysql2');

// Criando o pool de conexões
const connection = mysql.createPool({
  host: 'b455bmcwcsgk9mzdmv42-mysql.services.clever-cloud.com',
  user: 'uhkuir4ghr3cuv9v',
  password: 'LP6OloKoUFkR3eoVlpvW',
  database: 'b455bmcwcsgk9mzdmv42',
});

// Obtendo uma conexão do pool
connection.getConnection((err, connection) => {
  if (err) {
    console.error('Erro ao conectar-se ao MySQL:', err);
    return;
  }
  console.log('Conexão com o MySQL estabelecida!');
  connection.release();
});

module.exports = connection