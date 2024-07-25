"use client";

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
} from "@/store/slices/thunks/IncomeEmploymentThunk";
import { getInitialFilters } from "@/store/slices/thunks/filtersThunk";
import { useAppDispatch, useAppSelector } from "@/store/store";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const InitialDataComponent = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getInitialFilters());
        dispatch(fetch1000_5Data());
        dispatch(fetch2001Data());
        dispatch(fetch2100Data());
        dispatch(fetch2103Data());
        dispatch(fetch3001Data());
        dispatch(fetch3002Data());
        dispatch(fetch3003Data());
        dispatch(fetch3004Data());
        dispatch(fetch3005Data());
        dispatch(fetch3006Data());
        dispatch(fetch4000Data());
        await dispatch(fetch1000_1Data());
        await dispatch(fetch1000_2Data());
        await dispatch(fetch1000_3Data());
        await dispatch(fetch1000_4Data());
        await dispatch(fetch1000_6Data());
        await dispatch(fetch1000_7Data());
      } catch (error) {
        // Manejar errores si es necesario
      }
    };
    if (typeof window !== "undefined") {
      fetchData();
    }

    return () => {
      // Lógica de limpieza si es necesario
    };
  }, []);

  return <></>;
};

export default InitialDataComponent;
