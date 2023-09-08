const fs = require("fs");
const csv = require("csv-parser");
const path = require("path");
const iconv = require("iconv-lite");
const headerRow = "Nombre;Edad;Ciudad;Profesión\n"; // Cambia el separador a punto y coma

const csvFilePath = "data.csv";
const jsonFilePath = "data.json";

// Función para copiar el archivo CSV
function copyCSVFile() {
  const sourceFilePath = path.join(__dirname, csvFilePath);
  const destFilePath = path.join(__dirname, "data_copy.csv");

  fs.copyFile(sourceFilePath, destFilePath, (err) => {
    if (err) {
      console.error("Error copying CSV file:", err);
    } else {
      console.log("CSV file copied to 'data_copy.csv'");
      addHeaderAndConvertCSVToJSON(destFilePath);
    }
  });
}

// Agregar fila de encabezado y luego convertir CSV a JSON
function addHeaderAndConvertCSVToJSON(csvFile) {
  fs.readFile(csvFile, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading CSV file:", err);
    } else {
      if (!data.startsWith("Nombre;Edad;Ciudad;Profesión")) {
        // Ajusta el encabezado
        data = iconv.decode(data, "Windows-1252");
        data = headerRow + data;
        fs.writeFile(csvFile, data, (err) => {
          if (err) {
            console.error("Error writing CSV file:", err);
          } else {
            console.log("Header added to CSV file.");
            convertCSVToJSON(csvFile);
          }
        });
      } else {
        convertCSVToJSON(csvFile);
      }
    }
  });
}

// Convert the CSV file to JSON with specific headers and punto y coma separator
function convertCSVToJSON(csvFile) {
  const jsonResults = [];

  fs.createReadStream(csvFile, { encoding: "utf8" }) // Cambia la codificación a UTF-8
    .pipe(csv({ separator: ";" })) // Configura el separador a punto y coma
    .on("data", (row) => {
      jsonResults.push(row);
    }) // Usa la codificación UTF-8 para leer el archivo CSV
    .on("end", () => {
      // Write the JSON data to a file
      fs.writeFile(
        jsonFilePath,
        JSON.stringify(jsonResults, null, 2),
        (err) => {
          if (err) {
            console.error("Error writing JSON file:", err);
          } else {
            console.log("Conversion complete. JSON file saved as 'data.json'");
          }
        }
      );
    });
}

// Programar la copia y conversión cada 5 segundos
setInterval(copyCSVFile, 5000); // 5 segundos en milisegundos
