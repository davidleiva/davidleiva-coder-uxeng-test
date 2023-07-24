import {FilterAccordion} from './FilterAccordion';
import Typography from "@mui/material/Typography";
import FilterListIcon from '@mui/icons-material/FilterList';
import { FiltersSB } from './FiltersSB';
import { Predefined_Filters } from '../constants';

const FilterSideBar = () => {
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
            <FilterAccordion title={'Predefined filters'} content={<FiltersSB filters={Predefined_Filters}/>} defaultExp={true}/>
            <FilterAccordion title={'Resource type'} content={<FiltersSB filters={Predefined_Filters}/>} />
            <FilterAccordion title={'Actions'} content={<FiltersSB filters={Predefined_Filters}/>}/>
            <FilterAccordion title={'Users'} content={<FiltersSB filters={Predefined_Filters}/>}/>
        </div>
      )
};

export default FilterSideBar;