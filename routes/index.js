const pacientesRouter = require('./pacientes.routes');
const profesionalRouter = require('./profesional.routes');
const turnosRouter = require('./turnos.routes');

function routerApi(app) {
  app.use('/pacientes', pacientesRouter);
  app.use('/profesional', profesionalRouter);
  app.use('/turnos', turnosRouter);
}

module.exports = routerApi;
