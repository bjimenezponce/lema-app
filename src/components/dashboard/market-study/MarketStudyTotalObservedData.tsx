"use client";
import React from "react";
import { mayorDemanda } from "@/mock";
import { Card, CardBody, Typography } from "@material-tailwind/react";
export default function MarketStudyTotalObservedData() {
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
              RANKING MAYOR DEMANDA
            </Typography>

            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["", ""].map((el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 px-5 py-3 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {mayorDemanda.map(({ nombre, total }, key) => {
                  const className = `py-3 px-5 ${
                    key === mayorDemanda.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={nombre}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {nombre}
                            </Typography>
                          </div>
                        </div>
                      </td>

                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {total}
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
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
              GRÁFICO RANKING MAYOR DEMANDA
            </Typography>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
