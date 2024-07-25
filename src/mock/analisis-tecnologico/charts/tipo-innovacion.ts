import { ApexOptions } from "apexcharts";

function generateDayWiseTimeSeries(
  baseval: number,
  count: number,
  yrange: { min: any; max: any }
) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([x, y]);
    baseval += 86400000;
    i++;
  }
  return series;
}

export const tipoInnovacionSeries = [
  {
    name: "Proceso",
    data: [42368847628, 4549327530, 294479058583, 21906000],
  },
  {
    name: "Producto",
    data: [49724886044, 13243374652, 36258265132, 116017782],
  },
  {
    name: "Servicio",
    data: [3798298187, 2284981747, 15388617659, 32625000],
  },
  {
    name: "otros",
    data: [23463763267, 89217960080, 6526867291, 0],
  },
];
export const tipoInnovacionOptions: ApexOptions = {
  chart: {
    type: "area",
    height: 350,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },

  title: {
    text: "Area with Negative Values",
    align: "left",
    style: {
      fontSize: "14px",
    },
  },
  xaxis: {
    type: "category",
    categories: [2021, 2022, 2023, 2024],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    tickAmount: 4,
    floating: false,

    labels: {
      style: {
        colors: "#8e8da4",
      },
      offsetY: -7,
      offsetX: 0,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  fill: {
    opacity: 0.5,
  },
  tooltip: {
    x: {
      format: "yyyy",
    },
    fixed: {
      enabled: false,
      position: "topRight",
    },
  },
  grid: {
    yaxis: {
      lines: {
        offsetX: -30,
      },
    },
    padding: {
      left: 20,
    },
  },
};
