import './globals.css';
import { Toaster } from 'sonner';
import type { Metadata } from 'next';
import { Providers } from '@/redux/provider';
import { AuthProvider } from '@/auth/JwtContext';


import AuthVerify from './@auth/page';
import MobileBottomNavigation from '@/components/common/menu/MobileBottomNavigation';

export const metadata : Metadata = {
  title: 'ام سفر',
  description: 'booking flight,bus, train tickets',
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en" className='w-full ms-center bg-ms-white '>
      <body className='ms-center max-w-[576px] w-full bg-ms-back-card-gray-12 flex flex-col relative overflow-scroll'>  
        <AuthVerify>
        <AuthProvider>
        <MobileBottomNavigation>
             <Providers>
              {children}
              </Providers>
        </MobileBottomNavigation >    
        </AuthProvider>
        <Toaster richColors/>
        </AuthVerify>
      </body>
    </html>
  );
}

