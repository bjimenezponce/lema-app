"use client";
import { useAppSelector } from "@/store/store";
import React from "react";
import LM2001table from "./LM2001table";
import LM2002table from "./LM2002table";
import LM2101graph from "./LM2101graph";
import LM2102graph from "./LM2102graph";
import LM2103graph from "./LM2103graph";
import LM2104graph from "./LM2104graph";
import { obtenerSegundaPosicionConTrue } from "@/helpers/sharedFunctions";

export interface Data2001Interface {
  id_trimestre: number;
  region: string;
  sexo: string;
  suma_cantidad_ocupados: string;
  promedio_tasa_ocupados: string;
  promedio_tasa_desocupacion: string;
  promedio_tasa_participacion: string;
  promedio_tasa_informalidad: string;
}

export interface LemaEneOcuRamaInterface {
  id: number;
  trimestre: string;
  region: string;
  rama_economica: string;
  sexo: string;
  value: string;
}

export interface LemaEneOcuGrupoInterface {
  id: number;
  trimestre: string;
  region: string;
  grupo_ocupacional: string;
  sexo: string;
  value: string;
}

export interface Data2100Interface {
  lemaEneOcuRama: LemaEneOcuRamaInterface[];
  lemaEneOcuGrupo: LemaEneOcuGrupoInterface[];
}

export interface LemaEsiYMedianoOcuInterface {
  anio: number;
  region: string;
  sexo: string;
  rama_economica: string;
  value: string;
}

export interface LemaEsiYMedioOcuInterface {
  anio: number;
  region: string;
  sexo: string;
  rama_economica: string;
  value: string;
}

export interface Data2103Interface {
  lemaEsiYMedianoOcu: LemaEsiYMedianoOcuInterface[];
  lemaEsiYMedioOcu: LemaEsiYMedioOcuInterface[];
}

