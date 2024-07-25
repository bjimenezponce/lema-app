"use client";
import StackedBarAndLineChart from "@/components/Highcharts/StackedBarAndLineChart";
import { useAppSelector } from "@/store/store";
import { Card, CardBody, tooltip } from "@material-tailwind/react";
import React from "react";
import { Data1000Interface } from "./TA1001Data";

const TA1001StackedLineGraph = ({ datos }: { datos: Data1000Interface[] }) => {
  // Paso 1: Obtener un arreglo numérico con los datos agrupados de agno ordenados de menor a mayor
  const agnosOrdenados = (Array.from(new Set(datos.map((dato) => dato.agno))) as number[]).sort((a, b) => a - b);
  // Paso 2: Crear la salida para el gráfico
  const salidaGrafico = [];
  const hombres = datos.filter((dato) => dato.sexo === "hombre");
  const mujeres = datos.filter((dato) => dato.sexo === "Mujer");
  const sumaMatriculadosPrimerAgno = agnosOrdenados.map((agno) => {
    const suma = datos
      .filter((dato) => dato.agno === agno)
      .reduce((total, dato) => {
        return total + parseInt(dato.sum_matriculados_primer_agno);
      }, 0);
    return suma;
  });
  const sumaMujer = agnosOrdenados.map((agno) => {
    const sumaM = mujeres
      .filter((dato) => dato.agno === agno)
      .reduce((totalm, dato) => {
        return totalm + parseInt(dato.sum_matriculados_programa);
      }, 0);
    return sumaM;
  });
  const sumaHombres = agnosOrdenados.map((agno) => {
    const suma = hombres
      .filter((dato) => dato.agno === agno)
      .reduce((totalh, dato) => {
        return totalh + parseInt(dato.sum_matriculados_programa);
      }, 0);
    return suma;
  });

  salidaGrafico.push({
    name: "hombre",
    type: "column",
    data: sumaHombres,
    tooltip: "",
    // tooltip: {
    //   valueSuffix: "$",
    // },
  });

  salidaGrafico.push({
    name: "mujer",
    type: "column",
    tooltip: "",
    // tooltip: {
    //   valueSuffix: "$",
    // },
    data: sumaMujer,
  });

  salidaGrafico.push({
    name: "matriculados primer año",
    type: "spline",
    data: sumaMatriculadosPrimerAgno,
    tooltip: "",
    // tooltip: {
    //   valueSuffix: "$%",
    // },
  });

  const title = "Evolución matrícula (hasta 2023)";
  const subtitle = "Fuente: elaboración propia sobre datos de sitio web mi futuro MINEDUC.";
  return (
    <>
      <Card className="mx-3 mb-1 mt-5 border border-blue-gray-100 lg:mx-1">
        <CardBody>
          <StackedBarAndLineChart
            categorias={undefined}
            dataLineas={undefined}
            dataBarra={undefined}
            title2={undefined}
            title={title}
            years={agnosOrdenados}
            series={salidaGrafico}
            subtitle={subtitle}
          />
        </CardBody>
      </Card>
    </>
  );
};
export default TA1001StackedLineGraph;
