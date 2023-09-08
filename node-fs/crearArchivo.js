const fs = require("fs/promises");

const createFile = async () => {
  // Define el nombre del archivo
  const nombreArchivo = "Hospital.txt";

  const texto = "Marinita";

  await fs.writeFile(nombreArchivo, texto, { encoding: "utf8" });

  console.log("Todo salió bien!");
};

createFile();
