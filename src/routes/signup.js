const connection = require('../connection');

// Função para verificar se o email já existe no banco de dados
const emailExists = (email, callback) => {
  const checkEmailSQL = 'SELECT * FROM users WHERE email = ?';
  connection.query(checkEmailSQL, [email], (err, results) => {
    if (err) {
      console.error('Erro ao verificar email:', err);
      callback(err, null);
    } else {
      callback(null, results.length > 0);
    }
  });
};

// Função para registrar um usuário
const registerUser = (req, res) => {
  const { name, email, password } = req.body;

  // Verificar se o email já existe no banco de dados
  emailExists(email, (err, exists) => {
    if (err) {
      res.status(500).json({ message: 'Erro ao verificar email.' });
    } else if (exists) {
      res.status(400).json({ message: 'Email já cadastrado.' });
    } else {
      // O email não existe, insira os dados na tabela do banco de dados
      const insertSQL = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
      connection.query(insertSQL, [name, email, password], (insertErr, insertResult) => {
        if (insertErr) {
          console.error('Erro ao cadastrar usuário:', insertErr);
          res.status(500).json({ message: 'Erro ao cadastrar usuário.' });
        } else {
          console.log('Usuário cadastrado com sucesso!');
          res.status(200).json({ message: 'Usuário cadastrado com sucesso!' });
        }
      });
    }
  });
};

module.exports = { registerUser };
