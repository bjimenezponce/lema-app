"use client";
import React, { useState } from "react";
import {
  tipoInnovacionOptions,
  tipoInnovacionSeries,
} from "@/mock/analisis-tecnologico/charts/tipo-innovacion";
import ReactApexChart from "react-apexcharts";

export default function InnovationTypeChart() {
  const series = [
    {
      data: tipoInnovacionSeries,
    },
  ];
  const options = tipoInnovacionOptions;
  const [seriesState, setSeriesState] = useState(series[0].data);
  const [optionsState, setOptionsState] = useState(options);

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={optionsState}
          series={seriesState}
          type="area"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}
