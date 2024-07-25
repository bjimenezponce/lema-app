import { SerializedError } from "@reduxjs/toolkit";

export interface FiltersStateInterface {
  m1000: {
    acrCarrera: {
      loading: boolean;
      error: SerializedError | null;
      data: any[];
    };
    clasIes: {
      loading: boolean;
      error: SerializedError | null;
      data: any[];
    };
    nomIes: {
      loading: boolean;
      error: SerializedError | null;
      data: any[];
    };
    areaCarrera: {
      loading: boolean;
      error: SerializedError | null;
      data: any[];
    };
    sexo: {
      loading: boolean;
      error: SerializedError | null;
      data: any[];
    };
    agno: {
      loading: boolean;
      error: SerializedError | null;
      data: any[];
    };
  };
  m2000: {
    region: {
      loading: boolean;
      error: SerializedError | null;
      data: any[];
    };
    trimestre: {
      loading: boolean;
      error: SerializedError | null;
      data: any[];
    };
    sexo: {
      loading: boolean;
      error: SerializedError | null;
      data: any[];
    };
    rama: {
      loading: boolean;
      error: SerializedError | null;
      data: any[];
    };
    grupo: {
      loading: boolean;
      error: SerializedError | null;
      data: any[];
    };
  };
  m3000: {
    m3001: {
      subArea: {
        loading: boolean;
        error: SerializedError | null;
        data: any[];
      };
      // grupo: {
      //   loading: boolean;
      //   error: SerializedError | null;
      //   data: any[];
      // };
      // subGrupo: {
      //   loading: boolean;
      //   error: SerializedError | null;
      //   data: any[];
      // };
      region: {
        loading: boolean;
        error: SerializedError | null;
        data: any[];
      };
      tipo_ies: {
        loading: boolean;
        error: SerializedError | null;
        data: any[];
      };
    };
    m3002: {
      carrera: {
        loading: boolean;
        error: SerializedError | null;
        data: any[];
      };
      tipo_ies: {
        loading: boolean;
        error: SerializedError | null;
        data: any[];
      };
      area: {
        loading: boolean;
        error: SerializedError | null;
        data: any[];
      };
    };
    m3003: {
      tipo_ies: {
        loading: boolean;
        error: SerializedError | null;
        data: any[];
      };
      nombre_ies: {
        loading: boolean;
        error: SerializedError | null;
        data: any[];
      };
      nombre_carrera_genérica: {
        loading: boolean;
        error: SerializedError | null;
        data: any[];
      };
      area: {
        loading: boolean;
        error: SerializedError | null;
        data: any[];
      };
    };
    m3004: {
      descr_grupo_principal: {
        loading: boolean;
        error: SerializedError | null;
        data: any[];
      };
      descr_subgrupo_principal: {
        loading: boolean;
        error: SerializedError | null;
        data: any[];
      };
      glosa_region: {
        loading: boolean;
        error: SerializedError | null;
        data: any[];
      };
      page: number;
      pageSize: number;
    };
    m3005: {
      glosa_seccion: {
        loading: boolean;
        error: SerializedError | null;
        data: any[];
      };
      descr_grupo_principal: {
        loading: boolean;
        error: SerializedError | null;
        data: any[];
      };
    };
    m3006: {
      desc_grupo_unidades: {
        loading: boolean;
        error: SerializedError | null;
        data: any[];
      };
      desc_subgrupo_principal: {
        loading: boolean;
        error: SerializedError | null;
        data: any[];
      };
    };
  };
  m4000: {
    region: {
      loading: boolean;
      error: SerializedError | null;
      data: any[];
    };
    jobArea: {
      loading: boolean;
      error: SerializedError | null;
      data: any[];
    };
  };
  m5000: {
    sector: any[];
    year: any[];
    region: any[];
  };
}

export interface FiltersFromApi {
  filters3000: {
    filter3001Grupo: (string | number | boolean)[][];
    filter3001SubGrupo: (string | number | boolean)[][];
    filter3001Region: (string | number | boolean)[][];
    filter3001TipoIes: (string | number | boolean)[][];
    filter3002Area: any;
    filter3002TipoIes: any;
    filter3002Carrera: any;
    filter3003TipoIes: any;
    filter3003Area: any;
    filter3003NombreIes: any;
    filter3003NombreCarreraGenerica: any;
    filter3004DescGrupoPpal: any;
    filter3004DescSubGrupoPpal: any;
    filter3004GlosaRegion: any;
    filter3005GlosaSeccion: any;
    filter3005DescGrupoPpal: any;
    filter3006DescGrupoUnidades: any;
    filter3006DescSubGrupoPpal: any;
  };
  filters5000: {
    filterRegion: (string | number | boolean)[][];
    filterSector: (string | boolean)[][];
    filterYear: (number | boolean)[][];
  };
}
