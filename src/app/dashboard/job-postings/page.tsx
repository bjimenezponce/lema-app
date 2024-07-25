import React from "react";

import MarketStudyFilters from "@/components/dashboard/market-study/MarketStudyFilters";
import MarketStudyTitle from "@/components/dashboard/market-study/MarketStudyTitle";
import MarketStudyMenu from "@/components/dashboard/market-study/MarketStudyMenu";
import MarketStudyTotalObservedData from "@/components/dashboard/market-study/MarketStudyTotalObservedData";
import JPFilter from "@/components/dashboard/job-postings/JPFilter";
import JP4000Data from "@/components/dashboard/job-postings/JP4000Data";

export default async function JobPosting() {
  return (
    <>
      <JPFilter />
      {/* <div className="m-2 grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-2"> */}
      <JP4000Data />
      {/* </div> */}
    </>
  );
}
