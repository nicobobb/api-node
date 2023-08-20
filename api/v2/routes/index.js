const express = require('express');
const router = express.Router();

const pacientesRouter = require('./pacientes.routes');

function routerApiV2(app) {
  app.use('/api/v2', router);
  router.use('/pacientes', pacientesRouter);
}

module.exports = routerApiV2;
