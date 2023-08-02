const express = require('express');
const app = express();
const port = 3000;

// REQuest >> peticion
// RESponse >> respuesta
// https://expressjs.com/en/guide/routing.html

app.get('/', (req, res) => {
  res.send(
    '<h1>¡Por favor, no me comas! Tengo mujer e hijos ¡Comelos a ellos! (Homero)</h1>',
  );
});

app.get('/pacientes', (req, res) => {
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

app.get('/pacientes/:pacienteId', (req, res) => {
  const { pacienteId } = req.params;
  res.json({
    pacienteId,
    nombre: 'Pepe',
    apellido: 'Gonzalez',
  });
});

app.get('/doctor/:doctorId/horarios/:horarioId', (req, res) => {
  const { doctorId, horarioId } = req.params;
  res.json({
    doctorId,
    horarioId,
  });
});

// http://localhost:3000/turnos?page=23
app.get('/turnos', (req, res) => {
  const { page } = req.query;
  res.json({
    page,
  });
});

// http://localhost:3000/profesional?page=23&sector=tomografia
app.get('/profesional', (req, res) => {
  const { page, sector } = req.query;
  res.json({
    page,
    sector,
  });
});

app.listen(port, () => {
  console.log(`Estoy usando el puerto ${port}`);
});

/* Metodos:

Get: Obtener
Put: Modificar/Actualizar
Patch: Modificar/Actualizar
Post: Crear
Delete: Eliminar */
