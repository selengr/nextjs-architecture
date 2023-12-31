import './globals.css';
import type { Metadata } from 'next';
import { Providers } from '@/redux/provider';
import { AuthProvider } from '@/auth/JwtContext';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <AuthProvider> */}
            {/* <Providers> */}
              {children}
              {/* </Providers> */}
        {/* </AuthProvider> */}
      </body>
    </html>
  );
}
