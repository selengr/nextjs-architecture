'use client';

import { Box } from '@mui/material';
import { IPageProps } from '@/@types/accommodation/register';
import UiAccommodationBanner from '@/components/UI/ui-banner/UiAccommodationBanner';
import SelectingArea from '@/components/Layout/accommodation/register/SelectingArea';

export const dynamic = 'force-dynamic';

const Page = ({ params }: IPageProps) => {
  return (
    <Box>
      <UiAccommodationBanner
        className="w-full min-h-fit"
        title="منطقه اقامتگاه"
        alt="header"
        height={500}
        width={500}
      />

      <SelectingArea />
    </Box>
  );
};

export default Page;
