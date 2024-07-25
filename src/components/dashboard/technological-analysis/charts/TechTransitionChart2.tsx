import React from "react";
import DependencyWheelChart from "@/components/Highcharts/DependencyWheelChart";

const TechTransitionChart2 = () => {
  const data: Array<[string, string, number]> = [
    ["A", "B", 1],
    ["B", "C", 2],
    ["C", "A", 3],
  ];

  return (
    <div>
      <h1>Dependency Wheel Chart Example</h1>
      <DependencyWheelChart data={data} />
    </div>
  );
};

export default TechTransitionChart2;
