import { createContext } from "react";

export interface FilterState {
    resource_type: string,
    action: string,
    build_reason: string
}
export interface FilterStatesContextData {
    filters: FilterState;
    setFiltersState: (filter:any) => void;
}

export const filtersContextDefaultValue: FilterStatesContextData = {
    filters: {resource_type: '', action: '', build_reason: ''},
    setFiltersState: () => null,
}

export const FilterStatesContext = createContext<FilterStatesContextData>(filtersContextDefaultValue);