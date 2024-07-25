"use client";
import LineChart from "@/components/Highcharts/LineChart";
import { useAppSelector } from "@/store/store";
import { Card, CardBody } from "@material-tailwind/react";
import React from "react";
import { LemaEsiYMedianoOcuInterface } from "./LM2000Data";
import { seriesInterface } from "./LM2101graph";

const LM2103graph = ({ datos }: { datos: LemaEsiYMedianoOcuInterface[] }) => {
  let agnioOrdenados: number[] = [];
  let valoresOrdenados: number[] = [];
  let series2: seriesInterface[] = [];

  if (datos) {
    valoresOrdenados = datos
      .map((item) => parseFloat(item.value))
      .sort((a, b) => {
        const idA = datos.find((item) => parseFloat(item.value) === a)?.anio || 0;
        const idB = datos.find((item) => parseFloat(item.value) === b)?.anio || 0;
        return idA - idB;
      });

    const datosOrdenados = datos.sort((a, b) => a.anio - b.anio);
    // Paso 2: Generar un arreglo de strings del campo 'trimestre' ordenado por 'id'
    agnioOrdenados = Array.from(new Set(datosOrdenados.map((item) => item.anio)));

    // agnioOrdenados = datosOrdenados.map((item) => item.anio);

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

    // filtros
  }
  const title = "Ocupados según rama de actividad económica (CIIU Rev4 según Caenes) - (proyecciones base 2017)";
  const valuePrefix = "$";
  return (
    <>
      <Card className="mx-3 mb-1 mt-5 border border-blue-gray-100 lg:mx-1">
        <CardBody>
          <LineChart
            valuePrefix={valuePrefix}
            years={agnioOrdenados}
            series={series2}
            title={title}
            title2={"Promedio de Ingreso Total"}
          />
        </CardBody>
      </Card>
    </>
  );
};
export default LM2103graph;