export default function LM2000Data() {
  let data2001: Data2001Interface[] = useAppSelector((state) => state.incomeEmployment.m2001.data);
  let data2100: Data2100Interface = useAppSelector((state) => state.incomeEmployment.m2100.data);
  let data2103: Data2103Interface = useAppSelector((state) => state.incomeEmployment.m2103.data);
  let m2000Filters = useAppSelector((state) => state.filters.m2000);
  const { grupo, rama, region, sexo, trimestre } = m2000Filters;

  const { lemaEneOcuGrupo, lemaEneOcuRama } = data2100;
  const { lemaEsiYMedianoOcu, lemaEsiYMedioOcu } = data2103;

  // lemaEneOcuRama
  let maximoIdLemaEneOcuRama = -Infinity; // Inicializar con un valor muy pequeño
  lemaEneOcuRama.forEach((item) => {
    if (item.id > maximoIdLemaEneOcuRama) {
      maximoIdLemaEneOcuRama = item.id;
    }
  });
  // const lemaEneOcuRamaFiltered = lemaEneOcuRama.filter(
  //   (data) =>
  //     data.rama_economica === "Información y comunicaciones" &&
  //     data.region === "Región de Valparaíso" &&
  //     data.sexo === "Ambos sexos"
  // );

  const lemaEneOcuRamaFiltered = lemaEneOcuRama.filter(
    (dato: LemaEneOcuRamaInterface) =>
      obtenerSegundaPosicionConTrue(rama.data).includes(dato.rama_economica) &&
      obtenerSegundaPosicionConTrue(region.data).includes(dato.region) &&
      obtenerSegundaPosicionConTrue(sexo.data).includes(dato.sexo)
  );

  // data.id === maximoIdLemaEneOcuRama

  // lemaEneOcuGrupo
  let maximoIdLemaEneOcuGrupo = -Infinity; // Inicializar con un valor muy pequeño
  lemaEneOcuGrupo.forEach((item) => {
    if (item.id > maximoIdLemaEneOcuGrupo) {
      maximoIdLemaEneOcuGrupo = item.id;
    }
  });
  // const trimestreMaximoEneOcuGrupo = Math.max(...lemaEneOcuGrupo.map((item) => item.id));
  // const lemaEneOcuGrupoFiltered = lemaEneOcuGrupo.filter(
  //   (data) =>
  //     data.grupo_ocupacional === "Profesionales, científicos e intelectuales" &&
  //     data.region === "Región del Libertador Gral. Bernardo O'Higgins" &&
  //     data.sexo === "Ambos sexos"
  //   // data.id === maximoIdLemaEneOcuGrupo
  // );
  const lemaEneOcuGrupoFiltered = lemaEneOcuGrupo.filter(
    (dato: LemaEneOcuGrupoInterface) =>
      obtenerSegundaPosicionConTrue(grupo.data).includes(dato.grupo_ocupacional) &&
      obtenerSegundaPosicionConTrue(region.data).includes(dato.region) &&
      obtenerSegundaPosicionConTrue(sexo.data).includes(dato.sexo)
  );

  // // lemaEsiYMedianoOcu
  let maximoIdLemaEsiYMedianoOcu = -Infinity;
  lemaEsiYMedianoOcu.forEach((item) => {
    if (item.anio > maximoIdLemaEsiYMedianoOcu) {
      maximoIdLemaEsiYMedianoOcu = item.anio;
    }
  });
  // const lemaEsiYMedianoOcuFiltered = lemaEsiYMedianoOcu.filter(
  //   (data) =>
  //     data.rama_economica === "Información y comunicaciones" &&
  //     data.region === "Región del Libertador Gral. Bernardo O'Higgins" &&
  //     data.sexo === "Ambos sexos"
  //   // data.anio === maximoIdLemaEsiYMedianoOcu
  // );
  const lemaEsiYMedianoOcuFiltered = lemaEsiYMedianoOcu.filter(
    (dato: LemaEsiYMedianoOcuInterface) =>
      obtenerSegundaPosicionConTrue(rama.data).includes(dato.rama_economica) &&
      obtenerSegundaPosicionConTrue(region.data).includes(dato.region) &&
      obtenerSegundaPosicionConTrue(sexo.data).includes(dato.sexo)
  );

  // // lemaEsiYMedioOcu
  let maximoIdLemaEsiYMedioOcu = -Infinity;
  lemaEsiYMedioOcu.forEach((item) => {
    if (item.anio > maximoIdLemaEsiYMedioOcu) {
      maximoIdLemaEsiYMedioOcu = item.anio;
    }
  });
  // const lemaEsiYMedioOcuFiltered = lemaEsiYMedioOcu.filter(
  //   (data) =>
  //     data.rama_economica === "Información y comunicaciones" &&
  //     data.region === "Región del Libertador Gral. Bernardo O'Higgins" &&
  //     data.sexo === "Ambos sexos"
  //   // data.anio === maximoIdLemaEsiYMedioOcu
  // );
  const lemaEsiYMedioOcuFiltered = lemaEsiYMedioOcu.filter(
    (dato: LemaEsiYMedioOcuInterface) =>
      obtenerSegundaPosicionConTrue(rama.data).includes(dato.rama_economica) &&
      obtenerSegundaPosicionConTrue(region.data).includes(dato.region) &&
      obtenerSegundaPosicionConTrue(sexo.data).includes(dato.sexo)
  );
  return (
    <>
      <div className="mb-1 grid gap-x-6 gap-y-10 grid-cols-2">
        <div>
          <LM2001table datos={data2001} />
        </div>
        <div>
          <LM2002table datos={data2001} />
        </div>
      </div>
      <div className="mb-1 grid gap-x-6 gap-y-10">
        <LM2101graph datos={lemaEneOcuRamaFiltered} />
      </div>
      <div>
        <LM2102graph datos={lemaEneOcuGrupoFiltered} />
      </div>
      <div>
        <LM2103graph datos={lemaEsiYMedianoOcuFiltered} />
      </div>
      <div>
        <LM2104graph datos={lemaEsiYMedioOcuFiltered} />
      </div>
    </>
  );
}
