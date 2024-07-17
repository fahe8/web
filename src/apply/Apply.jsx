import { React, useState } from "react";
import { buscarUsuarioPorDNI } from "../data";

const Apply = () => {
  const [dni, setDni] = useState("");
  const [usuario, setUsuario] = useState(null);

  const handleChange = (e) => {
    setDni(e.target.value);
  };

  const handleSearch = () => {
    const resultado = buscarUsuarioPorDNI(dni);
    setUsuario(resultado);
  };
  return (
    <section>
      <div className="text-center bg-white py-4">
        <div className="container lg:w-full md:w-[790px] flex justify-center">
          <div className="">
            <h1 className="text-[#1c3764] text-3xl font-light text-center ">
              Welcome to I94 Insert you code
            </h1>
            <sub className=" color-[#1c3764] text-xl">
              <strong>For Land Border and Selected Ferry Ports</strong>
              (Not Air/Sea)
            </sub>
            <span className="  my-[18px] mb-[20px] border-b border-[#1c3764] text-center relative flex justify-center items-center">
              <img
                className="absolute bg-white pt-4 w-12"
                src="/public/car.png"
                alt=""
              />
              <i
                className={`fa fa-comments-o  text-[18px] font-bold t  px-2`}
              ></i>
            </span>

            <p className=" text-[#1c3764] italic">
              For air and sea travelers, you will still be issued an I-94 during
              the admission process at the port of entry.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#f2f2f2]">
        {" "}
        <div className="container lg:w-full md:w-[790px] flex justify-center">
          <div className=" lg:flex justify-between gap-6 lg:px-44">
            <div className=" w-full lg:w-7/12">
            <div className="border-solid border-8 border-[rgba(255, 255, 255, 0.5)] bg-white p-4  ">
              <h2 className="text-center">Enter you DNI</h2>
              <div className="p-4">
                <input
                  type="text"
                  value={dni}
                  onChange={handleChange}
                  placeholder="Ingrese el DNI"
                  className="border rounded px-2 py-1"
                />
                <button
                  onClick={handleSearch}
                  className="ml-2 bg-blue-500 text-white rounded px-4 py-1"
                >
                  Buscar
                </button>

                {usuario && (
                  <div className="mt-4">
                    <h2 className="text-lg font-bold">
                      Información del usuario:
                    </h2>
                    <p>
                      <strong>Nombre:</strong> {usuario.nombre}
                    </p>
                    <p>
                      <strong>Apellido:</strong> {usuario.apellido}
                    </p>
                    <p>
                      <strong>DNI:</strong> {usuario.DNI}
                    </p>
                    <p>
                      <strong>Edad:</strong> {usuario.edad}
                    </p>
                    <p>
                      <strong>Fecha de nacimiento:</strong>{" "}
                      {usuario.fechaNacimiento}
                    </p>
                    <p>
                      <strong>Fecha de expiración:</strong>{" "}
                      {usuario.fechaExpiracion}
                    </p>
                    <p>
                      <strong>Lugar de nacimiento:</strong>{" "}
                      {usuario.lugarNacimiento}
                    </p>
                  </div>
                )}
              </div>
            </div>
            </div>
            <div className="w-full lg:w-3/12 flex flex-col gap-2 ">
              <div className="border-solid border-8 border-[rgba(255, 255, 255, 0.5)] bg-white p-4">
                
              </div>
              <div className="border-solid border-8 border-[rgba(255, 255, 255, 0.5)]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                vel tempore maxime? Pariatur natus adipisci nemo magni, labore
                molestias voluptatum, numquam ipsam, quis optio temporibus harum
                quos. Officia, dolor voluptates?
              </div>
              <div className="border-solid border-8 border-[rgba(255, 255, 255, 0.5)]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                vel tempore maxime? Pariatur natus adipisci nemo magni, labore
                molestias voluptatum, numquam ipsam, quis optio temporibus harum
                quos. Officia, dolor voluptates?
              </div>
              <div className="border-solid border-8 border-[rgba(255, 255, 255, 0.5)]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                vel tempore maxime? Pariatur natus adipisci nemo magni, labore
                molestias voluptatum, numquam ipsam, quis optio temporibus harum
                quos. Officia, dolor voluptates?
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apply;
