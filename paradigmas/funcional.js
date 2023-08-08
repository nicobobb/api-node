// Al igual que las clases, la idea es retornar un objeto.
// Hacemos funciones para crear objetos

const crearPaciente = ({ nombre, apellido, problema }) => ({
  nombre,
  apellido,
  problema,
  mostrarPaciente() {
    console.log(`${this.nombre} ${this.apellido}`);
  },
});

const juan = crearPaciente({
  nombre: 'Juan',
  apellido: 'Di Caprio',
  problema: 'Dolor de espalda',
});

juan.mostrarPaciente();
