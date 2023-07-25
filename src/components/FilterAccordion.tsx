import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FiltersSB } from './FiltersSB';

export interface FilterAccordionProps {
    title: string,
    defaultExp?: boolean,
    filters: any,
    isExpanded: boolean,
    handleChange: Function,
    filterState?: object
}

export const FilterAccordion = ({
    title,
     defaultExp,
     filters,
     isExpanded,
     handleChange,
    }: FilterAccordionProps) => {
    
    console.log('ant. filters es:', filters);
    
    return (
        <Accordion
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
                <FiltersSB filters={Object.values(filters)}/>
            </AccordionDetails>
        </Accordion>
      )
};

export default FilterAccordion;