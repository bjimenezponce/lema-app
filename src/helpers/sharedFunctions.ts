import {
  Data3004GroupInterface,
  Data3004Interface,
} from "@/components/dashboard/income-employment/charts/3004/EmployabilityByJobProfileTable";
import { Data1000Interface } from "@/components/dashboard/territorial-analysis/TA1001Data";
import { Data1000GroupTable } from "@/components/dashboard/territorial-analysis/TA1001TopMajorsTable";
import { Data3006GraphInterface, Data3006TableInterface } from "@/store/slices/thunks/IncomeEmploymentThunk";

export function roundToDecimalPlaces(number: number | undefined, decimalPlaces: number): number {
  const safeNumber = number !== undefined ? number : 0;
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(safeNumber * factor) / factor;
}

export const formatNumberToCurrency = (number: number | undefined): string => {
  if (number !== undefined) {
    const formattedNumber: string = number.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    // Eliminar los centavos
    return formattedNumber;
  } else {
    return "$0";
  }
};

export const calculateAllSelected = (arr: (any | any | boolean)[][]) => {
  const allSelected = arr.filter(([a, b, selected]) => !selected).length;
  if (allSelected > 0) {
    return false;
  } else {
    return true;
  }
};

export const valorEnMillones = (valor: number | undefined): string => {
  if (valor === undefined) {
    return "undefined";
  }
  const res: string = (valor / 1000000).toFixed(2) + "M";
  return res;
};

export const valorEnPorcentaje = (valor: number | undefined): string => {
  if (valor === undefined) {
    return "undefined";
  }
  const res: string = (valor * 100).toFixed(0) + "%";
  return res;
};

export function groupData1000Table(data: Data1000Interface[]): Data1000GroupTable[] {
  const datosAgrupadosMap = new Map<string, Data1000GroupTable>();

  data.forEach((dato) => {
    const key = `${dato.area_carrera_generica}`;

    if (datosAgrupadosMap.has(key)) {
      const datoExistente = datosAgrupadosMap.get(key)!;
      datoExistente.q_Titulados += parseInt(dato.sum_matriculados_primer_agno);
      datoExistente.q_matriculados_primer_agno += parseInt(dato.sum_matriculados_primer_agno);
      datoExistente.q_Titulados += parseInt(dato.sum_titulados_programa);
      datosAgrupadosMap.set(key, datoExistente);
    } else {
      datosAgrupadosMap.set(key, {
        nombre_carrera: dato.area_carrera_generica,
        q_matriculados: parseInt(dato.sum_matriculados_primer_agno),
        q_matriculados_primer_agno: parseInt(dato.sum_matriculados_primer_agno),
        q_Titulados: parseInt(dato.sum_titulados_programa),
      });
    }
  });

  return Array.from(datosAgrupadosMap.values());
}

export function agruparDatos3004(data: Data3004Interface[]): Data3004GroupInterface[] {
  const datosAgrupadosMap = new Map<string, Data3004GroupInterface>();

  data.forEach((dato) => {
    const key = `${dato.descr_grupos_unidades}_${dato.grupo_unidades}`;

    if (datosAgrupadosMap.has(key)) {
      const datoExistente = datosAgrupadosMap.get(key)!;
      datoExistente.total_count_oficio4_08 += dato.count_oficio4_08;
      datoExistente.total_count_eq_oficio4_08 += dato.count_eq_oficio4_08;
      datosAgrupadosMap.set(key, datoExistente);
    } else {
      datosAgrupadosMap.set(key, {
        descr_grupos_unidades: dato.descr_grupos_unidades,
        grupo_unidades: dato.grupo_unidades,
        total_count_oficio4_08: dato.count_oficio4_08,
        total_count_eq_oficio4_08: dato.count_eq_oficio4_08,
        calculo: 0,
      });
    }
  });

  return Array.from(datosAgrupadosMap.values());
}

type DataItem = [number, string, boolean];

export function obtenerPrimeraPosicionConTrue(arreglo: DataItem[]) {
  const valores: number[] = [];
  for (let index = 0; index < arreglo.length; index++) {
    if (arreglo[index][2] === true) {
      valores.push(arreglo[index][0]);
    }
  }
  return valores;
}
export function obtenerSegundaPosicionConTrue(arreglo: DataItem[]) {
  const valores: string[] = [];
  for (let index = 0; index < arreglo.length; index++) {
    if (arreglo[index][2] === true) {
      valores.push(arreglo[index][1]);
    }
  }
  return valores;
}

export function paginarArreglo(datos: any[], paginaActual: number, tamanoPagina: number) {
  const indiceInicial = (paginaActual - 1) * tamanoPagina;
  const indiceFinal = paginaActual * tamanoPagina;
  return datos.slice(indiceInicial, indiceFinal - 1);
}

