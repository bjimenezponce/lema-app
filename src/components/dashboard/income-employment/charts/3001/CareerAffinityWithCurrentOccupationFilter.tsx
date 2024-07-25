import { FilterEnum } from "@/helpers/enums/filters.enum";
import { calculateAllSelected, mapArrayToFalse, mapArrayToTrue } from "@/helpers/sharedFunctions";
import {
  setAll3001TipoIesTrue,
  setAll3001RegionTrue,
  // setAll3001SubGrupoTrue,
  // setAll3001GrupoTrue,
  setAll3001SubAreaTrue,
} from "@/store/slices/filtersSlice";

import { useAppDispatch, useAppSelector } from "@/store/store";
import FiltersCheckBox from "@/widgets/dropbox/filtersCheckBox";
import FiltersRadioButton from "@/widgets/dropbox/filtersRadioButton";
import { Card, CardBody, Typography } from "@material-tailwind/react";

const CareerAffinityWithCurrentOccupationFilter = () => {
  const dispatch = useAppDispatch();

  let filtersState = useAppSelector((state) => state.filters.m3000.m3001);
  const { region, subArea, tipo_ies } = filtersState;
  // let filter3001CineArr = filtersState.area.data;
  // let filter3001GrupoArr = filtersState.grupo.data;
  // let filter3001SubGrupoArr = filtersState.subGrupo.data;

  const isFalseFilterRegion: boolean = region.data.filter((data) => data[2] === false).length > 0 ? true : false;
  const isFalseFilterSubArea: boolean = subArea.data.filter((data) => data[2] === false).length > 0 ? true : false;
  const isFalseFilterTipoIes: boolean = tipo_ies.data.filter((data) => data[2] === false).length > 0 ? true : false;

  let filter3001SubAreaArr = subArea.data;
  let filter3001RegionArr = region.data;
  let filter3001E8Arr = tipo_ies.data;

  let filter3001SubAreaArrTrue = mapArrayToTrue(filter3001SubAreaArr);
  let filter3001RegionArrTrue = mapArrayToTrue(filter3001RegionArr);
  let filter3001E8ArrTrue = mapArrayToTrue(filter3001E8Arr);

  let filter3001SubAreaArrFalse = mapArrayToFalse(filter3001SubAreaArr);
  let filter3001RegionArrFalse = mapArrayToFalse(filter3001RegionArr);
  let filter3001E8ArrFalse = mapArrayToFalse(filter3001E8Arr);

  const subAreaTitle: string = `Sub Area (CINE)`;
  const regionTitle: string = `REGIÓN`;
  const e8Title: string = `Tipo institución`;

  let subAreaAllSelected = calculateAllSelected(filter3001SubAreaArr);
  let regionAllSelected = calculateAllSelected(filter3001RegionArr);
  let c8AllSelected = calculateAllSelected(filter3001E8Arr);

  const selectAllValuesF = (filter: string) => {
    if (filter === FilterEnum.FILTER_3001_SUBAREA) {
      if (isFalseFilterSubArea) {
        dispatch(setAll3001SubAreaTrue(filter3001SubAreaArrTrue));
      } else if (!isFalseFilterSubArea) {
        dispatch(setAll3001SubAreaTrue(filter3001SubAreaArrFalse));
      }
    }
    if (filter === FilterEnum.FILTER_3001_REGION) {
      if (isFalseFilterRegion) {
        dispatch(setAll3001RegionTrue(filter3001RegionArrTrue));
      } else if (!isFalseFilterRegion) {
        dispatch(setAll3001RegionTrue(filter3001RegionArrFalse));
      }
    }
    if (filter === FilterEnum.FILTER_3001_TIPO_IES) {
      if (isFalseFilterTipoIes) {
        dispatch(setAll3001TipoIesTrue(filter3001E8ArrTrue));
      } else if (!isFalseFilterTipoIes) {
        dispatch(setAll3001TipoIesTrue(filter3001E8ArrFalse));
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
            {/* logica radio button */}
            {/* <div className="mb-1 flex flex-col gap-6 ">
              <div className="relative w-full min-w-[200px] h-10">
                <FiltersRadioButton
                  title={cineTitle}
                  filterName={FilterEnum.FILTER_3001_AREA}
                  filtersList={filter3001CineArr}
                  minToSelect={1}
                  selectAll={true}
                  allSelected={cineAllSelected}
                  selectAllValues={() =>
                    selectAllValuesF(FilterEnum.FILTER_3001_AREA)
                  }
                />
              </div>
            </div> */}

            <div className="mb-1 flex flex-col gap-6">
              <div className="relative w-full min-w-[200px] h-10">
                <FiltersCheckBox
                  title={subAreaTitle}
                  filterName={FilterEnum.FILTER_3001_SUBAREA}
                  filtersList={filter3001SubAreaArr}
                  minToSelect={1}
                  selectAll={true}
                  allSelected={subAreaAllSelected}
                  selectAllValues={() => selectAllValuesF(FilterEnum.FILTER_3001_SUBAREA)}
                  isAllSelected={isFalseFilterSubArea} // selectAllValues={(e: any) => selectAllValuesF(e, "region")}
                />
              </div>
            </div>
            {/*
            {/* <div className="mb-1 flex flex-col gap-6">
              <div className="relative w-full min-w-[200px] h-10">
                <FiltersCheckBox
                  title={grupoTitle}
                  filterName={FilterEnum.FILTER_3001_GRUPO}
                  filtersList={filter3001GrupoArr}
                  minToSelect={1}
                  selectAll={true}
                  allSelected={grupoAllSelected}
                  selectAllValues={() =>
                    selectAllValuesF(FilterEnum.FILTER_3001_GRUPO)
                  }
                  // selectAllValues={(e: any) => selectAllValuesF(e, "region")}
                />
              </div>
            </div>

            <div className="mb-1 flex flex-col gap-6">
              <div className="relative w-full min-w-[200px] h-10">
                <FiltersCheckBox
                  title={subGrupoTitle}
                  filterName={FilterEnum.FILTER_3001_SUBGRUPO}
                  filtersList={filter3001SubGrupoArr}
                  minToSelect={1}
                  selectAll={true}
                  allSelected={subGrupoAllSelected}
                  selectAllValues={() =>
                    selectAllValuesF(FilterEnum.FILTER_3001_SUBGRUPO)
                  }
                  // selectAllValues={(e: any) => selectAllValuesF(e, "region")}
                />
              </div>
            </div> */}

            <div className="mb-1 flex flex-col gap-6">
              <div className="relative w-full min-w-[200px] h-10">
                <FiltersCheckBox
                  title={regionTitle}
                  filterName={FilterEnum.FILTER_3001_REGION}
                  filtersList={filter3001RegionArr}
                  minToSelect={1}
                  selectAll={true}
                  allSelected={regionAllSelected}
                  selectAllValues={() => selectAllValuesF(FilterEnum.FILTER_3001_REGION)}
                  isAllSelected={isFalseFilterRegion} // selectAllValues={(e: any) => selectAllValuesF(e, "region")}
                />
              </div>
            </div>

            <div className="mb-1 flex flex-col gap-6">
              <div className="relative w-full min-w-[200px] h-10">
                <FiltersCheckBox
                  title={e8Title}
                  filterName={FilterEnum.FILTER_3001_TIPO_IES}
                  filtersList={filter3001E8Arr}
                  minToSelect={4}
                  selectAll={true}
                  allSelected={c8AllSelected}
                  // selectAllValues={(e: any) => selectAllValuesF(e, "")}
                  selectAllValues={() => selectAllValuesF(FilterEnum.FILTER_3001_TIPO_IES)}
                  isAllSelected={isFalseFilterTipoIes}
                />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default CareerAffinityWithCurrentOccupationFilter;
