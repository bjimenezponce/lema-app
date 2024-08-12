"use client";
import Image from "next/image";
import PatternPng from "../../../public/img/pattern.png";
import SignUpData from "./SignUpData";

interface SignUpRegisterProps {
  firstName: string;
  lastName: string;
  password: string;
  onChange: (field: keyof SignUpData, value: string) => void;
}

const SignUpRegister: React.FC<SignUpRegisterProps> = ({
  firstName,
  lastName,
  password,
  onChange,
}) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={PatternPng}
        alt="Pattern Background"
        width={200}
        height={100}
        className="mb-0" // Margen inferior para espaciar la imagen del input
      />

      <h5 className=" mb-2 font-sans font-semibold text-sm">Regristrate</h5>

      <input
        type="text"
        value={firstName}
        onChange={(e) => onChange("firstName", e.target.value)}
        placeholder="Nombre"
        className="w-36 text-center border border-gray-300 rounded-md mb-4 shadow-md shadow-indigo-500/50"
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => onChange("lastName", e.target.value)}
        placeholder="Apellido"
        className="w-36 text-center border border-gray-300 rounded-md mb-4 shadow-md shadow-indigo-500/50"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => onChange("password", e.target.value)}
        placeholder="Crear contraseña"
        className="w-36 text-center border border-gray-300 rounded-md mb-4 shadow-md shadow-indigo-500/50"
      />
    </div>
  );
};

export default SignUpRegister;
