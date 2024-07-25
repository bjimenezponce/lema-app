import { FilterEnum } from "@/helpers/enums/filters.enum";
import { calculateAllSelected, mapArrayToFalse, mapArrayToTrue } from "@/helpers/sharedFunctions";
import {
  setAllFilter3006DescGrupoUnidadesTrue,
  setAllFilter3006DescSubGrupoPpalTrue,
} from "@/store/slices/filtersSlice";

import { useAppDispatch, useAppSelector } from "@/store/store";
import FiltersCheckBox from "@/widgets/dropbox/filtersCheckBox";
import { Card, CardBody, Typography } from "@material-tailwind/react";

const OccupationalAutomationProbabilityFilter = () => {
  const dispatch = useAppDispatch();

  let filtersState = useAppSelector((state) => state.filters.m3000.m3006);
  const { desc_grupo_unidades, desc_subgrupo_principal } = filtersState;

  let filter3006GrupoUnidadesArr = filtersState.desc_grupo_unidades.data;
  let filter3006SubGrupoPpalArr = filtersState.desc_subgrupo_principal.data;

  const isFalseInFilterDescGrUn: boolean =
    desc_grupo_unidades.data.filter((data) => data[2] === false).length > 0 ? true : false;
  const isFalseInFilterDescSubGPpal: boolean =
    desc_subgrupo_principal.data.filter((data) => data[2] === false).length > 0 ? true : false;

  let filter3006GrupoUnidadesArrTrue = mapArrayToTrue(filter3006GrupoUnidadesArr);
  let filter3006SubGrupoPpalArrTrue = mapArrayToTrue(filter3006SubGrupoPpalArr);

  let filter3006GrupoUnidadesArrFalse = mapArrayToFalse(filter3006GrupoUnidadesArr);
  let filter3006SubGrupoPpalArrFalse = mapArrayToFalse(filter3006SubGrupoPpalArr);

  const title3006GrupoUnidades: string = `Unidades`;
  const title3006SubGrupoPpal: string = `SubGrupo`;

  let allSelected3006GrupoUnidades = calculateAllSelected(filter3006GrupoUnidadesArr);
  let allSelected3006SubGrupoPpal = calculateAllSelected(filter3006SubGrupoPpalArr);

  const selectAllValuesF = (filter: string) => {
    if (filter === FilterEnum.FILTER_3006_DESC_GRUPOUNIDADES) {
      if (isFalseInFilterDescGrUn) {
        dispatch(setAllFilter3006DescGrupoUnidadesTrue(filter3006GrupoUnidadesArrTrue));
      } else if (!isFalseInFilterDescGrUn) {
        dispatch(setAllFilter3006DescGrupoUnidadesTrue(filter3006GrupoUnidadesArrFalse));
      }
    }

    if (filter === FilterEnum.FILTER_3006_DESC_SUBGRUPOPPAL) {
      if (isFalseInFilterDescSubGPpal) {
        dispatch(setAllFilter3006DescSubGrupoPpalTrue(filter3006SubGrupoPpalArrTrue));
      } else if (!isFalseInFilterDescSubGPpal) {
        dispatch(setAllFilter3006DescSubGrupoPpalTrue(filter3006SubGrupoPpalArrFalse));
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
                  title={title3006GrupoUnidades}
                  filterName={FilterEnum.FILTER_3006_DESC_GRUPOUNIDADES}
                  filtersList={filter3006GrupoUnidadesArr}
                  minToSelect={1}
                  selectAll={true}
                  allSelected={allSelected3006GrupoUnidades}
                  // selectAllValues={(e: any) => selectAllValuesF(e, "sector")}
                  selectAllValues={() => selectAllValuesF(FilterEnum.FILTER_3006_DESC_GRUPOUNIDADES)}
                  isAllSelected={isFalseInFilterDescGrUn}
                />
              </div>
            </div>

            <div className="mb-1 flex flex-col gap-6">
              <div className="relative w-full min-w-[200px] h-10">
                <FiltersCheckBox
                  title={title3006SubGrupoPpal}
                  filterName={FilterEnum.FILTER_3006_DESC_SUBGRUPOPPAL}
                  filtersList={filter3006SubGrupoPpalArr}
                  minToSelect={1}
                  selectAll={true}
                  allSelected={allSelected3006SubGrupoPpal}
                  selectAllValues={() => selectAllValuesF(FilterEnum.FILTER_3006_DESC_SUBGRUPOPPAL)}
                  isAllSelected={isFalseInFilterDescSubGPpal}
                  // selectAllValues={(e: any) => selectAllValuesF(e, "region")}
                />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default OccupationalAutomationProbabilityFilter;
