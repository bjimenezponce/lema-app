"use client";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import { Data2001Interface } from "./LM2000Data";
interface DatosSalida {
  sumaCantidadOcupados: number;
  promedioTasaOcupados: number;
  calculo: number;
}
const LM2001table = ({ datos }: { datos: Data2001Interface[] }) => {
  let datosSalida: DatosSalida = {
    sumaCantidadOcupados: 0,
    promedioTasaOcupados: 0,
    calculo: 0,
  };

  let datosSalidaPorRegion: DatosSalida = {
    sumaCantidadOcupados: 0,
    promedioTasaOcupados: 0,
    calculo: 0,
  };

  const datosTotalPais = datos.filter((item) => item.region === "Total país");

  const trimestreMaximo = Math.max(...datosTotalPais.map((item) => item.id_trimestre));
  const trimestreActual = datosTotalPais.find((item) => item.id_trimestre === trimestreMaximo);
  const trimestreAnterior = datosTotalPais.find((item) => item.id_trimestre === trimestreMaximo - 1);

  if (trimestreActual) {
    const sumaCantidadOcupados: number = parseFloat(trimestreActual.suma_cantidad_ocupados);
    const promedioTasaOcupados: number = parseFloat(trimestreActual.promedio_tasa_ocupados);
    const valueperiodoanterior: number = trimestreAnterior ? parseFloat(trimestreAnterior.suma_cantidad_ocupados) : 0;

    const calculo =
      ((sumaCantidadOcupados - valueperiodoanterior) * 100) / (valueperiodoanterior !== 0 ? valueperiodoanterior : 1);

    datosSalida = {
      sumaCantidadOcupados,
      promedioTasaOcupados: parseFloat(promedioTasaOcupados.toFixed(0)),
      calculo: parseFloat((calculo * 100).toFixed(1)),
    };
  }
  const datosRegion = datos.filter((item) => item.region === "Región Metropolitana de Santiago");

  if (datosRegion.length > 0) {
    const trimestreMaximoRegion = Math.max(...datosRegion.map((item) => item.id_trimestre));
    const trimestreActualRegion = datosRegion.find((item) => item.id_trimestre === trimestreMaximoRegion);

    if (trimestreActualRegion) {
      const sumaCantidadOcupadosRegion = parseInt(trimestreActualRegion.suma_cantidad_ocupados);
      const promedioTasaOcupadosRegion = parseFloat(trimestreActualRegion.promedio_tasa_ocupados);
      const trimestreAnteriorRegion = datosRegion.find((item) => item.id_trimestre === trimestreMaximoRegion - 1);

      const valueperiodoanteriorRegion = trimestreAnteriorRegion
        ? parseInt(trimestreAnteriorRegion.suma_cantidad_ocupados)
        : 0;
      const calculoRegion: number =
        ((sumaCantidadOcupadosRegion - valueperiodoanteriorRegion) * 100) /
        (valueperiodoanteriorRegion !== 0 ? valueperiodoanteriorRegion : 1);

      datosSalidaPorRegion = {
        sumaCantidadOcupados: sumaCantidadOcupadosRegion,
        promedioTasaOcupados: parseFloat(promedioTasaOcupadosRegion.toFixed(0)),
        calculo: parseFloat((calculoRegion * 100).toFixed(1)),
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
                Estadisticas de ocupacion regional y nacional
              </Typography>
            </div>
          </div>
          <div className="table">
            <div className="row header">
              <div className="cell"></div>
              <div className="cell">Regional</div>
              <div className="cell">Nacional</div>
            </div>
            <div className="row">
              <div className="cell">Numero ocupados</div>
              <div className="cell">{datosSalidaPorRegion.sumaCantidadOcupados}</div>
              <div className="cell">{datosSalida.sumaCantidadOcupados}</div>
            </div>
            <div className="row">
              <div className="cell">Tasa Ocupacion</div>
              <div className="cell">{datosSalidaPorRegion.promedioTasaOcupados}%</div>
              <div className="cell">{datosSalida.promedioTasaOcupados}%</div>
            </div>
            <div className="row">
              <div className="cell">Crecimiento mensual ocupados</div>
              <div className="cell">{datosSalidaPorRegion.calculo}%</div>
              <div className="cell">{datosSalida.calculo}%</div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};
export default LM2001table;
