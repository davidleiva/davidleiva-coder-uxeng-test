import {describe, expect, test} from 'vitest';
import FilterAccordion from '../components/FilterAccordion';
import { PREDEFINED_FILTERS } from '../utils/constants';

describe("Accordion basic test", () => {
    test("FilterAccordion renders ok", () => {
        
        const fc = 
            <FilterAccordion 
                title={'title'}
                defaultExp={true}
                filters={PREDEFINED_FILTERS}
                isExpanded={true}
                handleChange={() => {}}
            />
        ;

        expect(fc).toMatchSnapshot()
    })
})