"use client";

import React, { useState, useEffect } from "react";

const Form = ({ id }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    problema: "",
  });
  useEffect(() => {
    async function getData() {
      console.log(id);
      const res = await fetch(`http://localhost:4000/api/v1/pacientes/${id}`);
      const data = await res.json();
      console.log(data);
      setFormData(data);
    }
    getData();
  }, [id]);

  const enviarFormulario = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:4000/api/v1/pacientes/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        nombre: formData.nombre,
        apellido: formData.apellido,
        problema: formData.problema,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    form.reset();
  };
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-gray-300 p-8 shadow-lg lg:col-span-3 lg:p-12">
          <form id="form" className="space-y-4" onSubmit={enviarFormulario}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Nombre"
                  type="text"
                  id="name"
                  value={formData.nombre}
                  onChange={(e) =>
                    setFormData({ ...formData, nombre: e.target.value })
                  }
                />
              </div>

              <div>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Apellido"
                  type="text"
                  id="lastName"
                  onChange={(e) =>
                    setFormData({ ...formData, apellido: e.target.value })
                  }
                  value={formData.apellido}
                />
              </div>
            </div>

            <div>
              <textarea
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Mensaje"
                rows="8"
                id="message"
                onChange={(e) =>
                  setFormData({ ...formData, problema: e.target.value })
                }
                value={formData.problema}
              ></textarea>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="inline-block w-full rounded-lg bg-gray-700 px-5 py-3 font-medium text-white sm:w-auto"
              >
                Editar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export { Form };
