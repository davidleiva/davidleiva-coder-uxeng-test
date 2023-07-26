// import Autocomplete from '@mui/material/Autocomplete';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import TextField from '@mui/material/TextField';
// import InputAdornment from '@mui/material/InputAdornment';
// import SearchIcon from '@mui/icons-material/Search';
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Avatar from '@mui/material/Avatar';
import { USERS } from '../utils/constants';
import { FilterAccordionProps } from './FilterAccordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import './FilterSBUsers.css';

export const FilterSBUsers = ({
    title,
    defaultExp,
    isExpanded,
    handleChange,
    }: FilterAccordionProps) => {
    
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (
        _event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };
    return (
        <Accordion
            className={'FilterUsers'}
            expanded={isExpanded}
            sx={{
                bgcolor: 'transparent',
            }}
            defaultExpanded={defaultExp}
            onChange={() => handleChange()}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <div 
                className="FilterSearchUser"
                style={{ padding: '8px 0'}}
            >
                    <Autocomplete
                        className="FilterUsers__AutoComplete"
                        size="small"
                        disablePortal
                        id="users-autocomplete"
                        options={USERS}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Users"
                        onClick={(event) => handleListItemClick(event, 0)}
                        fullWidth={true}
                    />}
                />
            </div>
            </AccordionDetails>
        </Accordion>
    )
};

export default FilterSBUsers;
