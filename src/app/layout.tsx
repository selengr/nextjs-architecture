'use client'

import './globals.css';
// import type { Metadata } from 'next';
import { Providers } from '@/redux/provider';
import { AuthProvider } from '@/auth/JwtContext';
import { useEffect } from 'react';
import { useRouter,useSearchParams } from 'next/navigation';
import { GetToken } from '@/auth/getToken';
import { LOCALHOST } from '@/config-global';
import MobileBottomNavigation from '@/components/common/menu/MobileBottomNavigation';

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app'
// };

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(()=>{
 
    (async () => {
      const code = searchParams?.get('code') + ''
      const accessToken =  localStorage.getItem('access_token') + ''

      if (code.length > 10 && accessToken.length < 5 ) {
             await GetToken(code, LOCALHOST)
             router.push("/")
         }
      })()
  },[])

  return (
    <html lang="en" className='w-full ms-center bg-ms-white '>
      <body className='ms-center max-w-[576px] w-full bg-ms-back-card-gray-12 flex flex-col relative overflow-scroll'>  

        <AuthProvider>
        <MobileBottomNavigation>
             {/* <Providers> */}
              {children}
              {/* </Providers> */}
        </MobileBottomNavigation >    
        </AuthProvider>

      </body>
    </html>
  );
}

