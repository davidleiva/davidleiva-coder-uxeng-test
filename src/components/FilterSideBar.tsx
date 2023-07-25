import { useState } from 'react';
import {FilterAccordion} from './FilterAccordion';
import Typography from "@mui/material/Typography";
import FilterListIcon from '@mui/icons-material/FilterList';
import { QueryEditor } from './QueryEditor';
import { PREDEFINED_FILTERS } from '../constants';
import Divider from "@mui/material/Divider";
import { FilterStatesContext } from '../ContextManagement';

const FilterSideBar = () => {
    
    const setFiltersState = (filters:any) => {
        setState({...filterState, filters: filters})
    }

    const initState = {
        filters: [],
        setFiltersState: setFiltersState
    } 
    
    const [filterState, setState] = useState({...initState})

    const [activeAccordion, setActiveAccordion] = useState(0);

    const handleActiveAccordion = (value:number, params:object) => {
        value !== activeAccordion ? setActiveAccordion(value) : setActiveAccordion(NaN),
        setFiltersState({...params});
    };



    return (
        <FilterStatesContext.Provider value={initState}>
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
                filters={PREDEFINED_FILTERS}
                defaultExp={true}
                isExpanded={activeAccordion === 0}
                handleChange={(params:object) => handleActiveAccordion(0,params)}
                filterState={filterState}
            />
            <FilterAccordion
                title={'Resource type'} 
                filters={PREDEFINED_FILTERS}
                isExpanded={activeAccordion === 1}
                handleChange={(params:object) => handleActiveAccordion(1,params)}
            />
            <FilterAccordion
                title={'Actions'} 
                filters={PREDEFINED_FILTERS}
                isExpanded={activeAccordion === 2}
                handleChange={(params:object) => handleActiveAccordion(2,params)}
            />
            {/* <FilterAccordion
                title={'Users'} 
                filters={<FilterSBUsers />}
                isExpanded={activeAccordion === 3}
                handleChange={(params:object) => handleActiveAccordion(3,params)}
            /> */}
            <Divider className="FilterBar__Divider"/>
            <QueryEditor />
        </div>
        </FilterStatesContext.Provider>
      )
};

export default FilterSideBar;