"use client";
import { FilterEnum } from "@/helpers/enums/filters.enum";
import { calculateAllSelected, mapArrayToFalse, mapArrayToTrue } from "@/helpers/sharedFunctions";
import {
  setAll2000RegionTrue,
  setAll2000TrimestreTrue,
  setAll2000SexoTrue,
  setAll2000GrupoTrue,
  setAll2000RamaTrue,
} from "@/store/slices/filtersSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import FiltersCheckBox from "@/widgets/dropbox/filtersCheckBox";
import FiltersRadioButton from "@/widgets/dropbox/filtersRadioButton";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";

const LMFilter = () => {
  const dispatch = useAppDispatch();

  let filtersState = useAppSelector((state) => state.filters.m2000);
  const { region, sexo, trimestre, grupo, rama } = filtersState;

  const isFalseInFilterTrimestre: boolean =
    trimestre.data.filter((data) => data[2] === false).length > 0 ? true : false;
  const isFalseInFilterGrupo: boolean = grupo.data.filter((data) => data[2] === false).length > 0 ? true : false;
  const isFalseInFilterRama: boolean = rama.data.filter((data) => data[2] === false).length > 0 ? true : false;

  const title2000Region: string = `Region`;
  const title2000Trimestre: string = `Trimestre`;
  const title2000Sexo: string = `Sexo`;
  const title2000Grupo: string = `Grupo`;
  const title2000Rama: string = `Rama`;

  let filter2000RegionArr = region.data;
  let filter2000TrimestreArr = trimestre.data;
  let filter2000SexoArr = sexo.data;
  let filter2000GrupoArr = grupo.data;
  let filter2000RamaArr = rama.data;

  let filter2000TrimestreArrTrue = mapArrayToTrue(filter2000TrimestreArr);
  let filter2000GrupoArrTrue = mapArrayToTrue(filter2000GrupoArr);
  let filter2000RamaArrTrue = mapArrayToTrue(filter2000RamaArr);

  let filter2000TrimestreArrFalse = mapArrayToFalse(filter2000TrimestreArr);
  let filter2000GrupoArrFalse = mapArrayToFalse(filter2000GrupoArr);
  let filter2000RamaArrFalse = mapArrayToFalse(filter2000RamaArr);

  let allSelected2000Region = calculateAllSelected(filter2000RegionArr);
  let allSelected2000Trimestre = calculateAllSelected(filter2000TrimestreArr);
  let allSelected2000Sexo = calculateAllSelected(filter2000SexoArr);
  let allSelected2000Grupo = calculateAllSelected(filter2000GrupoArr);
  let allSelected2000Rama = calculateAllSelected(filter2000RamaArr);

  const selectAllValuesF = (filter: string) => {
    if (filter === FilterEnum.FILTER_2000_TRIMESTRE) {
      if (isFalseInFilterTrimestre) {
        dispatch(setAll2000TrimestreTrue(filter2000TrimestreArrTrue));
      } else if (!isFalseInFilterTrimestre) {
        dispatch(setAll2000TrimestreTrue(filter2000TrimestreArrFalse));
      }
    }

    if (filter === FilterEnum.FILTER_2000_RAMA) {
      if (isFalseInFilterRama) {
        dispatch(setAll2000RamaTrue(filter2000RamaArrTrue));
      } else if (!isFalseInFilterRama) {
        dispatch(setAll2000RamaTrue(filter2000RamaArrFalse));
      }
    }

    if (filter === FilterEnum.FILTER_2000_GRUPO) {
      if (isFalseInFilterGrupo) {
        dispatch(setAll2000GrupoTrue(filter2000GrupoArrTrue));
      } else if (!isFalseInFilterGrupo) {
        dispatch(setAll2000GrupoTrue(filter2000GrupoArrFalse));
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

          <div className="mb-1 grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-5 h-20">
            <div className="mb-1 flex flex-col gap-6 ">
              <div className="relative w-full min-w-[200px] h-10">
                <FiltersRadioButton
                  title={title2000Region}
                  filterName={FilterEnum.FILTER_2000_REGION}
                  filtersList={filter2000RegionArr}
                  // selectAllValues={(e: any) => selectAllValuesF(e, "sector")}
                  selectAllValues={() => selectAllValuesF(FilterEnum.FILTER_2000_REGION)}
                />
              </div>
            </div>
            <div className="mb-1 flex flex-col gap-6 ">
              <div className="relative w-full min-w-[200px] h-10">
                <FiltersCheckBox
                  title={title2000Trimestre}
                  filterName={FilterEnum.FILTER_2000_TRIMESTRE}
                  filtersList={filter2000TrimestreArr}
                  minToSelect={1}
                  selectAll={true}
                  allSelected={allSelected2000Trimestre}
                  // selectAllValues={(e: any) => selectAllValuesF(e, "sector")}
                  selectAllValues={() => selectAllValuesF(FilterEnum.FILTER_2000_TRIMESTRE)}
                  isAllSelected={isFalseInFilterTrimestre}
                />
              </div>
            </div>

            <div className="mb-1 flex flex-col gap-6">
              <div className="relative w-full min-w-[200px] h-10">
                <FiltersRadioButton
                  title={title2000Sexo}
                  filterName={FilterEnum.FILTER_2000_SEXO}
                  filtersList={filter2000SexoArr}
                  selectAllValues={() => selectAllValuesF(FilterEnum.FILTER_2000_SEXO)}
                  // selectAllValues={(e: any) => selectAllValuesF(e, "region")}
                />
              </div>
            </div>

            <div className="mb-1 flex flex-col gap-6">
              <div className="relative w-full min-w-[200px] h-10">
                <FiltersCheckBox
                  title={title2000Grupo}
                  filterName={FilterEnum.FILTER_2000_GRUPO}
                  filtersList={filter2000GrupoArr}
                  minToSelect={1}
                  selectAll={true}
                  allSelected={allSelected2000Grupo}
                  selectAllValues={() => selectAllValuesF(FilterEnum.FILTER_2000_GRUPO)}
                  isAllSelected={isFalseInFilterGrupo} // selectAllValues={(e: any) => selectAllValuesF(e, "region")}
                />
              </div>
            </div>

            <div className="mb-1 flex flex-col gap-6">
              <div className="relative w-full min-w-[200px] h-10">
                <FiltersCheckBox
                  title={title2000Rama}
                  filterName={FilterEnum.FILTER_2000_RAMA}
                  filtersList={filter2000RamaArr}
                  minToSelect={1}
                  selectAll={true}
                  allSelected={allSelected2000Rama}
                  selectAllValues={() => selectAllValuesF(FilterEnum.FILTER_2000_RAMA)}
                  isAllSelected={isFalseInFilterRama} // selectAllValues={(e: any) => selectAllValuesF(e, "region")}
                />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default LMFilter;
