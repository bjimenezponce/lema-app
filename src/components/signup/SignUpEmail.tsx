import React, { useState } from "react";
import Image from "next/image";
import PatternPng from "../../../public/img/pattern.png";

const SignUpEmail: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isEmailValido, setIsEmailValido] = useState<boolean>(true);

  //funcion para validar que el correo ingresado es una expresion regular
  const validarEmail = (email: string): boolean => {
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailValido.test(email);
  };

  //manejador de los cambios del input
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    // Valida el correo mientras el usuario escribe
    setIsEmailValido(validarEmail(newEmail));
  };
  return (
    <div className="flex flex-col items-center">
      <Image
        src={PatternPng}
        alt="Pattern Background"
        width={200}
        height={100}
        className="mx-4"
      />
      <h5 className="mb-2 font-sans font-semibold text-sm flex justify-center">
        Ingrese su Correo Electrónico
      </h5>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange} // Asigna el manejador de cambios al input
        placeholder="DoeJhon@email.com"
        className={`w-42 mt-2 text-center border 
        border-gray-300 rounded-md mb-2 shadow-md 
        shadow-indigo-500/50 focus:outline-none ${
          isEmailValido ? "focus:border-indigo-500" : "border-red-500"
        }`} // Cambia el color del borde si el correo no es válido
      />
      {!isEmailValido && (
        <p className="text-red-500 text-xs mt-1">
          Por favor, ingresa un correo válido.
        </p>
      )}
    </div>
  );
};

export default SignUpEmail;
