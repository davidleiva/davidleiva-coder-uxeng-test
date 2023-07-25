import { useContext, useEffect, useState} from 'react'; 
import { FilterStatesContext } from '../ContextManagement';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import { checkIfIsSelected } from '../functions';

interface FilterParams {
    label: string,
    value: object,
    queryValue: string
}

export interface FilterSBItemProps {
    isSelected?: boolean,
    filters: Array <FilterParams>,
    type: string
}

export const FiltersSB = ({filters: _filters, isSelected, type}: FilterSBItemProps) => {
    
    const { filters, setFiltersState } = useContext(FilterStatesContext);
    const [ stringValue, setStringValue ] = useState('');

    const handleListItemClick = (value:any) => {
        setFiltersState({...value});
    };

    const assignStringValue = () => {
        setStringValue(filters[type])
    }

    const checkSelected = () => {
        filters.hasOwnProperty(type)
        ? assignStringValue()
        : setStringValue('');
    }

    useEffect(() => {
        checkSelected();
        console.log(filters);
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
                        onClick={() => handleListItemClick(item.value)}
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