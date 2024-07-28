import { React, useState, useContext } from "react";
import ModalApply from "../modal/ModalApply";
import { UserContext } from "../data.jsx";

const Apply = () => {
  const { usuario, buscarUsuarioPorDNI } = useContext(UserContext);
  const [dni, setDni] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [hover, setHover] = useState(false);

  const handleActivate = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = "unset";
  };

  const handleChange = (e) => {
    setDni(e.target.value);
  };

  const handleSearch = () => {
    buscarUsuarioPorDNI(dni)
  };

  const ocultarDNIParcial = (dni) => {
    // Usamos una expresión regular para reemplazar todos los dígitos excepto los últimos cuatro
    const dniOculto = dni.replace(/\d(?=\d{4})/g, '*');
    return dniOculto;
  }
  return (
    <section>
      <div className="text-center bg-white py-4">
        <div className="container lg:w-full md:w-[790px] flex justify-center">
          <div className="">
            <h1 className="text-[#1c3764] text-3xl font-light text-center ">
              Welcome to I94 Know your status
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
          <div className=" lg:flex justify-between gap-6 lg:px-44 py-8">
            <div className=" w-full lg:w-7/12 ">
              <div className="border-solid border-8 border-[rgba(255, 255, 255, 0.5)] bg-white p-4 flex  flex-col justify-center items-center ">
                <i class="fa fa-user-circle-o text-[100px] text-[#1c3764]" aria-hidden="true"></i>

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
                    <div className="mt-4 ">
                      <i class="fa fa-check-circle" aria-hidden="true"></i>
                      <p>Señor/a {usuario.nombre} identificado como {ocultarDNIParcial(usuario.DNI)} ya se encuentra su estado en proceso</p>
                      <p></p>
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
              <div className="border-solid border-8 border-[rgba(255, 255, 255, 0.5)] bg-white p-4 grid grid-cols-1 gap-3">
                <p className="  text-xl">
                  Cost: $6 USD <sub>per traveler</sub>
                </p>
                <p>
                  This I-94 application fee is collected online (step 3) via
                  PayPal or credit/debit card. The fee is non-refundable.
                </p>
              </div>
              <div className="border-solid border-8 border-[rgba(255, 255, 255, 0.5)] bg-white p-4 grid grid-cols-1 gap-3">
                <p className="  text-xl">Private Noticie</p>
                <p>
                  CBP will retain the information you submit when attempting to
                  access your records through this website for 3 months...
                </p>
              </div>
              <div className="border-solid border-8 border-[rgba(255, 255, 255, 0.5)] bg-white p-4 grid grid-cols-1 gap-3">
                <p className="  text-xl">Sample Passport</p>
                <div
                  className="relative"
                  onClick={handleActivate}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  <i
                    className={`absolute fa fa-search right-0 text-blue-600 text-[20px] ${
                      hover
                        ? "text-white border-2 border-blue-600 p-1 bg-blue-600"
                        : "border-2 border-blue-600 p-1 hover:text-white hover:bg-blue-600"
                    }`}
                    aria-hidden="true"
                  ></i>
                  <img
                    className=""
                   
                    src="/public/sample-passport.jpg"
                    alt=""
                    srcSet=""
                  />
                  {showModal && <ModalApply closeModal={closeModal} />}
                </div>

                <p className=" font-bold">
                  Enter all information exactly as it appears on your travel
                  documentation you used to enter the U.S.
                </p>
                <p>Enlarge the image to see more detail.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apply;
