export enum FilterEnum {
  TECHNOLOGICALANALYSIS_SECTOR = "technologicalanalysis_sector",
  TECHNOLOGICALANALYSIS_YEAR = "technologicalanalysis_year",
  TECHNOLOGICALANALYSIS_REGION = "technologicalanalysis_region",

  FILTER_1000_ACR_CARRERA = "filter_1000_acr_carrera",
  FILTER_1000_CLAS_IES = "filter_1000_clas_ies",
  FILTER_1000_NOM_IES = "filter_1000_nom_ies",
  FILTER_1000_AREA_CARRERA = "filter_1000_area_carrera",
  FILTER_1000_SEXO = "filter_1000_sexo",
  FILTER_1000_AGNO = "filter_1000_agno",

  FILTER_2000_REGION = "filter_2000_region",
  FILTER_2000_TRIMESTRE = "filter_2000_trimestre",
  FILTER_2000_SEXO = "filter_2000_sexo",
  FILTER_2000_RAMA = "filter_2000_rama",
  FILTER_2000_GRUPO = "filter_2000_grupo",

  // FILTER_3001_AREA = "filter_3001_area",
  FILTER_3001_SUBAREA = "filter_3001_subarea",
  // FILTER_3001_GRUPO = "filter_3001_grupo",
  // FILTER_3001_SUBGRUPO = "filter_3001_subgrupo",
  FILTER_3001_REGION = "filter_3001_region",
  FILTER_3001_TIPO_IES = "filter_3001_tipo_ies",

  FILTER_3002_AREA = "filter_3002_area",
  FILTER_3002_CARRERA = "filter_3002_carrera",
  FILTER_3002_TIPO_IES = "filter_3002_tipo_ies",

  FILTER_3003_AREA = "filter_3003_area",
  FILTER_3003_NOMBRE_CARRERA_GENERICA = "filter_3003_nombre_carrera_generica",
  FILTER_3003_NOMBRE_IES = "filter_3003_nombre_ies",
  FILTER_3003_TIPO_IES = "filter_3003_tipo_ies",

  FILTER_3004_DESC_GRUPO_PPAL = "filter_3004_desc_grupo_ppal",
  FILTER_3004_DESC_SUBGRUPO_PPAL = "filter_3004_desc_subgrupo_ppal",
  FILTER_3004_GLOSA_REGION = "filter_3004_glosa_region",

  FILTER_3005_DESC_GRUPOPPAL = "filter_3005_desc_grupo_ppal",
  FILTER_3005_GLOSA_SECCION = "filter_3005_glosa_seccion",

  FILTER_3006_DESC_GRUPOUNIDADES = "filter_3006_desc_grupo_unidades",
  FILTER_3006_DESC_SUBGRUPOPPAL = "filter_3006_desc_subgrupo_ppal",

  FILTER_4000_REGION = "filter_4000_region",
  FILTER_4000_JOB_AREA = "filter_4000_job_area",
}

const filter1000Options = [
  FilterEnum.FILTER_1000_ACR_CARRERA,
  FilterEnum.FILTER_1000_AREA_CARRERA,
  FilterEnum.FILTER_1000_CLAS_IES,
  FilterEnum.FILTER_1000_NOM_IES,
  FilterEnum.FILTER_1000_SEXO,
  FilterEnum.FILTER_1000_AGNO,
];

export const should1000Options = (filterName: any) => filter1000Options.filter((filter) => filter === filterName);

const filter2000Options = [
  FilterEnum.FILTER_2000_REGION,
  FilterEnum.FILTER_2000_SEXO,
  FilterEnum.FILTER_2000_TRIMESTRE,
  FilterEnum.FILTER_2000_GRUPO,
  FilterEnum.FILTER_2000_RAMA,
];

export const should2000Options = (filterName: any) => filter2000Options.filter((filter) => filter === filterName);

const filter3001Options = [
  FilterEnum.FILTER_3001_SUBAREA,
  FilterEnum.FILTER_3001_REGION,
  FilterEnum.FILTER_3001_TIPO_IES,
];

export const should3001Options = (filterName: any) => filter3001Options.filter((filter) => filter === filterName);

const filter3002Options = [
  FilterEnum.FILTER_3002_AREA,
  FilterEnum.FILTER_3002_CARRERA,
  FilterEnum.FILTER_3002_TIPO_IES,
];

export const should3002Options = (filterName: any) => filter3002Options.filter((filter) => filter === filterName);

const filter3003Options = [
  FilterEnum.FILTER_3003_AREA,
  FilterEnum.FILTER_3003_NOMBRE_CARRERA_GENERICA,
  FilterEnum.FILTER_3003_NOMBRE_IES,
  FilterEnum.FILTER_3003_TIPO_IES,
];

export const should3003Options = (filterName: any) => filter3003Options.filter((filter) => filter === filterName);

const filter3004Options = [
  FilterEnum.FILTER_3004_DESC_GRUPO_PPAL,
  FilterEnum.FILTER_3004_DESC_SUBGRUPO_PPAL,
  FilterEnum.FILTER_3004_GLOSA_REGION,
];

export const should3004Options = (filterName: any) => filter3004Options.filter((filter) => filter === filterName);

const filter3005Options = [FilterEnum.FILTER_3005_DESC_GRUPOPPAL, FilterEnum.FILTER_3005_GLOSA_SECCION];

export const should3005Options = (filterName: any) => filter3005Options.filter((filter) => filter === filterName);

const filter3006Options = [FilterEnum.FILTER_3006_DESC_GRUPOUNIDADES, FilterEnum.FILTER_3006_DESC_SUBGRUPOPPAL];

export const should3006Options = (filterName: any) => filter3006Options.filter((filter) => filter === filterName);

const filter4000Options = [FilterEnum.FILTER_4000_JOB_AREA, FilterEnum.FILTER_4000_REGION];

export const should4001Options = (filterName: any) => filter4000Options.filter((filter) => filter === filterName);

const filter5000Options = [
  FilterEnum.TECHNOLOGICALANALYSIS_SECTOR,
  FilterEnum.TECHNOLOGICALANALYSIS_REGION,
  FilterEnum.TECHNOLOGICALANALYSIS_YEAR,
];

export const should5001Options = (filterName: any) => filter5000Options.filter((filter) => filter === filterName);
