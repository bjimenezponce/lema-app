"use client";
import React from "react";
import { statisticsChartsData } from "@/mock";
import { Typography } from "@material-tailwind/react";
import { StatisticsChart } from "@/widgets/charts";
import { ClockIcon } from "@heroicons/react/20/solid";

export default function StatisticsChartComponent() {
  return (
    <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
      {statisticsChartsData.map((props) => (
        <StatisticsChart
          key={props.title}
          {...props}
          footer={
            <Typography
              variant="small"
              className="flex items-center font-normal text-blue-gray-600"
            >
              <ClockIcon
                strokeWidth={2}
                className="h-4 w-4 text-blue-gray-400"
              />
              &nbsp;{props.footer}
            </Typography>
          }
        />
      ))}
    </div>
  );
}
