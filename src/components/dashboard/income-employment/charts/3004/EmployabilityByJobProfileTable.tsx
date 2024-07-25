"use client";
import React, { useState } from "react";
import { tipoInnovacionOptions, tipoInnovacionSeries } from "@/mock/analisis-tecnologico/charts/tipo-innovacion";
import ReactApexChart from "react-apexcharts";
import EmployabilityByJobProfileFilter from "./EmployabilityByJobProfileFilter";
import { lineChartSeries } from "@/mock/highcharts/linechart.mock";
import LineChart from "@/components/Highcharts/LineChart";
import { TABLE_HEAD, TABLE_ROWS } from "@/mock/analisis-tecnologico/charts/chile-geography";
import { MagnifyingGlassIcon, ArrowDownTrayIcon, PencilIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Avatar,
  Chip,
  IconButton,
  CardFooter,
  Tooltip,
  Input,
} from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import {
  agruparDatos3004,
  obtenerPrimeraPosicionConTrue,
  obtenerSegundaPosicionConTrue,
  paginarArreglo,
} from "@/helpers/sharedFunctions";
import { addRemoveFilter3004Page } from "@/store/slices/filtersSlice";

export interface Data3004Interface {
  descr_grupos_unidades: string;
  grupo_unidades: number;
  descr_grupo_principal: string;
  descr_subgrupo_principal: string;
  region: number;
  count_oficio4_08: number;
  count_eq_oficio4_08: number;
}

export interface Data3004GroupInterface {
  descr_grupos_unidades: string;
  grupo_unidades: number;
  total_count_oficio4_08: number;
  total_count_eq_oficio4_08: number;
  calculo: number;
}

export default function EmployabilityByJobProfileTable() {
  const dispatch = useAppDispatch();
  let m3004 = useAppSelector((state) => state.incomeEmployment.m3004);
  let m3004Filters = useAppSelector((state) => state.filters.m3000.m3004);
  const { descr_grupo_principal, descr_subgrupo_principal, glosa_region, page, pageSize } = m3004Filters;

  //realizo los filtros a la tabla
  // Aplicar filtros a los datos
  const datosFiltrados = m3004.data.filter(
    (dato: Data3004Interface) =>
      obtenerSegundaPosicionConTrue(descr_grupo_principal.data).includes(dato.descr_grupo_principal) &&
      obtenerSegundaPosicionConTrue(descr_subgrupo_principal.data).includes(dato.descr_subgrupo_principal) &&
      obtenerPrimeraPosicionConTrue(glosa_region.data).includes(dato.region)
  );

  // Aplicar paginación a los datos filtrados y luego agruparlos
  const dataTable = paginarArreglo(agruparDatos3004(datosFiltrados), page, pageSize);

  //agrupo los datos a como los necesito en la tabla

  let currentPage = page;
  let totalPages = Math.ceil(agruparDatos3004(datosFiltrados).length / pageSize);

  let head: any[] = [];
  let rows: Data3004GroupInterface[] = [];
  //genero los datos que insertare
  if (dataTable.length > 0) {
    head = dataTable.length > 0 ? Object.keys(dataTable[0]) : [];
    rows = dataTable;
  }

  const title = "EmployabilityByJobProfileTable";
  const TABLE_HEAD = ["Ocupaciones (4 dígitos)", "Ocupados en 2022", "Ocupados 2017", "Crecimiento porcentual"];
  const TABLE_ROWS = rows;

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <IconButton
          key={i}
          variant={i === currentPage ? "outlined" : "text"}
          size="sm"
          onClick={() => handlePageClick(i)}
        >
          {i}
        </IconButton>
      );
    }
    return pageNumbers;
  };
  const handlePageClick = (pageNumber: number) => {
    // Aquí puedes despachar una acción de Redux para actualizar la página actual
    dispatch(addRemoveFilter3004Page(pageNumber));
  };

  const handlePreviousClick = () => {
    // Aquí puedes despachar una acción de Redux para ir a la página anterior
    dispatch(addRemoveFilter3004Page(page - 1));
  };

  const handleNextClick = () => {
    // Aquí puedes despachar una acción de Redux para ir a la página siguiente
    dispatch(addRemoveFilter3004Page(page + 1));
  };

  return (
    <>
      <EmployabilityByJobProfileFilter />
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                Empleabilidad perfil laboral
              </Typography>
              {/* <Typography color="gray" className="mt-1 font-normal">
                These are details about the last transactions
              </Typography> */}
            </div>
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <div className="w-full md:w-72">
                <Input label="Search" icon={<MagnifyingGlassIcon className="h-5 w-5" />} crossOrigin={undefined} />
              </div>
              <Button className="flex items-center gap-3" size="sm">
                <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Download
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(
                (
                  { descr_grupos_unidades, grupo_unidades, total_count_oficio4_08, total_count_eq_oficio4_08, calculo },
                  index
                ) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={index}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          {/* <Avatar
                            src={img}
                            alt={name}
                            size="md"
                            className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                          /> */}
                          <Typography variant="small" color="blue-gray" className="font-bold">
                            {descr_grupos_unidades}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {total_count_oficio4_08}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {total_count_eq_oficio4_08}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {calculo}
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Button variant="outlined" size="sm" onClick={() => handlePreviousClick()}>
            Previous
          </Button>
          <div className="flex items-center gap-2">{renderPageNumbers()}</div>
          <Button variant="outlined" size="sm" onClick={() => handleNextClick()}>
            Next
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
