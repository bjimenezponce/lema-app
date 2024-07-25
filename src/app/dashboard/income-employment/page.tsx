import IncomeEmploymentTabs from "@/components/dashboard/income-employment/IncomeEmploymentTabs";
import React from "react";

export default function IncomeEmployment() {
  return (
    <>
      <div className="m-2 grid gap-x-6 gap-y-10 xl:grid">
        <IncomeEmploymentTabs />
      </div>
    </>
  );
}
