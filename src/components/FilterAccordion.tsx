import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FilterSBItemProps } from './FiltersSB';

export interface FilterAccordionProps {
    title: string,
    defaultExp?: boolean,
    content: React.ReactElement<FilterSBItemProps>,
    isExpanded: boolean,
    handleChange: Function
}

export const FilterAccordion = ({
    title,
     defaultExp,
     content,
     isExpanded,
     handleChange
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
                { content }
            </AccordionDetails>
        </Accordion>
      )
};

export default FilterAccordion;