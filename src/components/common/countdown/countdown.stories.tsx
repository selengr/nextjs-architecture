

import React from 'react';
import  Countdown  from './Countdown'; // Adjust path as needed

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Countdown',
  component: Countdown,
};

export const StandardDisplay = () => <Countdown />; // Renders with default values (00 for all units)

export const SpecificTime = () => (
  // Override default state with specific initial time values
  <Countdown />
);
