import { Box, Container } from '@mui/material';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ام سفر',
  description: 'booking flight,bus, train tickets'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Container className="w-full h-screen justify-center inline-flex align-middle p-0">
        {children}
    </Container>
    // <html lang="en" className="w-full h-screen justify-center inline-flex align-middle">
    //   {/* <body className="max-w-[576px] w-full flex flex-col relative overflow-scroll"> */}
    //       {children}
    //   {/* </body> */}
    // </html>
  );
}
