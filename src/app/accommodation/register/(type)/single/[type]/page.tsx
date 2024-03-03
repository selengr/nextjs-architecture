'use client';

import { Box, Typography } from '@mui/material';
import SingleStep2 from '@/components/Layout/accommodation/register/step2/SingleStep2';
import SingleStep4 from '@/components/Layout/accommodation/register/step4/SingleStep4';
import SingleStep3 from '@/components/Layout/accommodation/register/step3/SingleStep3';
import UiAccommodationBanner from '@/components/UI/ui-banner/UiAccommodationBanner';

export const dynamic = 'force-dynamic';

const Page = ({ params, searchParams }: any) => {
  return (
    <Box height={'100%'}>
      <UiAccommodationBanner
        className="w-full min-h-fit"
        title="مشخصات اقامتگاه"
        alt="header"
        height={500}
        width={500}
      />

      {!searchParams.details && <SingleStep2 />}
      {searchParams.details == 'room' && <SingleStep3 />}
      {searchParams.details == 'facilities' && <SingleStep4 />}
    </Box>
  );
};

export default Page;
