import { useContext } from 'react'; 
import { FilterStatesContext } from '../ContextManagement';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';

interface FilterParams {
    label: string,
    value: object
}

export interface FilterSBItemProps {
    isSelected?: boolean,
    filters: Array <FilterParams>
}

export const FiltersSB = ({isSelected}: FilterSBItemProps) => {
    
    const { filters, setFiltersState } = useContext(FilterStatesContext);

    const handleListItemClick = (value:any) => {
        setFiltersState(value);
        console.log(value);
    };
   return (

    <List component="nav" aria-label="main mailbox folders">
        {
            filters.map( (item:any, index:any) => {
                return (
                    <ListItemButton
                        className="justifyEnd"
                        key={index}
                        selected={false}
                        onClick={() => handleListItemClick(item.value)}
                    >
                        <ListItemText primary={ item.label } />
                        { isSelected  === false ? 
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