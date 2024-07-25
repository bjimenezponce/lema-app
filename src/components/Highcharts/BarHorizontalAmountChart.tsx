"use client";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { useEffect, useRef } from "react";
import highchartsMap from "highcharts/modules/map";
import highchartsExporting from "highcharts/modules/exporting";
highchartsMap(Highcharts);
highchartsExporting(Highcharts);

interface Props {
  title: string;
  titleUnder: string;
  categories: string[];
  series: {
    name: string;
    data: number[];
  }[];
  labelY?: string;
  subtitle?: string;
}

const BarHorizontalAmountChart: React.FC<Props> = (props) => {
  let copiedSeries = props.series.map((obj: any) => ({ ...obj }));
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
      type: "bar",
    },
    title: {
      text: props.title,
      align: "left",
    },
    // subtitle: {
    //   text:
    //     "Source: <a " +
    //     'href="https://en.wikipedia.org/wiki/List_of_continents_and_continental_subregions_by_population"' +
    //     'target="_blank">Wikipedia.org</a>',
    //   align: "left",
    // },
    subtitle: {
      text: props.subtitle,
      align: "left",
    },
    xAxis: {
      categories: props.categories,
      title: {
        text: "",
      },
      gridLineWidth: 1,
      lineWidth: 0,
    },
    yAxis: {
      min: 0,
      title: {
        text: props.labelY,
        align: "high",
      },
      labels: {
        overflow: "justify",
      },
      gridLineWidth: 0,
    },
    tooltip: {
      valueSuffix: " ",
    },
    plotOptions: {
      bar: {
        borderRadius: "50%",
        dataLabels: {
          enabled: true,
        },
        groupPadding: 0.1,
      },
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "top",
      x: -40,
      y: 260,
      floating: true,
      borderWidth: 1,
      backgroundColor: "#FFFFFF",
      shadow: true,
    },
    credits: {
      enabled: false,
    },
    series: props.series,
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} ref={chartRef} />
    </div>
  );
};

export default BarHorizontalAmountChart;
