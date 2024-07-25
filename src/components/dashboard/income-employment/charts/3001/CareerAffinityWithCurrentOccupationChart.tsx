"use client";
import React, { useEffect, useRef, useState } from "react";
import { useAppSelector } from "@/store/store";
import HighchartsReact from "highcharts-react-official";
import * as Highcharts from "highcharts";
import HC_sankey from "highcharts/modules/sankey";
import Sankey from "highcharts/modules/sankey";
import { Card, CardBody } from "@material-tailwind/react";

HC_sankey(Highcharts);
if (typeof Highcharts === "object") {
  Sankey(Highcharts);
}
interface DatosChart {
  name: string;
  color: string;
  from: string;
  to: string;
  weight: number;
}

function orderAndFilterData(data: DatosChart[]): DatosChart[] {
  const uniqueNames: string[] = data
    .map((item) => item.name)
    .filter((value, index, self) => self.indexOf(value) === index);

  let resultado: DatosChart[] = [];

  for (let index = 0; index < uniqueNames.length; index++) {
    const element = uniqueNames[index];
    const datos = data.filter((item) => item.name === element);
    // Filtrar y ordenar los elementos con color #053efa primero
    const color053efa = datos.filter((item) => item.color === "#053efa");
    const otrosColores = datos.filter((item) => item.color !== "#053efa");

    // // Ordenar los elementos con color #053efa por name
    // color053efa.sort((a, b) => a.name.localeCompare(b.name));

    // Obtener los 5 elementos con color distinto a #053efa con mayor weight
    const colorRojoLargo = 10 - color053efa.length;
    const colorAzulSorted = color053efa.sort((a, b) => b.weight - a.weight);
    const otrosColoresSorted = otrosColores
      .sort((a, b) => b.weight - a.weight)
      .slice(0, colorRojoLargo);

    // Concatenar los resultados y devolver

    colorAzulSorted.forEach((datos) => {
      resultado.push(datos);
    });
    otrosColoresSorted.forEach((datos) => {
      resultado.push(datos);
    });
  }

  return resultado;
}

export default function CareerAffinityWithCurrentOccupationChart() {
  const chartRef = useRef<any>(null);
  let state3001 = useAppSelector((state) => state.incomeEmployment.m3001);
  const { data, loading } = state3001;
  useEffect(() => {
    if (chartRef && chartRef.current) {
    }
  }, []);
  let dataFinal: any = [];
  let copiedData = data.map((obj: any) => ({ ...obj }));
  if (data.length > 0) {
    dataFinal = orderAndFilterData(copiedData);
  }
  const title = "Afinidad carrera con ocupación actual";
  const series: any = [];
  const options = {
    chart: {
      height: 900,
    },
    title: {
      text: title,
    },
    series: [
      {
        keys: ["from", "to", "weight"],
        data: dataFinal,
        type: "sankey",
        name: "Sankey demo series",
      },
    ],
  };
  if (loading) {
    return <div className="loader "></div>;
  }

  if (data.length === 0) {
    return <div>No hay datos disponibles.</div>;
  } else {
    return (
      <>
        <Card className="mx-3 mb-1 mt-5 border border-blue-gray-100 lg:mx-1">
          <CardBody>
            <HighchartsReact
              highcharts={Highcharts}
              options={options}
              ref={chartRef}
            />
          </CardBody>
        </Card>
      </>
    );
  }
}
