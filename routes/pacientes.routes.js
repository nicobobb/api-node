const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      nombre: 'Rodrigo',
      apellido: 'Alvarez',
      problema: 'dolor de cabeza',
    },
    {
      nombre: 'Pedro',
      apellido: 'Reqz',
      problema: 'espalda',
    },
  ]);
});

router.get('/:pacienteId', (req, res) => {
  const { pacienteId } = req.params;
  if (pacienteId != 531) {
    res.json({
      pacienteId,
      nombre: 'Pepe',
      apellido: 'Gonzalez',
    });
  } else {
    res.status(404).json({ message: 'No se encontró ningun paciente' });
  }
});

module.exports = router;
