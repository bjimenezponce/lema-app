"use client";
import { useAppSelector } from "@/store/store";
import React from "react";
import { lineChartSeries } from "@/mock/highcharts/linechart.mock";
import LineChart from "@/components/Highcharts/LineChart";
import { Card, CardBody } from "@material-tailwind/react";
import ScatterPlotChart from "@/components/Highcharts/ScatterPlotChart";
import BarHorizontalAmountChart from "@/components/Highcharts/BarHorizontalAmountChart";
import { Data4000Interface } from "./JP4000Data";

const JP4000SoftwareOnDemandGraph = ({ datos }: { datos: Data4000Interface[] }) => {
  let categories: string[] = [];
  let series: any[] = [];
  const areaCountMap: { [key: string]: number } = {};

  datos.forEach((item) => {
    if (item.software_job !== "no especificado" && item.software_job !== null) {
      if (areaCountMap[item.software_job]) {
        areaCountMap[item.software_job]++;
      } else {
        areaCountMap[item.software_job] = 1;
      }
    }
  });

  // Conversión del objeto en un arreglo de objetos con software_job y su respectiva cuenta
  const areaCountArray = Object.keys(areaCountMap).map((key) => ({ software_job: key, count: areaCountMap[key] }));

  // Ordenar el arreglo de objetos por la cuenta de mayor a menor
  areaCountArray.sort((a, b) => b.count - a.count);
  // Obtener un arreglo ordenado de los software_job
  const orderedSoftwareAreas = areaCountArray.map((item) => item.software_job).slice(0, 10);
  const softwareAreasValues = areaCountArray.map((item) => item.count).slice(0, 10);
  series = [
    {
      name: "",
      data: softwareAreasValues,
    },
  ];
  categories = orderedSoftwareAreas;
  const title = "Software mas demandados";
  const labelY = "Cantidad de software";
  return (
    <>
      <Card className="mx-3 mb-1 mt-5 border border-blue-gray-100 lg:mx-1">
        <CardBody>
          <BarHorizontalAmountChart
            title={title}
            titleUnder={""}
            categories={categories}
            series={series}
            labelY={labelY}
          />
        </CardBody>
      </Card>
    </>
  );
};
export default JP4000SoftwareOnDemandGraph;
