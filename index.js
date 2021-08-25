const express = require('express');
const consign = require('consign');

const app = express();

//incluir todas as rotas que esta na pasta routes, dentro de app
consign().include('routes').into(app);


app.listen(3000, '127.0.0.1', () => {
    console.log('servidor esta rodando')
});