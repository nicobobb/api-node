const pacienteService = require('../services/pacientes.service');
const { v4: uuidv4 } = require('uuid');

const pacientes = [];

const obtenerPaciente = async (id) => {
  return await pacientes.find((item) => item.id === id);
};

const crearPacientes = async ({ nombre, apellido, problema }) => {
  const paciente = {
    id: uuidv4(),
    nombre,
    apellido,
    problema,
  };
  const pepe = pepes();
  await pacientes.push(paciente);
  return paciente;
};

const actualizarPacientes = async (id, cambios) => {
  const index = await pacientes.findIndex((item) => item.id === id);
  if (index === -1) {
    throw new Error('paciente no encontrado');
  }
  const paciente = pacientes[index];
  pacientes[index] = {
    ...paciente,
    ...cambios,
  };
  return pacientes[index];
};

const eliminarPacientes = async (id) => {
  const index = await pacientes.findIndex((item) => item.id === id);
  if (index === -1) {
    throw new Error('paciente no encontrado');
  }

  pacientes.splice(index, 1);
  return { id };
};

/* const delay = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(pacientes);
    }, 3000);
  });
};
*/

const delay = async (req, res) => {
  const Allpacientes = await pacienteService.delay(pacientes);
  res.json(Allpacientes);
};

module.exports = {
  pacientes,
  obtenerPaciente,
  crearPacientes,
  actualizarPacientes,
  eliminarPacientes,
  delay,
};
