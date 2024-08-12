"use client";
import React from "react";
import Image from "next/image";
import PatternPng from "../../../public/img/pattern.png";
import SignUpData from "./SignUpData";

interface SignUpJobStatusProps {
  Trabajo: string;
  onChange: (Field: keyof SignUpData, value: string) => void;
}

const SignUpJobStatus: React.FC<SignUpJobStatusProps> = ({
  Trabajo,
  onChange,
}) => {
  return (
    <>
      <Image
        src={PatternPng}
        alt="Pattern Background"
        width={200}
        height={100}
        className="mx-4"
      />

      <div className="flex flex-col items-center mt-2 mb-4">
        <select
          value={Trabajo}
          onChange={(e) => onChange("jobStatus", e.target.value)}
          className="w-56 h-10 border border-gray-300
            rounded-md text-center shadow-md shadow-indigo-500"
        >
          <option value="">Seleccione un estado</option>
          <option value="empleado">Empleado</option>
          <option value="desempleado">Desempleado</option>
        </select>
      </div>
    </>
  );
};

export default SignUpJobStatus;
