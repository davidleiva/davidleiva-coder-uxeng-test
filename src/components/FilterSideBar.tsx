import { useState } from 'react';
import {FilterAccordion} from './FilterAccordion';
import Typography from "@mui/material/Typography";
import FilterListIcon from '@mui/icons-material/FilterList';
import { FiltersSB } from './FiltersSB';
import { FilterSBUsers } from './FilterSBUsers';
import { QueryEditor } from './QueryEditor';
import { PREDEFINED_FILTERS } from '../constants';
import Divider from "@mui/material/Divider"

const FilterSideBar = () => {
    const [activeAccordion, setActiveAccordion] = useState(0);
    const handleActiveAccordion = (value:number) => {
        value !== activeAccordion ? setActiveAccordion(value) : setActiveAccordion(NaN) 
        debugger;
    };
    return (
        <div className="FilterSideBar">
            <div
                className="FilterSideBar__icon"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '8px'
                }}
            >
                <FilterListIcon />
                <Typography variant="h6" gutterBottom className="FilterSideBar__header">
                    Filter
                </Typography>
            </div>
            <FilterAccordion
                title={'Predefined filters'} 
                content={<FiltersSB filters={PREDEFINED_FILTERS}/>}
                defaultExp={true}
                isExpanded={activeAccordion === 0}
                handleChange={() => handleActiveAccordion(0)}
            />
            <FilterAccordion
                title={'Resource type'} 
                content={<FiltersSB filters={PREDEFINED_FILTERS}/>} 
                isExpanded={activeAccordion === 1}
                handleChange={() => handleActiveAccordion(1)}
            />
            <FilterAccordion
                title={'Actions'} 
                content={<FiltersSB filters={PREDEFINED_FILTERS}/>}
                isExpanded={activeAccordion === 2}
                handleChange={() => handleActiveAccordion(2)}
            />
            <FilterAccordion
                title={'Users'} 
                content={<FilterSBUsers />}
                isExpanded={activeAccordion === 3}
                handleChange={() => handleActiveAccordion(3)}
            />
            <Divider className="FilterBar__Divider"/>
            <QueryEditor />
        </div>
      )
};

export default FilterSideBar;