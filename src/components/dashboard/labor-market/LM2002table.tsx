"use client";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import { Data2001Interface } from "./LM2000Data";

interface DatosSalidaPaisInterface {
  tasaDesocupacion: number;
  tasaParticipacion: number;
  tasaInformal: number;
}

interface SubDatosSalidaRegionalInterface {
  promedio_tasa_desocupacion: number;
  promedio_tasa_participacion: number;
  promedio_tasa_informalidad: number;
}

interface DatosSalidaRegionalInterface {
  trimestreActualHombres: SubDatosSalidaRegionalInterface;
  trimestreActualMujeres: SubDatosSalidaRegionalInterface;
  trimestreActualAmbos: SubDatosSalidaRegionalInterface;
}

const LM2002table = ({ datos }: { datos: Data2001Interface[] }) => {
  let datosSalida: DatosSalidaPaisInterface = {
    tasaDesocupacion: 0,
    tasaParticipacion: 0,
    tasaInformal: 0,
  };

  let datosSalidaRegional: DatosSalidaRegionalInterface = {
    trimestreActualHombres: {
      promedio_tasa_desocupacion: 0,
      promedio_tasa_participacion: 0,
      promedio_tasa_informalidad: 0,
    },
    trimestreActualMujeres: {
      promedio_tasa_desocupacion: 0,
      promedio_tasa_participacion: 0,
      promedio_tasa_informalidad: 0,
    },
    trimestreActualAmbos: {
      promedio_tasa_desocupacion: 0,
      promedio_tasa_participacion: 0,
      promedio_tasa_informalidad: 0,
    },
  };

  const datosTotalPais = datos.filter((item) => item.region === "Total país");
  const trimestreMaximo = Math.max(...datosTotalPais.map((item) => item.id_trimestre));
  const trimestreActual = datosTotalPais.find((item) => item.id_trimestre === trimestreMaximo);

  if (trimestreActual) {
    const tasaDesocupacion: number = parseFloat(trimestreActual.promedio_tasa_desocupacion);
    const tasaParticipacion: number = parseFloat(trimestreActual.promedio_tasa_participacion);
    const tasaInformal: number = parseFloat(trimestreActual.promedio_tasa_informalidad);

    datosSalida = {
      tasaDesocupacion: tasaDesocupacion,
      tasaParticipacion: tasaParticipacion,
      tasaInformal: tasaInformal,
    };
  }
  const datosRegion = datos.filter((item) => item.region === "Región Metropolitana de Santiago");

  if (datosRegion.length > 0) {
    const trimestreMaximoRegion = Math.max(...datosRegion.map((item) => item.id_trimestre));
    const trimestreActualRegion = datosRegion.filter((item) => item.id_trimestre === trimestreMaximoRegion);
    const trimestreActualHombres = trimestreActualRegion.find((item) => item.sexo === "Hombres");
    const trimestreActualMujeres = trimestreActualRegion.find((item) => item.sexo === "Mujeres");
    const trimestreActualAmbos = trimestreActualRegion.find((item) => item.sexo === "Ambos sexos");

    if (trimestreActualHombres && trimestreActualMujeres && trimestreActualAmbos) {
      datosSalidaRegional = {
        trimestreActualHombres: {
          promedio_tasa_desocupacion: parseFloat(trimestreActualHombres.promedio_tasa_desocupacion),
          promedio_tasa_participacion: parseFloat(trimestreActualHombres?.promedio_tasa_participacion),
          promedio_tasa_informalidad: parseFloat(trimestreActualHombres?.promedio_tasa_informalidad),
        },
        trimestreActualMujeres: {
          promedio_tasa_desocupacion: parseFloat(trimestreActualMujeres?.promedio_tasa_desocupacion),
          promedio_tasa_participacion: parseFloat(trimestreActualMujeres?.promedio_tasa_participacion),
          promedio_tasa_informalidad: parseFloat(trimestreActualMujeres?.promedio_tasa_informalidad),
        },
        trimestreActualAmbos: {
          promedio_tasa_desocupacion: parseFloat(trimestreActualAmbos?.promedio_tasa_desocupacion),
          promedio_tasa_participacion: parseFloat(trimestreActualAmbos?.promedio_tasa_participacion),
          promedio_tasa_informalidad: parseFloat(trimestreActualAmbos?.promedio_tasa_informalidad),
        },
      };
    }
  }

  return (
    <>
      <Card className="mx-3 mb-1 mt-5 border border-blue-gray-100 lg:mx-1">
        <CardBody>
          <div className="gird-cols-1 mb-1 grid gap-12 lg:grid-cols-1 xl:grid-cols-1">
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Tasas de empleo regional y nacional
              </Typography>
            </div>
          </div>
          <table className="table2">
            <tr className="row2 header2">
              <td className="nocolor"></td>
              <td colSpan={3}>Regional</td>
              <td rowSpan={2}>Nacional</td>
            </tr>
            <tr className="row2">
              <td className="nocolor"></td>
              <td>Mujeres</td>
              <td>Hombres</td>
              <td>Total</td>
            </tr>
            <tr className="row2">
              <td>Tasa de desocupacion</td>
              <td>{datosSalidaRegional.trimestreActualMujeres.promedio_tasa_desocupacion}%</td>
              <td>{datosSalidaRegional.trimestreActualHombres.promedio_tasa_desocupacion}%</td>
              <td>{datosSalidaRegional.trimestreActualAmbos.promedio_tasa_desocupacion}%</td>
              <td>{datosSalida.tasaDesocupacion}%</td>
            </tr>
            <tr className="row2">
              <td>Tasa de participacion</td>
              <td>{datosSalidaRegional.trimestreActualMujeres.promedio_tasa_participacion}%</td>
              <td>{datosSalidaRegional.trimestreActualHombres.promedio_tasa_participacion}%</td>
              <td>{datosSalidaRegional.trimestreActualAmbos.promedio_tasa_participacion}%</td>
              <td>{datosSalida.tasaParticipacion}%</td>
            </tr>
            <tr className="row2">
              <td>Tasa de ocupacion informal</td>
              <td>{datosSalidaRegional.trimestreActualMujeres.promedio_tasa_informalidad}%</td>
              <td>{datosSalidaRegional.trimestreActualHombres.promedio_tasa_informalidad}%</td>
              <td>{datosSalidaRegional.trimestreActualAmbos.promedio_tasa_informalidad}%</td>
              <td>{datosSalida.tasaInformal}%</td>
            </tr>
          </table>
        </CardBody>
      </Card>
    </>
  );
};
export default LM2002table;
