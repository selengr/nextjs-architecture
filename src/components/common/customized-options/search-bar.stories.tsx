import React from 'react';
import  CustomizedOptions  from './CustomizedOptions';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/CustomizedOptions',
  component: CustomizedOptions,
};

export const Primary = () => (
  <CustomizedOptions type="DESTINATION" onClose={() => {}} />
);

export const LoadingState = () => (
  <CustomizedOptions type="ORIGIN" onClose={() => {}} />
);

export const WithInitialSuggestions = () => (
  <CustomizedOptions
    type="DESTINATION"
    onClose={() => {}}
  />
);
