"use client";
import { groupData1000Table, obtenerSegundaPosicionConTrue, paginarArreglo } from "@/helpers/sharedFunctions";
import { useAppDispatch, useAppSelector } from "@/store/store";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  IconButton,
  Input,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { Data1000Interface } from "./TA1001Data";

export interface Data1000GroupTable {
  nombre_carrera: string;
  q_matriculados: number;
  q_matriculados_primer_agno: number;
  q_Titulados: number;
}

const TA1001TopMajorsTable = ({ datos }: { datos: Data1000Interface[] }) => {
  const dispatch = useAppDispatch();

  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  // Aplicar paginación a los datos filtrados y luego agruparlos
  const dataTable = paginarArreglo(groupData1000Table(datos), page, pageSize);

  //agrupo los datos a como los necesito en la tabla

  let currentPage = page;
  let totalPages = Math.ceil(groupData1000Table(datos).length / pageSize);

  let head: any[] = [];
  let rows: Data1000GroupTable[] = [];
  //genero los datos que insertare
  if (dataTable.length > 0) {
    head = dataTable.length > 0 ? Object.keys(dataTable[0]) : [];
    rows = dataTable;
  }
  head = ["Nombre carrera", "Total matriculados", "Total matriculados de primer año", "Total titulados"];

  const TABLE_HEAD = head;
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
    setPage(pageNumber);
  };

  const handlePreviousClick = () => {
    setPage(page - 1);
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

  const title = "Carreras de mayor matrícula";

  return (
    <>
      <Card className="h-200 w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                {title}
              </Typography>
              {/* <Typography color="gray" className="mt-1 font-normal">
                These are details about the last transactions
              </Typography> */}
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head, index) => {
                  const isFirst = index === 0;
                  const classes = isFirst
                    ? "font-normal leading-none opacity-70"
                    : "font-normal leading-none opacity-70 w-24";
                  return (
                    <th key={head} className="border-y  border-blue-gray-100 bg-blue-gray-50/50 p-4">
                      <Typography variant="small" color="blue-gray" className={classes}>
                        {head}
                      </Typography>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ nombre_carrera, q_matriculados, q_matriculados_primer_agno, q_Titulados }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={index}>
                    <td className={classes}>
                      <div className="flex items-center w-48 gap-2">
                        {/* <Avatar
                            src={img}
                            alt={name}
                            size="md"
                            className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                          /> */}
                        <Typography variant="small" color="blue-gray" className="font-bold">
                          {nombre_carrera}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal w-32">
                        {q_matriculados}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal w-32">
                        {q_matriculados_primer_agno}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal w-32">
                        {q_Titulados}
                      </Typography>
                    </td>
                  </tr>
                );
              })}
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
};
export default TA1001TopMajorsTable;
