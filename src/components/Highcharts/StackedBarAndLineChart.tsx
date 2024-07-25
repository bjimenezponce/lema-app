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
    type: string;
    data: (number | null)[];
    tooltip: any;
  }[];
  subtitle?: string;
}

const StackedBarAndLineChart: React.FC<Props> = (props) => {
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
    colors: [
      "#12239E",
      "#118DFF",
      "#E66C37",
      "#f7a35c",
      "#8085e9",
      "#f15c80",
      "#e4d354",
      "#8085e8",
      "#8d4653",
      "#91e8e1",
    ],

    title: {
      text: props.title,
    },
    subtitle: {
      text: props.subtitle,
    },
    xAxis: [
      {
        categories: props.years,
        title: {
          text: "Año",
        },
      },
    ],
    yAxis: [
      {
        // Primary yAxis
        min: 0,
        labels: {
          format: "{value}",
          style: {
            color: "#f7a35c",
          },
        },
        title: {
          text: "Cantidad matriculados",
          style: {
            color: "#f7a35c",
          },
        },
      },
      {
        // Secondary yAxis
        title: {
          text: "",
          style: {
            color: "#f7a35c",
          },
        },
        min: 0,
        max: 1000,
        labels: {
          format: "${value}",
          style: {
            color: "#f7a35c",
            display: "none",
          },
        },
        opposite: true,
      },
    ],
    tooltip: {
      shared: true,
    },
    legend: {
      layout: "vertical",
      align: "center",
      x: -0,
      verticalAlign: "top",
      y: 400,
      floating: true,
      backgroundColor:
        //    (Highcharts.theme && Highcharts.theme.legendBackgroundColor) ||
        "#FFFFFF",
    },
    plotOptions: {
      column: {
        stacking: "normal",
        dataLabels: {
          enabled: true,
        },
        pointPadding: 0,
        groupPadding: 0,
        maxPointWidth: 150,
      },
      series: {
        dataLabels: {
          enabled: true,
          style: {
            color: "black",
            textOutline: "1px white",
          },
        },
      },
    },
    // series: [
    //   {
    //     name: "hombre",
    //     type: "column",

    //     yAxis: 1,
    //     data: [63764, 63349, 57135, 53815, 52310, 53057],
    //     tooltip: {
    //       valueSuffix: "$",
    //     },
    //   },
    //   {
    //     name: "mujer",
    //     type: "column",

    //     yAxis: 1,
    //     tooltip: {
    //       valueSuffix: "$",
    //     },
    //     data: [72400, 73176, 69712, 73340, 70545, 71803],
    //   },
    //   {
    //     name: "suma matriculados primer agno",
    //     type: "spline",

    //     data: [57689, 58911, 52709, 53484, 50373, 52305],
    //     tooltip: {
    //       valueSuffix: "$",
    //     },
    //   },
    // ],
    series: props.series,
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} ref={chartRef} />
    </div>
  );
};

export default StackedBarAndLineChart;
