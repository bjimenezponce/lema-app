"use client";
import { useAppSelector } from "@/store/store";
import React from "react";
import { lineChartSeries } from "@/mock/highcharts/linechart.mock";
import LineChart from "@/components/Highcharts/LineChart";
import { Card, CardBody } from "@material-tailwind/react";
import ScatterPlotChart from "@/components/Highcharts/ScatterPlotChart";
import BarHorizontalAmountChart from "@/components/Highcharts/BarHorizontalAmountChart";
import { Data4000Interface } from "./JP4000Data";

const JP4000JobsByWorkAreaGraph = ({ datos }: { datos: Data4000Interface[] }) => {
  let categories: string[] = [];
  let series: any[] = [];
  const areaCountMap: { [key: string]: number } = {};
  datos.forEach((item) => {
    if (item.job_area !== "") {
      if (areaCountMap[item.job_area]) {
        areaCountMap[item.job_area]++;
      } else {
        areaCountMap[item.job_area] = 1;
      }
    }
  });

  // Conversión del objeto en un arreglo de objetos con job_area y su respectiva cuenta
  const areaCountArray = Object.keys(areaCountMap).map((key) => ({ job_area: key, count: areaCountMap[key] }));

  // Ordenar el arreglo de objetos por la cuenta de mayor a menor
  areaCountArray.sort((a, b) => b.count - a.count);
  areaCountArray.filter((data) => data.job_area != "");

  // Obtener un arreglo ordenado de los job_area
  const orderedJobAreas = areaCountArray.map((item) => item.job_area).slice(0, 10);
  const jobAreasValues = areaCountArray.map((item) => item.count).slice(0, 10);

  series = [
    {
      name: "",
      data: jobAreasValues,
    },
  ];
  categories = orderedJobAreas;
  const title = "Empleos por área de trabajo";
  const labelY = "Cantidad de empleo";
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
export default JP4000JobsByWorkAreaGraph;
