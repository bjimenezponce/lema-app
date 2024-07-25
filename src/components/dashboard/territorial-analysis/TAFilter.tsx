"use client";
import { FilterEnum } from "@/helpers/enums/filters.enum";
import { calculateAllSelected, mapArrayToFalse, mapArrayToTrue } from "@/helpers/sharedFunctions";
import { setAllSectorsTrue, setAllRegionsTrue } from "@/store/slices/TechnologicalAnalysisSlice";
import {
  setAll1000AcrCarreraTrue,
  setAll1000AgnoTrue,
  setAll1000AreaCarreraTrue,
  setAll1000ClasIesTrue,
  setAll1000NomIesTrue,
  setAll1000SexoTrue,
} from "@/store/slices/filtersSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import FiltersCheckBox from "@/widgets/dropbox/filtersCheckBox";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";

const TAFilter = () => {
  const dispatch = useAppDispatch();

  let filtersState = useAppSelector((state) => state.filters.m1000);
  const { acrCarrera, areaCarrera, clasIes, nomIes, sexo, agno } = filtersState;

  const isFalseInFilterAcrCarrera: boolean =
    acrCarrera.data.filter((data) => data[2] === false).length > 0 ? true : false;
  const isFalseInFilterAreaCarrera: boolean =
    areaCarrera.data.filter((data) => data[2] === false).length > 0 ? true : false;
  const isFalseInFilterClasIes: boolean = clasIes.data.filter((data) => data[2] === false).length > 0 ? true : false;
  const isFalseInFilterNomIes: boolean = nomIes.data.filter((data) => data[2] === false).length > 0 ? true : false;
  const isFalseInFilterSexo: boolean = sexo.data.filter((data) => data[2] === false).length > 0 ? true : false;
  const isFalseInFilterAgno: boolean = agno.data.filter((data) => data[2] === false).length > 0 ? true : false;

  const title1000AcrCarrera: string = `Acreditacion`;
  const title1000AreaCarrera: string = `Nombre Carrera (generica)`;
  const title1000ClasIes: string = `Tipo IES`;
  const title1000NomIes: string = `Nombre IES`;
  const title1000Sexo: string = `Sexo`;
  const title1000Agno: string = `Año`;

  let filter1000AcrCarreraArr = acrCarrera.data;
  let filter1000AreaCarreraArr = areaCarrera.data;
  let filter1000ClasIesArr = clasIes.data;
  let filter1000NomIesArr = nomIes.data;
  let filter1000SexoArr = sexo.data;
  let filter1000AgnoArr = agno.data;

  const filter1000AcrCarreraArrTrue = mapArrayToTrue(filter1000AcrCarreraArr);
  const filter1000AreaCarreraArrTrue = mapArrayToTrue(filter1000AreaCarreraArr);
  const filter1000ClasIesArrTrue = mapArrayToTrue(filter1000ClasIesArr);
  const filter1000NomIesArrTrue = mapArrayToTrue(filter1000NomIesArr);
  const filter1000SexoArrTrue = mapArrayToTrue(filter1000SexoArr);
  const filter1000AgnoArrTrue = mapArrayToTrue(filter1000AgnoArr);

  const filter1000AcrCarreraArrFalse = mapArrayToFalse(filter1000AcrCarreraArr);
  const filter1000AreaCarreraArrFalse = mapArrayToFalse(filter1000AreaCarreraArr);
  const filter1000ClasIesArrFalse = mapArrayToFalse(filter1000ClasIesArr);
  const filter1000NomIesArrFalse = mapArrayToFalse(filter1000NomIesArr);
  const filter1000SexoArrFalse = mapArrayToFalse(filter1000SexoArr);
  const filter1000AgnoArrFalse = mapArrayToFalse(filter1000AgnoArr);

  let allSelected1000AcrCarrera = calculateAllSelected(filter1000AcrCarreraArr);
  let allSelected1000AreaCarrera = calculateAllSelected(filter1000AreaCarreraArr);
  let allSelected1000ClasIes = calculateAllSelected(filter1000ClasIesArr);
  let allSelected1000NomIes = calculateAllSelected(filter1000NomIesArr);
  let allSelected1000Sexo = calculateAllSelected(filter1000SexoArr);
  let allSelected1000Agno = calculateAllSelected(filter1000AgnoArr);

  const selectAllValuesF = (filter: string) => {
    if (filter === FilterEnum.FILTER_1000_ACR_CARRERA) {
      if (isFalseInFilterAcrCarrera) {
        dispatch(setAll1000AcrCarreraTrue(filter1000AcrCarreraArrTrue));
      } else if (!isFalseInFilterAcrCarrera) {
        dispatch(setAll1000AcrCarreraTrue(filter1000AcrCarreraArrFalse));
      }
    }

    if (filter === FilterEnum.FILTER_1000_AREA_CARRERA) {
      if (isFalseInFilterAreaCarrera) {
        dispatch(setAll1000AreaCarreraTrue(filter1000AreaCarreraArrTrue));
      } else if (!isFalseInFilterAreaCarrera) {
        dispatch(setAll1000AreaCarreraTrue(filter1000AreaCarreraArrFalse));
      }
    }

    if (filter === FilterEnum.FILTER_1000_CLAS_IES) {
      if (isFalseInFilterClasIes) {
        dispatch(setAll1000ClasIesTrue(filter1000ClasIesArrTrue));
      } else if (!isFalseInFilterClasIes) {
        dispatch(setAll1000ClasIesTrue(filter1000ClasIesArrFalse));
      }
    }

    if (filter === FilterEnum.FILTER_1000_NOM_IES) {
      if (isFalseInFilterNomIes) {
        dispatch(setAll1000NomIesTrue(filter1000NomIesArrTrue));
      } else if (!isFalseInFilterNomIes) {
        dispatch(setAll1000NomIesTrue(filter1000NomIesArrFalse));
      }
    }

    if (filter === FilterEnum.FILTER_1000_SEXO) {
      console.log(isFalseInFilterSexo);
      if (isFalseInFilterSexo) {
        dispatch(setAll1000SexoTrue(filter1000SexoArrTrue));
      } else if (!isFalseInFilterSexo) {
        dispatch(setAll1000SexoTrue(filter1000SexoArrFalse));
      }
    }

    if (filter === FilterEnum.FILTER_1000_AGNO) {
      console.log(isFalseInFilterAgno);
      if (isFalseInFilterAgno) {
        dispatch(setAll1000AgnoTrue(filter1000AgnoArrTrue));
      } else if (!isFalseInFilterAgno) {
        dispatch(setAll1000AgnoTrue(filter1000AgnoArrFalse));
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

          <div className="mb-1 grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-6 h-20">
            <div className="mb-1 flex flex-col gap-6">
              <div className="relative w-full min-w-[200px] h-10">
                <FiltersCheckBox
                  title={title1000Agno}
                  filterName={FilterEnum.FILTER_1000_AGNO}
                  filtersList={filter1000AgnoArr}
                  minToSelect={1}
                  selectAll={true}
                  allSelected={allSelected1000Agno}
                  selectAllValues={() => selectAllValuesF(FilterEnum.FILTER_1000_AGNO)}
                  isAllSelected={isFalseInFilterAgno} // selectAllValues={(e: any) => selectAllValuesF(e, "region")}
                />
              </div>
            </div>
            <div className="mb-1 flex flex-col gap-6 ">
              <div className="relative w-full min-w-[200px] h-10">
                <FiltersCheckBox
                  title={title1000ClasIes}
                  filterName={FilterEnum.FILTER_1000_CLAS_IES}
                  filtersList={filter1000ClasIesArr}
                  minToSelect={1}
                  selectAll={true}
                  allSelected={allSelected1000ClasIes}
                  // selectAllValues={(e: any) => selectAllValuesF(e, "sector")}
                  selectAllValues={() => selectAllValuesF(FilterEnum.FILTER_1000_CLAS_IES)}
                  isAllSelected={isFalseInFilterClasIes}
                />
              </div>
            </div>
            <div className="mb-1 flex flex-col gap-6 ">
              <div className="relative w-full min-w-[200px] h-10">
                <FiltersCheckBox
                  title={title1000NomIes}
                  filterName={FilterEnum.FILTER_1000_NOM_IES}
                  filtersList={filter1000NomIesArr}
                  minToSelect={1}
                  selectAll={true}
                  allSelected={allSelected1000NomIes}
                  // selectAllValues={(e: any) => selectAllValuesF(e, "sector")}
                  selectAllValues={() => selectAllValuesF(FilterEnum.FILTER_1000_NOM_IES)}
                  isAllSelected={isFalseInFilterNomIes}
                />
              </div>
            </div>
            <div className="mb-1 flex flex-col gap-6 ">
              <div className="relative w-full min-w-[200px] h-10">
                <FiltersCheckBox
                  title={title1000AreaCarrera}
                  filterName={FilterEnum.FILTER_1000_AREA_CARRERA}
                  filtersList={filter1000AreaCarreraArr}
                  minToSelect={1}
                  selectAll={true}
                  allSelected={allSelected1000AreaCarrera}
                  // selectAllValues={(e: any) => selectAllValuesF(e, "sector")}
                  selectAllValues={() => selectAllValuesF(FilterEnum.FILTER_1000_AREA_CARRERA)}
                  isAllSelected={isFalseInFilterAreaCarrera}
                />
              </div>
            </div>
            <div className="mb-1 flex flex-col gap-6">
              <div className="relative w-full min-w-[200px] h-10">
                <FiltersCheckBox
                  title={title1000Sexo}
                  filterName={FilterEnum.FILTER_1000_SEXO}
                  filtersList={filter1000SexoArr}
                  minToSelect={1}
                  selectAll={true}
                  allSelected={allSelected1000Sexo}
                  selectAllValues={() => selectAllValuesF(FilterEnum.FILTER_1000_SEXO)}
                  isAllSelected={isFalseInFilterSexo} // selectAllValues={(e: any) => selectAllValuesF(e, "region")}
                />
              </div>
            </div>
            <div className="mb-1 flex flex-col gap-6 ">
              <div className="relative w-full min-w-[200px] h-10">
                <FiltersCheckBox
                  title={title1000AcrCarrera}
                  filterName={FilterEnum.FILTER_1000_ACR_CARRERA}
                  filtersList={filter1000AcrCarreraArr}
                  minToSelect={1}
                  selectAll={true}
                  allSelected={allSelected1000AcrCarrera}
                  // selectAllValues={(e: any) => selectAllValuesF(e, "sector")}
                  selectAllValues={() => selectAllValuesF(FilterEnum.FILTER_1000_ACR_CARRERA)}
                  isAllSelected={isFalseInFilterAcrCarrera}
                />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default TAFilter;
