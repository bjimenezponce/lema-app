import { Data3004Interface } from "@/components/dashboard/income-employment/charts/3004/EmployabilityByJobProfileTable";
import { SerializedError } from "@reduxjs/toolkit";
import { Data3005Interface, Data3006Interface } from "../thunks/IncomeEmploymentThunk";

export interface incomeEmploymentState {
  m1000: {
    loading: boolean;
    error: SerializedError | null;
    data: any[];
  };
  m2001: {
    loading: boolean;
    error: SerializedError | null;
    data: any[];
  };
  m2100: {
    loading: boolean;
    error: SerializedError | null;
    data: {
      lemaEneOcuRama: any[];
      lemaEneOcuGrupo: any[];
    };
  };
  m2103: {
    loading: boolean;
    error: SerializedError | null;
    data: {
      lemaEsiYMedianoOcu: any[];
      lemaEsiYMedioOcu: any[];
    };
  };
  m3001: {
    loading: boolean;
    error: SerializedError | null;
    data: any[];
  };
  m3002: {
    loading: boolean;
    error: SerializedError | null;
    data: {
      valor_1?: number;
      valor_2?: number;
      valor_3?: number;
      valor_4?: number;
      valor_5?: number;
      valor_6?: number;
    };
  };
  m3003: {
    loading: boolean;
    error: SerializedError | null;
    kpi: {
      prom_emp_1er_agno: number;
      prom_emp_2do_agno: number;
      ingreso_promedio: number;
      ingreso_maximo: number;
    };
    graficos: {
      categories: string[];
      series: {
        name: string;
        data: number[];
      }[];
    };
  };

  m3004: {
    loading: boolean;
    error: SerializedError | null;
    data: Data3004Interface[];
  };
  m3005: {
    loading: boolean;
    error: SerializedError | null;
    data: Data3005Interface[];
  };
  m3006: {
    loading: boolean;
    error: SerializedError | null;
    data: Data3006Interface;
  };
  m4000: {
    loading: boolean;
    error: SerializedError | null;
    data: any[];
  };
}
