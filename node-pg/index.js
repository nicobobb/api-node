const { Client } = require("pg");

async function leer() {
  const client = new Client({
    host: "localhost",
    port: 5432,
    database: "postgres",
    user: "postgres",
    password: "admin",
  });

  client.connect();

  const res = await client.query("SELECT * from pacientes");
  console.log(res.rows[0]);
  await client.end();
}

leer();
