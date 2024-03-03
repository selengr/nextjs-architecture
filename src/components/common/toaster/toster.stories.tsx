import React from 'react';
import CustomToast from './Toaster';


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/CustomToast',
  component: CustomToast,
  argTypes: {
    message: { control: 'text' },
    type: { control: { type: 'select', options: ['info', 'success', 'warning', 'error'] } },
    duration: { control: { type: 'number', min: 1000, max: 10000, step: 1000 } },
  },
};

const Template = ({ message, type, duration }:any) => (
  <CustomToast message={message} type={type} duration={duration} />
);

export const Primary = Template.bind({});
Primary.arguments = {
  message: 'This is a toast message.',
  type: 'info',
  duration: 3000,
};

export const Success = Template.bind({});
Success.arguments = {
  ...Primary.arguments,
  type: 'success',
  message: 'Success! Your action was completed.'
};

export const Warning = Template.bind({});
Warning.arguments = {
  ...Primary.arguments,
  type: 'warning',
  message: 'Warning! Please double-check before proceeding.'
};

export const Error = Template.bind({});
Error.arguments = {
  ...Primary.arguments,
  type: 'error',
  message: 'An error occurred. Please try again later.'
};
