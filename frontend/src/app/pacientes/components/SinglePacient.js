import Link from "next/link";

const SinglePacient = ({ nombre, apellido, problema, id }) => {
  return (
    <>
      <div className="max-w-md flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
        <dl className="divide-y divide-gray-100 text-sm">
          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-300">Nombre</dt>
            <dd className="sm:col-span-2 text-gray-300">
              {nombre} {apellido}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium">Problema</dt>
            <dd className="sm:col-span-2">{problema}</dd>
          </div>
        </dl>

        <Link
          className="block my-6 text-center bg-gray-400 border border-indigo-600  px-2 py-1 focus:outline-none focus:ring"
          href={`/pacientes/${id}`}
        >
          Ver
        </Link>
      </div>
    </>
  );
};

export { SinglePacient };
