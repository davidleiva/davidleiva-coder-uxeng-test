import {describe, expect, test} from 'vitest';
import FilterAccordion from '../components/FilterAccordion';

describe("Accordion test", () => {
    test("FilterAccordion renders ok", () => {
        
        const fc = 
            <FilterAccordion 
                title={'title'}
                defaultExp={true}
                filters={[]}
                isExpanded={true}
                handleChange={() => {}}
                filterState={{}}
                type={''}
            />
        ;

        expect(fc).toMatchSnapshot()
    })
})