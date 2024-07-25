import { RootState } from "../../store";

import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";

export const fetchSectors = createAsyncThunk(
  "technologicalAnalysis/fetchSectors",
  async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/corfo/raw-innova/sector`,
        {
          method: "POST",
          headers: {
            // 'Authorization': 'Basic ' + base64.encode("APIKEY:X"),
            "Content-Type": "application/json",
          },
        }
      );
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return isRejectedWithValue(error);
    }
  }
);
export const fetchYears = createAsyncThunk(
  "technologicalAnalysis/fetchYears",
  async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/corfo/raw-innova/year`,
        {
          method: "POST",
          headers: {
            // 'Authorization': 'Basic ' + base64.encode("APIKEY:X"),
            "Content-Type": "application/json",
          },
        }
      );
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return isRejectedWithValue(error);
    }
  }
);
export const fetchRegions = createAsyncThunk(
  "technologicalAnalysis/fetchRegions",
  async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/corfo/raw-innova/region`,
        {
          method: "POST",
          headers: {
            // 'Authorization': 'Basic ' + base64.encode("APIKEY:X"),
            "Content-Type": "application/json",
          },
        }
      );
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return isRejectedWithValue(error);
    }
  }
);

export interface ITechExpenses {
  anio_adjudicacion: any[];
  region_ejecucion: any[];
  mercado_objetivo_final: any[];
}

export const fetchTechExpenses = createAsyncThunk<{ x: string; y: number }[]>(
  "technologicalAnalysis/fetchTechExpenses",
  async (data, { getState }) => {
    const anioAdjudicacion = [2024, 2023, 2022, 2021];

    const state = getState() as RootState;
    const techState = state.techanalysis.techAnalysisState.filters;
    const { year, region, economicSector } = techState;
    // const year = state.techanalysis.techAnalysisState.filters.year;
    // const region = state.techanalysis.techAnalysisState.filters.region;
    // const economicSector =
    //   state.techanalysis.techAnalysisState.filters.economicSector;

    let regionData: string[] = region
      .filter(([region, value]: any) => value)
      .map(([region, _]: any) => region);

    let sectorData: string[] = economicSector
      .filter(([economicSector, value]: any) => value)
      .map(([economicSector, _]: any) => economicSector);

    let yearData: number[] = year
      .filter(([year, value]: any) => value)
      .map(([year, _]: any) => year);
    if (yearData.length === 0) {
      yearData = anioAdjudicacion;
    }
    try {
      const requestBody: ITechExpenses = {
        anio_adjudicacion: yearData,
        region_ejecucion: regionData,
        mercado_objetivo_final: [],
      };
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/corfo/raw-innova/tech-expenses`,
        {
          method: "POST",
          headers: {
            // 'Authorization': 'Basic ' + base64.encode("APIKEY:X"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.log(error);
      return isRejectedWithValue(error);
    }
  }
);
