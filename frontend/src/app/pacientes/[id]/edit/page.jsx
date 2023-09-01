"use client";
import { useRouter } from "next/navigation";
import { Form } from "./components/Form";

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
      <h1 className="bg-white">{params.id}</h1>
      <Form id={params.id} />
      <div className="text-center">
        <button className="bg-white p-2 text-lg" onClick={handleDelete}>
          Borrar
        </button>
      </div>
    </div>
  );
};

export default Edit;
