import LM2000Data from "@/components/dashboard/labor-market/LM2000Data";
import LMFilter from "@/components/dashboard/labor-market/LMFilter";
import React from "react";

export default async function LaborMarket() {
  return (
    <>
      <LMFilter />
      {/* <div className="m-2 grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-2"> */}
      <LM2000Data />
      {/* </div> */}
    </>
  );
}
