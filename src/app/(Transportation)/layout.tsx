import { Box } from '@mui/material';
import type { Metadata } from 'next';
import { Banner } from '@/components/UI/ui-banner';
import UiSwitchSelector from '@/components/UI/ui-switch-selector/UiSwitchSelector';
import MobileBottomNavigation from '@/components/common/menu/MobileBottomNavigation';
import TransportTypeSelector from '@/components/UI/ui-transport-type-selector/TransportTypeSelector';

export const metadata: Metadata = {
  title: 'ام سفر',
  description: 'booking flight,bus, train tickets',
  icons: {
    icon: '/static/illustrations/favicon/logo2.png'
  }
};

export default function RootLayout({
  children,
  ...props
}: {
  children: React.ReactNode;
  props: any;
}) {
  console.log('params############## :>> ', props);

  return (
    <html lang="en" className="w-full ms-center h-screen bg-ms-white ">
      <body className="max-w-[576px] w-full bg-ms-back-card-gray-12 flex flex-col relative overflow-scroll">
        <TransportTypeSelector />

        <Box sx={{ marginTop: '74px' }}></Box>

        <div className="w-full flex justify-center align-middle items-center space-t-32 ">
          <UiSwitchSelector />
        </div>
        {/* <MobileBottomNavigation>{children}</MobileBottomNavigation> */}
      </body>
    </html>
  );
}
