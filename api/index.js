const express = require('express');
const routerApiV1 = require('./v1/routes');
const routerApiV2 = require('./v2/routes');
const app = express();
const port = 3000;

// REQuest >> peticion
// RESponse >> respuesta
// https://expressjs.com/en/guide/routing.html
// https://hackernoon.com/es/entender-principios-solidos-en-javascript-w1cx3yrv

app.use(express.json());

app.get('/', (req, res) => {
  res.send(
    '<h1>¡Por favor, no me comas! Tengo mujer e hijos ¡Comelos a ellos! (Homero)</h1>',
  );
});

app.listen(port, () => {
  console.log(`Estoy usando el puerto ${port}`);
});

routerApiV1(app);
routerApiV2(app);
