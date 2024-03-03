import React from 'react';
import { UIAccordion } from './UiAccordion';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/UIAccordion',
  component: UIAccordion,
  argTypes: {
    label: { control: 'text' },
    details: { control: 'text' },
    checked: { control: 'boolean' },
    error: { control: 'boolean' },
    handle_payWith: { action: 'handle pay with' }, // Define an action for testing
  },
};

const Template = ({ label, details, name, checked, error, handle_payWith }:any) => (
  <UIAccordion label={label} details={details} name={name} checked={checked} error={error} handle_payWith={handle_payWith} />
);

export const Primary = Template.bind({});
Primary.arguments = {
  label: 'Accordion Item 1',
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  name: 'paymentMethod',
  checked: false,
  error: false,
};

// Additional story with error state
export const Error = Template.bind({});
Error.arguments = {
  ...Primary.arguments,
  error: true,
};
