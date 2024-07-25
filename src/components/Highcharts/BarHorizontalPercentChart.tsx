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
}

const BarHorizontalPercentChart: React.FC<Props> = (props) => {
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
    },
    xAxis: {
      categories: props.categories,
    },
    yAxis: {
      min: 0,
      title: {
        text: props.titleUnder,
      },
    },
    tooltip: {
      pointFormat:
        '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
      shared: true,
    },
    legend: {
      reversed: true,
    },
    plotOptions: {
      series: {
        stacking: "normal",
        dataLabels: {
          enabled: true,
        },
      },
      bar: {
        stacking: "percent",
        dataLabels: {
          enabled: true,
          format: "{point.percentage:.0f}%",
        },
      },
    },
    series: copiedSeries,
  };
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartRef}
      />
    </div>
  );
};

export default BarHorizontalPercentChart;
