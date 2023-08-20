const express = require('express');
const router = express.Router();
const controller = require('../../controllers/pacientes.controllers');

/* router.get('/delay', async (req, res) => {
  const pacientes = await controller.delay();
  res.json(pacientes);
}); */

router.get('/delay', controller.delay);

router.get('/', async (req, res) => {
  const pacientes = await controller.pacientes;
  res.json(pacientes);
});

router.get('/:pacienteId', async (req, res) => {
  const { pacienteId } = req.params;
  const paciente = await controller.obtenerPaciente(pacienteId);
  res.json(paciente);
});

router.post('/', async (req, res) => {
  const { nombre, apellido, problema } = req.body;
  const pacienteNuevo = await controller.crearPacientes({
    nombre,
    apellido,
    problema,
  });
  res.status(201).json(pacienteNuevo);
});

router.patch('/:pacienteId', async (req, res) => {
  try {
    const body = req.body;
    const { pacienteId } = req.params;
    const paciente = await controller.actualizarPacientes(pacienteId, body);
    res.json(paciente);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

router.delete('/:pacienteId', async (req, res) => {
  const { pacienteId } = req.params;
  const msj = await controller.eliminarPacientes(pacienteId);
  res.json(msj);
});

module.exports = router;
