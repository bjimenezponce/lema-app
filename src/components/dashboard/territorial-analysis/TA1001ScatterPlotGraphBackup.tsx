"use client";
import { useAppSelector } from "@/store/store";
import React from "react";
import { lineChartSeries } from "@/mock/highcharts/linechart.mock";
import LineChart from "@/components/Highcharts/LineChart";
import { Card, CardBody } from "@material-tailwind/react";
import ScatterPlotChart from "@/components/Highcharts/ScatterPlotChart";
import { Data1000Interface } from "./TA1001Data";
interface SeriesData {
  name: string;
  id: string;
  marker: { symbol: string };
  data: [number, number][];
}
const TA1001ScatterPlotGraphBackup = ({ datos }: { datos: Data1000Interface[] }) => {
  const series: SeriesData[] = [];

  datos.forEach((dato) => {
    // Convertir sum_titulados_programa a un número entero
    const sumTitulados = parseInt(dato.sum_titulados_programa);

    // Verificar si sum_titulados_programa es mayor o igual a cero
    if (sumTitulados >= 0) {
      // Buscar si ya existe una serie con el sexo actual
      const serieIndex = series.findIndex((s) => s.name === dato.sexo);
      if (serieIndex !== -1) {
        // Buscar si ya existe el año actual en la serie
        const yearIndex = series[serieIndex].data.findIndex((d) => d[0] === parseInt(dato.agno));
        if (yearIndex !== -1) {
          // Si el año existe, sumar sum_titulados_programa al valor existente
          series[serieIndex].data[yearIndex][1] += sumTitulados;
        } else {
          // Si el año no existe, agregar un nuevo dato
          series[serieIndex].data.push([parseInt(dato.agno), sumTitulados]);
        }
      } else {
        // Si la serie no existe, crear una nueva
        series.push({
          name: dato.sexo,
          id: dato.sexo,
          marker: { symbol: "circle" },
          data: [[parseInt(dato.agno), sumTitulados]],
        });
      }
    }
  });

  series.forEach((serie) => {
    serie.data.sort((a, b) => a[0] - b[0]);
  });

  const title = "Evolución titulados";
  return (
    <>
      <Card className="mx-3 mb-1 mt-5 border border-blue-gray-100 lg:mx-1">
        <CardBody>
          <ScatterPlotChart
            categorias={undefined}
            dataLineas={undefined}
            dataBarra={undefined}
            title2={undefined}
            title={title}
            years={[]}
            series={series}
          />
        </CardBody>
      </Card>
    </>
  );
};
export default TA1001ScatterPlotGraphBackup;
