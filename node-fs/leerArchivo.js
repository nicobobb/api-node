const fs = require("fs/promises");

const leer = async (path) => {
  const contenido = await fs.readFile(path, "utf8");
  console.log(contenido);
};

// leer(__dirname + "/Hospital.txt");
leer(`${__dirname}/Hospital.txt`);
