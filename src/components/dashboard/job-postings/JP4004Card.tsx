"use client";
import { valorEnMillones, valorEnPorcentaje } from "@/helpers/sharedFunctions";
import { useAppSelector } from "@/store/store";
import { StatisticsCardInterface, StatisticsCard } from "@/widgets/cards";
import { BanknotesIcon, UsersIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";
import React from "react";
import { Data4000Interface } from "./JP4000Data";

const JP4000Card = ({ datos }: { datos: Data4000Interface[] }) => {
  const cardArray = [
    {
      key: 1,
      color: "gray",
      icon: BanknotesIcon,
      title: "Empleos analizados",
      value: datos.length,
      footer: {
        color: "text-green-500",
        value: "+55%",
        label: "than last week",
      },
    },
  ];
  return (
    <>
      <div className="mb-5 pb-5 mt-5 grid gap-x-6 gap-y-10  h-28">
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
export default JP4000Card;
