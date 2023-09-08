const fs = require("fs/promises");

async function convertCsvFile() {
  const csvData = await fs.readFile("./excel.csv", "utf-8");
  // https://www.freecodecamp.org/espanol/news/el-split-de-javascript-como-dividir-una-cadena-de-caracteres-en-un-arreglo-con-js/
  const filas = csvData.split("\n");

  const jsonData = [];
  for (const fila of filas) {
    const data = fila.split(",");
    const paciente = {
      Nombre: data[0].replace("\r", ""),
      Apellido: data[1].replace("\r", ""),
      Edad: data[2].replace("\r", ""),
    };

    jsonData.push(paciente);
  }

  const jsonString = JSON.stringify(jsonData);
  console.log(jsonString);
  /*const dirJson = "excel.json";
  await fs.writeFile(dirJson, jsonString, { encoding: "utf8" });   */
}

convertCsvFile();
