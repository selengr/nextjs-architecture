'use client';

import Image from 'next/image';
import { Banner } from '../ui-banner';
import React, { Suspense, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { PATH_BOOKING, PATH_FLIGHT } from '@/routes/paths';
import { Skeleton } from '@mui/material';

const TransportTypeSelector = ({
  type,
  mood
}: {
  type?: string;
  mood?: string;
}) => {
  const [index, setIndex] = React.useState<
    'flights' | 'train' | 'bus' | 'hotel' | 'tour' | null
  >(null);
  const router = useRouter();
  const pathname = usePathname();

  const handlePage = (
    e: any,
    i: 'flights' | 'train' | 'bus' | 'hotel' | 'tour',
    route: string
  ) => {
    setIndex(i);
    router.push(`${route}`);
  };

  const transportTypes = [
    {
      label: 'بلیط پرواز',
      icon: '/static/images/flights/flight_sticker.svg',
      activeIcon: '/static/images/flights/flight_sticker_choosed.svg',
      alt: 'flight',
      route: `${PATH_BOOKING.flights}${PATH_FLIGHT.DOMESTIC}`,
      index: '/flights/domestic'
    },
    {
      label: 'بلیط قطار',
      icon: '/static/images/train/train_sticker.svg',
      alt: 'train',
      activeIcon: '/static/images/train/train-choosed.svg',
      route: PATH_BOOKING.train,
      index: '/train'
    },
    {
      label: 'بلیط اتوبوس',
      icon: '/static/images/bus/bus_sticker.svg',
      activeIcon: '/static/images/bus/bus-choosed.svg',
      route: PATH_BOOKING.bus,
      alt: 'bus',
      index: '/bus'
    },
    {
      label: 'هتل',
      icon: '/static/images/hotel/hotel_sticker.svg',
      activeIcon: '/static/images/hotel/hotel_sticker.svg',
      route: PATH_BOOKING.hotel,
      alt: 'hotel',
      index: '/hotel'
    },
    {
      label: 'تور',
      icon: '/static/images/tour/tour_sticker.svg',
      activeIcon: '/static/images/tour/tour_sticker.svg',
      route: PATH_BOOKING.tour,
      alt: 'tour',
      index: '/tour'
    }
  ];

  const renderTransportTypeSelector = useCallback(
    (type: any, key: number) => (
      <div
        key={key}
        className={` w-1/3 flex flex-col justify-center items-center cursor-pointer`}
        onClick={(e) => handlePage(e, type.index, type.route)}
      >
        <Image
          src={
            type.index.includes(mood ?? pathname) ? type.activeIcon : type.icon
          }
          alt={type.alt}
          width={25} //automatically provided
          height={25} //automatically provided
        />
        <span
          className={`${
            type.index.includes(mood ?? pathname) ? 'text-ms-yellow' : ''
          } pt-2 text-ms-thick-green font-ms-regular text-ms-sm `}
        >
          {type.label}
        </span>
      </div>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [transportTypes]
  );

  return (
    <>
      {type && (
        <Suspense
          fallback={
            <Skeleton variant="rectangular" height="500" className="w-full" />
          }
        >
          <Banner
            bannerPic={`/static/images/${type}/${type}-header-banner.svg`}
            alt="header"
            width={500}
            height={500}
            className="w-full min-h-fit"
          />
        </Suspense>
      )}

      <div className="relative flex justify-center align-middle items-center w-full">
        <div className="h-[4.5rem] -top-9 left-5 right-5 absolute z-20 w-11/12 rounded-2xl bg-ms-back-card-gray-22 flex">
          {transportTypes.map(renderTransportTypeSelector)}
        </div>
      </div>
    </>
  );
};

export default TransportTypeSelector;
