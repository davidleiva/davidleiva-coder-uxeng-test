/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/ban-types */
import { FILTER_TYPES } from "./constants";
import { FilterSBItemProps } from './components/FiltersSB.tsx';

/**
 * 
 * @param itemsProps - isSelected?: boolean,filters: Array <FilterParams>, type: keyof FilterState
 * @param setStringValue - Method to update the local state
 * @param assignStringValuePreDef - Method to control the accordion with predefined filters
 */
export const checkSelected = (
    itemsProps:FilterSBItemProps,
    setStringValue:Function,
    assignStringValuePreDef:Function
    )=> {
    const {filters, type} = itemsProps;
    if(type === FILTER_TYPES[0] && filters.hasOwnProperty(FILTER_TYPES[1]) && filters.hasOwnProperty(FILTER_TYPES[2])) {
        assignStringValuePreDef();
    } else if (filters.hasOwnProperty(type)) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setStringValue(filters[type])
    } else {
        setStringValue('');
    }
}