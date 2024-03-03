'use client';

import { Box, Stack, Typography } from '@mui/material';
import { IPageProps } from '@/@types/accommodation/register';
import UiAccommodationBanner from '@/components/UI/ui-banner/UiAccommodationBanner';
import MultiStep2 from '@/components/Layout/accommodation/register/step2/MultiStep2';
import MultiStep2_Pricing from '@/components/Layout/accommodation/register/step2/MultiStep2_Pricing';
import MultiStep2_Pictures from '@/components/Layout/accommodation/register/step2/MultiStep2_Pictures';
import HorizontalLinearStepper from '@/components/UI/ui-horizontalLinearStepper/HorizontalLinearStepper';
import MultiStep2_WelfareSevices from '@/components/Layout/accommodation/register/step2/MultiStep2_WelfareSevices';
import MultiStep2_Characteristics from '@/components/Layout/accommodation/register/step2/MultiStep2_Characteristics';

export const dynamic = 'force-dynamic';

const Page = ({ params, searchParams }: IPageProps) => {
  console.log('searchParams.query :>> ', searchParams.query);
  return (
    <Box height={'100%'}>
      <UiAccommodationBanner
        className="w-full min-h-fit"
        title="ثبت اتاق"
        alt="header"
        height={500}
        width={500}
      />

      <Box className="w-full flex flex-col  px-4 -mt-12">
        <Stack className="flex justify-center bg-ms-white  rounded-2xl z-50 ltr">
          <HorizontalLinearStepper activeStep={2} />
        </Stack>

        {!searchParams.query && <MultiStep2 />}
        {searchParams.query == 'pricing' && <MultiStep2_Pricing />}
        {searchParams.query == 'characteristics' && (
          <MultiStep2_Characteristics />
        )}
        {searchParams.query == 'pic' && <MultiStep2_Pictures />}
        {searchParams.query == 'welfare-sevices' && (
          <MultiStep2_WelfareSevices />
        )}
      </Box>
    </Box>
  );
};

export default Page;
