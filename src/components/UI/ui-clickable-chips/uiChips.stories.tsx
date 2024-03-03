import React from 'react';
import UiChips from './UiChips';


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/UiChips',
  component: UiChips,
};

const Template = (args:any) => <UiChips {...args} />;

export const Default = Template.bind({});
Default.arguments = {
  chipList: ['Chip 1', 'Chip 2', 'Chip 3'],
};

export const WithSelected = Template.bind({});
WithSelected.arguments = {
  chipList: ['Chip A', 'Chip B', 'Chip C'],
  selected: 1, // Highlight the second chip
};

// Optional story to demonstrate interaction with modal (requires implementation)
export const InteractionWithModal = Template.bind({});
InteractionWithModal.arguments = {
  // ...set up necessary props and state for modal interaction
};
