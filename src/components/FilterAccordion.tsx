import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';

export interface FilterAccordionProps {
    title: string,
    defaultExp?: boolean,
    content: object
}

export const FilterAccordion = (props: FilterAccordionProps) => {

    const [selectedIndex, setSelectedIndex] = React.useState(NaN);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        index !== selectedIndex ? setSelectedIndex(index) : setSelectedIndex(NaN);
        console.log(event); // preventing linter
    };

    return (
        <Accordion
            sx={{
                bgcolor: 'transparent',
            }}
            defaultExpanded={props.defaultExp}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>{props.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItemButton
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0)}
                    >
                        <ListItemText primary="Inbox" />
                        { selectedIndex === 0 ? 
                        <ListItemIcon>
                            <CheckTwoToneIcon />
                        </ListItemIcon>
                         : null
                        }
                    </ListItemButton>
                    <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                    >
                       <ListItemText primary="Drafts" />
                        { selectedIndex === 1 ? 
                        <ListItemIcon>
                            <CheckTwoToneIcon />
                        </ListItemIcon>
                         : null
                        }
                    </ListItemButton>
                </List>
            </AccordionDetails>
        </Accordion>
      )
};

export default FilterAccordion;