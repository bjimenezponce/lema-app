"use client";
import React, { useEffect, useRef } from "react";
import OccupationalAutomationProbabilityFilter from "./occupationalAutomationProbabilityFilter";
import BarHorizontalPercentChart from "@/components/Highcharts/BarHorizontalPercentChart";
import { useAppSelector } from "@/store/store";
import { Data3006GraphInterface, Data3006TableInterface } from "@/store/slices/thunks/IncomeEmploymentThunk";
import {
  filter3006GraphData,
  filter3006TableData,
  generate3006Series,
  get3006GraphOptions,
  get3006TableGrouped,
  group3006Graph,
  obtenerPrimeraPosicionConTrue,
} from "@/helpers/sharedFunctions";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import highchartsExporting from "highcharts/modules/exporting";
import { Card, CardBody, Typography } from "@material-tailwind/react";
highchartsMap(Highcharts);
highchartsExporting(Highcharts);
export interface Data3006TableGroupedInterface {
  descr_grupos_unidades: string;
  avg_prom_rii: number;
}

export default function OccupationalAutomationProbabilityChart() {
  useEffect(() => {
    if (chartRef && chartRef.current) {
      //   chartRef.current.chart.update({ series: [{ data }] });
    }
  }, []);
  const chartRef = useRef<any>(null);

  let data3006 = useAppSelector((state) => state.incomeEmployment.m3006);
  let data3006Loading = data3006.loading;
  let m3005Filters = useAppSelector((state) => state.filters.m3000.m3006);
  const { desc_grupo_unidades, desc_subgrupo_principal } = m3005Filters;
  let dataGraph = data3006.data.responseGraph;
  let dataTable = data3006.data.responseTable;

  //Logica para grafico
  let data3006GraphFiltered = filter3006GraphData(dataGraph, desc_grupo_unidades.data, desc_subgrupo_principal.data);
  data3006GraphFiltered.sort((a, b) => a.grupo_principal - b.grupo_principal);
  const categories = group3006Graph(data3006GraphFiltered);
  const series = generate3006Series(data3006GraphFiltered);
  const title = "Probabilidad de automatización ocupacional";
  const titleUnder = "Suma de frecuencia cuartil casen";
  const options = get3006GraphOptions(title, categories, titleUnder, series);
  //Logica Tablas
  let data3006TableFiltered: Data3006TableInterface[] = filter3006TableData(
    dataTable,
    desc_grupo_unidades.data,
    desc_subgrupo_principal.data
  );
  const data3006TableGrouped: Data3006TableGroupedInterface[] = get3006TableGrouped(data3006TableFiltered);

  let head: string[] = [];
  let rows: Data3006TableGroupedInterface[] = [];

  if (dataTable.length > 0) {
    head = ["Ocupaciones", "Probabilidad de automatización"];
    rows = data3006TableGrouped;
  }
  return (
    <div>
      <OccupationalAutomationProbabilityFilter />
      <div className="col-span-4  grid grid-cols-2 gap-4 " id="cardContainer">
        {data3006Loading ? (
          <Card className="mx-3 mb-1 mt-5 border border-blue-gray-100 lg:mx-1">
            <CardBody>
              <div className="loader "></div>
            </CardBody>{" "}
          </Card>
        ) : (
          <Card className="mx-3 mb-1 mt-5 border border-blue-gray-100 lg:mx-1 h-120">
            <CardBody>
              <HighchartsReact highcharts={Highcharts} options={options} ref={chartRef} />
            </CardBody>
          </Card>
        )}
        <Card className="mx-3 mb-1 mt-5 border border-blue-gray-100 h-250 overflow-y-scroll">
          <CardBody>
            <table className="table-auto  w-full ">
              <thead>
                <tr>
                  {head.map((head) => (
                    <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map(({ descr_grupos_unidades, avg_prom_rii }, index) => {
                  const isLast = index === rows.length - 1;
                  const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={index}>
                      <td className={classes}>
                        {/* <Avatar
                            src={img}
                            alt={name}
                            size="md"
                            className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                          /> */}
                        <Typography variant="small" color="blue-gray" className="font-bold">
                          {descr_grupos_unidades}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {avg_prom_rii}
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
