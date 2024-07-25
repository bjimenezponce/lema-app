"use client";
import { StatisticsCard } from "@/widgets/cards";
import { BanknotesIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Data1000Interface } from "./TA1001Data";

const TA1001TotalGraduateCard = ({ datos }: { datos: Data1000Interface[] }) => {
  const sumaMatriculadosPrograma: number = datos.reduce((total, dato) => {
    // Convertir sum_matriculados_programa a un número entero
    const sumMatriculados = parseInt(dato.sum_matriculados_programa);

    // Verificar si sum_matriculados_programa es un número válido
    if (!isNaN(sumMatriculados)) {
      return total + sumMatriculados;
    } else {
      return total;
    }
  }, 0);
  const cardData = {
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
  };
  return (
    <>
      <div className="mb-1 grid gap-x-6 gap-y-10  h-20">
        <StatisticsCard
          key={cardData.key}
          title={cardData.title}
          icon={React.createElement(cardData.icon, {
            className: "w-6 h-6 text-white",
          })}
          value={cardData.value}
        />
      </div>
    </>
  );
};
export default TA1001TotalGraduateCard;
