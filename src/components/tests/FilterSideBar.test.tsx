import {describe, expect, test} from 'vitest';
import FilterSideBar from '../FilterSideBar';

describe("Accordion test", () => {
    test("FilterSideBar renders ok", () => {
        
        const fc = <FilterSideBar />;

        expect(fc).toMatchSnapshot()
    })
})