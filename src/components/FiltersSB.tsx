import { useContext, useEffect, useState} from 'react'; 
import { FilterState, FilterStatesContext } from '../ContextManagement';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import { FILTER_TYPES, PREDEFINED_FILTERS_VALUES, PREDEFINED_FILTERS } from '../constants';

interface FilterParams {
    label: string,
    value: object,
    queryValue: keyof FilterState
}

export interface FilterSBItemProps {
    isSelected?: boolean,
    filters: Array <FilterParams>,
    type: keyof FilterState
}

export const FiltersSB = ({filters: _filters, type}: FilterSBItemProps) => {
    console.log('renders', type, _filters);
    const { filters, setFiltersState } = useContext(FilterStatesContext);
    const [ stringValue, setStringValue ] = useState('');

    const handleListItemClick = (value:any) => {
        setFiltersState({...value});
    };

    const assignStringValuePreDef = () => {
        const _index = PREDEFINED_FILTERS_VALUES.findIndex(item => item['resource_type'] === filters['resource_type']);
        const _string = PREDEFINED_FILTERS[_index] && PREDEFINED_FILTERS[_index]['queryValue'] ?  PREDEFINED_FILTERS[_index]['queryValue'] : null;
        if(_string) {setStringValue(_string); console.log('1o,', _string)};
    }

    const checkSelected = () => {
        console.log('check', type);
        if(type === FILTER_TYPES[0] && filters.hasOwnProperty(FILTER_TYPES[1]) && filters.hasOwnProperty(FILTER_TYPES[2])) {
            assignStringValuePreDef();
        } else if (filters.hasOwnProperty(type)) {
            setStringValue(filters[type])
        } else {
            console.log('no');
            setStringValue('');
        } 
    }

    useEffect(() => {
        checkSelected();
    }, [filters]);

    return (

    <List component="nav" aria-label="main mailbox folders">
        {
            _filters.map( (item:any, index:any) => {
                return (
                    <ListItemButton
                        className="justifyEnd"
                        key={index}
                        selected={ item.queryValue === stringValue }
                        onClick={(e) => {e.preventDefault, handleListItemClick(item.value)}}
                    >
                        <ListItemText primary={ item.label } />
                        { item.queryValue === stringValue  ? 
                        <ListItemIcon>
                            <CheckTwoToneIcon />
                        </ListItemIcon>
                        : null }
                    </ListItemButton>
                ) 
            })
        }
    </List>
    ) 
}

export default FiltersSB;