import { NextPage } from "next/types";
import React from "react";
import StatisticsCardComponent from "@/components//dashboard/StatisticsCardComp";
import StatisticsChartComponent from "@/components//dashboard/StatisticsChartComp";
import ProjectCardComponent from "@/components//dashboard/ProjectCardComp";
import OrderOverviewComponent from "@/components//dashboard/OrdersOverviewComp";

const TecnologicalAnalisis: NextPage = async () => {
  return (
    <div className="mt-12">
      <div>
        <StatisticsCardComponent />
      </div>
      <div>
        <StatisticsChartComponent />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="overflow-hidden xl:col-span-2 ">
          <ProjectCardComponent />
        </div>
        <OrderOverviewComponent />
      </div>
    </div>
  );
};

export default TecnologicalAnalisis;
