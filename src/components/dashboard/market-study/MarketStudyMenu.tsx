"use client";
import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

export default function MarketStudyMenu() {
  return (
    <>
      <Card className="mx-3 mb-1 mt-5 border border-blue-gray-100 lg:mx-1">
        <CardBody>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="block text-xs font-semibold uppercase text-blue-gray-500"
            >
              TOTAL DATOS OBSERVADOS
            </Typography>
          </div>
        </CardBody>
      </Card>
      <Card className="mx-3 mb-1 mt-5 border border-blue-gray-100 lg:mx-1">
        <CardBody>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="block text-xs font-semibold uppercase text-blue-gray-500"
            >
              OFERTAS ACTIVAS
            </Typography>
          </div>
        </CardBody>
      </Card>

      <Card className="mx-3 mb-1 mt-5 border border-blue-gray-100 lg:mx-1">
        <CardBody>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="block text-xs font-semibold uppercase text-blue-gray-500"
            >
              EMPRESAS OFERENTES
            </Typography>
          </div>
        </CardBody>
      </Card>
      <Card className="mx-3 mb-1 mt-5 border border-blue-gray-100 lg:mx-1">
        <CardBody>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="block text-xs font-semibold uppercase text-blue-gray-500"
            >
              CARGOS OBSERVADOS
            </Typography>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
