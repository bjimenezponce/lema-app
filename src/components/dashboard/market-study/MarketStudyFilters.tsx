"use client";
import { Card, CardBody, Select, Typography, Option } from "@material-tailwind/react";

export default function MarketStudyFilters() {
  return (
    <Card className="mx-3 mb-1 mt-5 border border-blue-gray-100 lg:mx-1">
      <CardBody>
        {/* <div className="gird-cols-1 mb-1 grid gap-12 lg:grid-cols-2 xl:grid-cols-3">
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              Filtros
            </Typography>
          </div>
        </div> */}

        <div className="mb-1 grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-7">
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="h6"
              color="blue-gray"
              className="block text-xs font-semibold uppercase text-blue-gray-500"
            >
              Sector económico
            </Typography>
            <Select label="Seleccionar">
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
              <Option>Material Tailwind Angular</Option>
              <Option>Material Tailwind Svelte</Option>
            </Select>
          </div>

          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="h6"
              color="blue-gray"
              className="block text-xs font-semibold uppercase text-blue-gray-500"
            >
              Cargo
            </Typography>
            <Select label="Seleccionar">
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
              <Option>Material Tailwind Angular</Option>
              <Option>Material Tailwind Svelte</Option>
            </Select>
          </div>

          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="h6"
              color="blue-gray"
              className="block text-xs font-semibold uppercase text-blue-gray-500"
            >
              Habilidad
            </Typography>
            <Select label="Seleccionar">
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
              <Option>Material Tailwind Angular</Option>
              <Option>Material Tailwind Svelte</Option>
            </Select>
          </div>

          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="h6"
              color="blue-gray"
              className="block text-xs font-semibold uppercase text-blue-gray-500"
            >
              Locación
            </Typography>
            <Select label="Seleccionar">
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
              <Option>Material Tailwind Angular</Option>
              <Option>Material Tailwind Svelte</Option>
            </Select>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
