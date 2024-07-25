import { FilterEnum } from "@/helpers/enums/filters.enum";
import { calculateAllSelected, mapArrayToFalse, mapArrayToTrue } from "@/helpers/sharedFunctions";
import { setAllFilter3005DescGrupoPpalTrue, setAllFilter3005GlosaSeccionTrue } from "@/store/slices/filtersSlice";

import { useAppDispatch, useAppSelector } from "@/store/store";
import FiltersCheckBox from "@/widgets/dropbox/filtersCheckBox";
import { Card, CardBody, Typography } from "@material-tailwind/react";

const IncomeByEducationLevelFilter = () => {
  const dispatch = useAppDispatch();

  let filtersState = useAppSelector((state) => state.filters.m3000.m3005);
  const { descr_grupo_principal, glosa_seccion } = filtersState;
  let filter3005GrupoPpalArr = filtersState.descr_grupo_principal.data;
  let filter3005GlosaSeccionPpalArr = filtersState.glosa_seccion.data;

  const isFalseInFilterDescGrPpal: boolean =
    descr_grupo_principal.data.filter((data) => data[2] === false).length > 0 ? true : false;
  const isFalseInFilterGlosaSeccion: boolean =
    glosa_seccion.data.filter((data) => data[2] === false).length > 0 ? true : false;

  let filter3005GrupoPpalArrTrue = mapArrayToTrue(filter3005GrupoPpalArr);
  let filter3005GlosaSeccionPpalArrTrue = mapArrayToTrue(filter3005GlosaSeccionPpalArr);

  let filter3005GrupoPpalArrFalse = mapArrayToFalse(filter3005GrupoPpalArr);
  let filter3005GlosaSeccionPpalArrFalse = mapArrayToFalse(filter3005GlosaSeccionPpalArr);

  const title3005GrupoPpal: string = `Grupo Principal`;
  const title3005GlosaSeccionPpal: string = `Seccion`;

  let allSelected3005GrupoPpal = calculateAllSelected(filter3005GrupoPpalArr);
  let allSelected3005GlosaSeccionPpal = calculateAllSelected(filter3005GlosaSeccionPpalArr);

  const selectAllValuesF = (filter: string) => {
    if (filter === FilterEnum.FILTER_3005_DESC_GRUPOPPAL) {
      if (isFalseInFilterDescGrPpal) {
        dispatch(setAllFilter3005DescGrupoPpalTrue(filter3005GrupoPpalArrTrue));
      } else if (!isFalseInFilterDescGrPpal) {
        dispatch(setAllFilter3005DescGrupoPpalTrue(filter3005GrupoPpalArrFalse));
      }
    }

    if (filter === FilterEnum.FILTER_3005_GLOSA_SECCION) {
      if (isFalseInFilterGlosaSeccion) {
        dispatch(setAllFilter3005GlosaSeccionTrue(filter3005GlosaSeccionPpalArrTrue));
      } else if (!isFalseInFilterGlosaSeccion) {
        dispatch(setAllFilter3005GlosaSeccionTrue(filter3005GlosaSeccionPpalArrFalse));
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
                  title={title3005GrupoPpal}
                  filterName={FilterEnum.FILTER_3005_DESC_GRUPOPPAL}
                  filtersList={filter3005GrupoPpalArr}
                  minToSelect={1}
                  selectAll={true}
                  allSelected={allSelected3005GrupoPpal}
                  // selectAllValues={(e: any) => selectAllValuesF(e, "sector")}
                  selectAllValues={() => selectAllValuesF(FilterEnum.FILTER_3005_DESC_GRUPOPPAL)}
                  isAllSelected={isFalseInFilterDescGrPpal}
                />
              </div>
            </div>

            <div className="mb-1 flex flex-col gap-6">
              <div className="relative w-full min-w-[200px] h-10">
                <FiltersCheckBox
                  title={title3005GlosaSeccionPpal}
                  filterName={FilterEnum.FILTER_3005_GLOSA_SECCION}
                  filtersList={filter3005GlosaSeccionPpalArr}
                  minToSelect={1}
                  selectAll={true}
                  allSelected={allSelected3005GlosaSeccionPpal}
                  selectAllValues={() => selectAllValuesF(FilterEnum.FILTER_3005_GLOSA_SECCION)}
                  isAllSelected={isFalseInFilterGlosaSeccion} // selectAllValues={(e: any) => selectAllValuesF(e, "region")}
                />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default IncomeByEducationLevelFilter;
