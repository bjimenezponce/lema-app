import {
  PayloadAction,
  SerializedError,
  createAsyncThunk,
  createSlice,
  current,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import { incomeEmploymentState } from "./interfaces/incomeEmployment.interface";
import {
  fetch1000_1Data,
  fetch1000_2Data,
  fetch1000_3Data,
  fetch1000_4Data,
  fetch1000_5Data,
  fetch1000_6Data,
  fetch1000_7Data,
  fetch2001Data,
  fetch2100Data,
  fetch2103Data,
  fetch3001Data,
  fetch3002Data,
  fetch3003Data,
  fetch3004Data,
  fetch3005Data,
  fetch3006Data,
  fetch4000Data,
} from "./thunks/IncomeEmploymentThunk";

// const initialState: incomeEmploymentState = {
const initialState: incomeEmploymentState = {
  m1000: {
    loading: false,
    error: null,
    data: [],
  },
  m2001: {
    loading: false,
    error: null,
    data: [],
  },
  m2100: {
    loading: false,
    error: null,
    data: {
      lemaEneOcuRama: [],
      lemaEneOcuGrupo: [],
    },
  },
  m2103: {
    loading: false,
    error: null,
    data: {
      lemaEsiYMedianoOcu: [],
      lemaEsiYMedioOcu: [],
    },
  },
  m3001: {
    loading: false,
    error: null,
    data: [],
  },
  m3002: {
    loading: false,
    error: null,
    data: {
      valor_1: 0,
      valor_2: 0,
      valor_3: 0,
      valor_4: 0,
      valor_5: 0,
      valor_6: 0,
    },
  },
  m3003: {
    loading: false,
    error: null,
    kpi: {
      prom_emp_1er_agno: 0,
      prom_emp_2do_agno: 0,
      ingreso_promedio: 0,
      ingreso_maximo: 0,
    },
    graficos: {
      categories: [],
      series: [],
    },
  },
  m3004: {
    loading: false,
    error: null,
    data: [],
  },
  m3005: {
    loading: false,
    error: null,
    data: [],
  },
  m3006: {
    loading: false,
    error: null,
    data: {
      responseGraph: [],
      responseTable: [],
    },
  },
  m4000: {
    loading: false,
    error: null,
    data: [],
  },
};

const getDataTrue = (data: any[][]) => {
  const dataTrue: (number | string | boolean)[][] = data.map((item: any[]) => [item[0], item[1], true]);
  return dataTrue;
};

export const incomeEmploymentSlice = createSlice({
  name: "incomeEmployment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Data 1000
    builder.addCase(fetch1000_1Data.fulfilled, (state, action) => {
      state.m1000.data = [...state.m1000.data, ...action.payload];
      state.m1000.loading = false;
      state.m1000.error = null;
    });
    builder.addCase(fetch1000_1Data.pending, (state, action) => {
      state.m1000.loading = true;
      state.m1000.error = null;
    });

    builder.addCase(fetch1000_1Data.rejected, (state, action) => {
      state.m1000.loading = false;
      state.m1000.error = action.error;
    });
    builder.addCase(fetch1000_2Data.fulfilled, (state, action) => {
      state.m1000.data = [...state.m1000.data, ...action.payload];
      state.m1000.loading = false;
      state.m1000.error = null;
    });
    builder.addCase(fetch1000_2Data.pending, (state, action) => {
      state.m1000.loading = true;
      state.m1000.error = null;
    });

    builder.addCase(fetch1000_2Data.rejected, (state, action) => {
      state.m1000.loading = false;
      state.m1000.error = action.error;
    });
    builder.addCase(fetch1000_3Data.fulfilled, (state, action) => {
      state.m1000.data = [...state.m1000.data, ...action.payload];
      state.m1000.loading = false;
      state.m1000.error = null;
    });
    builder.addCase(fetch1000_3Data.pending, (state, action) => {
      state.m1000.loading = true;
      state.m1000.error = null;
    });

    builder.addCase(fetch1000_3Data.rejected, (state, action) => {
      state.m1000.loading = false;
      state.m1000.error = action.error;
    });
    builder.addCase(fetch1000_4Data.fulfilled, (state, action) => {
      state.m1000.data = [...state.m1000.data, ...action.payload];
      state.m1000.loading = false;
      state.m1000.error = null;
    });
    builder.addCase(fetch1000_4Data.pending, (state, action) => {
      state.m1000.loading = true;
      state.m1000.error = null;
    });

    builder.addCase(fetch1000_4Data.rejected, (state, action) => {
      state.m1000.loading = false;
      state.m1000.error = action.error;
    });
    builder.addCase(fetch1000_5Data.fulfilled, (state, action) => {
      state.m1000.data = [...state.m1000.data, ...action.payload];
      state.m1000.loading = false;
      state.m1000.error = null;
    });
    builder.addCase(fetch1000_5Data.pending, (state, action) => {
      state.m1000.loading = true;
      state.m1000.error = null;
    });

    builder.addCase(fetch1000_5Data.rejected, (state, action) => {
      state.m1000.loading = false;
      state.m1000.error = action.error;
    });
    builder.addCase(fetch1000_6Data.fulfilled, (state, action) => {
      state.m1000.data = [...state.m1000.data, ...action.payload];
      state.m1000.loading = false;
      state.m1000.error = null;
    });
    builder.addCase(fetch1000_6Data.pending, (state, action) => {
      state.m1000.loading = true;
      state.m1000.error = null;
    });

    builder.addCase(fetch1000_6Data.rejected, (state, action) => {
      state.m1000.loading = false;
      state.m1000.error = action.error;
    });
    builder.addCase(fetch1000_7Data.fulfilled, (state, action) => {
      state.m1000.data = [...state.m1000.data, ...action.payload];
      state.m1000.loading = false;
      state.m1000.error = null;
    });
    builder.addCase(fetch1000_7Data.pending, (state, action) => {
      state.m1000.loading = true;
      state.m1000.error = null;
    });

    builder.addCase(fetch1000_7Data.rejected, (state, action) => {
      state.m1000.loading = false;
      state.m1000.error = action.error;
    });
    //Data 2000
    builder.addCase(fetch2001Data.fulfilled, (state, action) => {
      state.m2001.data = action.payload;
      state.m2001.loading = false;
      state.m2001.error = null;
    });
    builder.addCase(fetch2001Data.pending, (state, action) => {
      state.m2001.loading = true;
      state.m2001.error = null;
    });

    builder.addCase(fetch2001Data.rejected, (state, action) => {
      state.m2001.loading = false;
      state.m2001.error = action.error;
    });
    builder.addCase(fetch2100Data.fulfilled, (state, action) => {
      state.m2100.data = action.payload;
      state.m2100.loading = false;
      state.m2100.error = null;
    });
    builder.addCase(fetch2100Data.pending, (state, action) => {
      state.m2100.loading = true;
      state.m2100.error = null;
    });

    builder.addCase(fetch2100Data.rejected, (state, action) => {
      state.m2100.loading = false;
      state.m2100.error = action.error;
    });
    builder.addCase(fetch2103Data.fulfilled, (state, action) => {
      state.m2103.data = action.payload;
      state.m2103.loading = false;
      state.m2103.error = null;
    });
    builder.addCase(fetch2103Data.pending, (state, action) => {
      state.m2103.loading = true;
      state.m2103.error = null;
    });

    builder.addCase(fetch2103Data.rejected, (state, action) => {
      state.m2103.loading = false;
      state.m2103.error = action.error;
    });
    //Data 3001
    builder.addCase(fetch3001Data.fulfilled, (state, action) => {
      state.m3001.data = action.payload;
      state.m3001.loading = false;
      state.m3001.error = null;
    });
    builder.addCase(fetch3001Data.pending, (state, action) => {
      state.m3001.loading = true;
      state.m3001.error = null;
    });

    builder.addCase(fetch3001Data.rejected, (state, action) => {
      state.m3001.loading = false;
      state.m3001.error = action.error;
    });
    //fetch3002Data
    builder.addCase(fetch3002Data.fulfilled, (state, action) => {
      state.m3002.data.valor_1 = action.payload[0].valor_1;
      state.m3002.data.valor_2 = action.payload[0].valor_2;
      state.m3002.data.valor_3 = action.payload[0].valor_3;
      state.m3002.data.valor_4 = action.payload[0].valor_4;
      state.m3002.data.valor_5 = action.payload[0].valor_5;
      state.m3002.data.valor_6 = action.payload[0].valor_6;
      state.m3002.loading = false;
      state.m3002.error = null;
    });
    builder.addCase(fetch3002Data.pending, (state, action) => {
      state.m3002.loading = true;
      state.m3002.error = null;
    });

    builder.addCase(fetch3002Data.rejected, (state, action) => {
      state.m3002.loading = false;
      state.m3002.error = action.error;
    });
    //fetch3003Data
    builder.addCase(fetch3003Data.fulfilled, (state, action) => {
      state.m3003.kpi = action.payload.kpi;
      state.m3003.graficos = action.payload.graficos;
      state.m3003.loading = false;
      state.m3003.error = null;
    });
    builder.addCase(fetch3003Data.pending, (state, action) => {
      state.m3003.loading = true;
      state.m3003.error = null;
    });

    builder.addCase(fetch3003Data.rejected, (state, action) => {
      state.m3003.loading = false;
      state.m3003.error = action.error;
    });
    //fetch3004Data
    builder.addCase(fetch3004Data.fulfilled, (state, action) => {
      state.m3004.data = action.payload;
      state.m3004.loading = false;
      state.m3004.error = null;
    });
    builder.addCase(fetch3004Data.pending, (state, action) => {
      state.m3004.loading = true;
      state.m3004.error = null;
    });

    builder.addCase(fetch3004Data.rejected, (state, action) => {
      state.m3004.loading = false;
      state.m3004.error = action.error;
    });
    //fetch3005Data
    builder.addCase(fetch3005Data.fulfilled, (state, action) => {
      state.m3005.data = action.payload;
      state.m3005.loading = false;
      state.m3005.error = null;
    });
    builder.addCase(fetch3005Data.pending, (state, action) => {
      state.m3005.loading = true;
      state.m3005.error = null;
    });

    builder.addCase(fetch3005Data.rejected, (state, action) => {
      state.m3005.loading = false;
      state.m3005.error = action.error;
    });
    //fetch3006Data
    builder.addCase(fetch3006Data.fulfilled, (state, action) => {
      state.m3006.data.responseGraph = action.payload.responseGraph;
      state.m3006.data.responseTable = action.payload.responseTable;
      state.m3006.loading = false;
      state.m3006.error = null;
    });
    builder.addCase(fetch3006Data.pending, (state, action) => {
      state.m3006.loading = true;
      state.m3006.error = null;
    });

    builder.addCase(fetch3006Data.rejected, (state, action) => {
      state.m3006.loading = false;
      state.m3006.error = action.error;
    });
    //fetch4000Data
    builder.addCase(fetch4000Data.fulfilled, (state, action) => {
      state.m4000.data = action.payload;
      state.m4000.loading = false;
      state.m4000.error = null;
    });
    builder.addCase(fetch4000Data.pending, (state, action) => {
      state.m4000.loading = true;
      state.m4000.error = null;
    });

    builder.addCase(fetch4000Data.rejected, (state, action) => {
      state.m4000.loading = false;
      state.m4000.error = action.error;
    });
  },
});

export const {} = incomeEmploymentSlice.actions;
export const incomeEmploymentReducer = incomeEmploymentSlice.reducer;
