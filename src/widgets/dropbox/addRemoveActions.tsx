import { FilterEnum } from "@/helpers/enums/filters.enum";

import {
  addRegion,
  addSector,
  addYear,
  removeRegion,
  removeSector,
  removeYear,
} from "@/store/slices/TechnologicalAnalysisSlice";
import {
  // addFilter3001Grupo,
  // addFilter3001SubGrupo,
  addFilter3001Region,
  addFilter3001TipoIes,
  addFilter3002Area,
  addFilter3002Carrera,
  addFilter3002TipoIes,
  addFilter3003Area,
  addFilter3003NombreCarreraGenerica,
  addFilter3003NombreIes,
  addFilter3003TipoIes,
  addFilter3004DescGrupoPpal,
  addFilter3004DescSubGrupoPpal,
  addFilter3004GlosaRegion,
  addFilter3005DescGrupoPpal,
  addFilter3005GlosaSeccion,
  addFilter3006DescGrupoUnidades,
  addFilter3006DescSubGrupoPpal,
  // removeFilter3001Grupo,
  // removeFilter3001SubGrupo,
  removeFilter3001Region,
  removeFilter3001TipoIes,
  removeFilter3002Area,
  removeFilter3002Carrera,
  removeFilter3002TipoIes,
  removeFilter3003Area,
  removeFilter3003NombreCarreraGenerica,
  removeFilter3003NombreIes,
  removeFilter3003TipoIes,
  removeFilter3004DescGrupoPpal,
  removeFilter3004DescSubGrupoPpal,
  removeFilter3004GlosaRegion,
  removeFilter3005DescGrupoPpal,
  removeFilter3005GlosaSeccion,
  removeFilter3006DescGrupoUnidades,
  removeFilter3001SubArea,
  addFilter3001SubArea,
  addFilter1000AcrCarrera,
  removeFilter1000AcrCarrera,
  addFilter1000ClasIes,
  removeFilter1000ClasIes,
  addFilter1000NomIes,
  removeFilter1000NomIes,
  addFilter1000AreaCarrera,
  removeFilter1000AreaCarrera,
  addFilter1000Sexo,
  removeFilter1000Sexo,
  addFilter1000Agno,
  removeFilter1000Agno,
  addFilter2000Region,
  removeFilter2000Region,
  addFilter2000Trimestre,
  removeFilter2000Trimestre,
  addFilter2000Sexo,
  removeFilter2000Sexo,
  addFilter2000Rama,
  removeFilter2000Rama,
  addFilter2000Grupo,
  removeFilter2000Grupo,
  addFilter4000Region,
  removeFilter4000Region,
  addFilter4000JobArea,
  removeFilter4000JobArea,
  removeFilter3006DescSubGrupoPpal,
} from "@/store/slices/filtersSlice";
import { store } from "@/store/store";

