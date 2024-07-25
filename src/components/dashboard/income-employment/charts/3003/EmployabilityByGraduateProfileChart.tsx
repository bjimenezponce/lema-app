"use client";
import React, { useState } from "react";
import { tipoInnovacionOptions, tipoInnovacionSeries } from "@/mock/analisis-tecnologico/charts/tipo-innovacion";
import ReactApexChart from "react-apexcharts";
import EmployabilityByGraduateProfileFilter from "./EmployabilityByGraduateProfileFilter";
import { lineChartSeries } from "@/mock/highcharts/linechart.mock";
import LineChart from "@/components/Highcharts/LineChart";
import { useAppSelector } from "@/store/store";
import { StatisticsCardInterface, StatisticsCard } from "@/widgets/cards";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import { valorEnMillones, valorEnPorcentaje } from "@/helpers/sharedFunctions";
import { BanknotesIcon, UsersIcon, UserPlusIcon } from "@heroicons/react/24/solid";

type DataEntry = {
  name: string;
  data: number[];
};

type FormattedDataEntry = {
  name: string;
  // data: string[];
  data: number[];
};

function formatDataValues(data: DataEntry[]): FormattedDataEntry[] {
  return data.map((entry) => {
    return {
      ...entry,
      data: entry.data.map((value) => Math.round(value)),
      // data: entry.data.map((value) => `$${Math.round(value).toLocaleString("de-DE")}`),
    };
  });
}

export default function EmployabilityByGraduateProfileChart() {
  let data3003 = useAppSelector((state) => state.incomeEmployment.m3003);
  const data3003kpi = data3003.kpi;
  const { ingreso_maximo, ingreso_promedio, prom_emp_1er_agno, prom_emp_2do_agno } = data3003kpi;
  let series: any = lineChartSeries;
  let years: number[] = [2015, 2022, 2024];
  const options = {};
  const [seriesState, setSeriesState] = useState(series);
  const [optionsState, setOptionsState] = useState(options);

  const statisticsCardArray = [
    {
      key: 1,
      color: "gray",
      icon: BanknotesIcon,
      title: "Promedio empleabilidad primer año",
      value: valorEnPorcentaje(prom_emp_1er_agno),
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
      title: "Promedio empleabilidad primer año",
      value: valorEnPorcentaje(prom_emp_2do_agno),
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
      title: "Promedio de ingreso al cuarto año",
      value: valorEnMillones(ingreso_promedio),
      footer: {
        color: "text-red-500",
        value: "-2%",
        label: "than yesterday",
      },
    },
  ];

  const title = "Empleabilidad por perfil de egreso";
  const subtitle = "Fuente: elaboración propia sobre datos de sitio web mi futuro MINEDUC.";
  const seriesFormated = formatDataValues(data3003.graficos.series);
  return (
    <div>
      <EmployabilityByGraduateProfileFilter />
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
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
            subtitle={subtitle}
            years={data3003.graficos.categories}
            series={seriesFormated}
            title={title}
            title2={undefined}
          />
        </CardBody>
      </Card>
    </div>
  );
}
