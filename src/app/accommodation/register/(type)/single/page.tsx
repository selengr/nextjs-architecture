'use client';

import { Box, Grid, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import UiButton from '@/components/UI/ui-button';
import { PATH_ACCAMMODATION } from '@/routes/paths';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { saveAccommodationDetails } from '@/redux/slices/accommodation/register';
import SingleStep1 from '@/components/Layout/accommodation/register/step1/SingleStep1';
import HorizontalLinearStepper from '@/components/UI/ui-horizontalLinearStepper/HorizontalLinearStepper';
import UiAccommodationBanner from '@/components/UI/ui-banner/UiAccommodationBanner';

export const dynamic = 'force-dynamic';

const Page = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.register.accommodationDetails);
  const [roomType, setRoomType] = useState<string>(state.roomType);

  console.log('stateeeeeeeeeeeeeee SingleStep1 :>> ', state);

  const confirm = () => {
    dispatch(
      saveAccommodationDetails({ name: 'residenceType', value: roomType })
    );
    router.push(
      PATH_ACCAMMODATION.accommodation +
        PATH_ACCAMMODATION.register +
        PATH_ACCAMMODATION.single +
        '/' +
        roomType
    );
  };

  const handleRoom = (data: any) => {
    setRoomType(data.target.value);
  };

  return (
    <Box height={'100%'}>
      <UiAccommodationBanner
        className="w-full min-h-fit"
        title="ثبت اتاق"
        alt="header"
        height={500}
        width={500}
      />

      <Box className="w-full flex flex-col justify-center px-4 -mt-12">
        <Stack className="flex justify-center bg-ms-white  rounded-2xl z-50 ltr">
          <HorizontalLinearStepper activeStep={1} />
        </Stack>
        <Grid
          container
          spacing={0}
          className="w-full flex justify-end rounded-2xl mt-4 z-50 ltr"
        >
          {/* <LinearDeterminate value={20}></LinearDeterminate> */}
          <Typography
            fontWeight={'bold'}
            className="w-full text-right px-2 py-3 text-ms-thick-green"
            marginTop={'0 !important'}
            variant="body1"
            component="h4"
          >
            نوع قیمت گذاری اتاق ها
          </Typography>

          <Typography
            fontWeight={'bold'}
            className="w-full text-right p-2 text-ms-thick-green "
            marginTop={'0 !important'}
            variant="body2"
            component="h4"
          >
            .دربستی یا اشتراکی بودن اتاق را برای قیمت گذاری تعیین کنید
          </Typography>

          <SingleStep1 handleRoom={handleRoom} />

          <Stack
            sx={{
              width: '100%'
            }}
            spacing={2}
            p={2}
          >
            <UiButton
              onClick={confirm}
              type="submit"
              className="w-full hover:bg-ms-btn-green-33 text-ms-lg h-[50px] border-none text-ms-white font-ms-medium rounded-2xl bg-ms-btn-green-23"
              text="ثبت و ادامه"
            />
          </Stack>
        </Grid>
      </Box>
    </Box>
  );
};

export default Page;
