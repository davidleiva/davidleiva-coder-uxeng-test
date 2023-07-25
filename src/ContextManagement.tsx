import { createContext } from "react";

export interface FilterState {
    resource_type: string,
    action: string,
    build_reason: string
}
export interface FilterStatesContextData {
    filters: FilterState;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setFiltersState: (filter:any) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const filtersContextDefaultValue: FilterStatesContextData = {
    filters: {resource_type: '', action: '', build_reason: ''},
    setFiltersState: () => null,
}

export const FilterStatesContext = createContext<FilterStatesContextData>(filtersContextDefaultValue);