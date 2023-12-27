import './globals.css';
import { Toaster } from 'sonner';
import type { Metadata } from 'next';
import AuthVerify from './@auth/page';
import { Providers } from '@/redux/provider';
import { AuthProvider } from '@/auth/JwtContext';



export const metadata : Metadata = {
  title: 'ام سفر',
  description: 'booking flight,bus, train tickets',
  icons: {
    icon: '/static/illustrations/favicon/logo2.png',
  },  
};

// export const dynamic = 'force-dynamic'

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" w-full ms-center bg-ms-white">
      <body className="ms-max-w w-full h-full bg-ms-back-card-gray-12 flex flex-col relative overflow-scroll justify-start">
        <AuthVerify>
          <AuthProvider>
            <Providers>{children}</Providers>
          </AuthProvider>
          <Toaster richColors />
        </AuthVerify>
      </body>
    </html>
  );
}
