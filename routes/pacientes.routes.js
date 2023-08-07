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

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    status: 'Paciente cargado',
    body,
  });
});

router.patch('/:pacienteId', (req, res) => {
  const body = req.body;
  const { pacienteId } = req.params;
  res.json({
    message: 'Se actualizó el paciente',
    body,
    pacienteId,
  });
});

router.delete('/:pacienteId', (req, res) => {
  const { pacienteId } = req.params;
  res.json({
    message: `Se borró el paciente con id ${pacienteId}`,
  });
});

module.exports = router;
