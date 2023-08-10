const express = require('express');
const router = express.Router();
const controller = require('../controllers/pacientes.controllers');

router.get('/', (req, res) => {
  res.json(controller.pacientes);
});

router.get('/:pacienteId', (req, res) => {
  const { pacienteId } = req.params;
  const paciente = controller.obtenerPaciente(pacienteId);
  res.json(paciente);
});

router.post('/', (req, res) => {
  const { nombre, apellido, problema } = req.body;
  const pacienteNuevo = controller.crearPacientes({
    nombre,
    apellido,
    problema,
  });
  res.status(201).json(pacienteNuevo);
});

router.patch('/:pacienteId', (req, res) => {
  const body = req.body;
  const { pacienteId } = req.params;
  const paciente = controller.actualizarPacientes(pacienteId, body);
  res.json(paciente);
});

router.delete('/:pacienteId', (req, res) => {
  const { pacienteId } = req.params;
  const msj = controller.eliminarPacientes(pacienteId);
  res.json(msj);
});

module.exports = router;
