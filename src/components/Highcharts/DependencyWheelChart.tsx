"use client";
import React, { useEffect, useRef } from "react";
import * as Highcharts from "highcharts";
import HighchartsDependencyWheel from "highcharts/modules/dependency-wheel";
import HighchartsReact from "highcharts-react-official";
import HC_sankey from "highcharts/modules/sankey";

HC_sankey(Highcharts);
if (typeof Highcharts === "object") {
  HighchartsDependencyWheel(Highcharts);
}

interface DependencyWheelChartProps {
  data: Array<[string, string, number]>;
}

const DependencyWheelChart: React.FC<DependencyWheelChartProps> = () => {
  const chartRef = useRef<any>(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      //   chartRef.current.chart.update({ series: [{ data }] });
    }
  }, []);

  const optionss = {
    title: {
      text: "Highcharts Dependency Wheel",
    },

    accessibility: {
      description: "",
      point: {
        valueDescriptionFormat:
          "{index}. From {point.from} to {point.to}: {point.weight}.",
      },
    },

    series: [
      {
        keys: ["from", "to", "weight"],
        data: [
          ["Brazil", "Portugal", 5],
          ["Brazil", "France", 1],
          ["Brazil", "Spain", 1],
          ["Brazil", "England", 1],
          ["Canada", "Portugal", 1],
          ["Canada", "France", 5],
          ["Canada", "England", 1],
          ["Mexico", "Portugal", 1],
          ["Mexico", "France", 1],
          ["Mexico", "Spain", 5],
          ["Mexico", "England", 1],
          ["USA", "Portugal", 1],
          ["USA", "France", 1],
          ["USA", "Spain", 1],
          ["USA", "England", 5],
          ["Portugal", "Angola", 2],
          ["Portugal", "Senegal", 1],
          ["Portugal", "Morocco", 1],
          ["Portugal", "South Africa", 3],
          ["France", "Angola", 1],
          ["France", "Senegal", 3],
          ["France", "Mali", 3],
          ["France", "Morocco", 3],
          ["France", "South Africa", 1],
          ["Spain", "Senegal", 1],
          ["Spain", "Morocco", 3],
          ["Spain", "South Africa", 1],
          ["England", "Angola", 1],
          ["England", "Senegal", 1],
          ["England", "Morocco", 2],
          ["England", "South Africa", 7],
          ["South Africa", "China", 5],
          ["South Africa", "India", 1],
          ["South Africa", "Japan", 3],
          ["Angola", "China", 5],
          ["Angola", "India", 1],
          ["Angola", "Japan", 3],
          ["Senegal", "China", 5],
          ["Senegal", "India", 1],
          ["Senegal", "Japan", 3],
          ["Mali", "China", 5],
          ["Mali", "India", 1],
          ["Mali", "Japan", 3],
          ["Morocco", "China", 5],
          ["Morocco", "India", 1],
          ["Morocco", "Japan", 3],
          ["Japan", "Brazil", 1],
        ],
        type: "dependencywheel",
        name: "Dependency wheel series",
        dataLabels: {
          color: "#333",
          style: {
            textOutline: "none",
          },
          textPath: {
            enabled: true,
          },
          distance: 10,
        },
        size: "95%",
      },
    ],
  };

  const options = {
    title: {
      text: "My chart",
    },
    series: [
      {
        data: [1, 2, 3],
      },
    ],
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={optionss}
      ref={chartRef}
    />
  );
};

export default DependencyWheelChart;
