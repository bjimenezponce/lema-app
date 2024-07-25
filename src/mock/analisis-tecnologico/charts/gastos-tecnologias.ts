import { ApexOptions } from "apexcharts";

export const gastosTecnologicosData: {
  x: string;
  y: number;
}[] = [
  {
    x: "3D printing",
    y: 207510027,
  },
  {
    x: "5G",
    y: 59999999,
  },
  {
    x: "Alimentos Funcionales",
    y: 2766624674,
  },
  {
    x: "Biotecnología",
    y: 4084855107,
  },
  {
    x: "Blockchain",
    y: 198911000,
  },
  {
    x: "Clean Energy Technologies",
    y: 52990833718,
  },
  {
    x: "Desarrollo de Drogas (Drug development)",
    y: 7370530359,
  },
  {
    x: "Gamificación",
    y: 212160000,
  },
  {
    x: "Genómica y Edición de Genes",
    y: 2414775719,
  },
  {
    x: "Green Technologies (Tecnologías Verdes)",
    y: 188803582119,
  },
  {
    x: "Inteligencia Artificial (IA)",
    y: 16103115492,
  },
  {
    x: "Internet de las Cosas (IoT)",
    y: 3750806029,
  },
  {
    x: "Manufactura Avanzada (Advanced Manufacturing)",
    y: 18102367253,
  },
  {
    x: "Mass customization",
    y: 2107293680,
  },
  {
    x: "Materiales Avanzados (Advanced Materials)",
    y: 30076182280,
  },
  {
    x: "Nanotecnología",
    y: 1157012885,
  },
  {
    x: "Química Verde (Green Chemestry)",
    y: 3006897671,
  },
  {
    x: "Realidad Virtual (VR) y/o Realidad Aumentada (AR)",
    y: 60000000,
  },
  {
    x: "Robótica",
    y: 1431527442,
  },
  {
    x: "Sin tendencia",
    y: 17245611794,
  },
  {
    x: "Software de aplicación",
    y: 672760199,
  },
  {
    x: "Realidad Virtual (VR) y/o Realidad Aumentada (AR)",
    y: 60000000,
  },
  {
    x: "Robótica",
    y: 1431527442,
  },
  {
    x: "Sin tendencia",
    y: 17245611794,
  },
  {
    x: "Software de aplicación",
    y: 672760199,
  },
];

export const gastosTecnologicosOptions: ApexOptions = {
  legend: {
    show: false,
  },
  chart: {
    height: 500,
    type: "treemap",
  },
  title: {
    text: "",
  },
};
