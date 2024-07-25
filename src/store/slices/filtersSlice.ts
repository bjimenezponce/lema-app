import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";
import { FiltersStateInterface } from "./interfaces/filters.interface";
import { getInitialFilters } from "./thunks/filtersThunk";

const initialState: FiltersStateInterface = {
  m1000: {
    acrCarrera: {
      loading: false,
      error: null,
      data: [],
    },
    clasIes: {
      loading: false,
      error: null,
      data: [],
    },
    nomIes: {
      loading: false,
      error: null,
      data: [],
    },
    areaCarrera: {
      loading: false,
      error: null,
      data: [],
    },
    sexo: {
      loading: false,
      error: null,
      data: [],
    },
    agno: {
      loading: false,
      error: null,
      data: [],
    },
  },
  m2000: {
    region: {
      loading: false,
      error: null,
      data: [],
    },
    trimestre: {
      loading: false,
      error: null,
      data: [],
    },
    sexo: {
      loading: false,
      error: null,
      data: [],
    },
    rama: {
      loading: false,
      error: null,
      data: [],
    },
    grupo: {
      loading: false,
      error: null,
      data: [],
    },
  },
  m3000: {
    m3001: {
      region: {
        loading: false,
        error: null,
        data: [],
      },
      tipo_ies: {
        loading: false,
        error: null,
        data: [],
      },
      subArea: {
        loading: false,
        error: null,
        data: [],
      },
    },
    m3002: {
      carrera: {
        loading: false,
        error: null,
        data: [],
      },
      tipo_ies: {
        loading: false,
        error: null,
        data: [],
      },
      area: {
        loading: false,
        error: null,
        data: [],
      },
    },
    m3003: {
      tipo_ies: {
        loading: false,
        error: null,
        data: [],
      },
      nombre_ies: {
        loading: false,
        error: null,
        data: [],
      },
      nombre_carrera_genérica: {
        loading: false,
        error: null,
        data: [],
      },
      area: {
        loading: false,
        error: null,
        data: [],
      },
    },
    m3004: {
      descr_grupo_principal: {
        loading: false,
        error: null,
        data: [],
      },
      descr_subgrupo_principal: {
        loading: false,
        error: null,
        data: [],
      },
      glosa_region: {
        loading: false,
        error: null,
        data: [],
      },
      page: 1,
      pageSize: 10,
    },
    m3005: {
      glosa_seccion: {
        loading: false,
        error: null,
        data: [],
      },
      descr_grupo_principal: {
        loading: false,
        error: null,
        data: [],
      },
    },
    m3006: {
      desc_grupo_unidades: {
        loading: false,
        error: null,
        data: [],
      },
      desc_subgrupo_principal: {
        loading: false,
        error: null,
        data: [],
      },
    },
  },
  m4000: {
    region: {
      loading: false,
      error: null,
      data: [],
    },
    jobArea: {
      loading: false,
      error: null,
      data: [],
    },
  },
  m5000: {
    sector: [],
    year: [],
    region: [],
  },
};
const getFiltersTrue = (data: any[][]) => {
  const dataTrue: (number | string | boolean)[][] = data.map((item: any[]) => [item[0], item[1], true]);
  return dataTrue;
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addRemoveFilter3004Page: (state, action: PayloadAction<any>) => {
      state.m3000.m3004.page = action.payload;
    },
    //logica radio button
    // set3001FilterArea: (state, action: PayloadAction<any>) => {
    //   state.m3000.m3001.area = action.payload;
    // },
    // setSelected3001AreaTrue: (state, action: PayloadAction<any>) => {
    //   state.m3000.m3001.area.data = action.payload;
    // },
    setAll1000AcrCarreraTrue: (state, action: PayloadAction<any>) => {
      state.m1000.acrCarrera.data = action.payload;
    },
    setAll1000ClasIesTrue: (state, action: PayloadAction<any>) => {
      state.m1000.clasIes.data = action.payload;
    },
    setAll1000NomIesTrue: (state, action: PayloadAction<any>) => {
      state.m1000.nomIes.data = action.payload;
    },
    setAll1000AreaCarreraTrue: (state, action: PayloadAction<any>) => {
      state.m1000.areaCarrera.data = action.payload;
    },
    setAll1000SexoTrue: (state, action: PayloadAction<any>) => {
      state.m1000.sexo.data = action.payload;
    },
    setAll1000AgnoTrue: (state, action: PayloadAction<any>) => {
      state.m1000.agno.data = action.payload;
    },

    setAll2000RegionTrue: (state, action: PayloadAction<any>) => {
      state.m2000.region.data = action.payload;
    },
    setAll2000TrimestreTrue: (state, action: PayloadAction<any>) => {
      state.m2000.trimestre.data = action.payload;
    },
    setAll2000SexoTrue: (state, action: PayloadAction<any>) => {
      state.m2000.sexo.data = action.payload;
    },
    setAll2000RamaTrue: (state, action: PayloadAction<any>) => {
      state.m2000.rama.data = action.payload;
    },
    setAll2000GrupoTrue: (state, action: PayloadAction<any>) => {
      state.m2000.grupo.data = action.payload;
    },

    setAll3001SubAreaTrue: (state, action: PayloadAction<any>) => {
      state.m3000.m3001.subArea.data = action.payload;
    },
    setAll3001RegionTrue: (state, action: PayloadAction<any>) => {
      state.m3000.m3001.region.data = action.payload;
    },
    setAll3001TipoIesTrue: (state, action: PayloadAction<any>) => {
      state.m3000.m3001.tipo_ies.data = action.payload;
    },

    setAllFilter3002AreaTrue: (state, action: PayloadAction<any>) => {
      state.m3000.m3002.area.data = action.payload;
    },
    setAllFilter3002TipoIesTrue: (state, action: PayloadAction<any>) => {
      state.m3000.m3002.tipo_ies.data = action.payload;
    },
    setAllFilter3002CarreraTrue: (state, action: PayloadAction<any>) => {
      state.m3000.m3002.carrera.data = action.payload;
    },
    setAllFilter3003TipoIesTrue: (state, action: PayloadAction<any>) => {
      state.m3000.m3003.tipo_ies.data = action.payload;
    },
    setAllFilter3003AreaTrue: (state, action: PayloadAction<any>) => {
      state.m3000.m3003.area.data = action.payload;
    },
    setAllFilter3003NombreIesTrue: (state, action: PayloadAction<any>) => {
      state.m3000.m3003.nombre_ies.data = action.payload;
    },
    setAllFilter3003NombreCarreraGenericaTrue: (state, action: PayloadAction<any>) => {
      state.m3000.m3003.nombre_carrera_genérica.data = action.payload;
    },
    setAllFilter3004DescGrupoPpalTrue: (state, action: PayloadAction<any>) => {
      state.m3000.m3004.descr_grupo_principal.data = action.payload;
    },
    setAllFilter3004DescSubGrupoPpalTrue: (state, action: PayloadAction<any>) => {
      state.m3000.m3004.descr_subgrupo_principal.data = action.payload;
    },
    setAllFilter3004GlosaRegionTrue: (state, action: PayloadAction<any>) => {
      state.m3000.m3004.glosa_region.data = action.payload;
    },
    setAllFilter3005GlosaSeccionTrue: (state, action: PayloadAction<any>) => {
      state.m3000.m3005.glosa_seccion.data = action.payload;
    },
    setAllFilter3005DescGrupoPpalTrue: (state, action: PayloadAction<any>) => {
      state.m3000.m3005.descr_grupo_principal.data = action.payload;
    },
    setAllFilter3006DescGrupoUnidadesTrue: (state, action: PayloadAction<any>) => {
      state.m3000.m3006.desc_grupo_unidades.data = action.payload;
    },
    setAllFilter3006DescSubGrupoPpalTrue: (state, action: PayloadAction<any>) => {
      state.m3000.m3006.desc_subgrupo_principal.data = action.payload;
    },

    setAllFilter4000RegionTrue: (state, action: PayloadAction<any>) => {
      state.m4000.region.data = action.payload;
    },
    setAllFilter4000JobAreaTrue: (state, action: PayloadAction<any>) => {
      state.m4000.jobArea.data = action.payload;
    },

    //Add Remove to filters
    //logica radio button
    // addFilter3001Area: (state, action: PayloadAction<any>) => {
    //   const index = state.m3000.m3001.area.data.findIndex(([str, _]: any) => str === action.payload);

    //   const updatedData = state.m3000.m3001.area.data.map((item, i) => {
    //     if (i === index) {
    //       return [item[0], item[1], true];
    //     } else {
    //       return [item[0], item[1], false];
    //     }
    //   });

    //   state.m3000.m3001.area.data = updatedData;
    // },
    // removeFilter3001Area: (state, action: PayloadAction<any>) => {
    //   const index = state.m3000.m3001.area.data.findIndex(
    //     ([str, _]: any) => str === action.payload
    //   );
    //   state.m3000.m3001.area.data[index][2] = false;
    // },
    addFilter1000AcrCarrera: (state, action: PayloadAction<any>) => {
      const index = state.m1000.acrCarrera.data.findIndex(([str, _]: any) => str === action.payload);
      state.m1000.acrCarrera.data[index][2] = true;
    },
    removeFilter1000AcrCarrera: (state, action: PayloadAction<any>) => {
      const index = state.m1000.acrCarrera.data.findIndex(([str, _]: any) => str === action.payload);
      state.m1000.acrCarrera.data[index][2] = false;
    },
    addFilter1000ClasIes: (state, action: PayloadAction<any>) => {
      const index = state.m1000.clasIes.data.findIndex(([str, _]: any) => str === action.payload);
      state.m1000.clasIes.data[index][2] = true;
    },
    removeFilter1000ClasIes: (state, action: PayloadAction<any>) => {
      const index = state.m1000.clasIes.data.findIndex(([str, _]: any) => str === action.payload);
      state.m1000.clasIes.data[index][2] = false;
    },
    addFilter1000NomIes: (state, action: PayloadAction<any>) => {
      const index = state.m1000.nomIes.data.findIndex(([str, _]: any) => str === action.payload);
      state.m1000.nomIes.data[index][2] = true;
    },
    removeFilter1000NomIes: (state, action: PayloadAction<any>) => {
      const index = state.m1000.nomIes.data.findIndex(([str, _]: any) => str === action.payload);
      state.m1000.nomIes.data[index][2] = false;
    },
    addFilter1000AreaCarrera: (state, action: PayloadAction<any>) => {
      const index = state.m1000.areaCarrera.data.findIndex(([str, _]: any) => str === action.payload);
      state.m1000.areaCarrera.data[index][2] = true;
    },
    removeFilter1000AreaCarrera: (state, action: PayloadAction<any>) => {
      const index = state.m1000.areaCarrera.data.findIndex(([str, _]: any) => str === action.payload);
      state.m1000.areaCarrera.data[index][2] = false;
    },
    addFilter1000Sexo: (state, action: PayloadAction<any>) => {
      const index = state.m1000.sexo.data.findIndex(([str, _]: any) => str === action.payload);
      state.m1000.sexo.data[index][2] = true;
    },
    removeFilter1000Sexo: (state, action: PayloadAction<any>) => {
      const index = state.m1000.sexo.data.findIndex(([str, _]: any) => str === action.payload);
      state.m1000.sexo.data[index][2] = false;
    },
    addFilter1000Agno: (state, action: PayloadAction<any>) => {
      const index = state.m1000.agno.data.findIndex(([str, _]: any) => str === action.payload);
      state.m1000.agno.data[index][2] = true;
    },
    removeFilter1000Agno: (state, action: PayloadAction<any>) => {
      const index = state.m1000.agno.data.findIndex(([str, _]: any) => str === action.payload);
      state.m1000.agno.data[index][2] = false;
    },

    // addFilter2000Region: (state, action: PayloadAction<any>) => {
    //   const index = state.m2000.region.data.findIndex(([str, _]: any) => str === action.payload);
    //   state.m2000.region.data[index][2] = true;
    // },
    addFilter2000Region: (state, action: PayloadAction<any>) => {
      const index = state.m2000.region.data.findIndex(([str, _]: any) => str === action.payload);
      const updatedData = state.m2000.region.data.map((item, i) => {
        if (i === index) {
          return [item[0], item[1], true];
        } else {
          return [item[0], item[1], false];
        }
      });

      state.m2000.region.data = updatedData;
    },
    removeFilter2000Region: (state, action: PayloadAction<any>) => {
      const index = state.m2000.region.data.findIndex(([str, _]: any) => str === action.payload);
      state.m2000.region.data[index][2] = false;
    },
    addFilter2000Trimestre: (state, action: PayloadAction<any>) => {
      const index = state.m2000.trimestre.data.findIndex(([str, _]: any) => str === action.payload);
      state.m2000.trimestre.data[index][2] = true;
    },
    removeFilter2000Trimestre: (state, action: PayloadAction<any>) => {
      const index = state.m2000.trimestre.data.findIndex(([str, _]: any) => str === action.payload);
      state.m2000.trimestre.data[index][2] = false;
    },
    // addFilter2000Sexo: (state, action: PayloadAction<any>) => {
    //   const index = state.m2000.sexo.data.findIndex(([str, _]: any) => str === action.payload);
    //   state.m2000.sexo.data[index][2] = true;
    // },
    addFilter2000Sexo: (state, action: PayloadAction<any>) => {
      const index = state.m2000.sexo.data.findIndex(([str, _]: any) => str === action.payload);
      const updatedData = state.m2000.sexo.data.map((item, i) => {
        if (i === index) {
          return [item[0], item[1], true];
        } else {
          return [item[0], item[1], false];
        }
      });

      state.m2000.sexo.data = updatedData;
    },
    removeFilter2000Sexo: (state, action: PayloadAction<any>) => {
      const index = state.m2000.sexo.data.findIndex(([str, _]: any) => str === action.payload);
      state.m2000.sexo.data[index][2] = false;
    },
    addFilter2000Rama: (state, action: PayloadAction<any>) => {
      const index = state.m2000.rama.data.findIndex(([str, _]: any) => str === action.payload);
      state.m2000.rama.data[index][2] = true;
    },
    removeFilter2000Rama: (state, action: PayloadAction<any>) => {
      const index = state.m2000.rama.data.findIndex(([str, _]: any) => str === action.payload);
      state.m2000.rama.data[index][2] = false;
    },
    addFilter2000Grupo: (state, action: PayloadAction<any>) => {
      const index = state.m2000.grupo.data.findIndex(([str, _]: any) => str === action.payload);
      state.m2000.grupo.data[index][2] = true;
    },
    removeFilter2000Grupo: (state, action: PayloadAction<any>) => {
      const index = state.m2000.grupo.data.findIndex(([str, _]: any) => str === action.payload);
      state.m2000.grupo.data[index][2] = false;
    },

    addFilter3001SubArea: (state, action: PayloadAction<any>) => {
      const index = state.m3000.m3001.subArea.data.findIndex(([str, _]: any) => str === action.payload);
      state.m3000.m3001.subArea.data[index][2] = true;
    },
    removeFilter3001SubArea: (state, action: PayloadAction<any>) => {
      const index = state.m3000.m3001.subArea.data.findIndex(([str, _]: any) => str === action.payload);
      state.m3000.m3001.subArea.data[index][2] = false;
    },
    // addFilter3001Grupo: (state, action: PayloadAction<any>) => {
    //   const index = state.m3000.m3001.grupo.data.findIndex(
    //     ([str, _]: any) => str === action.payload
    //   );
    //   state.m3000.m3001.grupo.data[index][2] = true;
    // },
    // removeFilter3001Grupo: (state, action: PayloadAction<any>) => {
    //   const index = state.m3000.m3001.grupo.data.findIndex(
    //     ([str, _]: any) => str === action.payload
    //   );
    //   state.m3000.m3001.grupo.data[index][2] = false;
    // },
    // addFilter3001SubGrupo: (state, action: PayloadAction<any>) => {
    //   const index = state.m3000.m3001.subGrupo.data.findIndex(
    //     ([str, _]: any) => str === action.payload
    //   );
    //   state.m3000.m3001.subGrupo.data[index][2] = true;
    // },
    // removeFilter3001SubGrupo: (state, action: PayloadAction<any>) => {
    //   const index = state.m3000.m3001.region.data.findIndex(
    //     ([str, _]: any) => str === action.payload
    //   );
    //   state.m3000.m3001.region.data[index][2] = false;
    // },
    addFilter3001Region: (state, action: PayloadAction<any>) => {
      const index = state.m3000.m3001.region.data.findIndex(([str, _]: any) => str === action.payload);
      state.m3000.m3001.region.data[index][2] = true;
    },
    removeFilter3001Region: (state, action: PayloadAction<any>) => {
      const index = state.m3000.m3001.region.data.findIndex(([str, _]: any) => str === action.payload);
      state.m3000.m3001.region.data[index][2] = false;
    },
    addFilter3001TipoIes: (state, action: PayloadAction<any>) => {
      const index = state.m3000.m3001.tipo_ies.data.findIndex(([str, _]: any) => str === action.payload);
      state.m3000.m3001.tipo_ies.data[index][2] = true;
    },
    removeFilter3001TipoIes: (state, action: PayloadAction<any>) => {
      const index = state.m3000.m3001.tipo_ies.data.findIndex(([str, _]: any) => str === action.payload);
      state.m3000.m3001.tipo_ies.data[index][2] = false;
    },

    addFilter3002Area: (state, action: PayloadAction<any>) => {
      const index = state.m3000.m3002.area.data.findIndex(([str, _]: any) => str === action.payload);
      state.m3000.m3002.area.data[index][2] = true;
    },
    addFilter3002TipoIes: (state, action: PayloadAction<any>) => {
      const index = state.m3000.m3002.tipo_ies.data.findIndex(([str, _]: any) => str === action.payload);
      state.m3000.m3002.tipo_ies.data[index][2] = true;
    },
    addFilter3002Carrera: (state, action: PayloadAction<any>) => {
      const index = state.m3000.m3002.carrera.data.findIndex(([str, _]: any) => str === action.payload);
      state.m3000.m3002.carrera.data[index][2] = true;
    },
    addFilter3003TipoIes: (state, action: PayloadAction<any>) => {
      const index = state.m3000.m3003.tipo_ies.data.findIndex(([str, _]: any) => str === action.payload);
      state.m3000.m3003.tipo_ies.data[index][2] = true;
    },
    addFilter3003Area: (state, action: PayloadAction<any>) => {
      const index = state.m3000.m3003.area.data.findIndex(([str, _]: any) => str === action.payload);
      state.m3000.m3003.area.data[index][2] = true;
    },
    addFilter3003NombreIes: (state, action: PayloadAction<any>) => {
      const index = state.m3000.m3003.nombre_ies.data.findIndex(([str, _]: any) => str === action.payload);
      state.m3000.m3003.nombre_ies.data[index][2] = true;
    },
    addFilter3003NombreCarreraGenerica: (state, action: PayloadAction<any>) => {
      const index = state.m3000.m3003.nombre_carrera_genérica.data.findIndex(([str, _]: any) => str === action.payload);
      state.m3000.m3003.nombre_carrera_genérica.data[index][2] = true;
    },
    addFilter3004DescGrupoPpal: (state, action: PayloadAction<any>) => {
      const index = state.m3000.m3004.descr_grupo_principal.data.findIndex(([str, _]: any) => str === action.payload);
      state.m3000.m3004.descr_grupo_principal.data[index][2] = true;
    },
    addFilter3004DescSubGrupoPpal: (state, action: PayloadAction<any>) => {
      const index = state.m3000.m3004.descr_subgrupo_principal.data.findIndex(
        ([str, _]: any) => str === action.payload
      );
      state.m3000.m3004.descr_subgrupo_principal.data[index][2] = true;
    },
    addFilter3004GlosaRegion: (state, action: PayloadAction<any>) => {
      const index = state.m3000.m3004.glosa_region.data.findIndex(([str, _]: any) => str === action.payload);
      state.m3000.m3004.glosa_region.data[index][2] = true;
    },
    addFilter3005GlosaSeccion: (state, action: PayloadAction<any>) => {
      const index = state.m3000.m3005.glosa_seccion.data.findIndex(([str, _]: any) => str === action.payload);
      state.m3000.m3005.glosa_seccion.data[index][2] = true;
    },
    addFilter3005DescGrupoPpal: (state, action: PayloadAction<any>) => {
      const index = state.m3000.m3005.descr_grupo_principal.data.findIndex(([str, _]: any) => str === action.payload);
      state.m3000.m3005.descr_grupo_principal.data[index][2] = true;
    },
    addFilter3006DescGrupoUnidades: (state, action: PayloadAction<any>) => {
      const index = state.m3000.m3006.desc_grupo_unidades.data.findIndex(([str, _]: any) => str === action.payload);
      state.m3000.m3006.desc_grupo_unidades.data[index][2] = true;
    },
    addFilter3006DescSubGrupoPpal: (state, action: PayloadAction<any>) => {
      const index = state.m3000.m3006.desc_subgrupo_principal.data.findIndex(([str, _]: any) => str === action.payload);
      state.m3000.m3006.desc_subgrupo_principal.data[index][2] = true;
    },
    addFilter4000Region: (state, action: PayloadAction<any>) => {
      const index = state.m4000.region.data.findIndex(([str, _]: any) => str === action.payload);
      state.m4000.region.data[index][2] = true;
    },
    addFilter4000JobArea: (state, action: PayloadAction<any>) => {
      const index = state.m4000.jobArea.data.findIndex(([str, _]: any) => str === action.payload);
      state.m4000.jobArea.data[index][2] = true;
    },
    removeFilter3002Area: (state, action: PayloadAction<any>) => {
      const index = state.m3000.m3002.area.data.findIndex(([str, _]: any) => str === action.payload);
      state.m3000.m3002.area.data[index][2] = false;
    },
    removeFilter3002TipoIes: (state, action: PayloadAction<any>) => {
      const index = state.m3000.m3002.tipo_ies.data.findIndex(([str, _]: any) => str === action.payload);
      state.m3000.m3002.tipo_ies.data[index][2] = false;
    },
    removeFilter3002Carrera: (state, action: PayloadAction<any>) => {
      const index = state.m3000.m3002.carrera.data.findIndex(([str, _]: any) => str === action.payload);
      state.m3000.m3002.carrera.data[index][2] = false;
    },
    removeFilter3003TipoIes: (state, action: PayloadAction<any>) => {
      const index = state.m3000.m3003.tipo_ies.data.findIndex(([str, _]: any) => str === action.payload);
      state.m3000.m3003.tipo_ies.data[index][2] = false;
    },
    removeFilter3003Area: (state, action: PayloadAction<any>) => {
      const index = state.m3000.m3003.area.data.findIndex(([str, _]: any) => str === action.payload);
      state.m3000.m3003.area.data[index][2] = false;
    },
    removeFilter3003NombreIes: (state, action: PayloadAction<any>) => {
      const index = state.m3000.m3003.nombre_ies.data.findIndex(([str, _]: any) => str === action.payload);
      state.m3000.m3003.nombre_ies.data[index][2] = false;
    },
    removeFilter3003NombreCarreraGenerica: (state, action: PayloadAction<any>) => {
      const index = state.m3000.m3003.nombre_carrera_genérica.data.findIndex(([str, _]: any) => str === action.payload);
      state.m3000.m3003.nombre_carrera_genérica.data[index][2] = false;
    },
    removeFilter3004DescGrupoPpal: (state, action: PayloadAction<any>) => {
      const index = state.m3000.m3004.descr_grupo_principal.data.findIndex(([str, _]: any) => str === action.payload);
      state.m3000.m3004.descr_grupo_principal.data[index][2] = false;
    },
    removeFilter3004DescSubGrupoPpal: (state, action: PayloadAction<any>) => {
      const index = state.m3000.m3004.descr_subgrupo_principal.data.findIndex(
        ([str, _]: any) => str === action.payload
      );
      state.m3000.m3004.descr_subgrupo_principal.data[index][2] = false;
    },
    removeFilter3004GlosaRegion: (state, action: PayloadAction<any>) => {
      const index = state.m3000.m3004.glosa_region.data.findIndex(([str, _]: any) => str === action.payload);
      state.m3000.m3004.glosa_region.data[index][2] = false;
    },
    removeFilter3005GlosaSeccion: (state, action: PayloadAction<any>) => {
      const index = state.m3000.m3005.glosa_seccion.data.findIndex(([str, _]: any) => str === action.payload);
      state.m3000.m3005.glosa_seccion.data[index][2] = false;
    },
    removeFilter3005DescGrupoPpal: (state, action: PayloadAction<any>) => {
      const index = state.m3000.m3005.descr_grupo_principal.data.findIndex(([str, _]: any) => str === action.payload);
      state.m3000.m3005.descr_grupo_principal.data[index][2] = false;
    },
    removeFilter3006DescGrupoUnidades: (state, action: PayloadAction<any>) => {
      const index = state.m3000.m3006.desc_grupo_unidades.data.findIndex(([str, _]: any) => str === action.payload);
      state.m3000.m3006.desc_grupo_unidades.data[index][2] = false;
    },
    removeFilter3006DescSubGrupoPpal: (state, action: PayloadAction<any>) => {
      const index = state.m3000.m3006.desc_subgrupo_principal.data.findIndex(([str, _]: any) => str === action.payload);
      state.m3000.m3006.desc_subgrupo_principal.data[index][2] = false;
    },
    removeFilter4000Region: (state, action: PayloadAction<any>) => {
      const index = state.m4000.region.data.findIndex(([str, _]: any) => str === action.payload);
      state.m4000.region.data[index][2] = false;
    },
    removeFilter4000JobArea: (state, action: PayloadAction<any>) => {
      const index = state.m4000.jobArea.data.findIndex(([str, _]: any) => str === action.payload);
      state.m4000.jobArea.data[index][2] = false;
    },
  },
  extraReducers: (builder) => {
    //getInitialFilters
    builder.addCase(getInitialFilters.fulfilled, (state, action) => {
      state.m1000.acrCarrera.data = action.payload.filters1000.filter1000AcrCarrera;
      state.m1000.areaCarrera.data = action.payload.filters1000.filter1000AreaCarrera;
      state.m1000.clasIes.data = action.payload.filters1000.filter1000ClasIes;
      state.m1000.nomIes.data = action.payload.filters1000.filter1000NomIes;
      state.m1000.sexo.data = action.payload.filters1000.filter1000Sexo;
      state.m1000.agno.data = action.payload.filters1000.filter1000Agno;

      state.m2000.region.data = action.payload.filters2000.filter2000Region;
      state.m2000.sexo.data = action.payload.filters2000.filter2000Sexo;
      state.m2000.trimestre.data = action.payload.filters2000.filter2000Trimestre;
      state.m2000.rama.data = action.payload.filters2000.filter2000Rama;
      state.m2000.grupo.data = action.payload.filters2000.filter2000Grupo;

      // state.m3000.m3001.grupo.data = action.payload.filters3000.filter3001Grupo;
      // state.m3000.m3001.subGrupo.data = action.payload.filters3000.filter3001SubGrupo;
      state.m3000.m3001.subArea.data = action.payload.filters3000.filter3001SubArea;
      state.m3000.m3001.region.data = action.payload.filters3000.filter3001Region;
      state.m3000.m3001.tipo_ies.data = action.payload.filters3000.filter3001TipoIes;

      state.m3000.m3001.subArea.loading = false;
      state.m3000.m3001.subArea.error = null;
      // state.m3000.m3001.grupo.loading = false;
      // state.m3000.m3001.grupo.error = null;
      // state.m3000.m3001.subGrupo.loading = false;
      // state.m3000.m3001.subGrupo.error = null;
      state.m3000.m3001.region.loading = false;
      state.m3000.m3001.region.error = null;
      state.m3000.m3001.tipo_ies.loading = false;
      state.m3000.m3001.tipo_ies.error = null;

      state.m3000.m3002.area.data = action.payload.filters3000.filter3002Area;
      state.m3000.m3002.tipo_ies.data = action.payload.filters3000.filter3002TipoIes;
      state.m3000.m3002.carrera.data = action.payload.filters3000.filter3002Carrera;

      state.m3000.m3002.area.loading = false;
      state.m3000.m3002.tipo_ies.loading = false;
      state.m3000.m3002.carrera.loading = false;
      state.m3000.m3002.area.error = null;
      state.m3000.m3002.tipo_ies.error = null;
      state.m3000.m3002.carrera.error = null;

      state.m3000.m3003.area.data = action.payload.filters3000.filter3003Area;
      state.m3000.m3003.area.loading = false;
      state.m3000.m3003.area.error = null;

      state.m3000.m3003.nombre_carrera_genérica.data = action.payload.filters3000.filter3003NombreCarreraGenerica;
      state.m3000.m3003.nombre_carrera_genérica.loading = false;
      state.m3000.m3003.nombre_carrera_genérica.error = null;

      state.m3000.m3003.nombre_ies.data = action.payload.filters3000.filter3003NombreIes;
      state.m3000.m3003.nombre_ies.loading = false;
      state.m3000.m3003.nombre_ies.error = null;

      state.m3000.m3003.tipo_ies.data = action.payload.filters3000.filter3003TipoIes;
      state.m3000.m3003.tipo_ies.loading = false;
      state.m3000.m3003.tipo_ies.error = null;
      // m3004
      state.m3000.m3004.descr_grupo_principal.data = action.payload.filters3000.filter3004DescGrupoPpal;
      state.m3000.m3004.descr_grupo_principal.loading = false;
      state.m3000.m3004.descr_grupo_principal.error = null;

      state.m3000.m3004.descr_subgrupo_principal.data = action.payload.filters3000.filter3004DescSubGrupoPpal;
      state.m3000.m3004.descr_subgrupo_principal.loading = false;
      state.m3000.m3004.descr_subgrupo_principal.error = null;

      state.m3000.m3004.glosa_region.data = action.payload.filters3000.filter3004GlosaRegion;
      state.m3000.m3004.glosa_region.loading = false;
      state.m3000.m3004.glosa_region.error = null;
      // m3005
      state.m3000.m3005.descr_grupo_principal.data = action.payload.filters3000.filter3005DescGrupoPpal;
      state.m3000.m3005.descr_grupo_principal.loading = false;
      state.m3000.m3005.descr_grupo_principal.error = null;

      state.m3000.m3005.glosa_seccion.data = action.payload.filters3000.filter3005GlosaSeccion;
      state.m3000.m3005.glosa_seccion.loading = false;
      state.m3000.m3005.glosa_seccion.error = null;
      // m3006
      state.m3000.m3006.desc_grupo_unidades.data = action.payload.filters3000.filter3006DescGrupoUnidades;
      state.m3000.m3006.desc_grupo_unidades.loading = false;
      state.m3000.m3006.desc_grupo_unidades.error = null;

      state.m3000.m3006.desc_subgrupo_principal.data = action.payload.filters3000.filter3006DescSubGrupoPpal;
      state.m3000.m3006.desc_subgrupo_principal.loading = false;
      state.m3000.m3006.desc_subgrupo_principal.error = null;

      // m4000
      state.m4000.region.data = action.payload.filters4000.filter4000Region;
      state.m4000.jobArea.data = action.payload.filters4000.filter4000JobArea;

      // m5000
      state.m5000.region = action.payload.filters5000.filterRegion;
      state.m5000.region = action.payload.filters5000.filterSector;
      state.m5000.region = action.payload.filters5000.filterYear;
    });
    builder.addCase(getInitialFilters.pending, (state, action) => {
      state.m3000.m3001.tipo_ies.loading = true;
      state.m3000.m3001.tipo_ies.error = null;
      state.m3000.m3001.region.loading = true;
      state.m3000.m3001.region.error = null;
      state.m3000.m3001.tipo_ies.loading = true;
      state.m3000.m3001.tipo_ies.error = null;
    });
    builder.addCase(getInitialFilters.rejected, (state, action) => {
      state.m3000.m3001.tipo_ies.loading = false;
      state.m3000.m3001.tipo_ies.error = action.error;
      state.m3000.m3001.region.loading = false;
      state.m3000.m3001.region.error = action.error;
      state.m3000.m3001.tipo_ies.loading = false;
      state.m3000.m3001.tipo_ies.error = action.error;
    });
  },
});

