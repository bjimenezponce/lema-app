"use client";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";

export default function MarketStudyTitle() {
  return (
    <Card className="mx-3 mb-1 mt-5 border border-blue-gray-100 lg:mx-1">
      <CardBody>
        <div>
          <Typography variant="h6" color="blue-gray">
            Demanda actual
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}
