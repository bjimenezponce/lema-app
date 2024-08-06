"use client";
import { SetStateAction, useState } from "react";
import React from "react";
import Image from "next/image";
import PatternPng from "../../../public/img/pattern.png";

// function SignUpJobStatus(): JSX.Element {
//   return (
//     <>
//       <Image
//         src={PatternPng}
//         alt="Pattern Background"
//         width={200}
//         height={100}
//         className="mx-4"
//       />
//       <h5 className="flex flex-col items-center font-sans font-semibold text-sm">
//         Empleabilidad
//       </h5>

//       <div className="flex flex-col items-center mt-2 ">
//         <select
//           name="JobStatus"
//           id="SignUpJobStatus"
//           className="w-56 h-6 text-center border
//         border-gray-300 rounded-md mb-4 shadow-md shadow-indigo-500 "
//         >
//           <option value="" disabled selected>
//             Estado de Empleo Actual
//           </option>
//           <option value="empleado">Empleado</option>
//           <option value="desempleado">Desempleado</option>
//           <option value="independiente">independiente</option>
//         </select>
//       </div>
//     </>
//   );
// }

// export default SignUpJobStatus;

const SignUpJobStatus: React.FC = () => {
  const [Trabajo, setTrabajo] = useState<string>("");
  const [isTrabajo, setIsTrabajo] = useState<string>("");
  const options = ["Empleado", "Desempleado", "Independiente"];

  const handleTrabajoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTrabajo(event.target.value);
  };

  const handleIsTrabajoChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setIsTrabajo(event.target.value);
    setTrabajo(event.target.value);
  };

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
          value={isTrabajo}
          onChange={handleIsTrabajoChange}
          className="w-56 h-10 border border-gray-300
            rounded-md text-center shadow-md shadow-indigo-500"
        >
          <option value="" disabled>
            Selecciona una opción
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SignUpJobStatus;
