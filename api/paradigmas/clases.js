class Paciente {
  constructor({ nombre, apellido, problema }) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.problema = problema;
  }

  mostrarPaciente() {
    return console.log(`${this.nombre} ${this.apellido}: ${this.problema}`);
  }
}

const pacienteJuan = new Paciente({
  nombre: 'Juan',
  apellido: 'Di Caprio',
  problema: 'Dolor de espalda',
});

console.log(pacienteJuan);
