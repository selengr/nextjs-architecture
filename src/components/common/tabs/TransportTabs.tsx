'use client';

import * as React from 'react';
import './transportTabs.css';
import Image from 'next/image';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import { useRouter } from 'next/navigation';
import { PATH_ACCAMMODATION, PATH_BOOKING, PATH_FLIGHT } from '@/routes/paths';

const transportTypes = [
  // {
  //   label: 'بلیط پرواز',
  //   icon: '/static/images/flights/flight_sticker.svg',
  //   activeIcon: '/static/images/flights/flight_sticker_choosed.svg',
  //   alt: 'flight',
  //   route: `${PATH_BOOKING.flights}${PATH_FLIGHT.DOMESTIC}`,
  //   index: '/flights/domestic'
  // },
  // {
  //   label: 'بلیط قطار',
  //   icon: '/static/images/train/train_sticker.svg',
  //   alt: 'train',
  //   activeIcon: '/static/images/train/train-choosed.svg',
  //   route: PATH_BOOKING.train,
  //   index: '/train'
  // },
  // {
  //   label: 'بلیط اتوبوس',
  //   icon: '/static/images/bus/bus_sticker.svg',
  //   activeIcon: '/static/images/bus/bus-choosed.svg',
  //   route: PATH_BOOKING.bus,
  //   alt: 'bus',
  //   index: '/bus'
  // },
  // {
  //   label: 'هتل',
  //   icon: '/static/images/hotel/hotel_sticker.svg',
  //   activeIcon: '/static/images/hotel/hotel_sticker.svg',
  //   route: PATH_BOOKING.hotel,
  //   alt: 'hotel',
  //   index: '/hotel'
  // },
  // {
  //   label: 'تور',
  //   icon: '/static/images/tour/tour_sticker.svg',
  //   activeIcon: '/static/images/tour/tour_sticker.svg',
  //   route: PATH_BOOKING.tour,
  //   alt: 'tour',
  //   index: '/tour'
  // },
  {
    label: 'بلیط پرواز',
    icon: '/static/images/accommodation/tab/flight-tab.svg',
    activeIcon: '/static/images/accommodation/tab/flight-tab.svg',
    route: `${PATH_BOOKING.flights}${PATH_FLIGHT.DOMESTIC}`,
    alt: 'flight',
    index: '/flights/domestic'
  },
  {
    label: 'ساحلی',
    icon: '/static/images/accommodation/tab/coastal-tab.svg',
    activeIcon: '/static/images/accommodation/tab/coastal-tab.svg',
    route: PATH_BOOKING.tour,
    alt: 'coastal',
    index: '/tour'
  },
  {
    label: 'هتل',
    icon: '/static/images/accommodation/tab/hotel-tab.svg',
    activeIcon: '/static/images/accommodation/tab/hotel-tab.svg',
    route: PATH_BOOKING.tour,
    alt: 'hotel',
    index: '/tour'
  },
  {
    label: 'بوم گردی',
    icon: '/static/images/accommodation/tab/ecotourism-tab.svg',
    activeIcon: '/static/images/accommodation/tab/ecotourism-tab.svg',
    route: PATH_BOOKING.tour,
    alt: 'ecotourism',
    index: '/tour'
  },
  {
    label: 'آپارتمان',
    icon: '/static/images/accommodation/tab/apartment-tab.svg',
    activeIcon: '/static/images/accommodation/tab/apartment-tab.svg',
    route: PATH_BOOKING.tour,
    alt: 'apartment',
    index: '/tour'
  } 
];

export default function TransportTabs({ control }: { control: number | null }) {
  const [value, setValue] = React.useState<null | number>(control);
  const router = useRouter();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log('event :>> ', newValue);
    let tabsItem = [
      PATH_BOOKING.flights + PATH_FLIGHT.DOMESTIC,
      PATH_ACCAMMODATION.accommodation + PATH_ACCAMMODATION.coastal,
      PATH_ACCAMMODATION.accommodation + PATH_ACCAMMODATION.hotel,
      PATH_ACCAMMODATION.accommodation + PATH_ACCAMMODATION.ecotourism,
      PATH_ACCAMMODATION.accommodation + PATH_ACCAMMODATION.apartment
    ];
    setValue(newValue);
    router.push(tabsItem[newValue]);
  };

  return (
    <Box className="w-full -mt-12 transportTabs px-6">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon label tabs example"
        className="bg-ms-white w-full rounded-2xl z-50"
        // allowScrollButtonsMobile
        variant="scrollable"
        // scrollButtons
      >
        {transportTypes.map((type, index) => {
          return (
            <Tab
              key={index}
              className={`w-1/5 border-none `}
              sx={{ border: 'none' }}
              icon={
                <Image
                  src={type.activeIcon}
                  alt={type.alt}
                  width={0} //automatically provided
                  height={0} //automatically provided
                  className={`w-[55%]`}
                />
              }
              label={type.label}
            />
          );
        })}
      </Tabs>
    </Box>
  );
}
