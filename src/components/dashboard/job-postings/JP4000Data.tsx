"use client";
import { useAppSelector } from "@/store/store";
import React from "react";
import JP4000Card from "./JP4004Card";
import JP4000JobsByWorkAreaGraph from "./JP4000JobsByWorkAreaGraph";
import JP4000SoftwareOnDemandGraph from "./JP4000SoftwareOnDemandGraph";
import JP4000CompaniesHiringGraph from "./JP4000CompaniesHiringGraph";
import { obtenerSegundaPosicionConTrue } from "@/helpers/sharedFunctions";

export interface Data4000Interface {
  region: string;
  software_job: string;
  job_area: string;
  job_company_completed: string;
}

export default function JP4000Data() {
  let data4000: Data4000Interface[] = useAppSelector((state) => state.incomeEmployment.m4000.data);
  let m4000Filters = useAppSelector((state) => state.filters.m4000);
  const { jobArea, region } = m4000Filters;
  console.log(data4000.length);
  const datosFiltrados = data4000.filter(
    (dato: Data4000Interface) =>
      obtenerSegundaPosicionConTrue(jobArea.data).includes(dato.job_area) &&
      obtenerSegundaPosicionConTrue(region.data).includes(dato.region)
  );
  console.log(datosFiltrados.length);
  return (
    <>
      <div className="mb-1 grid gap-x-6 gap-y-10 grid-cols-4">
        <div>
          <JP4000Card datos={datosFiltrados} />
        </div>
        <div className="col-span-3">
          <JP4000JobsByWorkAreaGraph datos={datosFiltrados} />
        </div>
      </div>
      <div className="mb-1 grid gap-x-6 gap-y-10 grid-cols-2">
        <div>
          <JP4000SoftwareOnDemandGraph datos={datosFiltrados} />
        </div>
        <div>
          <JP4000CompaniesHiringGraph datos={datosFiltrados} />
        </div>
      </div>
    </>
  );
}
