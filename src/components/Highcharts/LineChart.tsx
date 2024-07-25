"use client";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { useEffect, useRef } from "react";
import highchartsMap from "highcharts/modules/map";
import highchartsExporting from "highcharts/modules/exporting";
import mapDataIE from "@/widgets/highcharts/chile-geo.json";
// import mapDataIEn from "@/lib/maps/chilegeo";
import { dataCL } from "@/mock/analisis-tecnologico/charts/chile-geography";
highchartsMap(Highcharts);
highchartsExporting(Highcharts);

interface Props {
  title2: any;
  title: string;
  years: string[] | number[];
  series: {
    name: string;
    data: (number | string | null)[];
  }[];
  subtitle?: string;
  valuePrefix?: string;
}

const LineChart: React.FC<Props> = (props) => {
  useEffect(() => {
    if (chartRef && chartRef.current) {
      //   chartRef.current.chart.update({ series: [{ data }] });
    }
  }, []);

  const chartRef = useRef<any>(null);
  // chart: {
  //       height: 900,

  //     },
  const mapOptions = {
    title: {
      text: props.title,
      align: "left",
    },

    subtitle: {
      text: props.subtitle,
      align: "left",
    },

    yAxis: {
      title: {
        text: props.title2,
      },
      //   labels: {
      //     formatter: function (this: Highcharts.TooltipFormatterContextObject): string {
      //         return Highcharts.numberFormat(this.value, 0, '', '.');
      //     }
      // }
    },

    xAxis: {
      categories: props.years,
    },
    tooltip: {
      valuePrefix: props.valuePrefix,
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },

    series: props.series,

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={mapOptions} ref={chartRef} />
    </div>
  );
};

export default LineChart;
