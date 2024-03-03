'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileBottomNavigation() {
  const pathname = usePathname();

  const menuItems = [
    {
      label: 'Home',
      icon: '/static/images/profile/home1.svg',
      activeIcon: '/static/images/profile/home2.svg',
      route: '/'
    },
    {
      label: 'My Trips',
      icon: '/static/images/profile/my-trip1.svg',
      activeIcon: '/static/images/profile/my-trip2.svg',
      route: '/my-transaction'
    },
    {
      label: 'Profile',
      icon: '/static/images/profile/profile-menu1.svg',
      activeIcon: '/static/images/profile/profile-menu2.svg',
      route: '/profile'
    }
  ];

  return (
    <>
      {/* {children} */}

      <div className="flex justify-center align-middle items-center max-w-[576px] w-full z-50 fixed bottom-6">
        <ul className="menu menu-horizontal w-full bg-ms-white rounded-3xl mx-[32px] h-[50px] flex flex-row">
          {menuItems.map((item, key) => (
            <li
              key={key}
              className={`w-1/3 flex justify-center items-center align-middle cursor-pointer`}
            >
              <Link
                prefetch={true}
                href={item.route}
                className={`${
                  item.route == pathname ? 'bg-ms-btn-green-33' : ''
                } h-[40px] w-[40px] rounded flex justify-center align-middle p-0 hover:bg-ms-headers-green-55 focus:bg-ms-headers-green-55`}
              >
                <Image
                  className=" text-orange"
                  src={item.route == pathname ? item.activeIcon : item.icon}
                  alt={item.label}
                  width={24}
                  height={24}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
