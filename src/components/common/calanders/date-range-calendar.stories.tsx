import React from 'react';
import  DateRangeCalendar  from './DateRangeCalendar'; // Adjust path as needed

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/DateRangeCalendar',
  component: DateRangeCalendar,
};

export const Primary = () => <DateRangeCalendar />;

export const WithInitialSelection = () => {
  // Set initial start and end dates
  const startDate = new Date(2024, 2, 1); // March 1, 2024
  const endDate = new Date(2024, 2, 3); // March 3, 2024

  return <DateRangeCalendar />;
};

export const SpanishLocale = () => (
  // Set Spanish locale explicitly
  <DateRangeCalendar />
);
