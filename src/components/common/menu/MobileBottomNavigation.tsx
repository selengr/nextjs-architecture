// 'use client';

// import * as React from 'react';
// import Box from '@mui/joy/Box';
// import ListItemDecorator from '@mui/joy/ListItemDecorator';
// import Tabs from '@mui/joy/Tabs';
// import TabList from '@mui/joy/TabList';
// import Tab, { tabClasses } from '@mui/joy/Tab';
// import HomeOutlined from '@mui/icons-material/HomeOutlined';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// import Search from '@mui/icons-material/Search';
// import Person from '@mui/icons-material/Person';
// import Image from 'next/image';
// import Link from 'next/link'

// export default function MobileBottomNavigation({
//   children
// }: {
//   children: React.ReactNode;
// }) {
//   const [index, setIndex] = React.useState(3);
//   const colors = ['primary', 'danger', 'success', 'warning'] as const;

//   const handlePage = (e :any,i:number) => {
//     setIndex(i)
//     console.log("teeeeeeeeeeeeeeeeest-e",e);
//     console.log("teeeeeeeeeeeeeeeeest-i",i);
//   }

//   return (
//     <>
//     {children}
//     <Box className="bg-ms-white rounded-3xl mx-8 mb-6 max-w-[576px] z-50">
 
//       <ul className="menu menu-horizontal bg-base-200 rounded-box h-[50px] flex flex-row">
//         <li onClick={(e)=>handlePage(e,1)} className='w-1/3 flex justify-center items-center align-middle'>
//           <Link href="#" className={`h-[40px] w-[40px] rounded flex justify-center align-middle ${index===1?"bg-ms-btn-green-33 ":""}`} >
    
//           <Image
//                 src={`/static/images/profile/${index===1?"profile-menu2.svg":"profile-menu1.svg"}`}
//                 alt={'flight'}
//                 width={24} //automatically provided
//                 height={24} 
//               />
//           </Link>
//         </li>
//         <li onClick={(e)=>handlePage(e,2)} className='w-1/3 flex justify-center items-center'>
//         <Link href="#" className={`h-[40px] w-[40px] rounded flex justify-center align-middle ${index===2?"bg-ms-btn-green-33 ":""}`} >
//               <Image
//                src={`/static/images/profile/${index===2?"my-trip2.svg":"my-trip1.svg"}`}
//                 alt={'flight'}
//                 width={24} //automatically provided
//                 height={24}
//               />
//             </Link >
//         </li>
//         <li onClick={(e)=>handlePage(e,3)} className='w-1/3 flex justify-center items-center'>
//         <Link href="#" className={`h-[40px] w-[40px] rounded flex justify-center align-middle ${index===3?"bg-ms-btn-green-33 ":""}`} >
//                <Image
//                 src={`/static/images/profile/${index===3?"home2.svg":"home1.svg"}`}
//                 alt={'flight'}
//                 width={24} //automatically provided
//                 height={24} 
//                  />
//           </Link>
//         </li>
//       </ul>
//     </Box>
//     </>
//   );
// }



// import * as React from 'react';
// import Box from '@mui/joy/Box';
// import ListItemDecorator from '@mui/joy/ListItemDecorator';
// import Tabs from '@mui/joy/Tabs';
// import TabList from '@mui/joy/TabList';
// import Tab, { tabClasses } from '@mui/joy/Tab';
// import HomeOutlined from '@mui/icons-material/HomeOutlined';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// import Search from '@mui/icons-material/Search';
// import Person from '@mui/icons-material/Person';
// import Image from 'next/image';
// import Link from 'next/link'

// export default function MobileBottomNavigation({
//   children
// }: {
//   children: React.ReactNode;
// }) {
//   const [index, setIndex] = React.useState(3);
//   const colors = ['primary', 'danger', 'success', 'warning'] as const;

//   const handlePage = (e :any,i:number) => {
//     setIndex(i)
//     console.log("teeeeeeeeeeeeeeeeest-e",e);
//     console.log("teeeeeeeeeeeeeeeeest-i",i);
//   }

//   const menuItems = [
//     {
//       icon: <HomeOutlined />,
//       label: 'Home',
//       link: '/',
//     },
//     {
//       icon: <Person />,
//       label: 'Profile',
//       link: '/profile',
//     },
//     {
//       icon: <Search />,
//       label: 'Search',
//       link: '/search',
//     },
//   ];

//   return (
//     <>
//     {children}
//     <Box className="bg-ms-white rounded-3xl mx-8 mb-6 max-w-[576px] z-50">
 
//       <ul className="menu menu-horizontal bg-base-200 rounded-box h-[50px] flex flex-row">
//         {menuItems.map((item) => (
//           <li
//             key={item.label}
//             onClick={(e) => handlePage(e, item.label)}
//             className={`w-1/3 flex justify-center items-center align-middle ${index === item.label ? 'bg-ms-btn-green-33' : ''}`}
//           >
//               <Link href={item.link} className={`h-[40px] w-[40px] rounded flex justify-center align-middle`}>
//                 <Image
//                     src={`/static/images/profile/${index === item.label ? 'profile-menu2.svg' : 'profile-menu1.svg'}`}
//                     alt={'flight'}
//                     width={24} //automatically provided
//                     height={24}
//                 />
//               </Link>
//           </li>
//       ))}
//       </ul>
//     </Box>
//     </>
//   );
// }


'use client';

import * as React from 'react';
import Box from '@mui/joy/Box';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Search from '@mui/icons-material/Search';
import Person from '@mui/icons-material/Person';
import Image from 'next/image';
import Link from 'next/link'

export default function MobileBottomNavigation(
  {
  children
}: {
  children: React.ReactNode;
}
) {
  const [index, setIndex] = React.useState(3);
  const colors = ['primary', 'danger', 'success', 'warning'] as const;

  const handlePage = (e :any,i:number) => {
    setIndex(i)
    console.log("teeeeeeeeeeeeeeeeest-e",e);
    console.log("teeeeeeeeeeeeeeeeest-i",i);
  }

  const menuItems = [
    {
      label: 'Profile',
      icon: '/static/images/profile/profile-menu1.svg',
      activeIcon: '/static/images/profile/profile-menu2.svg',
      route: '#',
    },
    {
      label: 'My Trips',
      icon: '/static/images/profile/my-trip1.svg',
      activeIcon: '/static/images/profile/my-trip2.svg',
      route: '#',
    },
    {
      label: 'Home',
      icon: '/static/images/profile/home1.svg',
      activeIcon: '/static/images/profile/home2.svg',
      route: '#',
    },
  ];

  return (
    <div className='overflow-hidden'>
      {children}
    <div className="bg-ms-white rounded-3xl max-w-[512px] w-full z-50 fixed bottom-6 ml-8 mr-8">
 
      <ul className="menu menu-horizontal bg-ms-white rounded-3xl h-[50px] flex flex-row">
        {menuItems.map((item, key) => (
          <li
            key={key}
            onClick={(e) => handlePage(e, key)}
            className={`w-1/3 flex justify-center items-center align-middle`}
          >
            <Link href={item.route} className={`${index === key ? 'bg-ms-btn-green-33' : ''} h-[40px] w-[40px] rounded flex justify-center align-middle`}>
              <Image
                src={index === key ? item.activeIcon : item.icon}
                alt={item.label}
                width={24}
                height={24}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
   </div>
  );
}