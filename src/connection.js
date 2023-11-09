const mysql = require('mysql2');

// Criando o pool de conexões
const connection = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'WPP102315tom@',
  database: 'multitech',
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