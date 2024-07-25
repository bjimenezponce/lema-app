import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { FiltersFromApi } from "../interfaces/filters.interface";

export const getInitialFilters = createAsyncThunk("incomeEmployment/getInitialFilters", async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/initial-filter`, {
      method: "POST",
      headers: {},
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return isRejectedWithValue(error);
  }
});
