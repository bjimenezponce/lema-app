import { FilterEnum } from "@/helpers/enums/filters.enum";
import { calculateAllSelected, mapArrayToFalse, mapArrayToTrue } from "@/helpers/sharedFunctions";
import {
  setAllFilter3004DescGrupoPpalTrue,
  setAllFilter3004DescSubGrupoPpalTrue,
  setAllFilter3004GlosaRegionTrue,
} from "@/store/slices/filtersSlice";

import { useAppDispatch, useAppSelector } from "@/store/store";
import FiltersCheckBox from "@/widgets/dropbox/filtersCheckBox";
import { Card, CardBody, Typography } from "@material-tailwind/react";

const EmployabilityByJobProfileFilter = () => {
  const dispatch = useAppDispatch();

  let filterState = useAppSelector((state) => state.filters.m3000.m3004);
  const { descr_grupo_principal, descr_subgrupo_principal, glosa_region } = filterState;

  const isFalseInFilterDescGrupoPpal: boolean =
    descr_grupo_principal.data.filter((data) => data[2] === false).length > 0 ? true : false;
  const isFalseInFilterDescSubGruoPpal: boolean =
    descr_subgrupo_principal.data.filter((data) => data[2] === false).length > 0 ? true : false;
  const isFalseInFilterGlosaRegion: boolean =
    glosa_region.data.filter((data) => data[2] === false).length > 0 ? true : false;

  let filter3004GrupoPpalArr = filterState.descr_grupo_principal.data;
  let filter3004SubGrupoPpalArr = filterState.descr_subgrupo_principal.data;
  let filter3004RegionArr = filterState.glosa_region.data;

  let filter3004GrupoPpalArrTrue = mapArrayToTrue(filter3004GrupoPpalArr);
  let filter3004SubGrupoPpalArrTrue = mapArrayToTrue(filter3004SubGrupoPpalArr);
  let filter3004RegionArrTrue = mapArrayToTrue(filter3004RegionArr);

  let filter3004GrupoPpalArrFalse = mapArrayToFalse(filter3004GrupoPpalArr);
  let filter3004SubGrupoPpalArrFalse = mapArrayToFalse(filter3004SubGrupoPpalArr);
  let filter3004RegionArrFalse = mapArrayToFalse(filter3004RegionArr);

  const title3004GrupoPpal: string = `Grupo Principal`;
  const title3004SubGrupoPpal: string = `SubGrupo Principal`;
  const title3004Region: string = `Region`;

  let allSelected3004GrupoPpal = calculateAllSelected(filter3004GrupoPpalArr);
  let allSelected3004SubGrupoPpal = calculateAllSelected(filter3004SubGrupoPpalArr);
  let allSelected3004Region = calculateAllSelected(filter3004RegionArr);

  const selectAllValuesF = (filter: string) => {
    if (filter === FilterEnum.FILTER_3004_DESC_GRUPO_PPAL) {
      if (isFalseInFilterDescGrupoPpal) {
        dispatch(setAllFilter3004DescGrupoPpalTrue(filter3004GrupoPpalArrTrue));
      } else if (!isFalseInFilterDescGrupoPpal) {
        dispatch(setAllFilter3004DescGrupoPpalTrue(filter3004GrupoPpalArrFalse));
      }
    }
    if (filter === FilterEnum.FILTER_3004_DESC_SUBGRUPO_PPAL) {
      if (isFalseInFilterDescSubGruoPpal) {
        dispatch(setAllFilter3004DescSubGrupoPpalTrue(filter3004SubGrupoPpalArrTrue));
      } else if (!isFalseInFilterDescSubGruoPpal) {
        dispatch(setAllFilter3004DescSubGrupoPpalTrue(filter3004SubGrupoPpalArrFalse));
      }
    }
    if (filter === FilterEnum.FILTER_3004_GLOSA_REGION) {
      if (isFalseInFilterGlosaRegion) {
        dispatch(setAllFilter3004GlosaRegionTrue(filter3004RegionArrTrue));
      } else if (!isFalseInFilterGlosaRegion) {
        dispatch(setAllFilter3004GlosaRegionTrue(filter3004RegionArrFalse));
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
                  title={title3004GrupoPpal}
                  filterName={FilterEnum.FILTER_3004_DESC_GRUPO_PPAL}
                  filtersList={filter3004GrupoPpalArr}
                  minToSelect={1}
                  selectAll={true}
                  allSelected={allSelected3004GrupoPpal}
                  // selectAllValues={(e: any) => selectAllValuesF(e, "sector")}
                  selectAllValues={() => selectAllValuesF(FilterEnum.FILTER_3004_DESC_GRUPO_PPAL)}
                  isAllSelected={isFalseInFilterDescGrupoPpal}
                />
              </div>
            </div>

            <div className="mb-1 flex flex-col gap-6">
              <div className="relative w-full min-w-[200px] h-10">
                <FiltersCheckBox
                  title={title3004SubGrupoPpal}
                  filterName={FilterEnum.FILTER_3004_DESC_SUBGRUPO_PPAL}
                  filtersList={filter3004SubGrupoPpalArr}
                  minToSelect={1}
                  selectAll={true}
                  allSelected={allSelected3004SubGrupoPpal}
                  selectAllValues={() => selectAllValuesF(FilterEnum.FILTER_3004_DESC_SUBGRUPO_PPAL)}
                  isAllSelected={isFalseInFilterDescSubGruoPpal} // selectAllValues={(e: any) => selectAllValuesF(e, "region")}
                />
              </div>
            </div>

            <div className="mb-1 flex flex-col gap-6">
              <div className="relative w-full min-w-[200px] h-10">
                <FiltersCheckBox
                  title={title3004Region}
                  filterName={FilterEnum.FILTER_3004_GLOSA_REGION}
                  filtersList={filter3004RegionArr}
                  minToSelect={4}
                  selectAll={true}
                  allSelected={allSelected3004Region}
                  // selectAllValues={(e: any) => selectAllValuesF(e, "")}
                  selectAllValues={() => selectAllValuesF(FilterEnum.FILTER_3004_GLOSA_REGION)}
                  isAllSelected={isFalseInFilterGlosaRegion}
                />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default EmployabilityByJobProfileFilter;
