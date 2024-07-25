"use client";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { useEffect, useRef } from "react";
import highchartsMap from "highcharts/modules/map";
import highchartsExporting from "highcharts/modules/exporting";
highchartsMap(Highcharts);
highchartsExporting(Highcharts);

interface Props {
  categorias: any;
  dataLineas: any;
  dataBarra: any;
  title2: any;
  title: string;
  years: string[] | number[];
  series: {
    name: string;
    data: (number | null)[];
  }[];
  labelBar: string;
  labelLine: string;
}

const LineAndColumnChart: React.FC<Props> = (props) => {
  useEffect(() => {
    if (chartRef && chartRef.current) {
      //   chartRef.current.chart.update({ series: [{ data }] });
    }
  }, []);

  const chartRef = useRef<any>(null);
  // chart: {
  //       height: 900,

  //     },
  const options = {
    chart: {
      zoomType: "xy",
    },
    title: {
      text: props.title,
      align: "left",
    },
    subtitle: {
      text:
        "Source: " +
        '<a href="https://www.yr.no/nb/historikk/graf/5-97251/Norge/Troms%20og%20Finnmark/Karasjok/Karasjok?q=2021"' +
        'target="_blank">YR</a>',
      align: "left",
    },
    xAxis: [
      {
        categories: props.categorias,
        crosshair: true,
      },
    ],
    yAxis: [
      {
        // Primary yAxis
        labels: {
          format: "{ value } mm",
          style: {
            color: "rgba(255,0,0,0.25)",
          },
        },
        title: {
          text: props.labelBar,
          style: {
            color: "rgba(255,0,0,0.25)",
          },
        },
      },
      {
        // Secondary yAxis
        title: {
          text: props.labelLine,
          style: {
            color: "rgba(255,0,0,0.25)",
          },
        },
        labels: {
          format: "{ value } mm",
          style: {
            color: "rgba(255,0,0,0.25)",
          },
        },
        opposite: true,
      },
    ],
    tooltip: {
      shared: true,
    },
    legend: {
      align: "left",
      x: 80,
      verticalAlign: "top",
      y: 60,
      floating: true,
      backgroundColor: "rgba(255,255,255,0.25)",
    },
    series: [
      {
        name: props.labelBar,
        type: "column",
        yAxis: 1,
        data: props.dataBarra,
        tooltip: {
          valueSuffix: " mm",
        },
      },
      {
        name: props.labelLine,
        type: "spline",
        data: props.dataLineas,
        tooltip: {
          valueSuffix: "mm",
        },
      },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} ref={chartRef} />
    </div>
  );
};

export default LineAndColumnChart;
