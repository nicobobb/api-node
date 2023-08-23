import { SinglePacient } from "./components/SinglePacient";

async function getData() {
  const res = await fetch("http://localhost:4000/api/v1/pacientes", {
    next: { revalidate: 1 },
  });
  const data = await res.json();
  return data;
}

const Paciente = async () => {
  const pacientes = await getData();
  console.log("Paciente:", pacientes);
  return (
    <div className="mx-auto max-w-screen-lg my-20">
      <section className="grid justify-center md:grid-cols-3 lg:grid-cols-3 gap-8">
        {pacientes == "" ? (
          <div className="grid">
            <h1 className="font-black text-gray-200 text-7xl">
              No hay pacientes
            </h1>
          </div>
        ) : (
          pacientes.map((paciente) => (
            <SinglePacient
              key={paciente.id}
              id={paciente.id}
              nombre={paciente.nombre}
              apellido={paciente.apellido}
              problema={paciente.problema}
            />
          ))
        )}
      </section>
    </div>
  );
};

export default Paciente;
