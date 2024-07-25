import React from "react";

import TechnologicalAnalysisFilter from "@/components/dashboard/technological-analysis/TechnologicalAnalysisFilter";
import TechnologicalAnalysisTabs from "@/components/dashboard/technological-analysis/TechnologicalAnalysisTabs";

export default function TechnologicalAnalysis() {
  return (
    <>
      <TechnologicalAnalysisFilter />
      {/* <Card className="mx-3 mb-1 mt-5 border border-blue-gray-100 lg:mx-1">
        <CardBody>
          <div>
            <Typography variant="h6" color="blue-gray">
              Demanda actual
            </Typography>
          </div>
        </CardBody>
      </Card> */}

      <div className="m-2 grid gap-x-6 gap-y-10 xl:grid">
        <TechnologicalAnalysisTabs />
      </div>
    </>
  );
}
