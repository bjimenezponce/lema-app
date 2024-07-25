"use client";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { useEffect, useRef } from "react";
import highchartsMap from "highcharts/modules/map";
import highchartsExporting from "highcharts/modules/exporting";
import olympic2012 from "./olympic2012.json";
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
    id: string;
    marker: { symbol: string };
    data: [number, number][];
  }[];
}

const ScatterPlotChart: React.FC<Props> = (props) => {
  useEffect(() => {
    if (chartRef && chartRef.current) {
      //   chartRef.current.chart.update({ series: [{ data }] });
    }
  }, []);

  const chartRef = useRef<any>(null);

  const options = {
    chart: {
      type: "scatter",
      zoomType: "xy",
    },
    title: {
      text: props.title,
      align: "left",
    },
    // subtitle: {
    //   text: 'Source: <a href="https://www.theguardian.com/sport/datablog/2012/aug/07/olympics-2012-athletes-age-weight-height">The Guardian</a>',
    //   align: "left",
    // },
    xAxis: {
      title: {
        text: "Año",
      },
      labels: {
        format: "{value}",
      },
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true,
    },
    yAxis: {
      title: {
        text: "Titulados",
      },
      labels: {
        format: "{value}",
      },
    },
    legend: {
      enabled: true,
    },
    plotOptions: {
      scatter: {
        marker: {
          radius: 8,
          symbol: "circle",
          states: {
            hover: {
              enabled: true,
              lineColor: "rgb(100,100,100)",
            },
          },
        },
        states: {
          hover: {
            marker: {
              enabled: false,
            },
          },
        },
        jitter: {
          x: 0.005,
        },
      },
    },
    tooltip: {
      pointFormat: "Año : {point.x} <br/> Titulados: {point.y} ",
    },
    series: props.series,
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} ref={chartRef} />
    </div>
  );
};

export default ScatterPlotChart;
