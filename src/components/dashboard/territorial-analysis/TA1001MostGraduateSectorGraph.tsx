"use client";
import { useAppSelector } from "@/store/store";
import React from "react";
import { lineChartSeries } from "@/mock/highcharts/linechart.mock";
import LineChart from "@/components/Highcharts/LineChart";
import { Card, CardBody } from "@material-tailwind/react";
import ScatterPlotChart from "@/components/Highcharts/ScatterPlotChart";
import BarHorizontalAmountChart from "@/components/Highcharts/BarHorizontalAmountChart";
import { Data1000Interface } from "./TA1001Data";

const TA1001MostGraduateSectorGraph = ({ datos }: { datos: Data1000Interface[] }) => {
  let categories: string[] = [];
  let series: any[] = [];
  const sumasPorSubarea: { [subarea: string]: number } = {};

  // Calcular la suma de sum_titulados_programa para cada subárea
  datos.forEach((dato) => {
    const subarea = dato.cinef13_subarea;
    const suma = parseInt(dato.sum_titulados_programa);
    if (!isNaN(suma) && suma >= 0) {
      if (sumasPorSubarea[subarea] === undefined) {
        sumasPorSubarea[subarea] = suma;
      } else {
        sumasPorSubarea[subarea] += suma;
      }
    }
  });

  // Convertir el objeto a un array y ordenar de mayor a menor
  const subareasOrdenadas = Object.entries(sumasPorSubarea)
    .sort(([, sumaA], [, sumaB]) => sumaB - sumaA)
    .map(([subarea]) => subarea);

  // Formatear la categories con las subáreas ordenadas
  categories = subareasOrdenadas;

  // Formatear la series con las sumas de titulados por subárea
  series = [
    {
      name: "titulados",
      data: subareasOrdenadas.map((subarea) => sumasPorSubarea[subarea]),
    },
  ];

  // Utilizar la función para obtener las salidas deseadas
  const title = "Sectores con más titulados del ultimo año";
  const labelY = "Cantidad de tiulados";

  return (
    <>
      <Card className="mx-3 mb-1 mt-5 border border-blue-gray-100 lg:mx-1">
        <CardBody>
          <BarHorizontalAmountChart
            labelY={labelY}
            title={title}
            titleUnder={""}
            categories={categories}
            series={series}
          />
        </CardBody>
      </Card>
    </>
  );
};
export default TA1001MostGraduateSectorGraph;
