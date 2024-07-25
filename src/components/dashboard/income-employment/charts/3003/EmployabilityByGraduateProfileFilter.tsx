import { FilterEnum } from "@/helpers/enums/filters.enum";
import { calculateAllSelected, mapArrayToFalse, mapArrayToTrue } from "@/helpers/sharedFunctions";
import {
  setAllFilter3003AreaTrue,
  setAllFilter3003NombreCarreraGenericaTrue,
  setAllFilter3003NombreIesTrue,
  setAllFilter3003TipoIesTrue,
} from "@/store/slices/filtersSlice";

import { useAppDispatch, useAppSelector } from "@/store/store";
import FiltersCheckBox from "@/widgets/dropbox/filtersCheckBox";
import { Card, CardBody, Typography } from "@material-tailwind/react";

const EmployabilityByGraduateProfileFilter = () => {
  const dispatch = useAppDispatch();

  let filterState = useAppSelector((state) => state.filters.m3000.m3003);
  const { area, nombre_carrera_genérica, nombre_ies, tipo_ies } = filterState;

  const isFalseInFilterArea: boolean = area.data.filter((data) => data[2] === false).length > 0 ? true : false;
  const isFalseInFilterNomCarGen: boolean =
    nombre_carrera_genérica.data.filter((data) => data[2] === false).length > 0 ? true : false;
  const isFalseInFilterNomIes: boolean = nombre_ies.data.filter((data) => data[2] === false).length > 0 ? true : false;
  const isFalseInFilterTipoIes: boolean = tipo_ies.data.filter((data) => data[2] === false).length > 0 ? true : false;

  let filter3003AreaArr = area.data;
  let filter3003CarreraArr = nombre_carrera_genérica.data;
  let filter3003NombreIesArr = nombre_ies.data;
  let filter3003TipoIesArr = tipo_ies.data;

  let filter3003AreaArrTrue = mapArrayToTrue(filter3003AreaArr);
  let filter3003CarreraArrTrue = mapArrayToTrue(filter3003CarreraArr);
  let filter3003NombreIesArrTrue = mapArrayToTrue(filter3003NombreIesArr);
  let filter3003TipoIesArrTrue = mapArrayToTrue(filter3003TipoIesArr);

  let filter3003AreaArrFalse = mapArrayToFalse(filter3003AreaArr);
  let filter3003CarreraArrFalse = mapArrayToFalse(filter3003CarreraArr);
  let filter3003NombreIesArrFalse = mapArrayToFalse(filter3003NombreIesArr);
  let filter3003TipoIesArrFalse = mapArrayToFalse(filter3003TipoIesArr);

  const title3003Area: string = `Área educación`;
  const title3003Carrera: string = `Carrera`;
  const title3003NombreIes: string = `Nombre Ies`;
  const title3003TipoIes: string = `Tipo Ies`;

  let AllSelected3003Area = calculateAllSelected(filter3003AreaArr);
  let AllSelected3003Carrera = calculateAllSelected(filter3003CarreraArr);
  let AllSelected3003NombreIes = calculateAllSelected(filter3003NombreIesArr);
  let AllSelected3003TipoIes = calculateAllSelected(filter3003TipoIesArr);

  const selectAllValuesF = (filter: string) => {
    if (filter === FilterEnum.FILTER_3003_AREA) {
      if (isFalseInFilterArea) {
        dispatch(setAllFilter3003AreaTrue(filter3003AreaArrTrue));
      } else if (!isFalseInFilterArea) {
        dispatch(setAllFilter3003AreaTrue(filter3003AreaArrFalse));
      }
    }
    if (filter === FilterEnum.FILTER_3003_NOMBRE_CARRERA_GENERICA) {
      if (isFalseInFilterNomCarGen) {
        dispatch(setAllFilter3003NombreCarreraGenericaTrue(filter3003CarreraArrTrue));
      } else if (!isFalseInFilterNomCarGen) {
        dispatch(setAllFilter3003NombreCarreraGenericaTrue(filter3003CarreraArrFalse));
      }
    }
    if (filter === FilterEnum.FILTER_3003_NOMBRE_IES) {
      if (isFalseInFilterNomIes) {
        dispatch(setAllFilter3003NombreIesTrue(filter3003NombreIesArrTrue));
      } else if (!isFalseInFilterNomIes) {
        dispatch(setAllFilter3003NombreIesTrue(filter3003NombreIesArrFalse));
      }
    }
    if (filter === FilterEnum.FILTER_3003_TIPO_IES) {
      if (isFalseInFilterTipoIes) {
        dispatch(setAllFilter3003TipoIesTrue(filter3003TipoIesArrTrue));
      } else if (!isFalseInFilterTipoIes) {
        dispatch(setAllFilter3003TipoIesTrue(filter3003TipoIesArrFalse));
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
                  title={title3003Area}
                  filterName={FilterEnum.FILTER_3003_AREA}
                  filtersList={filter3003AreaArr}
                  minToSelect={1}
                  selectAll={true}
                  allSelected={AllSelected3003Area}
                  // selectAllValues={(e: any) => selectAllValuesF(e, "sector")}
                  selectAllValues={() => selectAllValuesF(FilterEnum.FILTER_3003_AREA)}
                  isAllSelected={isFalseInFilterArea}
                />
              </div>
            </div>

            <div className="mb-1 flex flex-col gap-6">
              <div className="relative w-full min-w-[200px] h-10">
                <FiltersCheckBox
                  title={title3003Carrera}
                  filterName={FilterEnum.FILTER_3003_NOMBRE_CARRERA_GENERICA}
                  filtersList={filter3003CarreraArr}
                  minToSelect={1}
                  selectAll={true}
                  allSelected={AllSelected3003Carrera}
                  selectAllValues={() => selectAllValuesF(FilterEnum.FILTER_3003_NOMBRE_CARRERA_GENERICA)}
                  isAllSelected={isFalseInFilterNomCarGen} // selectAllValues={(e: any) => selectAllValuesF(e, "region")}
                />
              </div>
            </div>

            <div className="mb-1 flex flex-col gap-6">
              <div className="relative w-full min-w-[200px] h-10">
                <FiltersCheckBox
                  title={title3003NombreIes}
                  filterName={FilterEnum.FILTER_3003_NOMBRE_IES}
                  filtersList={filter3003NombreIesArr}
                  minToSelect={4}
                  selectAll={true}
                  allSelected={AllSelected3003NombreIes}
                  // selectAllValues={(e: any) => selectAllValuesF(e, "")}
                  selectAllValues={() => selectAllValuesF(FilterEnum.FILTER_3003_NOMBRE_IES)}
                  isAllSelected={isFalseInFilterNomIes}
                />
              </div>
            </div>

            <div className="mb-1 flex flex-col gap-6">
              <div className="relative w-full min-w-[200px] h-10">
                <FiltersCheckBox
                  title={title3003TipoIes}
                  filterName={FilterEnum.FILTER_3003_TIPO_IES}
                  filtersList={filter3003TipoIesArr}
                  minToSelect={4}
                  selectAll={true}
                  allSelected={AllSelected3003TipoIes}
                  // selectAllValues={(e: any) => selectAllValuesF(e, "")}
                  selectAllValues={() => selectAllValuesF(FilterEnum.FILTER_3003_TIPO_IES)}
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

export default EmployabilityByGraduateProfileFilter;
