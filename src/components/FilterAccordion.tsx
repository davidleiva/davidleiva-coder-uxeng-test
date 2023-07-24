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
    content: React.ReactElement<FilterSBItemProps>
}

export const FilterAccordion = ({title, defaultExp, content}: FilterAccordionProps) => {

    // const [selectedIndex, setSelectedIndex] = React.useState(NaN);

    // const handleListItemClick = (
    //     event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    //     index: number,
    // ) => {
    //     index !== selectedIndex ? setSelectedIndex(index) : setSelectedIndex(NaN);
    //     console.log(event); // preventing linter
    // };

    return (
        <Accordion
            sx={{
                bgcolor: 'transparent',
            }}
            defaultExpanded={defaultExp}
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