import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FiltersSB } from './FiltersSB';
import './FilterAccordion.css';

export interface FilterAccordionProps {
    /**
     * Main label of the Accordion
     */
    title: string,
    /**
     * Is the accordion expanded by default?
     */
    defaultExp?: boolean,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters?: any,
    /**
     * Is the accordion currently expanded?
     */
    isExpanded: boolean,
    /**
     * Handles which accordion is opened
     */    
    // eslint-disable-next-line @typescript-eslint/ban-types
    handleChange: Function,
    /**
     * The category type of the filter, so we can control the selected states
     */  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type?: any
}

export const FilterAccordion = ({
    title,
    defaultExp,
    filters,
    isExpanded,
    handleChange,
    type
    }: FilterAccordionProps) => {
    
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
                <FiltersSB filters={filters} type={type}/>
            </AccordionDetails>
        </Accordion>
      )
};

export default FilterAccordion;