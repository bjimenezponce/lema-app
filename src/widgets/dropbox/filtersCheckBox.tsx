"use client";
import { Button, Checkbox, List, ListItem, ListItemPrefix, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import useOutsideClick from "../useOutsideClick";
import { useAppDispatch } from "@/store/store";
import {
  should5001Options,
  should3001Options,
  should3002Options,
  should3003Options,
} from "@/helpers/enums/filters.enum";
import { fetchTechExpenses } from "@/store/slices/thunks/technologicalAnalysisThunk";
import { fetch3001Data, fetch3002Data, fetch3003Data } from "@/store/slices/thunks/IncomeEmploymentThunk";
import { addRemoveActions } from "./addRemoveActions";

export interface FiltersCheckBoxInterface {
  title: string;
  filterName: string;
  filtersList: (string | boolean)[][] | (number | boolean)[][];
  minToSelect: number;
  selectAll: boolean;
  allSelected: boolean;
  selectAllValues: any;
  isAllSelected: boolean;
}

const FiltersCheckBox = ({
  title,
  filterName,
  filtersList,
  minToSelect,
  selectAll,
  allSelected,
  selectAllValues,
  isAllSelected,
}: FiltersCheckBoxInterface) => {
  const dispatch = useAppDispatch();

  const [query, setQuery]: any = useState([]);
  const [expanded, setExpanded] = useState(false);

  const showPlatformOptions = (event: any) => {
    event.stopPropagation();
    setExpanded(!expanded);
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
    // addRemoveActions function should be implemented
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
  };

  const selectedList = filtersList
    .filter(([_1, _2, selected]) => selected)
    .map(([_1, category, _2]) => category)
    .join(", ");

  const handleClick = () => {
    selectAllValues();
  };

  return (
    <div ref={ref} className="relative">
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
          className="absolute z-50  left-0   overflow-y-scroll  
          opacity-100 origin-top  p-3 bg-white rounded-lg shadow dark:bg-gray-700 mt-10  "
        >
          <div className="h-120">
            <List>
              {selectAll && (
                <ListItem className="p-0" onClick={handleClick}>
                  <label
                    htmlFor="vertical-list-react"
                    className="flex w-full cursor-pointer items-center px-3 py-2"
                    key={0}
                  >
                    <ListItemPrefix className="mr-3">
                      <Checkbox
                        id="vertical-list-react"
                        type="checkbox"
                        value=""
                        key={0}
                        color="indigo"
                        ripple={false}
                        className="hover:before:opacity-0"
                        containerProps={{
                          className: "p-0",
                        }}
                        checked={allSelected}
                        onChange={() => ""}
                        crossOrigin={undefined}
                      />
                    </ListItemPrefix>
                    {isAllSelected ? (
                      <Typography color="blue-gray" className="font-medium ml-3">
                        Seleccionar todo
                      </Typography>
                    ) : (
                      <Typography color="blue-gray" className="font-medium ml-3">
                        Deseleccionar todo
                      </Typography>
                    )}
                  </label>
                </ListItem>
              )}
              {filtersList.map((values: any, key: React.Key | null | undefined) => {
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
                    <ListItemPrefix className="mr-3 ml-3">
                      <Checkbox
                        id="filters"
                        type="checkbox"
                        value=""
                        key={key}
                        color="blue"
                        ripple={false}
                        crossOrigin={undefined}
                        checked={checked}
                        onChange={() => ""}
                      />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="font-medium ml-3">
                      {value}
                    </Typography>
                  </ListItem>
                );
              })}
            </List>
          </div>
        </div>
      )}
    </div>
  );
};

export default FiltersCheckBox;
