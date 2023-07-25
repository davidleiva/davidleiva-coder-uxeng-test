import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FiltersSB } from './FiltersSB';

export interface FilterAccordionProps {
    title: string,
    defaultExp?: boolean,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filters: any,
    isExpanded: boolean,
    // eslint-disable-next-line @typescript-eslint/ban-types
    handleChange: Function,
    filterState?: object,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type: any
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