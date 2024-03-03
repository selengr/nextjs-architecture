'use client';

import { Box } from '@mui/material';
import MultiStep1 from '@/components/Layout/accommodation/register/step1/MultiStep1';
import UiAccommodationBanner from '@/components/UI/ui-banner/UiAccommodationBanner';

export const dynamic = 'force-dynamic';

const Page = () => {
  return (
    <Box height={'100%'}>
      <UiAccommodationBanner
        className="w-full min-h-fit"
        title="مشخصات اقامتگاه"
        alt="header"
        height={500}
        width={500}
      />

      <MultiStep1 />
    </Box>
  );
};

export default Page;
