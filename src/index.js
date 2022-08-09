const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); // para o node entender os parametros das rotas

require('./controller/authController')(app); // passando o app(aplicacao) para a rota da controller

app.listen(5500); // porta onde o servidor esta rodando