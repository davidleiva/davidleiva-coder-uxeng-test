import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { FormControlLabel, Typography } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useState, useContext } from 'react';
import { FilterState, FilterStatesContext } from '../utils/ContextManagement';
import './QueryEditor.css';

export const QueryEditor = () => {
    const { filters, setFiltersState } = useContext(FilterStatesContext);
    const [isAdvanced, setIsAdvanced] = useState(false);
    
    const handleDelete = (key:string) => {
        const _filters = {...filters};
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const _key:keyof FilterState = key;
        delete _filters[_key];
        setFiltersState({..._filters});
    };

    const values = Object.entries(filters);

    return (
        <Box className="QueryEditor">
            <Typography variant="h6" gutterBottom className="FilterSideBar__Title">
                Filter Query Editor
            </Typography>
            <Stack
                direction="row"
                spacing={1}
                marginTop={1}
                marginBottom={0}
                flexWrap={'wrap'}
            >
                {
                    values.map((el,index) => (
                        el[1] !== '' && (
                        <Chip
                            key={index}
                            color="primary"
                            size="small"
                            label={el[0]+':'+el[1]}
                            onDelete={() => handleDelete(el[0])}
                        /> 
                        )
                    ))

                }
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
                <Typography variant="h6" gutterBottom className="FilterSideBar__Title" marginTop={1}>
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
                    <Button variant="outlined" size="small">Cancel</Button>
                    <Button variant="contained" size="small">Save</Button>
                </Stack>
                </>
            }
        </Box>
    )
};
