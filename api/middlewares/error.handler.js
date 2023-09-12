function logErrors(err, req, res, next) {
  console.log('Logs de Errores');
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  console.log('Controlador de errores');
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

module.exports = { logErrors, errorHandler };
