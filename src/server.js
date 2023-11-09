const express = require('express');
const connection = require('./connection')
const cors = require('cors');

const app = express();
const PORT = 5001;
app.use(cors());
app.use(express.json());

const signup = require('./routes/signup')
app.post('/signup', signup.registerUser)

const addProduto = require('./routes/addProduct')
app.post('/adicionar-produto', addProduto.addProduto)

const getProdutos = require('./routes/getProducts')
app.get('/produtos', getProdutos.getProdutos);

const deleteProduct = require('./routes/deleteProduct')
app.delete('/deletar-produto/:codigo', deleteProduct.deleteProduct);

const editProduct = require('./routes/editProduct')
app.put('/editar-produto/:codigo', editProduct.editProduct);


app.listen(5001, () => {
  console.log(`funcionando na porta ${PORT}`);
})
