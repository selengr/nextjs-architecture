import React from 'react';
import  UICustomizedCombo  from './UICustomizedCombo';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/UICustomizedCombo',
  component: UICustomizedCombo,
  argTypes: {
    placeholder: { control: 'text' },
    label: { control: 'text' },
    account: { control: false }, // Mock data provided in a separate story
    selectedCredits: { action: 'selected credits' },
  },
};

const Template = ({ placeholder, label, account, selectedCredits }:any) => (
  <UICustomizedCombo
    placeholder={placeholder}
    label={label}
    account={account}
    selectedCredits={selectedCredits}
  />
);

export const Primary = Template.bind({});
Primary.arguments = {
  placeholder: 'Search...',
  label: 'Credit type',
  // Mock account data (replace with your actual data source)
  account: [
    { creditType: 'اعتبار اربعین تا اربعین - زیر طرح 1', availableAmount: 82000000 },
    { creditType: 'Sample Credit 2', availableAmount: 10000 },
  ],
};
