// import Autocomplete from '@mui/material/Autocomplete';
import * as React from 'react';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { USERS } from '../constants';

export const FilterSBUsers = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
        console.log(event); // linter prevent
    };
    return (
        <div 
            className="FilterSearchUser"
            style={{ padding: '8px 0'}}
        >
            <TextField
                fullWidth
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                label="Search user"
                size='small'
            />
            <List component="nav" aria-label="main mailbox folders">
                {USERS.map((user) => (
                    <ListItemButton
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0)}
                    >
                        <ListItemIcon>
                        <Avatar
                            sx={{ width: 20, height: 20 }}
                        >H</Avatar>
                        </ListItemIcon>
                        <ListItemText primary={user.name} />
                    </ListItemButton>
                )
                )}
            </List>
        </div>
    )
};

export default FilterSBUsers;
