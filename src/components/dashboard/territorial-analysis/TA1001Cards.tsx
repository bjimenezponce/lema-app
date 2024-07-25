"use client";
import { valorEnMillones, valorEnPorcentaje } from "@/helpers/sharedFunctions";
import { useAppSelector } from "@/store/store";
import { StatisticsCardInterface, StatisticsCard } from "@/widgets/cards";
import { BanknotesIcon, UsersIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";
import React from "react";
import { Data1000Interface } from "./TA1001Data";

const TA1001Cards = ({ datos }: { datos: Data1000Interface[] }) => {
  const hombres = datos.filter((dato) => dato.sexo === "hombre");

  // 1. Suma de matriculados_programa
  const sumaMatriculadosPrograma = hombres.reduce((suma, dato) => {
    return suma + parseInt(dato.sum_matriculados_programa, 10);
  }, 0);

  // 2. Suma de matriculados_primer_agno
  const sumaMatriculadosPrimerAgno = hombres.reduce((suma, dato) => {
    return suma + parseInt(dato.sum_matriculados_primer_agno, 10);
  }, 0);

  // 3. Recuento (distintivo) de nombre_sede
  const nombreSedesUnicos = new Set(hombres.map((dato) => dato.nombre_sede));
  const recuentoNombreSede = nombreSedesUnicos.size;

  // 4. Recuento (distintivo) de cod_carrera
  const codCarrerasUnicos = new Set(hombres.map((dato) => dato.cod_carrera));
  const recuentoCodCarrera = codCarrerasUnicos.size;

  const cardArray = [
    {
      key: 1,
      color: "gray",
      icon: BanknotesIcon,
      title: "Total Matriculados",
      value: sumaMatriculadosPrograma,
      footer: {
        color: "text-green-500",
        value: "+55%",
        label: "than last week",
      },
    },
    {
      key: 2,
      color: "gray",
      icon: UsersIcon,
      title: "Matriculados de primer año ",
      value: sumaMatriculadosPrimerAgno,
      footer: {
        color: "text-green-500",
        value: "+3%",
        label: "than last month",
      },
    },
    {
      key: 3,
      color: "gray",
      icon: UserPlusIcon,
      title: "Sedes",
      value: recuentoNombreSede,
      footer: {
        color: "text-red-500",
        value: "-2%",
        label: "than yesterday",
      },
    },
    {
      key: 4,
      color: "gray",
      icon: UserPlusIcon,
      title: "Carreras",
      value: recuentoCodCarrera,
      footer: {
        color: "text-red-500",
        value: "-2%",
        label: "than yesterday",
      },
    },
  ];
  return (
    <>
      <div className="mb-1 grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-4 h-20">
        {cardArray.map(({ key, icon, title, footer, ...rest }: StatisticsCardInterface) => (
          <StatisticsCard
            key={key}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            })}
          />
        ))}
      </div>
    </>
  );
};
export default TA1001Cards;
