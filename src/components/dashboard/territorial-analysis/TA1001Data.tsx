"use client";
import TA1001Cards from "@/components/dashboard/territorial-analysis/TA1001Cards";
import TA1001MostGraduateSectorGraph from "@/components/dashboard/territorial-analysis/TA1001MostGraduateSectorGraph";
import TA1001ScatterPlotGraph from "@/components/dashboard/territorial-analysis/TA1001ScatterPlotGraph";
import TA1001StackedLineGraph from "@/components/dashboard/territorial-analysis/TA1001StackedLineGraph";
import TA1001TopMajorsTable from "@/components/dashboard/territorial-analysis/TA1001TopMajorsTable";
import TA1001TotalGraduateCard from "@/components/dashboard/territorial-analysis/TA1001TotalGraduateCard";
import { obtenerSegundaPosicionConTrue } from "@/helpers/sharedFunctions";
import { useAppSelector } from "@/store/store";
import FiltersGridCheckBox from "@/widgets/dropbox/filtersGridCheckBox";
import React from "react";

export interface Data1000Interface {
  agno: number;
  sexo: string;
  cinef13_subarea: string;
  sum_matriculados_programa: string;
  sum_matriculados_primer_agno: string;
  sum_titulados_programa: string;
  nombre_sede: string;
  cod_carrera: string;
  acreditacion_carrera: string;
  clasif_ies_3: string;
  nombre_ies: string;
  area_carrera_generica: string;
}

export default function TA1001Data() {
  let data1000: Data1000Interface[] = useAppSelector((state) => state.incomeEmployment.m1000.data);
  let m1000Filters = useAppSelector((state) => state.filters.m1000);
  const { acrCarrera, areaCarrera, clasIes, nomIes, sexo, agno } = m1000Filters;

  const datosFiltrados = data1000.filter(
    (dato: Data1000Interface) =>
      obtenerSegundaPosicionConTrue(acrCarrera.data).includes(dato.acreditacion_carrera) &&
      obtenerSegundaPosicionConTrue(areaCarrera.data).includes(dato.area_carrera_generica) &&
      obtenerSegundaPosicionConTrue(clasIes.data).includes(dato.clasif_ies_3) &&
      obtenerSegundaPosicionConTrue(nomIes.data).includes(dato.nombre_ies) &&
      obtenerSegundaPosicionConTrue(agno.data).includes(dato.agno) &&
      //solucionar agno
      obtenerSegundaPosicionConTrue(sexo.data).includes(dato.sexo)
  );

  const agnoMostGraduated = [["2", 2022, true]];
  const datosFiltradosMostGraduate = data1000.filter(
    (dato: Data1000Interface) =>
      obtenerSegundaPosicionConTrue(acrCarrera.data).includes(dato.acreditacion_carrera) &&
      obtenerSegundaPosicionConTrue(areaCarrera.data).includes(dato.area_carrera_generica) &&
      obtenerSegundaPosicionConTrue(clasIes.data).includes(dato.clasif_ies_3) &&
      obtenerSegundaPosicionConTrue(nomIes.data).includes(dato.nombre_ies) &&
      obtenerSegundaPosicionConTrue(agnoMostGraduated).includes(dato.agno) &&
      //solucionar agno
      obtenerSegundaPosicionConTrue(sexo.data).includes(dato.sexo)
  );
  return (
    <div className="m-2 grid gap-x-6 gap-y-10 xl:grid">
      <TA1001StackedLineGraph datos={datosFiltrados} />
      <TA1001Cards datos={datosFiltrados} />
      <div className="mb-1 grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-2 h-20">
        <div>
          <TA1001ScatterPlotGraph datos={datosFiltrados} />
          <FiltersGridCheckBox />
          <TA1001MostGraduateSectorGraph datos={datosFiltradosMostGraduate} />
        </div>
        <div>
          <TA1001TopMajorsTable datos={datosFiltrados} />
          <TA1001TotalGraduateCard datos={datosFiltrados} />
        </div>
      </div>
    </div>
  );
}
