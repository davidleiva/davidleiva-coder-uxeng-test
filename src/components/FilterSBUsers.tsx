/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { useContext } from 'react'; 
import { FilterStatesContext } from '../utils/ContextManagement';

export const FilterSBUsers = ({
    title,
    defaultExp,
    isExpanded,
    handleChange,
    }: FilterAccordionProps) => {
    
    const { filters, setFiltersState } = useContext(FilterStatesContext);

    const handleListItemClick = (
        e: React.SyntheticEvent,
        value: any
    ) => {
        const name = value && value.label ? value.label.toLowerCase() : undefined;
        if(name !== undefined) { 
            const _value = { username: name };
            setFiltersState({..._value})
        } else {
            const _filters = {...filters};
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignoreconst key = 'username':keyof
            delete _filters['username'];
            setFiltersState({..._filters})
        }
        console.log(e);
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
                <Autocomplete<{ label: string }>
                    className="FilterUsers__AutoComplete"
                    size="small"
                    disablePortal
                    id="users-autocomplete"
                    options={USERS}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label={"Users"} />}
                    onChange={ (e,value) => handleListItemClick(e,value) }
                    fullWidth={true}
                />
            </div>
            </AccordionDetails>
        </Accordion>
    )
};

export default FilterSBUsers;
