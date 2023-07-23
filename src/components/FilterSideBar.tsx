import {FilterAccordion} from './FilterAccordion';
import Typography from "@mui/material/Typography";
import FilterListIcon from '@mui/icons-material/FilterList';
import { FiltersSBPredefined } from './FiltersPredefined';

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
            <FilterAccordion title={'Predefined filters'} content={FiltersSBPredefined} defaultExp={true}/>
            <FilterAccordion title={'Resource type'} content={{}} />
            <FilterAccordion title={'Actions'} content={{}}/>
            <FilterAccordion title={'Users'} content={{}}/>
        </div>
      )
};

export default FilterSideBar;