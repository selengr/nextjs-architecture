import React from 'react';

import TransportTabs from './TransportTabs';


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/TransportTabs',
  component: TransportTabs,
  decorators: [
    (Story:any) => (
    //   <MemoryRouter>
        <Story />
    //   </MemoryRouter>
    ),
  ],
};

// Default story showing initial state
export const Primary = () => <TransportTabs control={null} />;

// Stories for each tab index
export const Flight = () => <TransportTabs control={0} />;
export const Coastal = () => <TransportTabs control={1} />;
export const Hotel = () => <TransportTabs control={2} />;
export const Ecotourism = () => <TransportTabs control={3} />;
export const Apartment = () => <TransportTabs control={4} />;
