"use client";
import CareerAffinityWithCurrentOccupationChart from "./CareerAffinityWithCurrentOccupationChart";
import CareerAffinityWithCurrentOccupationFilter from "./CareerAffinityWithCurrentOccupationFilter";

const CareerAffinityWithCurrentOccupation = () => {
  return (
    <div>
      <CareerAffinityWithCurrentOccupationFilter />
      <CareerAffinityWithCurrentOccupationChart />
    </div>
  );
};

export default CareerAffinityWithCurrentOccupation;
