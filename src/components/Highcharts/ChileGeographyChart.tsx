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

interface ChileGeographyChartProps {
  data: Array<[string, number]>;
}

const ChileGeographyChart: React.FC<ChileGeographyChartProps> = () => {
  useEffect(() => {
    if (chartRef && chartRef.current) {
      //   chartRef.current.chart.update({ series: [{ data }] });
    }
  }, []);

  const chartRef = useRef<any>(null);

  const mapOptions = {
    chart: {
      height: 900,
      map: mapDataIE,
    },
    title: {
      text: "Highcharts Maps basic demo",
    },
    subtitle: {
      text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/cl/cl-all.topo.json">Chile</a>',
    },
    accessibility: {
      enabled: "false",
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: "bottom",
      },
    },
    colorAxis: {
      min: 0,
    },
    series: [
      {
        data: dataCL,
        name: "Random data",
        states: {
          hover: {
            color: "#BADA55",
          },
        },
        dataLabels: {
          enabled: true,
          format: "{point.name}",
        },
        point: {
          events: {
            click: function (e: any) {
              console.log(JSON.stringify(e.point));
            },
          },
        },
      },
    ],
  };
  return (
    <div>
      <HighchartsReact
        constructorType={"mapChart"}
        highcharts={Highcharts}
        options={mapOptions}
        ref={chartRef}
      />
    </div>
  );
};

export default ChileGeographyChart;
