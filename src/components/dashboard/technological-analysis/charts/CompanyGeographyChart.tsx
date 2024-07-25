import ChileGeographyChart from "@/components/Highcharts/ChileGeographyChart";
import ChileGeographyTable from "@/components/tables/ChileGeographyTable";
import React from "react";
export default function CompanyGeographyChart() {
  return (
    <div className="">
      <h1>Chile Chart</h1>
      <div className="grid grid-cols-2 h-full w-full">
        <ChileGeographyTable />
        <ChileGeographyChart data={[]} />
      </div>
    </div>
  );
}
