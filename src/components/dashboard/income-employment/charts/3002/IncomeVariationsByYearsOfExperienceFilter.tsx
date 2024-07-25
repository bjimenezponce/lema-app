import { FilterEnum } from "@/helpers/enums/filters.enum";
import { calculateAllSelected, mapArrayToFalse, mapArrayToTrue } from "@/helpers/sharedFunctions";
import {
  setAllFilter3002AreaTrue,
  setAllFilter3002CarreraTrue,
  setAllFilter3002TipoIesTrue,
} from "@/store/slices/filtersSlice";

import { useAppDispatch, useAppSelector } from "@/store/store";
import FiltersCheckBox from "@/widgets/dropbox/filtersCheckBox";
import { Card, CardBody, Typography } from "@material-tailwind/react";

const IncomeVariationsByYearsOfExperienceFilter = () => {
  const dispatch = useAppDispatch();

  let filtersState = useAppSelector((state) => state.filters.m3000.m3002);
  const { area, carrera, tipo_ies } = filtersState;

  const isFalseInFilterArea: boolean = area.data.filter((data) => data[2] === false).length > 0 ? true : false;
  const isFalseInFilterCarrera: boolean = carrera.data.filter((data) => data[2] === false).length > 0 ? true : false;
  const isFalseInFilterTipoIes: boolean = tipo_ies.data.filter((data) => data[2] === false).length > 0 ? true : false;

  let filter3002AreaArr = area.data;
  let filter3002CarreraArr = carrera.data;
  let filter3002TipoIesArr = tipo_ies.data;

  let filter3002AreaArrTrue = mapArrayToTrue(filter3002AreaArr);
  let filter3002CarreraArrTrue = mapArrayToTrue(filter3002CarreraArr);
  let filter3002TipoIesArrTrue = mapArrayToTrue(filter3002TipoIesArr);

  let filter3002AreaArrFalse = mapArrayToFalse(filter3002AreaArr);
  let filter3002CarreraArrFalse = mapArrayToFalse(filter3002CarreraArr);
  let filter3002TipoIesArrFalse = mapArrayToFalse(filter3002TipoIesArr);

  const cineTitle: string = `Área educación`;
  const regionTitle: string = `Carrera genérica`;
  const e8Title: string = `Tipo de institución`;

  let areaAllSelected = calculateAllSelected(filter3002AreaArr);
  let carreraAllSelected = calculateAllSelected(filter3002CarreraArr);
  let tipoIesAllSelected = calculateAllSelected(filter3002TipoIesArr);

  // let selectedFalseRegion = filter3001RegionArr.filter(
  //   ([a, b, selected]) => !selected
  // ).length;
  // let regionAllSelected = false;
  // if (selectedFalseRegion > 0) {
  //   regionAllSelected = false;
  // } else {
  //   regionAllSelected = true;
  // }

  const selectAllValuesF = (filter: string) => {
    if (filter === FilterEnum.FILTER_3002_AREA) {
      if (isFalseInFilterArea) {
        dispatch(setAllFilter3002AreaTrue(filter3002AreaArrTrue));
      } else if (!isFalseInFilterArea) {
        dispatch(setAllFilter3002AreaTrue(filter3002AreaArrFalse));
      }
    }
    if (filter === FilterEnum.FILTER_3002_CARRERA) {
      if (isFalseInFilterCarrera) {
        dispatch(setAllFilter3002CarreraTrue(filter3002CarreraArrTrue));
      } else if (!isFalseInFilterCarrera) {
        dispatch(setAllFilter3002CarreraTrue(filter3002CarreraArrFalse));
      }
    }
    if (filter === FilterEnum.FILTER_3002_TIPO_IES) {
      if (isFalseInFilterTipoIes) {
        dispatch(setAllFilter3002TipoIesTrue(filter3002TipoIesArrTrue));
      } else if (!isFalseInFilterTipoIes) {
        dispatch(setAllFilter3002TipoIesTrue(filter3002TipoIesArrFalse));
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

          <div className="mb-1 grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-4 h-20">
            <div className="mb-1 flex flex-col gap-6 ">
              <div className="relative w-full min-w-[200px] h-10">
                <FiltersCheckBox
                  title={cineTitle}
                  filterName={FilterEnum.FILTER_3002_AREA}
                  filtersList={filter3002AreaArr}
                  minToSelect={1}
                  selectAll={true}
                  allSelected={areaAllSelected}
                  // selectAllValues={(e: any) => selectAllValuesF(e, "sector")}
                  selectAllValues={() => selectAllValuesF(FilterEnum.FILTER_3002_AREA)}
                  isAllSelected={isFalseInFilterArea}
                />
              </div>
            </div>

            <div className="mb-1 flex flex-col gap-6">
              <div className="relative w-full min-w-[200px] h-10">
                <FiltersCheckBox
                  title={regionTitle}
                  filterName={FilterEnum.FILTER_3002_CARRERA}
                  filtersList={filter3002CarreraArr}
                  minToSelect={1}
                  selectAll={true}
                  allSelected={carreraAllSelected}
                  selectAllValues={() => selectAllValuesF(FilterEnum.FILTER_3002_CARRERA)}
                  isAllSelected={isFalseInFilterCarrera} // selectAllValues={(e: any) => selectAllValuesF(e, "region")}
                />
              </div>
            </div>

            <div className="mb-1 flex flex-col gap-6">
              <div className="relative w-full min-w-[200px] h-10">
                <FiltersCheckBox
                  title={e8Title}
                  filterName={FilterEnum.FILTER_3002_TIPO_IES}
                  filtersList={filter3002TipoIesArr}
                  minToSelect={4}
                  selectAll={true}
                  allSelected={tipoIesAllSelected}
                  // selectAllValues={(e: any) => selectAllValuesF(e, "")}
                  selectAllValues={() => selectAllValuesF(FilterEnum.FILTER_3002_TIPO_IES)}
                  isAllSelected={isFalseInFilterTipoIes}
                />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default IncomeVariationsByYearsOfExperienceFilter;
