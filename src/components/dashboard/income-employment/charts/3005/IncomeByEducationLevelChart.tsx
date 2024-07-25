"use client";
import React, { useState } from "react";
import { tipoInnovacionOptions, tipoInnovacionSeries } from "@/mock/analisis-tecnologico/charts/tipo-innovacion";
import ReactApexChart from "react-apexcharts";
import IncomeByEducationLevelFilter from "./IncomeByEducationLevelFilter";
import LineChart from "@/components/Highcharts/LineChart";
import { lineChartSeries } from "@/mock/highcharts/linechart.mock";
import LineAndColumnChart from "@/components/Highcharts/LineAndColumnChart";
import { useAppSelector } from "@/store/store";
import { Data3005Interface } from "@/store/slices/thunks/IncomeEmploymentThunk";
import { obtenerPrimeraPosicionConTrue, obtenerSegundaPosicionConTrue } from "@/helpers/sharedFunctions";

export default function IncomeByEducationLevelChart() {
  let data3005 = useAppSelector((state) => state.incomeEmployment.m3005);
  let m3005Filters = useAppSelector((state) => state.filters.m3000.m3005);
  const { descr_grupo_principal, glosa_seccion } = m3005Filters;
  let dataFiltered = data3005.data.filter((data) => data.glosa_nivel !== "Normalista");
  let data3005Filtered = dataFiltered.filter(
    (dato: Data3005Interface) =>
      obtenerPrimeraPosicionConTrue(descr_grupo_principal.data).includes(dato.grupo_principal) &&
      obtenerPrimeraPosicionConTrue(glosa_seccion.data).includes(dato.cod_caenes_digito)
  );
  //aca tengo que hacer la logica para filtrar los datos
  data3005Filtered.sort((a, b) => a.nivel - b.nivel);
  const salidaNivelGlosa: string[] = Array.from(
    new Set(data3005Filtered.map(({ nivel, glosa_nivel }) => `${nivel}: ${glosa_nivel}`))
  );

  const salidaPromedio: number[] = [];
  const salidaSuma: number[] = [];

  const groupedData: {
    [nivel: number]: { sum_avg: number; sum_sum: number; count: number };
  } = data3005Filtered.reduce<{
    [nivel: number]: { sum_avg: number; sum_sum: number; count: number };
  }>((acc, curr) => {
    if (!acc[curr.nivel]) {
      acc[curr.nivel] = { sum_avg: 0, sum_sum: 0, count: 0 };
    }

    acc[curr.nivel].sum_avg += curr.avg_ing_t_t;
    acc[curr.nivel].sum_sum += curr.sum_fact_cal;
    acc[curr.nivel].count++;

    return acc;
  }, {});
  Object.keys(groupedData).forEach((nivelKey) => {
    const nivel = parseInt(nivelKey);
    const { sum_avg, sum_sum, count } = groupedData[nivel];
    // salidaPromedio.push(sum_avg / count);
    // salidaSuma.push(sum_sum);
    salidaPromedio.push(parseFloat((sum_avg / count).toFixed(1)));
    salidaSuma.push(parseFloat(sum_sum.toFixed(1)));
  });

  let series: any = lineChartSeries;
  let years: number[] = [2015, 2022, 2024];
  const options = {};
  const [seriesState, setSeriesState] = useState(series);
  const [optionsState, setOptionsState] = useState(options);
  const title = "Ingresos por nivel educativo";
  const labelBar = "Total personas";
  const labelLine = "Promedio ingresos";
  return (
    <div>
      <IncomeByEducationLevelFilter />
      <LineAndColumnChart
        years={years}
        series={series}
        title={title}
        title2={undefined}
        categorias={salidaNivelGlosa}
        dataLineas={salidaPromedio}
        dataBarra={salidaSuma}
        labelBar={labelBar}
        labelLine={labelLine}
      />
    </div>
  );
}
