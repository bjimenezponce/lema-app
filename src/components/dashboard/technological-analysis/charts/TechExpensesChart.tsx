"use client";
import { gastosTecnologicosOptions } from "@/mock/analisis-tecnologico/charts/gastos-tecnologias";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { RootState, useAppSelector } from "@/store/store";

export default function TechExpensesChart() {
  const techExpensesSeries: {
    x: string;
    y: number;
  }[] = useAppSelector(
    (state: RootState) =>
      state.techanalysis.techAnalysisState.data.techExpenses.data
  );

  let series = [
    {
      data: techExpensesSeries,
    },
  ];
  const options = gastosTecnologicosOptions;

  const [optionsState, setOptionsState] = useState(options);

  return (
    <div className="">
      <div id="chart">
        <ReactApexChart
          options={optionsState}
          series={series}
          type="treemap"
          height={750}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}
