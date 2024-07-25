"use client";
import React, { useState } from "react";
import { tipoInnovacionOptions, tipoInnovacionSeries } from "@/mock/analisis-tecnologico/charts/tipo-innovacion";
import ReactApexChart from "react-apexcharts";
import IncomeVariationsByYearsOfExperienceFilter from "./IncomeVariationsByYearsOfExperienceFilter";
import LineChart from "@/components/Highcharts/LineChart";
import { lineChartSeries } from "@/mock/highcharts/linechart.mock";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { StatisticsCardInterface, StatisticsCard } from "@/widgets/cards";
import { useAppSelector } from "@/store/store";
import { BanknotesIcon, UsersIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  formatNumberToCurrency,
  roundToDecimalPlaces,
  valorEnMillones,
  valorEnPorcentaje,
} from "@/helpers/sharedFunctions";

export default function IncomeVariationsByYearsOfExperienceChart() {
  let statisticsCardsData = useAppSelector((state) => state.incomeEmployment.m3002.data);
  const { valor_1, valor_2, valor_3, valor_4, valor_5, valor_6 } = statisticsCardsData;
  let lineChartData = [
    roundToDecimalPlaces(valor_1, 0),
    roundToDecimalPlaces(valor_2, 0),
    roundToDecimalPlaces(valor_3, 0),
    roundToDecimalPlaces(valor_4, 0),
    roundToDecimalPlaces(valor_5, 0),
  ];
  let series: any = lineChartSeries;
  series[0].data = lineChartData;
  let years: string[] = ["1er año", "2do año", "3er año", "4to año", "5to año"];
  const options = {};
  const statisticsCardArray = [
    {
      key: 1,
      color: "gray",
      icon: BanknotesIcon,
      title: "Ingreso promedio al primer año",
      value: formatNumberToCurrency(valor_1),
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
      title: "Ingreso promedio al quinto año",
      value: formatNumberToCurrency(valor_5),
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
      title: "Crecimiento porcentual del ingreso",
      value: valorEnPorcentaje(valor_6),
      footer: {
        color: "text-red-500",
        value: "-2%",
        label: "than yesterday",
      },
    },
  ];

  const title = "Variaciones de ingreso por año de experiencia";
  const valuePrefix = "$";
  return (
    <div>
      <IncomeVariationsByYearsOfExperienceFilter />
      {/* Grafico lineal de anio vs prom ingreso total */}
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {statisticsCardArray.map(({ key, icon, title, footer, ...rest }: StatisticsCardInterface) => (
          <StatisticsCard
            key={key}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            })}
            // footer={
            //   <Typography
            //     children={
            //       <>
            //         <strong className={footer.color}>{footer.value}</strong>
            //         &nbsp;{footer.label}
            //       </>
            //     }
            //     className="font-normal text-blue-gray-600"
            //   ></Typography>
            // }
          />
        ))}
      </div>
      <Card className="mx-3 mb-1 mt-5 border border-blue-gray-100 lg:mx-1">
        <CardBody>
          <LineChart
            valuePrefix={valuePrefix}
            years={years}
            series={series}
            title={title}
            title2={"Promedio de Ingreso Total"}
          />
        </CardBody>
      </Card>
    </div>
  );
}
