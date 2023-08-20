const delay = async (pacientes) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(pacientes);
    }, 3000);
  });
};

module.exports = { delay };
