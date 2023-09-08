const fs = require("fs/promises");

if (process.argv[2] === "-D") {
  console.log("Pusiste una bandera para desarrollo");
} else if (process.argv[2] === "-P") {
  console.log("Pusiste una bandera para produccion");
}

if (process.argv[3] === "-A") {
  console.log(
    "Esto no se me ocurre para que pueda servir. Pero lo importante es que existe"
  );
}

// https://vitejs.dev/guide/
