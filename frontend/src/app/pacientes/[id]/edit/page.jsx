"use client";

const Edit = ({ params }) => {
  const handleDelete = async () => {
    console.log("Hola Mundo");
    const res = await fetch(
      `http://localhost:4000/api/v1/pacientes/${params.id}`,
      {
        method: "DELETE",
      }
    );
    const data = await res.json();
  };
  return (
    <div>
      {params.id}
      <button onClick={handleDelete}>Borrar</button>
    </div>
  );
};

export default Edit;
