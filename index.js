// importando as depeendencias
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
// ------------------------------------------------------

// Configuração geral
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//incluir todas os arquivos dessas pastas listada, dentro de app para conseguir usar nas rotas;
consign().include('routes').include('utils').into(app);


// configurando servidor para escultar a porta que sera rrodada a aplicação
app.listen(3000, '127.0.0.1', () => {
    console.log('servidor esta rodando')
});

// ----------------------------------------------------------------