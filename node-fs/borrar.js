const fs = require("fs/promises");

const borrar = async (path, callback) => {
  await fs.rm(path, callback);
};

borrar(__dirname + "/borrame.txt", console.log("No se pudo Borrar el Archivo"));

/*

unlink()
    * Solo puede eliminar un archivo a la vez.
    * No puede eliminar directorios.

rm()
    * Puede eliminar varios archivos a la vez.
    * Puede eliminar directorios.


Ejemplos:

Elimina un archivo individual:
fs.unlink('archivo.txt');

Elimina varios archivos:
fs.rm(['archivo1.txt', 'archivo2.txt']);

Elimina un directorio
fs.rmdir('directorio');

*/
