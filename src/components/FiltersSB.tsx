import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';

interface FilterParams {
    label: string,
    value: number
}

export interface FilterSBItemProps {
    isSelected?: boolean,
    filters: Array <FilterParams>
}

export const FiltersSB = ({isSelected, filters: Filters}: FilterSBItemProps) => {

    const handleListItemClick = () => {
        return
    };

   return (
    <List component="nav" aria-label="main mailbox folders">
        {
            Filters.map( (item, index) => {
                return (
                    <ListItemButton
                        className="justifyEnd"
                        key={index}
                        selected={false}
                        onClick={() => handleListItemClick()}
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