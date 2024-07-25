"use client";
import { Button, Checkbox, List, ListItem, ListItemPrefix, Radio, Typography } from "@material-tailwind/react";
import React, { Ref, useEffect, useRef, useState } from "react";
import useOutsideClick from "../useOutsideClick";
import { useAppDispatch } from "@/store/store";
import { FilterEnum, should3001Options, should5001Options } from "@/helpers/enums/filters.enum";
import { TechnologicalAnalysisFilters, removeYear } from "@/store/slices/TechnologicalAnalysisSlice";
import { addRemoveActions } from "./addRemoveActions";
import { useAppSelector } from "@/store/store";
import { filter } from "d3";
import { fetchTechExpenses } from "@/store/slices/thunks/technologicalAnalysisThunk";
import { fetch3001Data } from "@/store/slices/thunks/IncomeEmploymentThunk";

const FiltersRadioButton = ({
  title,
  filterName,
  filtersList,
  selectAllValues,
}: {
  title: string;
  filterName: string;
  filtersList: (string | boolean)[][] | (number | boolean)[][];
  selectAllValues: any;
}) => {
  const dispatch = useAppDispatch();

  const [query, setQuery]: any = useState([]);
  const [expanded, setExpanded] = useState(false);

  const showPlatformOptions = (event: any) => {
    event.stopPropagation();
    if (expanded) {
      setExpanded(false);
    }
    if (!expanded) {
      setExpanded(true);
    }
  };

  const handleClickOutside = () => {
    setExpanded(false);
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
    // if (should5001Options(filterName)) {
    //   dispatch(fetchTechExpenses());
    // }
    if (should3001Options(filterName)) {
      dispatch(fetch3001Data());
    }
  };

  const selectedList = filtersList
    .filter(([a, b, selected]) => selected)
    .map(([id, category, _]) => category)
    .join(", ");

  return (
    <>
      <div ref={ref}>
        <Typography variant="h6" color="blue-gray" className="block text-xs font-semibold uppercase text-blue-gray-500">
          {title}
        </Typography>
        <Button
          id="dropdownDefault"
          data-dropdown-toggle="dropdown"
          color="blue"
          className="mt-6 peer w-full h-full bg-transparent text-blue-gray-700 font-sans
                font-normal text-left outline outline-0 focus:outline-0
                disabled:bg-blue-gray-50 disabled:border-0
                disabled:cursor-not-allowed transition-all border text-sm px-3
                py-2.5 rounded-[7px] border-blue-gray-200"
          onClick={showPlatformOptions}
          type="button"
        >
          {`${selectedList.substring(0, 20)}...`}
        </Button>
        {expanded && (
          <div
            id="dropdown"
            className="absolute z-50 h-96 top-11 left-0 overflow-x-hidden opacity-100 origin-top transform p-3 bg-white rounded-lg shadow dark:bg-gray-700 mt-10 w-65"
          >
            <List>
              {filtersList.map((values: any, key: React.Key | null | undefined) => {
                console.log(values);
                let id: number;
                let value: any = "";
                let checked: any = false;
                if (values.length === 3) {
                  id = values[0];
                  value = values[1];
                  checked = values[2];
                } else {
                  value = values[0];
                  checked = values[1];
                }
                return (
                  <ListItem className="p-0" onClick={() => updateData(checked, id, filterName)} key={key}>
                    <ListItemPrefix className="mr-3">
                      <Radio
                        key={key}
                        name="vertical-list"
                        id="vertical-list-react"
                        ripple={false}
                        className="hover:before:opacity-0"
                        crossOrigin={undefined}
                        onChange={() => ""}
                        checked={checked}
                        color="blue"
                        value=""
                      />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="font-medium ml-3">
                      {value}
                    </Typography>
                  </ListItem>
                );
              })}{" "}
            </List>
          </div>
        )}
      </div>
    </>
  );
};

export default FiltersRadioButton;
