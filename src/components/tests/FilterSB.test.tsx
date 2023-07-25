import {describe, expect, test} from 'vitest';
import FiltersSB from '../FiltersSB';

describe("Accordion test", () => {
    test("FiltersSB renders ok", () => {
        
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const fc = <FiltersSB filters={[]} type={''}/>;

        expect(fc).toMatchSnapshot()
    })
})