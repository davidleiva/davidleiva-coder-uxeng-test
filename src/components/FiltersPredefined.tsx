import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';

export interface FilterSBItemProps {
    isSelected: boolean,
}

export const FiltersSBPredefined = (props: FilterSBItemProps) => {
   return (
    <List component="nav" aria-label="main mailbox folders">
        <ListItemText primary="Inbox" />
        { props.isSelected  === true ? 
        <ListItemIcon>
            <CheckTwoToneIcon />
        </ListItemIcon>
        : null }
    </List>
    ) 
}

export default FiltersSBPredefined;