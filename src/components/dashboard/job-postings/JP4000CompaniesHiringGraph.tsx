"use client";
import { useAppSelector } from "@/store/store";
import React from "react";
import { lineChartSeries } from "@/mock/highcharts/linechart.mock";
import LineChart from "@/components/Highcharts/LineChart";
import { Card, CardBody } from "@material-tailwind/react";
import ScatterPlotChart from "@/components/Highcharts/ScatterPlotChart";
import BarHorizontalAmountChart from "@/components/Highcharts/BarHorizontalAmountChart";
import { Data4000Interface } from "./JP4000Data";

const JP4000CompaniesHiringGraph = ({ datos }: { datos: Data4000Interface[] }) => {
  let categories: string[] = [];
  let series: any[] = [];
  const areaCountMap: { [key: string]: number } = {};
  datos.forEach((item) => {
    if (item.job_company_completed !== "No Especificado" && item.job_company_completed !== "No especificado") {
      if (areaCountMap[item.job_company_completed]) {
        areaCountMap[item.job_company_completed]++;
      } else {
        areaCountMap[item.job_company_completed] = 1;
      }
    }
  });

  // Conversión del objeto en un arreglo de objetos con job_company_completed y su respectiva cuenta
  const areaCountArray = Object.keys(areaCountMap).map((key) => ({
    job_company_completed: key,
    count: areaCountMap[key],
  }));

  // Ordenar el arreglo de objetos por la cuenta de mayor a menor
  areaCountArray.sort((a, b) => b.count - a.count);

  // Obtener un arreglo ordenado de los job_company_completed
  const orderedCompany = areaCountArray.map((item) => item.job_company_completed).slice(0, 10);
  const companyValues = areaCountArray.map((item) => item.count).slice(0, 10);

  series = [
    {
      name: "",
      data: companyValues,
    },
  ];
  categories = orderedCompany;
  const title = "Empresas contratando";
  const labelY = "Cantidad de empresas";
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
export default JP4000CompaniesHiringGraph;