//3006
export const group3006Graph = (array: Data3006GraphInterface[]) => {
  // Crear un conjunto para almacenar los valores únicos
  const conjuntoUnico = new Set<string>();

  // Iterar sobre los datos y agregar los valores únicos al conjunto
  array.forEach((dato) => {
    conjuntoUnico.add(dato.descr_grupo_principal);
  });

  // Convertir el conjunto de nuevo a un arreglo
  const salida: string[] = Array.from(conjuntoUnico);
  return salida;
};

export const generate3006Series = (array: Data3006GraphInterface[]) => {
  if (array.length === 0) {
    return [];
  }
  const grupos: { [grupo: number]: { [cuartil: string]: number } } = {};
  array.forEach((dato) => {
    const { grupo_principal, cuartil_automatizacion, frecuencia_cuartil_casen } = dato;
    if (!grupos[grupo_principal]) {
      grupos[grupo_principal] = {};
    }
    if (!grupos[grupo_principal][cuartil_automatizacion]) {
      grupos[grupo_principal][cuartil_automatizacion] = 0;
    }
    grupos[grupo_principal][cuartil_automatizacion] += frecuencia_cuartil_casen;
  });
  const objectGroups = {
    Q1: 0,
    Q2: 0,
    Q3: 0,
    Q4: 0,
  };
  // Crear la salida en el formato requerido
  const outputData = Object.keys(objectGroups).map((cuartil) => {
    return {
      name: cuartil.toLowerCase(),
      data: Object.values(grupos).map((grupo) => {
        if (grupo[cuartil] === undefined) {
          return 0;
        }

        return grupo[cuartil];
      }),
    };
  });

  return outputData;
};

export const filter3006GraphData = (
  dataGraph: Data3006GraphInterface[],
  desc_grupo_unidades: any[],
  desc_subgrupo_principal: any[]
) => {
  if (dataGraph === undefined) {
    return [];
  }
  let response: any[] = dataGraph.filter(
    (dato: Data3006GraphInterface) =>
      obtenerPrimeraPosicionConTrue(desc_grupo_unidades).includes(dato.grupo_unidades) &&
      obtenerPrimeraPosicionConTrue(desc_subgrupo_principal).includes(dato.subgrupo_principal)
  );
  return response;
};

export const get3006GraphOptions = (title: any, categories: any, titleUnder: any, series: any) => {
  const options = {
    chart: {
      type: "bar",
    },
    title: {
      text: title,
    },
    xAxis: {
      categories: categories,
    },
    yAxis: {
      min: 0,
      title: {
        text: titleUnder,
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
    series: series,
  };

  return options;
};

export const filter3006TableData = (
  dataTable: Data3006TableInterface[],
  desc_grupo_unidades: any[],
  desc_subgrupo_principal: any[]
) => {
  if (dataTable === undefined) {
    return [];
  }
  let response: Data3006TableInterface[] = dataTable.filter(
    (dato: Data3006TableInterface) =>
      obtenerPrimeraPosicionConTrue(desc_grupo_unidades).includes(dato.grupo_unidades) &&
      obtenerPrimeraPosicionConTrue(desc_subgrupo_principal).includes(dato.subgrupo_principal)
  );
  return response;
};
export const get3006TableGrouped = (datos: Data3006TableInterface[]) => {
  const averagesByGroup: {
    [grupo: string]: { descr_grupos_unidades: string; total_rii: number; count: number };
  } = {};

  datos.forEach((dato) => {
    const { descr_grupos_unidades, avg_prom_rii } = dato;
    if (!averagesByGroup[descr_grupos_unidades]) {
      averagesByGroup[descr_grupos_unidades] = {
        descr_grupos_unidades,
        total_rii: 0,
        count: 0,
      };
    }
    averagesByGroup[descr_grupos_unidades].total_rii += avg_prom_rii;
    averagesByGroup[descr_grupos_unidades].count += 1;
  });

  // Calcular el promedio para cada grupo
  Object.keys(averagesByGroup).forEach((grupo) => {
    averagesByGroup[grupo].total_rii /= averagesByGroup[grupo].count;
    // Redondear a 2 decimales
    averagesByGroup[grupo].total_rii = parseFloat(averagesByGroup[grupo].total_rii.toFixed(2));
  });

  // Convertir el objeto en un array
  const resultArray = Object.values(averagesByGroup).map(({ descr_grupos_unidades, total_rii }) => ({
    descr_grupos_unidades,
    avg_prom_rii: total_rii,
  }));

  return resultArray;
};

type FilterArray = (number | string | boolean)[][];

export const mapArrayToTrue = (array: FilterArray): FilterArray => {
  return array.map((item) => [item[0], item[1], true]);
};

export const mapArrayToFalse = (array: FilterArray): FilterArray => {
  return array.map((item) => [item[0], item[1], false]);
};
