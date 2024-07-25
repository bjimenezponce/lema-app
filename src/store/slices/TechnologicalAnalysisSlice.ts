import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import type {
  AsyncThunk,
  PayloadAction,
  SerializedError,
} from "@reduxjs/toolkit";
import {
  fetchSectors,
  fetchYears,
  fetchRegions,
  fetchTechExpenses,
} from "./thunks/technologicalAnalysisThunk";

export interface TechnologicalAnalysisFilters {
  economicSector: (string | boolean)[][];
  year: (number | boolean)[][];
  region: (string | boolean)[][];
}

export interface TechExpenses {
  loading: boolean;
  error: SerializedError | null;
  data: {
    x: string;
    y: number;
  }[];
}

export interface TechnologicalAnalysisState {
  techAnalysisState: {
    loading: boolean;
    error: SerializedError | null;
    filters: TechnologicalAnalysisFilters;
    data: {
      techExpenses: TechExpenses;
    };
  };
}

const initialState: TechnologicalAnalysisState = {
  techAnalysisState: {
    loading: false,
    error: null,
    filters: {
      economicSector: [],
      year: [],
      region: [],
    },
    data: {
      techExpenses: {
        loading: false,
        error: null,
        data: [],
      },
    },
  },
};

export const techAnalysisSlice = createSlice({
  name: "technologicalAnalysis",
  initialState,
  reducers: {
    setTechnologicalAnalysisState: (state, action: PayloadAction<any>) => {
      const { economicSector, region, year } =
        action.payload.techAnalysisState.filters;
      state.techAnalysisState.filters.economicSector = economicSector;
      state.techAnalysisState.filters.region = region;
      state.techAnalysisState.filters.year = year;
    },
    setAllRegionsTrue: (state, action: PayloadAction<any>) => {
      state.techAnalysisState.filters.region = action.payload;
    },
    setAllSectorsTrue: (state, action: PayloadAction<any>) => {
      state.techAnalysisState.filters.economicSector = action.payload;
    },
    addSector: (state, action: PayloadAction<any>) => {
      const index = state.techAnalysisState.filters.economicSector.findIndex(
        ([str, _]) => str === action.payload
      );
      state.techAnalysisState.filters.economicSector[index][1] = true;
    },
    addYear: (state, action: PayloadAction<any>) => {
      const index = state.techAnalysisState.filters.year.findIndex(
        ([str, _]) => str === action.payload
      );
      state.techAnalysisState.filters.year[index][1] = true;
    },
    addRegion: (state, action: PayloadAction<any>) => {
      const index = state.techAnalysisState.filters.region.findIndex(
        ([str, _]) => str === action.payload
      );
      state.techAnalysisState.filters.region[index][1] = true;
    },
    removeSector: (state, action: PayloadAction<any>) => {
      const index = state.techAnalysisState.filters.economicSector.findIndex(
        ([str, _]) => str === action.payload
      );
      state.techAnalysisState.filters.economicSector[index][1] = false;
    },
    removeYear: (state, action: PayloadAction<any>) => {
      const index = state.techAnalysisState.filters.year.findIndex(
        ([str, _]) => str === action.payload
      );
      state.techAnalysisState.filters.year[index][1] = false;
    },
    removeRegion: (state, action: PayloadAction<any>) => {
      const index = state.techAnalysisState.filters.region.findIndex(
        ([str, _]) => str === action.payload
      );
      state.techAnalysisState.filters.region[index][1] = false;
    },
  },
  extraReducers: (builder) => {
    //Sectors
    builder.addCase(fetchSectors.fulfilled, (state, action) => {
      state.techAnalysisState.filters.economicSector = action.payload;
      state.techAnalysisState.loading = false;
      state.techAnalysisState.error = null;
    });
    builder.addCase(fetchSectors.pending, (state, action) => {
      state.techAnalysisState.loading = true;
      state.techAnalysisState.error = null;
    });

    builder.addCase(fetchSectors.rejected, (state, action) => {
      state.techAnalysisState.loading = false;
      state.techAnalysisState.error = action.error;
    });
    //Years
    builder.addCase(fetchYears.fulfilled, (state, action) => {
      state.techAnalysisState.filters.year = action.payload;
      state.techAnalysisState.loading = false;
      state.techAnalysisState.error = null;
    });
    builder.addCase(fetchYears.pending, (state, action) => {
      state.techAnalysisState.loading = true;
      state.techAnalysisState.error = null;
    });

    builder.addCase(fetchYears.rejected, (state, action) => {
      state.techAnalysisState.loading = false;
      state.techAnalysisState.error = action.error;
    });
    //Region
    builder.addCase(fetchRegions.fulfilled, (state, action) => {
      state.techAnalysisState.filters.region = action.payload;
      state.techAnalysisState.loading = false;
      state.techAnalysisState.error = null;
    });
    builder.addCase(fetchRegions.pending, (state, action) => {
      state.techAnalysisState.loading = true;
      state.techAnalysisState.error = null;
    });

    builder.addCase(fetchRegions.rejected, (state, action) => {
      state.techAnalysisState.loading = false;
      state.techAnalysisState.error = action.error;
    });
    //Tech Expenses
    builder.addCase(fetchTechExpenses.fulfilled, (state, action) => {
      state.techAnalysisState.data.techExpenses.data = action.payload;
      state.techAnalysisState.data.techExpenses.loading = false;
      state.techAnalysisState.data.techExpenses.error = null;
    });
    builder.addCase(fetchTechExpenses.pending, (state, action) => {
      state.techAnalysisState.data.techExpenses.loading = true;
      state.techAnalysisState.data.techExpenses.error = null;
    });

    builder.addCase(fetchTechExpenses.rejected, (state, action) => {
      state.techAnalysisState.data.techExpenses.loading = false;
      state.techAnalysisState.data.techExpenses.error = action.error;
    });
  },
});

export const {
  setTechnologicalAnalysisState,
  addSector,
  addYear,
  addRegion,
  removeSector,
  removeYear,
  removeRegion,
  setAllRegionsTrue,
  setAllSectorsTrue,
} = techAnalysisSlice.actions;
export const techAnalysisReducer = techAnalysisSlice.reducer;
