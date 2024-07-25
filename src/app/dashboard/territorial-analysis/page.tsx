import TA1001Data from "@/components/dashboard/territorial-analysis/TA1001Data";
import TAFilter from "@/components/dashboard/territorial-analysis/TAFilter";
import React from "react";

export default function TerritorialAnalysis() {
  return (
    <>
      {" "}
      <TAFilter />
      <TA1001Data />
    </>
  );
}
