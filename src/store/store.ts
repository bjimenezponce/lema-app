import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { persistReducer } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

import { techAnalysisReducer } from "./slices/TechnologicalAnalysisSlice";
import { authReducer } from "./slices/authSlice";
import { userReducer } from "./slices/userSlice";
import { incomeEmploymentReducer } from "./slices/IncomeEmploymentSlice";
import { filterReducer } from "./slices/filtersSlice";

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: number) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["authState"],
};

const userPersistConfig = {
  key: "user",
  storage: storage,
  whitelist: ["userState"],
};

const techAnalysisPersistConfig = {
  key: "technologicalAnalysis",
  storage: storage,
  whitelist: ["techAnalysisState"],
};

const incomeEmpPersistConfig = {
  key: "incomeEmployment",
  storage: storage,
  whitelist: ["incomeEmployment"],
};

const filtersConfig = {
  key: "filters",
  storage: storage,
  whitelist: ["filters"],
};

const authPersistedReducer = persistReducer(authPersistConfig, authReducer);
const userPersistedReducer = persistReducer(userPersistConfig, userReducer);
const incomeEmpPersistedReducer = persistReducer(
  incomeEmpPersistConfig,
  incomeEmploymentReducer
);
const techAnalysisPersistedReducer = persistReducer(
  techAnalysisPersistConfig,
  techAnalysisReducer
);
const filterPersistedReducer = persistReducer(filtersConfig, filterReducer);

const rootReducer = combineReducers({
  auth: authPersistedReducer,
  user: userPersistedReducer,
  techanalysis: techAnalysisPersistedReducer,
  incomeEmployment: incomeEmpPersistedReducer,
  filters: filterPersistedReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
