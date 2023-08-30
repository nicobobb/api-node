"use client";
import { useRouter } from "next/navigation";

const Edit = ({ params }) => {
  const router = useRouter();
  const handleDelete = async () => {
    console.log("Hola Mundo");
    const res = await fetch(
      `http://localhost:4000/api/v1/pacientes/${params.id}`,
      {
        method: "DELETE",
      }
    );
    const data = await res.json();
    console.log(data);
    router.push("/pacientes");
  };
  return (
    <div>
      {params.id}
      <button onClick={handleDelete}>Borrar</button>
    </div>
  );
};

export default Edit;
