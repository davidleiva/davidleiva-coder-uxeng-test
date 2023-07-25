import { createContext } from "react";

export interface FilterState {
    id: number;
    title: string;
    body: string;
}
export interface FilterStatesContextData {
    filters: FilterState[];
    setFiltersState: (filter:any) => void;
}

export const filtersContextDefaultValue: FilterStatesContextData = {
    filters: [],
    setFiltersState: () => null,
}

export const FilterStatesContext = createContext<FilterStatesContextData>(filtersContextDefaultValue);