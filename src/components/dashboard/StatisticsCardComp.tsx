"use client";
import React from "react";
import { statisticsCardsData } from "@/mock";
import { StatisticsCard, StatisticsCardInterface } from "@/widgets/cards";
import { Typography } from "@material-tailwind/react";

export default function StatisticsCardComponent() {
  return (
    <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
      {statisticsCardsData.map(
        ({ icon, title, footer, ...rest }: StatisticsCardInterface) => (
          <StatisticsCard
            key={title}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            })}
            footer={
              <Typography className="font-normal text-blue-gray-600">
                <strong className={footer.color}>{footer.value}</strong>
                &nbsp;{footer.label}
              </Typography>
            }
          />
        )
      )}
    </div>
  );
}
