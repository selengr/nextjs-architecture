// import './globals.css';
import { Box, Container } from '@mui/material';
import type { Metadata } from 'next';
import { Banner } from '@/components/UI/ui-banner';
import UiSwitchSelector from '@/components/UI/ui-switch-selector/UiSwitchSelector';
import TransportTypeSelector from '@/components/UI/ui-transport-type-selector/TransportTypeSelector';

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
    <Container className="w-full bg-ms-back-card-gray-12 px-0">
      <Box className="w-full bg-ms-back-card-gray-12 flex flex-col relative">
        {children}
      </Box>     
    </Container>  
    // <html lang="en" className="w-full ms-center bg-ms-white ">

    //   <body className="max-w-[576px] w-full bg-ms-back-card-gray-12 flex flex-col relative">
    //     {children}
    //   </body>

    // </html>
  );
}
