"use client";
import LineChart from "@/components/Highcharts/LineChart";
import { lineChartSeries } from "@/mock/highcharts/linechart.mock";
import { useAppSelector } from "@/store/store";
import { Card, CardBody } from "@material-tailwind/react";
import React from "react";
import { LemaEneOcuRamaInterface } from "./LM2000Data";

export interface seriesInterface {
  name: string;
  data: number[];
}

const LM2101graph = ({ datos }: { datos: LemaEneOcuRamaInterface[] }) => {
  let trimestresOrdenados: string[] = [];
  let valoresOrdenados: number[] = [];
  let series2: seriesInterface[] = [];
  if (datos) {
    valoresOrdenados = datos
      .map((item) => parseFloat(item.value))
      .sort((a, b) => {
        const idA = datos.find((item) => parseFloat(item.value) === a)?.id || 0;
        const idB = datos.find((item) => parseFloat(item.value) === b)?.id || 0;
        return idA - idB;
      });

    const datosOrdenados = datos.sort((a, b) => a.id - b.id);

    // Paso 2: Generar un arreglo de strings del campo 'trimestre' ordenado por 'id'
    trimestresOrdenados = datosOrdenados.map((item) => item.trimestre);

    series2 = datosOrdenados.reduce<seriesInterface[]>((accumulator, currentValue) => {
      const existingItemIndex = accumulator.findIndex((item) => item.name === currentValue.rama_economica);
      if (existingItemIndex !== -1) {
        accumulator[existingItemIndex].data.push(parseFloat(currentValue.value));
      } else {
        accumulator.push({
          name: currentValue.rama_economica,
          data: [parseFloat(currentValue.value)],
        });
      }
      return accumulator;
    }, []);
  }

  const title = "Ocupados según rama de actividad económica (CIIU Rev4 según Caenes) - (proyecciones base 2017)";
  const valuePrefix = "$";
  return (
    <>
      <Card className="mx-3 mb-1 mt-5 border border-blue-gray-100 lg:mx-1">
        <CardBody>
          <LineChart
            valuePrefix={valuePrefix}
            years={trimestresOrdenados}
            series={series2}
            title={title}
            title2={"Promedio de Ingreso Total"}
          />
        </CardBody>
      </Card>
    </>
  );
};
export default LM2101graph;
