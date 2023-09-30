"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';

const TransportTypeSelector = () => {
  const [index, setIndex] = React.useState(0);
  const router = useRouter()

  const handlePage = (e :any,i:number,route:string) => {
    setIndex(i)
    router.push(`${route}`)
    console.log("teeeeeeeeeeeeeeeeest-e",e);
    console.log("teeeeeeeeeeeeeeeeest-i",i);
  }

  const transportTypes = [
    {
      label: 'بلیط پرواز',
      icon: '/static/images/flights/flight_sticker.svg',
      activeIcon: '/static/images/flights/flight_sticker_choosed.svg',
      alt: 'flight',
      route: "/flight",
    },
    {
      label: 'بلیط قطار',
      icon: '/static/images/train/train_sticker.svg',
      alt: 'train',
      activeIcon: '/static/images/train/train-choosed.svg',
      route: '/train',
    },
    {
      label: 'بلیط اتوبوس',
      icon: '/static/images/bus/bus_sticker.svg',
      activeIcon: '/static/images/bus/bus-choosed.svg',
      route: '/bus',
      alt: 'bus',
    },
  ];

  const renderTransportTypeSelector = useCallback(
    (type :any, key:number) => (
      <div
        key={key}
        className={` w-1/3 flex flex-col justify-center items-center`}
        onClick={(e) => handlePage(e, key,type.route)}
      >
        <Image
          src={index === key ? type.activeIcon : type.icon}
          alt={type.alt}
          width={25} //automatically provided
          height={25} //automatically provided
        />
        <span className={`${index === key ? "text-ms-yellow" : ""} pt-2 text-ms-thick-green font-ms-regular text-ms-sm`}>
          {type.label}
        </span>
      </div>
    ),
    [transportTypes]
  );

  return (
    <div
      className="h-[4.5rem] -top-9 left-5 right-5 absolute z-20 w-11/12 rounded-2xl bg-ms-back-card-gray-22 flex flex-row-reverse"
    >
      {transportTypes.map(renderTransportTypeSelector)}
    </div>
  );
};

export default TransportTypeSelector;