export const {
  addFilter1000Agno,
  addFilter2000Grupo,
  addFilter2000Rama,
  removeFilter1000Agno,
  removeFilter2000Grupo,
  removeFilter2000Rama,
  setAll1000AgnoTrue,
  setAll2000GrupoTrue,
  setAll2000RamaTrue,
  addFilter4000JobArea,
  addFilter4000Region,
  removeFilter4000JobArea,
  removeFilter4000Region,
  setAllFilter4000RegionTrue,
  setAllFilter4000JobAreaTrue,
  addFilter1000AcrCarrera,
  addFilter1000AreaCarrera,
  addFilter1000ClasIes,
  addFilter1000NomIes,
  addFilter1000Sexo,
  addFilter2000Region,
  addFilter2000Sexo,
  addFilter2000Trimestre,
  removeFilter1000AcrCarrera,
  removeFilter1000AreaCarrera,
  removeFilter1000ClasIes,
  removeFilter1000NomIes,
  removeFilter1000Sexo,
  removeFilter2000Region,
  removeFilter2000Sexo,
  removeFilter2000Trimestre,
  setAll1000AcrCarreraTrue,
  setAll1000AreaCarreraTrue,
  setAll1000ClasIesTrue,
  setAll1000NomIesTrue,
  setAll1000SexoTrue,
  setAll2000RegionTrue,
  setAll2000SexoTrue,
  setAll2000TrimestreTrue,
  addRemoveFilter3004Page,
  setAll3001SubAreaTrue,
  // setAll3001GrupoTrue,
  // setAll3001SubGrupoTrue,
  setAll3001RegionTrue,
  setAll3001TipoIesTrue,
  addFilter3001SubArea,
  // addFilter3001Grupo,
  // addFilter3001SubGrupo,
  addFilter3001Region,
  addFilter3001TipoIes,
  removeFilter3001SubArea,
  // removeFilter3001Grupo,
  // removeFilter3001SubGrupo,
  removeFilter3001Region,
  removeFilter3001TipoIes,
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
  removeFilter3006DescSubGrupoPpal,
  setAllFilter3002AreaTrue,
  setAllFilter3002CarreraTrue,
  setAllFilter3002TipoIesTrue,
  setAllFilter3003AreaTrue,
  setAllFilter3003NombreCarreraGenericaTrue,
  setAllFilter3003NombreIesTrue,
  setAllFilter3003TipoIesTrue,
  setAllFilter3004DescGrupoPpalTrue,
  setAllFilter3004DescSubGrupoPpalTrue,
  setAllFilter3004GlosaRegionTrue,
  setAllFilter3005DescGrupoPpalTrue,
  setAllFilter3005GlosaSeccionTrue,
  setAllFilter3006DescGrupoUnidadesTrue,
  setAllFilter3006DescSubGrupoPpalTrue,
} = filtersSlice.actions;

export const filterReducer = filtersSlice.reducer;
