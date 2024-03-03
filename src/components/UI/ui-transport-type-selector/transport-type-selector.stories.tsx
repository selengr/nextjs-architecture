import React from 'react';
import TransportTypeSelector from './TransportTypeSelector';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/TransportTypeSelector',
  component: TransportTypeSelector,
};

const Template = (args:any) => <TransportTypeSelector {...args} />;

export const Default = Template.bind({});
Default.arguments = {
  type: 'flights', // Example usage with a transport type
};

export const WithMood = Template.bind({});
WithMood.arguments = {
  mood: '/train', // Example usage with a mood
};
