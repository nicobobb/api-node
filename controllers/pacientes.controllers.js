const { v4: uuidv4 } = require('uuid');

const pacientes = [];

const obtenerPaciente = (id) => {
  return pacientes.find((item) => item.id === id);
};

const crearPacientes = ({ nombre, apellido, problema }) => {
  const paciente = {
    id: uuidv4(),
    nombre,
    apellido,
    problema,
  };
  pacientes.push(paciente);
  return paciente;
};

const actualizarPacientes = (id, cambios) => {
  const index = pacientes.findIndex((item) => item.id === id);
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

const eliminarPacientes = (id) => {
  const index = pacientes.findIndex((item) => item.id === id);
  if (index === -1) {
    throw new Error('paciente no encontrado');
  }

  pacientes.splice(index, 1);
  return { id };
};

module.exports = {
  pacientes,
  obtenerPaciente,
  crearPacientes,
  actualizarPacientes,
  eliminarPacientes,
};
