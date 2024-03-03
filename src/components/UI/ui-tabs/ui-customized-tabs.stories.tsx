import React from 'react';
import UICustomizedTabs from './UICustomizedTabs';


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/UICustomizedTabs',
  component: UICustomizedTabs,
};

const Template = (args:any) => <UICustomizedTabs {...args} />;

export const Default = Template.bind({});
Default.arguments = {
  tabsName: {
    first: 'Tab 1',
    second: 'Tab 2',
  },
};

export const WithHighlightColor = Template.bind({});
WithHighlightColor.arguments = {
  tabsName: {
    first: 'Highlighted Tab 1',
    second: 'Tab 2',
  },
  highlightColor: 'blue', // Example highlight color
};
