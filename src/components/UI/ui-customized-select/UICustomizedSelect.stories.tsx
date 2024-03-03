import React from 'react';
import  UICustomizedSelect  from './UICustomizedSelect';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/UICustomizedSelect',
  component: UICustomizedSelect,
};

export const Primary = () => (
  <UICustomizedSelect list={['Apple', 'Banana', 'Cherry', 'Orange', 'Mango']} />
);

export const WithPlaceholder = () => (
  <UICustomizedSelect list={['Apple', 'Banana', 'Cherry', 'Orange', 'Mango']} />
); // Adjust the component to display a placeholder when empty (replace the commented line)
