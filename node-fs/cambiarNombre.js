const fs = require("fs/promises");

const renombrar = async (oldPath, newPath, callback) => {
  await fs.rename(oldPath, newPath, callback);
};

renombrar(__dirname + "/Pepe1.txt", __dirname + "/Pepe2.txt");
