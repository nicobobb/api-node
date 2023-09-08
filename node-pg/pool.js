const db = require("./db");

const leerDb = async () => {
  try {
    const res = await db.query("SELECT * from pacientes");
    console.log(res.rows[0]);
  } catch (err) {
    console.error(err);
  }
};

const crearPaciente = async (nombre, edad) => {
  try {
    const res = await db.query(
      "INSERT INTO pacientes (nombre, edad) VALUES ($1,$2)",
      [nombre, edad]
    );
    console.log("Paciente guardado...");
  } catch (err) {
    console.log(err);
  }
};

const actualizarPaciente = async (nombreNuevo, edadNueva, nombreViejo) => {
  try {
    const res = await db.query(
      "UPDATE pacientes SET nombre = $1, edad = $2 WHERE nombre = $3",
      [nombreNuevo, edadNueva, nombreViejo]
    );
    console.log("Paciente actualizado...");
  } catch (err) {
    console.log(err);
  }
};

const borrarPaciente = async (nombre) => {
  try {
    console.log("Borrando paciente...");
    await db.query("DELETE FROM pacientes where nombre = $1", [nombre]);
    console.log("Se borró de forma buenarda");
  } catch (err) {
    console.log(err);
  }
};

// crearPaciente("Alejandro", 25);
// actualizarPaciente("Pepe", "55", "Alejandro");
//leerDb();
borrarPaciente("Pepe");
