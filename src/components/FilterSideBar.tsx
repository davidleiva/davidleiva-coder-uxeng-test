import { useState } from 'react';
import { FilterAccordion } from './FilterAccordion';
import Typography from "@mui/material/Typography";
import FilterListIcon from '@mui/icons-material/FilterList';
import { QueryEditor } from './QueryEditor';
import { FILTER_TYPES, PREDEFINED_FILTERS, RESOURCE_FILTERS, ACTION_FILTERS } from '../utils/constants';
import Divider from "@mui/material/Divider";
import './FilterSideBar.css';
import FilterSBUsers from './FilterSBUsers';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const FilterSideBar = () => {

    const [activeAccordion, setActiveAccordion] = useState(0);

    const handleActiveAccordion = (value: number) => {
        value !== activeAccordion ? setActiveAccordion(value) : setActiveAccordion(NaN)
    };

    return (
        <div className="FilterSideBar">
            <div
                className="FilterSideBar__Header"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '8px'
                }}
            >
                <FilterListIcon />
                <Typography variant="h6" gutterBottom className="FilterSideBar__Title">
                    Filter
                </Typography>
            </div>
            <FilterAccordion
                type={FILTER_TYPES[0]}
                title={'Predefined filters'}
                filters={PREDEFINED_FILTERS}
                defaultExp={true}
                isExpanded={activeAccordion === 0}
                handleChange={() => handleActiveAccordion(0)}
            />
            <FilterAccordion
                type={FILTER_TYPES[1]}
                title={'Resource type'}
                filters={RESOURCE_FILTERS}
                isExpanded={activeAccordion === 1}
                handleChange={() => handleActiveAccordion(1)}
            />
            <FilterAccordion
                type={FILTER_TYPES[2]}
                title={'Actions'}
                filters={ACTION_FILTERS}
                isExpanded={activeAccordion === 2}
                handleChange={() => handleActiveAccordion(2)}
            />
            <FilterSBUsers
                title={'Users'}
                isExpanded={activeAccordion === 3}
                handleChange={() => handleActiveAccordion(3)}
            />
            <Divider className="FilterBar__Divider" />
            <QueryEditor />
            <Divider className="FilterBar__Divider" />
            <a href="#" target="_blank" className={'FilterSideBar__Link'}><HelpOutlineIcon /> <span>Filters documentation</span></a>
        </div>
    )
};

export default FilterSideBar;