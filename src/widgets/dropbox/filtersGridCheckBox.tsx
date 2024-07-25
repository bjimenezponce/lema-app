"use client";
import { Button, Card, CardBody, Checkbox, List, ListItem, ListItemPrefix, Typography } from "@material-tailwind/react";
import React, { Ref, useEffect, useRef, useState } from "react";
import useOutsideClick from "../useOutsideClick";
import { useAppDispatch } from "@/store/store";
import {
  FilterEnum,
  should3001Options,
  should3002Options,
  should3003Options,
  should3004Options,
  should5001Options,
} from "@/helpers/enums/filters.enum";
import { TechnologicalAnalysisFilters, removeYear } from "@/store/slices/TechnologicalAnalysisSlice";
import { addRemoveActions } from "./addRemoveActions";
import { useAppSelector } from "@/store/store";
import { filter } from "d3";
import { fetchTechExpenses } from "@/store/slices/thunks/technologicalAnalysisThunk";
import {
  fetch3001Data,
  fetch3002Data,
  fetch3003Data,
  fetch3004Data,
} from "@/store/slices/thunks/IncomeEmploymentThunk";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

// {
//   title,
//   filterName,
//   filtersList,
//   minToSelect,
//   selectAll,
//   allSelected,
//   selectAllValues,
// }: {
//   title: string;
//   filterName: string;
//   filtersList: (string | boolean)[][] | (number | boolean)[][];
//   minToSelect: number;
//   selectAll: boolean;
//   allSelected: boolean;
//   selectAllValues: any;
// }
const FiltersGridCheckBox = () => {
  const dispatch = useAppDispatch();

  const [query, setQuery]: any = useState([]);
  const [expanded, setExpanded] = useState(false);

  const showPlatformOptions = () => {
    setExpanded((val) => !val);
  };
  const handleClickOutside = () => {
    // setExpanded(false);
    if (expanded) {
      setExpanded(false);
    }
  };
  const ref = useOutsideClick(handleClickOutside);

  const handleQueryChange = (event: any) => {
    if (event.target.checked && !query.includes(event.target.value)) {
      setQuery([...query, event.target.value]);
    } else if (!event.target.checked && query.includes(event.target.value)) {
      setQuery(query.filter((q: any) => q !== event.target.value));
    }
  };

  const updateData = (checked: boolean, value: string | number, filterName: string) => {
    addRemoveActions(checked, value, filterName);
    if (should5001Options(filterName)) {
      dispatch(fetchTechExpenses());
    }
    if (should3001Options(filterName)) {
      dispatch(fetch3001Data());
    }
    if (should3002Options(filterName)) {
      dispatch(fetch3002Data());
    }
    if (should3003Options(filterName)) {
      dispatch(fetch3003Data());
    }
    // if (should3004Options(filterName)) {
    //   dispatch(fetch3004Data());
    // }
  };

  // const selectedList = filtersList
  //   .filter(([_1, _2, selected]) => selected)
  //   .map(([_1, category, _2]) => category)
  //   .join(", ");
  // const handleClick = () => {
  //   selectAllValues();
  // };
  return (
    <Card className="mx-3 mb-1 mt-5 border border-blue-gray-100 lg:mx-1">
      <CardBody>
        <div className="flex items-center justify-center">
          <Button className="rounded-full">
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <div className="flex divide-x border rounded-lg">
            <Button className="px-4 py-2 bg-white text-black">2020</Button>
            <Button className="px-4 py-2 text-lg">2021</Button>
            <Button className="px-4 py-2">2022</Button>
            <Button className="px-4 py-2">2023</Button>
          </div>
          <Button className="rounded-full">
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </CardBody>{" "}
    </Card>
  );
};

export default FiltersGridCheckBox;