const addRemoveActions = (checked: boolean, value: string | number, filterName: string) => {
  //Analisis tecnologico
  if (checked && filterName === FilterEnum.TECHNOLOGICALANALYSIS_SECTOR) {
    store.dispatch(removeSector(value));
  }
  if (!checked && filterName === FilterEnum.TECHNOLOGICALANALYSIS_SECTOR) {
    store.dispatch(addSector(value));
  }
  if (checked && filterName === FilterEnum.TECHNOLOGICALANALYSIS_YEAR) {
    store.dispatch(removeYear(value));
  }
  if (!checked && filterName === FilterEnum.TECHNOLOGICALANALYSIS_YEAR) {
    store.dispatch(addYear(value));
  }
  if (checked && filterName === FilterEnum.TECHNOLOGICALANALYSIS_REGION) {
    store.dispatch(removeRegion(value));
  }
  if (!checked && filterName === FilterEnum.TECHNOLOGICALANALYSIS_REGION) {
    store.dispatch(addRegion(value));
  }
  //CASEN
  //logica radio button
  // if (filterName === FilterEnum.FILTER_3001_AREA) {
  //   store.dispatch(addFilter3001Area(value));
  //   // store.dispatch(removeFilter3001Area(value));
  // }

  if (checked && filterName === FilterEnum.FILTER_3001_SUBAREA) {
    store.dispatch(removeFilter3001SubArea(value));
  }
  if (!checked && filterName === FilterEnum.FILTER_3001_SUBAREA) {
    store.dispatch(addFilter3001SubArea(value));
  }

  if (checked && filterName === FilterEnum.FILTER_3001_REGION) {
    store.dispatch(removeFilter3001Region(value));
  }
  if (!checked && filterName === FilterEnum.FILTER_3001_REGION) {
    store.dispatch(addFilter3001Region(value));
  }
  if (checked && filterName === FilterEnum.FILTER_3001_TIPO_IES) {
    store.dispatch(removeFilter3001TipoIes(value));
  }
  if (!checked && filterName === FilterEnum.FILTER_3001_TIPO_IES) {
    store.dispatch(addFilter3001TipoIes(value));
  }

  //cambia a true
  if (!checked && filterName === FilterEnum.FILTER_3002_AREA) {
    store.dispatch(addFilter3002Area(value));
  }
  if (!checked && filterName === FilterEnum.FILTER_3002_CARRERA) {
    store.dispatch(addFilter3002Carrera(value));
  }
  if (!checked && filterName === FilterEnum.FILTER_3002_TIPO_IES) {
    store.dispatch(addFilter3002TipoIes(value));
  }
  if (!checked && filterName === FilterEnum.FILTER_3003_AREA) {
    store.dispatch(addFilter3003Area(value));
  }
  if (!checked && filterName === FilterEnum.FILTER_3003_NOMBRE_CARRERA_GENERICA) {
    store.dispatch(addFilter3003NombreCarreraGenerica(value));
  }
  if (!checked && filterName === FilterEnum.FILTER_3003_NOMBRE_IES) {
    store.dispatch(addFilter3003NombreIes(value));
  }
  if (!checked && filterName === FilterEnum.FILTER_3003_TIPO_IES) {
    store.dispatch(addFilter3003TipoIes(value));
  }
  if (!checked && filterName === FilterEnum.FILTER_3004_DESC_GRUPO_PPAL) {
    store.dispatch(addFilter3004DescGrupoPpal(value));
  }
  if (!checked && filterName === FilterEnum.FILTER_3004_DESC_SUBGRUPO_PPAL) {
    store.dispatch(addFilter3004DescSubGrupoPpal(value));
  }
  if (!checked && filterName === FilterEnum.FILTER_3004_GLOSA_REGION) {
    store.dispatch(addFilter3004GlosaRegion(value));
  }
  if (!checked && filterName === FilterEnum.FILTER_3005_DESC_GRUPOPPAL) {
    store.dispatch(addFilter3005DescGrupoPpal(value));
  }
  if (!checked && filterName === FilterEnum.FILTER_3005_GLOSA_SECCION) {
    store.dispatch(addFilter3005GlosaSeccion(value));
  }
  if (!checked && filterName === FilterEnum.FILTER_3006_DESC_GRUPOUNIDADES) {
    store.dispatch(addFilter3006DescGrupoUnidades(value));
  }
  if (!checked && filterName === FilterEnum.FILTER_3006_DESC_SUBGRUPOPPAL) {
    store.dispatch(addFilter3006DescSubGrupoPpal(value));
  }
  //cambia a false
  if (checked && filterName === FilterEnum.FILTER_3002_AREA) {
    store.dispatch(removeFilter3002Area(value));
  }
  if (checked && filterName === FilterEnum.FILTER_3002_CARRERA) {
    store.dispatch(removeFilter3002Carrera(value));
  }
  if (checked && filterName === FilterEnum.FILTER_3002_TIPO_IES) {
    store.dispatch(removeFilter3002TipoIes(value));
  }
  if (checked && filterName === FilterEnum.FILTER_3003_AREA) {
    store.dispatch(removeFilter3003Area(value));
  }
  if (checked && filterName === FilterEnum.FILTER_3003_NOMBRE_CARRERA_GENERICA) {
    store.dispatch(removeFilter3003NombreCarreraGenerica(value));
  }
  if (checked && filterName === FilterEnum.FILTER_3003_NOMBRE_IES) {
    store.dispatch(removeFilter3003NombreIes(value));
  }
  if (checked && filterName === FilterEnum.FILTER_3003_TIPO_IES) {
    store.dispatch(removeFilter3003TipoIes(value));
  }
  if (checked && filterName === FilterEnum.FILTER_3004_DESC_GRUPO_PPAL) {
    store.dispatch(removeFilter3004DescGrupoPpal(value));
  }
  if (checked && filterName === FilterEnum.FILTER_3004_DESC_SUBGRUPO_PPAL) {
    store.dispatch(removeFilter3004DescSubGrupoPpal(value));
  }
  if (checked && filterName === FilterEnum.FILTER_3004_GLOSA_REGION) {
    store.dispatch(removeFilter3004GlosaRegion(value));
  }
  if (checked && filterName === FilterEnum.FILTER_3005_DESC_GRUPOPPAL) {
    store.dispatch(removeFilter3005DescGrupoPpal(value));
  }
  if (checked && filterName === FilterEnum.FILTER_3005_GLOSA_SECCION) {
    store.dispatch(removeFilter3005GlosaSeccion(value));
  }
  if (checked && filterName === FilterEnum.FILTER_3006_DESC_GRUPOUNIDADES) {
    store.dispatch(removeFilter3006DescGrupoUnidades(value));
  }
  if (checked && filterName === FilterEnum.FILTER_3006_DESC_SUBGRUPOPPAL) {
    store.dispatch(removeFilter3006DescSubGrupoPpal(value));
  }

  // 1000
  if (!checked && filterName === FilterEnum.FILTER_1000_ACR_CARRERA) {
    store.dispatch(addFilter1000AcrCarrera(value));
  }
  if (checked && filterName === FilterEnum.FILTER_1000_ACR_CARRERA) {
    store.dispatch(removeFilter1000AcrCarrera(value));
  }
  if (!checked && filterName === FilterEnum.FILTER_1000_CLAS_IES) {
    store.dispatch(addFilter1000ClasIes(value));
  }
  if (checked && filterName === FilterEnum.FILTER_1000_CLAS_IES) {
    store.dispatch(removeFilter1000ClasIes(value));
  }
  if (!checked && filterName === FilterEnum.FILTER_1000_NOM_IES) {
    store.dispatch(addFilter1000NomIes(value));
  }
  if (checked && filterName === FilterEnum.FILTER_1000_NOM_IES) {
    store.dispatch(removeFilter1000NomIes(value));
  }
  if (!checked && filterName === FilterEnum.FILTER_1000_AREA_CARRERA) {
    store.dispatch(addFilter1000AreaCarrera(value));
  }
  if (checked && filterName === FilterEnum.FILTER_1000_AREA_CARRERA) {
    store.dispatch(removeFilter1000AreaCarrera(value));
  }
  if (!checked && filterName === FilterEnum.FILTER_1000_SEXO) {
    store.dispatch(addFilter1000Sexo(value));
  }
  if (checked && filterName === FilterEnum.FILTER_1000_SEXO) {
    store.dispatch(removeFilter1000Sexo(value));
  }
  if (!checked && filterName === FilterEnum.FILTER_1000_AGNO) {
    store.dispatch(addFilter1000Agno(value));
  }
  if (checked && filterName === FilterEnum.FILTER_1000_AGNO) {
    store.dispatch(removeFilter1000Agno(value));
  }
  // 2000
  // if (!checked && filterName === FilterEnum.FILTER_2000_REGION) {
  //   store.dispatch(addFilter2000Region(value));
  // }
  if (filterName === FilterEnum.FILTER_2000_REGION) {
    store.dispatch(addFilter2000Region(value));
    // store.dispatch(removeFilter3001Area(value));
  }
  // if (checked && filterName === FilterEnum.FILTER_2000_REGION) {
  //   store.dispatch(removeFilter2000Region(value));
  // }
  if (!checked && filterName === FilterEnum.FILTER_2000_TRIMESTRE) {
    store.dispatch(addFilter2000Trimestre(value));
  }
  if (checked && filterName === FilterEnum.FILTER_2000_TRIMESTRE) {
    store.dispatch(removeFilter2000Trimestre(value));
  }
  if (filterName === FilterEnum.FILTER_2000_SEXO) {
    store.dispatch(addFilter2000Sexo(value));
  }
  //logica dropbox
  // if (!checked && filterName === FilterEnum.FILTER_2000_SEXO) {
  //   store.dispatch(addFilter2000Sexo(value));
  // }
  // if (checked && filterName === FilterEnum.FILTER_2000_SEXO) {
  //   store.dispatch(removeFilter2000Sexo(value));
  // }
  if (!checked && filterName === FilterEnum.FILTER_2000_RAMA) {
    store.dispatch(addFilter2000Rama(value));
  }
  if (checked && filterName === FilterEnum.FILTER_2000_RAMA) {
    store.dispatch(removeFilter2000Rama(value));
  }
  if (!checked && filterName === FilterEnum.FILTER_2000_GRUPO) {
    store.dispatch(addFilter2000Grupo(value));
  }
  if (checked && filterName === FilterEnum.FILTER_2000_GRUPO) {
    store.dispatch(removeFilter2000Grupo(value));
  }
  // 4000
  if (!checked && filterName === FilterEnum.FILTER_4000_REGION) {
    store.dispatch(addFilter4000Region(value));
  }
  if (checked && filterName === FilterEnum.FILTER_4000_REGION) {
    store.dispatch(removeFilter4000Region(value));
  }
  if (!checked && filterName === FilterEnum.FILTER_4000_JOB_AREA) {
    store.dispatch(addFilter4000JobArea(value));
  }
  if (checked && filterName === FilterEnum.FILTER_4000_JOB_AREA) {
    store.dispatch(removeFilter4000JobArea(value));
  }
};

export { addRemoveActions };
