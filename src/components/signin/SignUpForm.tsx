"use client";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import SignUpData from "../signup/SignUpData";
import SignUpModal from "../signup/SignUpModal";
import SignUpEmail from "../signup/SignUpEmail";
import SignUpRegister from "../signup/SignUpResgister";
import SignUpJobStatus from "../signup/SignUpJobStatus";
import Image from "next/image";
import PatternPng from "../../../public/img/pattern.png";

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState<SignUpData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    jobStatus: "",
  });
  //Estados para el modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [previewModalIsOpen, setPreviewModalIsOpen] = useState(false);

  //funcion para validar que el correo ingresado es una expresion regular
  const validarEmail = (email: string): boolean => {
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailValido.test(email);
  };

  // Handlers para abrir y cerrar el modal
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const openPreviewModal = () => setPreviewModalIsOpen(true);
  const closePreviewModal = () => setPreviewModalIsOpen(false);

  // Handler para los cambios entrantes
  const handleChange = (field: keyof SignUpData, value: string) => {
    setSignUpData((prevData) => {
      const newData = {
        ...prevData,
        [field]: value,
      };

      if (
        field === "jobStatus" &&
        newData.firstName &&
        newData.lastName &&
        validarEmail(newData.email) &&
        newData.password &&
        newData.jobStatus
      ) {
        // Abre automáticamente el modal de vista previa si todos los campos están completos
        openPreviewModal();
      }
      return newData;
    });
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col items-center justify-center gap-2 w-full lg:w-3/5 mx-auto p-4">
          <Button
            onClick={openModal}
            className=" w-80 sm:max-w-sm md:max-w-md px-4 lg:max-w-lg
            shadow-indigo-300 rounded-lg transition duration-300 mx-auto mt-8 max-w-screen-lg lg:w-1/2"
            id="register"
          >
            Regístrate
          </Button>
        </div>
      </div>

      {/* Modal de Registro */}
      <SignUpModal isOpen={modalIsOpen} onClose={closeModal}>
        <SignUpRegister
          firstName={signUpData.firstName}
          lastName={signUpData.lastName}
          password={signUpData.password}
          onChange={handleChange} //manejador
        />
        <SignUpEmail email={signUpData.email} onChange={handleChange} />
        <SignUpJobStatus
          Trabajo={signUpData.jobStatus}
          onChange={handleChange}
        />
      </SignUpModal>

      {/* Modal de Vista Previa */}
      <SignUpModal isOpen={previewModalIsOpen} onClose={closePreviewModal}>
        <div className="mb-4">
          <Image
            src={PatternPng}
            alt="Pattern Background"
            width={200}
            height={100}
            className="ml-10" // img de Lema reutilizado y Estandarizado.
          />
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold ">Revisa tus Datos!</h3>
          </div>

          <p>
            <strong>Nombre:</strong> {signUpData.firstName}
          </p>
          <p>
            <strong>Apellido:</strong> {signUpData.lastName}
          </p>
          <p>
            <strong>Email:</strong> {signUpData.email}
          </p>
          <p>
            <strong>Password:</strong> {signUpData.password}
          </p>
          <p>
            <strong>Job Status:</strong> {signUpData.jobStatus}
          </p>
        </div>
        <Button
          onClick={() => {
            alert("Datos guardados con éxito!");
            closePreviewModal();
            closeModal();
          }}
          className="mt-4 w-full bg-green-500 text-white"
        >
          Confirmar y Guardar
        </Button>
      </SignUpModal>
    </>
  );
};

export default SignUpForm;
