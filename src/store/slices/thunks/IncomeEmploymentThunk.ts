import { RootState } from "@/store/store";
import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

export interface I3001Data {
  e8?: number[];
  cod_area?: number[];
  region?: number[];
}

export interface Data3005Interface {
  nivel: number;
  glosa_nivel: string;
  avg_ing_t_t: number;
  sum_fact_cal: number;
  cod_caenes_digito: number;
  grupo_principal: number;
}
export interface Data3006GraphInterface {
  descr_grupo_principal: string;
  cuartil_automatizacion: string;
  frecuencia_cuartil_casen: number;
  grupo_principal: number;
  grupo_unidades: number;
  descr_grupos_unidades: string;
  subgrupo_principal: number;
  descr_subgrupo_principal: string;
}
export interface Data3006TableInterface {
  descr_grupos_unidades: string;
  avg_prom_rii: number;
  subgrupo_principal: number;
  grupo_unidades: number;
}

export interface Data3006Interface {
  responseGraph: Data3006GraphInterface[];
  responseTable: Data3006TableInterface[];
}

export interface Data3006Interface {}
//  DATA
//1000
export const fetch1000_1Data = createAsyncThunk("incomeEmployment/fetch1000_1Data", async (_, { getState }) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/m1000/data-1000-1`, {
      method: "POST",
      headers: {
        // 'Authorization': 'Basic ' + base64.encode("APIKEY:X"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return isRejectedWithValue(error);
  }
});
export const fetch1000_2Data = createAsyncThunk("incomeEmployment/fetch1000_2Data", async (_, { getState }) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/m1000/data-1000-2`, {
      method: "POST",
      headers: {
        // 'Authorization': 'Basic ' + base64.encode("APIKEY:X"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return isRejectedWithValue(error);
  }
});
export const fetch1000_3Data = createAsyncThunk("incomeEmployment/fetch1000_3Data", async (_, { getState }) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/m1000/data-1000-3`, {
      method: "POST",
      headers: {
        // 'Authorization': 'Basic ' + base64.encode("APIKEY:X"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return isRejectedWithValue(error);
  }
});
export const fetch1000_4Data = createAsyncThunk("incomeEmployment/fetch1000_4Data", async (_, { getState }) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/m1000/data-1000-4`, {
      method: "POST",
      headers: {
        // 'Authorization': 'Basic ' + base64.encode("APIKEY:X"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return isRejectedWithValue(error);
  }
});
export const fetch1000_5Data = createAsyncThunk("incomeEmployment/fetch1000_5Data", async (_, { getState }) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/m1000/data-1000-5`, {
      method: "POST",
      headers: {
        // 'Authorization': 'Basic ' + base64.encode("APIKEY:X"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return isRejectedWithValue(error);
  }
});
export const fetch1000_6Data = createAsyncThunk("incomeEmployment/fetch1000_6Data", async (_, { getState }) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/m1000/data-1000-6`, {
      method: "POST",
      headers: {
        // 'Authorization': 'Basic ' + base64.encode("APIKEY:X"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return isRejectedWithValue(error);
  }
});
export const fetch1000_7Data = createAsyncThunk("incomeEmployment/fetch1000_7Data", async (_, { getState }) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/m1000/data-1000-7`, {
      method: "POST",
      headers: {
        // 'Authorization': 'Basic ' + base64.encode("APIKEY:X"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return isRejectedWithValue(error);
  }
});

//2000

export const fetch2001Data = createAsyncThunk("incomeEmployment/fetch2001Data", async (_, { getState }) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/m2000/data-2001`, {
      method: "POST",
      headers: {
        // 'Authorization': 'Basic ' + base64.encode("APIKEY:X"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return isRejectedWithValue(error);
  }
});
export const fetch2100Data = createAsyncThunk("incomeEmployment/fetch2100Data", async (_, { getState }) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/m2000/data-2100`, {
      method: "POST",
      headers: {
        // 'Authorization': 'Basic ' + base64.encode("APIKEY:X"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return isRejectedWithValue(error);
  }
});
export const fetch2103Data = createAsyncThunk("incomeEmployment/fetch2103Data", async (_, { getState }) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/m2000/data-2103`, {
      method: "POST",
      headers: {
        // 'Authorization': 'Basic ' + base64.encode("APIKEY:X"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return isRejectedWithValue(error);
  }
});
//  3001
export const fetch3001Data = createAsyncThunk("incomeEmployment/fetch3001data", async (_, { getState }) => {
  const state = getState() as RootState;
  const state3001 = state.filters.m3000.m3001;
  const { subArea, tipo_ies, region } = state3001;

  let subAreaData = [1];
  let tipoIesData = [];
  let regionData = [];

  if (subArea.data.length > 0) {
    subAreaData = subArea.data
      .filter((item) => item[2] === true) // Filtrar solo los arreglos con la tercera posición true
      .map((item) => item[0]);
  }
  if (region.data.length > 0) {
    regionData = region.data
      .filter((item) => item[2] === true) // Filtrar solo los arreglos con la tercera posición true
      .map((item) => item[0]);
  }
  if (tipo_ies.data.length > 0) {
    tipoIesData = tipo_ies.data
      .filter((item) => item[2] === true) // Filtrar solo los arreglos con la tercera posición true
      .map((item) => item[0]);
  }
  try {
    const data = {
      subArea: subAreaData,
      tipo_ies: tipoIesData,
      region: regionData,
    };
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/casen/raw-casen/data-3001`, {
      method: "POST",
      headers: {
        // 'Authorization': 'Basic ' + base64.encode("APIKEY:X"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return isRejectedWithValue(error);
  }
});

export const fetch3002Data = createAsyncThunk("incomeEmployment/fetch3002Data", async (_, { getState }) => {
  const state = getState() as RootState;
  const state3002 = state.filters.m3000.m3002;
  const { tipo_ies, area, carrera } = state3002;

  let tipoIesData = [];
  let areaData = [];
  let carreraData = [];

  if (area.data.length > 0) {
    areaData = area.data
      .filter((item) => item[2] === true) // Filtrar solo los arreglos con la tercera posición true
      .map((item) => item[1]);
  }
  if (carrera.data.length > 0) {
    carreraData = carrera.data
      .filter((item) => item[2] === true) // Filtrar solo los arreglos con la tercera posición true
      .map((item) => item[1]);
  }
  if (tipo_ies.data.length > 0) {
    tipoIesData = tipo_ies.data
      .filter((item) => item[2] === true) // Filtrar solo los arreglos con la tercera posición true
      .map((item) => item[1]);
  }
  try {
    const data = {
      tipo_ies: tipoIesData,
      cod_area: areaData,
      carrera: carreraData,
    };
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/casen/raw-casen/data-3002`, {
      method: "POST",
      headers: {
        // 'Authorization': 'Basic ' + base64.encode("APIKEY:X"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return isRejectedWithValue(error);
  }
});
export const fetch3003Data = createAsyncThunk("incomeEmployment/fetch3003Data", async (_, { getState }) => {
  const state = getState() as RootState;
  const state3003 = state.filters.m3000.m3003;
  const { area, nombre_carrera_genérica, nombre_ies, tipo_ies } = state3003;
  let areaData: any[] = [];
  let nombre_carrera_genéricaData: any[] = [];
  let nombre_iesData: any[] = [];
  let tipo_iesData: any[] = [];

  if (area.data.length > 0) {
    areaData = area.data
      .filter((item) => item[2] === true) // Filtrar solo los arreglos con la tercera posición true
      .map((item) => item[1]);
  }
  if (nombre_carrera_genérica.data.length > 0) {
    nombre_carrera_genéricaData = nombre_carrera_genérica.data
      .filter((item) => item[2] === true) // Filtrar solo los arreglos con la tercera posición true
      .map((item) => item[1]);
  }
  if (nombre_ies.data.length > 0) {
    nombre_iesData = nombre_ies.data
      .filter((item) => item[2] === true) // Filtrar solo los arreglos con la tercera posición true
      .map((item) => item[1]);
  }
  if (tipo_ies.data.length > 0) {
    tipo_iesData = tipo_ies.data
      .filter((item) => item[2] === true) // Filtrar solo los arreglos con la tercera posición true
      .map((item) => item[1]);
  }
  try {
    const data = {
      area: areaData,
      nombre_carrera_genérica: nombre_carrera_genéricaData,
      nombre_ies: nombre_iesData,
      tipo_ies: tipo_iesData,
    };
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/casen/raw-casen/data-3003`, {
      method: "POST",
      headers: {
        // 'Authorization': 'Basic ' + base64.encode("APIKEY:X"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return isRejectedWithValue(error);
  }
});
export const fetch3004Data = createAsyncThunk("incomeEmployment/fetch3004Data", async (_, { getState }) => {
  const state = getState() as RootState;
  const state3004 = state.filters.m3000.m3004;
  const { descr_grupo_principal, descr_subgrupo_principal, glosa_region, page, pageSize } = state3004;
  let grupoPpalData: any[] = [];
  let subGrupoPpalData: any[] = [];
  let regionData: any[] = [];

  if (descr_grupo_principal.data.length > 0) {
    grupoPpalData = descr_grupo_principal.data
      .filter((item) => item[2] === true) // Filtrar solo los arreglos con la tercera posición true
      .map((item) => item[1]);
  }
  if (descr_subgrupo_principal.data.length > 0) {
    subGrupoPpalData = descr_subgrupo_principal.data
      .filter((item) => item[2] === true) // Filtrar solo los arreglos con la tercera posición true
      .map((item) => item[1]);
  }
  if (glosa_region.data.length > 0) {
    regionData = glosa_region.data
      .filter((item) => item[2] === true) // Filtrar solo los arreglos con la tercera posición true
      .map((item) => item[0]);
  }
  try {
    const data = {
      descr_grupo_principal: [],
      descr_subgrupo_principal: [],
      id_region: [],
      page: page,
      pageSize: pageSize,
    };
    // const data = {
    //   descr_grupo_principal: grupoPpalData,
    //   descr_subgrupo_principal: subGrupoPpalData,
    //   id_region: regionData,
    //   page: page,
    //   pageSize: pageSize,
    // };
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/casen/raw-casen/data-3004`, {
      method: "POST",
      headers: {
        // 'Authorization': 'Basic ' + base64.encode("APIKEY:X"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return isRejectedWithValue(error);
  }
});
export const fetch3005Data = createAsyncThunk("incomeEmployment/fetch3005Data", async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/casen/raw-casen/data-3005`, {
      method: "POST",
      headers: {
        // 'Authorization': 'Basic ' + base64.encode("APIKEY:X"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return isRejectedWithValue(error);
  }
});

export const fetch3006Data = createAsyncThunk("incomeEmployment/fetch3006Data", async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/casen/raw-casen/data-3006`, {
      method: "POST",
      headers: {
        // 'Authorization': 'Basic ' + base64.encode("APIKEY:X"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return isRejectedWithValue(error);
  }
});

export const fetch4000Data = createAsyncThunk("incomeEmployment/fetch4000Data", async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/m4000/data-4000`, {
      method: "POST",
      headers: {
        // 'Authorization': 'Basic ' + base64.encode("APIKEY:X"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return isRejectedWithValue(error);
  }
});
