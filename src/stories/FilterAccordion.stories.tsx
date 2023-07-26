import type { Meta, StoryObj } from '@storybook/react';

import FilterAccordion from '../components/FilterAccordion';
import { FILTER_TYPES } from '../utils/constants';
import { PREDEFINED_FILTERS } from '../utils/constants';

import '../components/FilterSideBar.css';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/FilterSideBar/Components/FilterAccordion',
  component: FilterAccordion,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof FilterAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    title: 'Filter Accordion',
    defaultExp: true,
    filters: PREDEFINED_FILTERS,
    isExpanded: true,
    handleChange: () => {},
    type: FILTER_TYPES[0]
  },
};

// export const Secondary: Story = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };


// export const Warning: Story = {
//   args: {
//     primary: true,
//     label: 'Delete now',
//     backgroundColor: 'red',
//   }
// };
