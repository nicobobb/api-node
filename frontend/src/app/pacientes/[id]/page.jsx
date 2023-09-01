const Page = async ({ params }) => {
  async function getData() {
    const res = await fetch(
      `http://localhost:4000/api/v1/pacientes/${params.id}`,
      { cache: "force-cache" }
    );
    const data = await res.json();
    return data;
  }
  const paciente = await getData();
  console.log("Paciente:", paciente);
  return <div>{paciente.nombre}</div>;
};

export default Page;
