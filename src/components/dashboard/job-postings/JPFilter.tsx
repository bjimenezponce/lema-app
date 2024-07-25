"use client";
import { FilterEnum } from "@/helpers/enums/filters.enum";
import { calculateAllSelected, mapArrayToFalse, mapArrayToTrue } from "@/helpers/sharedFunctions";
import { setAllFilter4000RegionTrue, setAllFilter4000JobAreaTrue } from "@/store/slices/filtersSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import FiltersCheckBox from "@/widgets/dropbox/filtersCheckBox";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";

const JPFilter = () => {
  const dispatch = useAppDispatch();

  let filtersState = useAppSelector((state) => state.filters.m4000);
  const { region, jobArea } = filtersState;

  const title4000Region: string = `Region`;
  const title4000JobArea: string = `Área de trabajo`;

  const isFalseInFilterRegion: boolean = region.data.filter((data) => data[2] === false).length > 0 ? true : false;
  const isFalseInFilterJobArea: boolean = jobArea.data.filter((data) => data[2] === false).length > 0 ? true : false;

  let filter4000RegionArr = region.data;
  let filter4000JobAreaArr = jobArea.data;

  let filter4000RegionArrTrue = mapArrayToTrue(filter4000RegionArr);
  let filter4000JobAreaArrTrue = mapArrayToTrue(filter4000JobAreaArr);

  let filter4000RegionArrFalse = mapArrayToFalse(filter4000RegionArr);
  let filter4000JobAreaArrFalse = mapArrayToFalse(filter4000JobAreaArr);

  let allSelected4000Region = calculateAllSelected(filter4000RegionArr);
  let allSelected4000JobArea = calculateAllSelected(filter4000JobAreaArr);

  const selectAllValuesF = (filter: string) => {
    if (filter === FilterEnum.FILTER_4000_REGION) {
      if (isFalseInFilterRegion) {
        dispatch(setAllFilter4000RegionTrue(filter4000RegionArrTrue));
      } else if (!isFalseInFilterRegion) {
        dispatch(setAllFilter4000RegionTrue(filter4000RegionArrFalse));
      }
    }
    if (filter === FilterEnum.FILTER_4000_JOB_AREA) {
      if (isFalseInFilterJobArea) {
        dispatch(setAllFilter4000JobAreaTrue(filter4000JobAreaArrTrue));
      } else if (!isFalseInFilterJobArea) {
        dispatch(setAllFilter4000JobAreaTrue(filter4000JobAreaArrFalse));
      }
    }
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

          <div className="mb-1 grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3 h-20">
            <div className="mb-1 flex flex-col gap-6 ">
              <div className="relative w-full min-w-[200px] h-10">
                <FiltersCheckBox
                  title={title4000Region}
                  filterName={FilterEnum.FILTER_4000_REGION}
                  filtersList={filter4000RegionArr}
                  minToSelect={1}
                  selectAll={true}
                  allSelected={allSelected4000Region}
                  isAllSelected={isFalseInFilterRegion}
                  // selectAllValues={(e: any) => selectAllValuesF(e, "sector")}
                  selectAllValues={() => selectAllValuesF(FilterEnum.FILTER_4000_REGION)}
                />
              </div>
            </div>
            <div className="mb-1 flex flex-col gap-6 ">
              <div className="relative w-full min-w-[200px] h-10">
                <FiltersCheckBox
                  title={title4000JobArea}
                  filterName={FilterEnum.FILTER_4000_JOB_AREA}
                  filtersList={filter4000JobAreaArr}
                  minToSelect={1}
                  selectAll={true}
                  allSelected={allSelected4000JobArea}
                  isAllSelected={isFalseInFilterJobArea}
                  // selectAllValues={(e: any) => selectAllValuesF(e, "sector")}
                  selectAllValues={() => selectAllValuesF(FilterEnum.FILTER_4000_JOB_AREA)}
                />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default JPFilter;
