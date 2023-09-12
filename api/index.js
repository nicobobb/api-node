const express = require('express');
const cors = require('cors');
const routerApiV1 = require('./v1/routes');
const routerApiV2 = require('./v2/routes');
const app = express();
const port = 4000;
const { logErrors, errorHandler } = require('./middlewares/error');

// REQuest >> peticion
// RESponse >> respuesta
// https://expressjs.com/en/guide/routing.html
// https://hackernoon.com/es/entender-principios-solidos-en-javascript-w1cx3yrv

app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);

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

// Middlewares (siempre van despues de las rutas)
// https://expressjs.com/es/guide/using-middleware.html
/*
 Sirve para:
  1) Validar Datos
  2) Capturar Errores
  3) Permisos y validaciones, etc
 */
app.use(logErrors);
app.use(errorHandler);
