import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { FormControlLabel, Typography } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useState } from 'react';

export const QueryEditor = () => {
    const [isAdvanced, setIsAdvanced] = useState(false);
    const handleDelete = () => { };

    return (
        <Box className="QueryEditor">
            <Typography variant="h6" gutterBottom className="FilterSideBar__header">
                Filter Query Editor
            </Typography>
            <Stack
                direction="row"
                spacing={1}
                marginTop={2}
                marginBottom={2}
            >
                <Chip
                    color="primary"
                    size="small"
                    label="resource_type:workspace"
                    onDelete={handleDelete}
                />
                <Chip
                    color="primary"
                    size="small"
                    label="action:create"
                    onDelete={handleDelete}
                />
            </Stack>
            
            <FormGroup >
                <FormControlLabel 
                    control={<Checkbox size='small'
                    checked={isAdvanced}/>} 
                    label={<span onClick={() => setIsAdvanced(!isAdvanced)}>Advanced mode</span>}
                    onClick={() => setIsAdvanced(!isAdvanced)}
                />    
            </FormGroup>
            { isAdvanced && 
                <>
                <Typography variant="h6" gutterBottom className="FilterSideBar__header" marginTop={1}>
                    Add more filters
                </Typography>

                <Stack direction="row" marginBottom={1}>
                    <TextField
                        style={{fontSize: '12px'}}
                        margin={'dense'}
                        size='small'
                        fullWidth
                        id="outlined-multiline-flexible"
                        label="Enter your query"
                        multiline
                        maxRows={4}
                    />
                </Stack>
                <Stack direction="row" spacing={1} justifyContent={'flex-end'}>
                    <Button variant="contained" size="small">Save</Button>
                    <Button variant="outlined" size="small">Cancel</Button>
                </Stack>
                </>
            }
        </Box>
    )
};
