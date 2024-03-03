import React from 'react';
import UiSwitchSelector from './UiSwitchSelector';


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/UiSwitchSelector',
  component: UiSwitchSelector,
};

const Template = (args:any) => <UiSwitchSelector {...args} />;

export const Default = Template.bind({});
Default.arguments = {}; // No additional arguments needed for default behavior

// Optional story to demonstrate a simulated selected state
export const Selected = Template.bind({});
Selected.arguments = {
  initialSelectedIndex: 1, // Set the initial selection to the second option
};
