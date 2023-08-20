const mostrarPaciente = (paciente) => {
  console.table({
    nombre: `${paciente.nombre}`,
    apellido: `${paciente.apellido}`,
    problema: `${paciente.problema}`,
  });
};

const crearPaciente = ({ nombre, apellido, problema } = {}) => ({
  nombre: nombre ?? 'Pedro',
  apellido: apellido ?? 'Alvarez',
  problema: problema ?? 'Dolor de cabeza',
});

const paciente = crearPaciente();

mostrarPaciente(paciente);
