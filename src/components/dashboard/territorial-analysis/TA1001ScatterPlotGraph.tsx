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
  data: number[];
}

const TA1001ScatterPlotGraph = ({ datos }: { datos: Data1000Interface[] }) => {
  const series: SeriesData[] = [];
  // Función para obtener el array de años ordenados
  const yearsSet = new Set(datos.map((item) => item.agno));
  const sortedYears = Array.from(yearsSet).sort((a, b) => a - b);
  let sortedAndFilteredYears = [];
  const seriesDataMap = new Map();
  datos.forEach((item) => {
    const year = item.agno;
    const sex = item.sexo;
    const titulados = parseInt(item.sum_titulados_programa, 10);
    if (titulados > 0) {
      if (!seriesDataMap.has(sex)) {
        seriesDataMap.set(sex, {
          name: sex,
          data: new Array(sortedYears.length).fill(0),
        });
      }

      const sexData = seriesDataMap.get(sex);
      const yearIndex = sortedYears.indexOf(year);
      sexData.data[yearIndex] += titulados;
    }
  });

  const seriesDataArray = Array.from(seriesDataMap.values());

  seriesDataArray.map((item) => {
    item.data.map((data: number, key: any) => {
      if (data === 0) {
        // sortedYears.filter(obj => obj[key] !== key);
        // sortedYears.filter(obj => obj[key] !== key);
        item.data.splice(key);
        sortedYears.splice(key);
      }
    });
  });

  const title = "Evolución titulados";
  const subtitle = "Fuente: elaboración propia sobre datos de sitio web mi futuro MINEDUC.";
  return (
    <>
      <Card className="mx-3 mb-1 mt-5 border border-blue-gray-100 lg:mx-1">
        {/* <CardBody>
          <ScatterPlotChart
            categorias={undefined}
            dataLineas={undefined}
            dataBarra={undefined}
            title2={undefined}
            title={title}
            years={[]}
            series={series}
          />
        </CardBody> */}
        <CardBody>
          {/* <span>asdf</span> */}
          <LineChart
            subtitle={subtitle}
            years={sortedYears}
            series={seriesDataArray}
            title={title}
            title2={"Promedio de Ingreso Total"}
          />
        </CardBody>
      </Card>
    </>
  );
};
export default TA1001ScatterPlotGraph;
