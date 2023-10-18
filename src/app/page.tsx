import { Banner } from '@/components/UI/ui-banner';
import TransportTypeSelector from '@/components/UI/ui-transport-type-selector/TransportTypeSelector';
import { Box, Paper, Stack, Typography } from '@mui/material';
import Image from 'next/image';



export default function Home() {
  return (
    <div className="h-screen w-full overflow-hidden">
      <Banner
        bannerPic="/static/images/msafar/msafar_banner.svg"
        alt="header"
        width={0}
        height={500}
        className="w-full h-full"
      />

      <div className="relative flex justify-center align-middle items-center">
        <TransportTypeSelector />
      </div>
    </div>
  );
}
