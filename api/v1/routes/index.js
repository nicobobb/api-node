const express = require('express');
const router = express.Router();

const pacientesRouter = require('./pacientes.routes');
const profesionalRouter = require('./profesional.routes');
const turnosRouter = require('./turnos.routes');

function routerApiV1(app) {
  app.use('/api/v1', router);
  router.use('/pacientes', pacientesRouter);
  router.use('/profesional', profesionalRouter);
  router.use('/turnos', turnosRouter);
}

module.exports = routerApiV1;
