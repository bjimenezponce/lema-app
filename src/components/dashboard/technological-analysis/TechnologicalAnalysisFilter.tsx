"use client";
import React, { useRef, useState } from "react";
// import {
//   sectorEconomicoFilter,
//   anioAdjudicacionFilter,
//   regionEjecucionFilter,
// } from "@/mock/analisis-tecnologico/filters";
import { Card, CardBody, Typography, Option, Select, Checkbox, Button, Avatar } from "@material-tailwind/react";
import FiltersCheckBox from "@/widgets/dropbox/filtersCheckBox";
import {
  TechnologicalAnalysisState,
  setAllRegionsTrue,
  setAllSectorsTrue,
} from "@/store/slices/TechnologicalAnalysisSlice";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { FilterEnum } from "@/helpers/enums/filters.enum";

export default function TechnologicalAnalysisFilter() {
  const dispatch = useAppDispatch();

  let economicSectorArr: (string | boolean)[][] = useAppSelector(
    (state) => state.techanalysis.techAnalysisState.filters.economicSector
  );
  let yearArr: (number | boolean)[][] = useAppSelector((state) => state.techanalysis.techAnalysisState.filters.year);
  let regionArr: (string | boolean)[][] = useAppSelector(
    (state) => state.techanalysis.techAnalysisState.filters.region
  );

  let economicSectorArrTrue: (string | boolean)[][] = economicSectorArr.map((item) => [item[0], true]);
  let regionArrTrue: (string | boolean)[][] = regionArr.map((item) => [item[0], true]);

  const economicSectorTitle: string = `SECTOR ECONÓMICO`;
  const yearTitle: string = `AÑO ADJUDICACIÓN`;
  const regionTitle: string = `REGIÓN`;

  let selectedFalseSector = economicSectorArr.filter(([category, selected]) => !selected).length;
  let sectorAllSelected = false;
  if (selectedFalseSector > 0) {
    sectorAllSelected = false;
  } else {
    sectorAllSelected = true;
  }

  let selectedFalseRegion = regionArr.filter(([category, selected]) => !selected).length;
  let regionAllSelected = false;
  if (selectedFalseRegion > 0) {
    regionAllSelected = false;
  } else {
    regionAllSelected = true;
  }

  const selectAllValuesF = (filter: string) => {
    if (filter === FilterEnum.TECHNOLOGICALANALYSIS_SECTOR) dispatch(setAllSectorsTrue(economicSectorArrTrue));
    if (filter === FilterEnum.TECHNOLOGICALANALYSIS_REGION) dispatch(setAllRegionsTrue(regionArrTrue));
  };
  return (
    <>
      <Card className="mx-3 mb-1 mt-5 border border-blue-gray-100 lg:mx-1">
        <CardBody>
          {/* <div className="gird-cols-1 mb-1 grid gap-12 lg:grid-cols-2 xl:grid-cols-3">
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Filtros
              </Typography>
            </div>
          </div> */}

          <div className="mb-1 grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-4 h-20">
            <div className="mb-1 flex flex-col gap-6 ">
              <div className="relative w-full min-w-[200px] h-10">
                <FiltersCheckBox
                  title={economicSectorTitle}
                  filterName={FilterEnum.TECHNOLOGICALANALYSIS_SECTOR}
                  filtersList={economicSectorArr}
                  minToSelect={1}
                  selectAll={true}
                  allSelected={sectorAllSelected}
                  // selectAllValues={(e: any) => selectAllValuesF(e, "sector")}
                  selectAllValues={() => selectAllValuesF(FilterEnum.TECHNOLOGICALANALYSIS_SECTOR)}
                  isAllSelected={false}
                />
              </div>
            </div>

            <div className="mb-1 flex flex-col gap-6">
              <div className="relative w-full min-w-[200px] h-10">
                <FiltersCheckBox
                  title={yearTitle}
                  filterName={FilterEnum.TECHNOLOGICALANALYSIS_YEAR}
                  filtersList={yearArr}
                  minToSelect={4}
                  selectAll={false}
                  allSelected={false}
                  // selectAllValues={(e: any) => selectAllValuesF(e, "")}
                  selectAllValues={() => selectAllValuesF("")}
                  isAllSelected={false}
                />
              </div>
            </div>

            <div className="mb-1 flex flex-col gap-6">
              <div className="relative w-full min-w-[200px] h-10">
                <FiltersCheckBox
                  title={regionTitle}
                  filterName={FilterEnum.TECHNOLOGICALANALYSIS_REGION}
                  filtersList={regionArr}
                  minToSelect={1}
                  selectAll={true}
                  allSelected={regionAllSelected}
                  selectAllValues={() => selectAllValuesF(FilterEnum.TECHNOLOGICALANALYSIS_REGION)}
                  isAllSelected={false} // selectAllValues={(e: any) => selectAllValuesF(e, "region")}
                />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
