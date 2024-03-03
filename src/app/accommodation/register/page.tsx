'use client';

import React from 'react';
import '../../globals.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { PATH_ACCAMMODATION } from '@/routes/paths';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { saveAccommodationDetails } from '@/redux/slices/accommodation/register';
import {
  IListOfRecidences,
  EnumOfRecidences
} from '@/@types/accommodation/register';
import UiAccommodationBanner from '@/components/UI/ui-banner/UiAccommodationBanner';

// ----------------------------------------------------------------------
let data: IListOfRecidences[] = [
  {
    text: 'سوییت',
    images: 'residence4.svg',
    en_name: 'single',
    enum: EnumOfRecidences.SUITE
  },
  {
    text: 'کلبه',
    images: 'residence5.svg',
    en_name: 'single',
    enum: EnumOfRecidences.COTTAGE
  },
  {
    text: 'ویلا',
    images: 'residence7.svg',
    en_name: 'single',
    enum: EnumOfRecidences.VILLA
  },
  {
    text: 'خانه',
    images: 'residence8.svg',
    en_name: 'single',
    enum: EnumOfRecidences.HOME
  },
  {
    text: 'آپارتمان',
    images: 'residence11.svg',
    en_name: 'single',
    enum: EnumOfRecidences.APARTMENT
  },
  {
    text: 'متل',
    images: 'residence1.svg',
    en_name: 'multi',
    enum: EnumOfRecidences.MOTEL
  },
  {
    text: 'بوم گردی',
    images: 'residence2.svg',
    en_name: 'multi',
    enum: EnumOfRecidences.ECOTOURISM
  },
  {
    text: 'هتل',
    images: 'residence3.svg',
    en_name: 'multi',
    enum: EnumOfRecidences.HOTEL
  },
  {
    text: 'کاروانسرا',
    images: 'residence6.svg',
    en_name: 'multi',
    enum: EnumOfRecidences.INN
  },
  {
    text: 'مجتمع اقامتی',
    images: 'residence9.svg',
    en_name: 'multi',
    enum: EnumOfRecidences.RESIDENTIAL_COMPLEX
  },
  {
    text: 'مهمان سرا',
    images: 'residence10.svg',
    en_name: 'multi',
    enum: EnumOfRecidences.GUESTHOUSE
  }
];
// ----------------------------------------------------------------------

const Page = () => {
  const router = useRouter();
  const state = useAppSelector<any>(
    (state) => state.register.accommodationDetails
  );
  const dispatch = useAppDispatch();

  console.log('state eeeeeeeeeeeeeeeeeeeeeeeeeee first:>> ', state);

  const handlePicType = (value: string) => {
    dispatch(saveAccommodationDetails({ name: 'residenceName', value }));
    router.push(
      PATH_ACCAMMODATION.accommodation +
        PATH_ACCAMMODATION.register.replace(' ', '') +
        '/' +
        value
    );
  };

  return (
    <Box height={'100%'}>
      <UiAccommodationBanner
        className="w-full min-h-fit"
        title="نوع اقامتگاه"
        alt="header"
        height={500}
        width={500}
      />

      <Box className="w-full flex justify-center px-4 -mt-12 pb-4">
        <Grid container spacing={0} className="flex justify-center z-50 ltr">
          {/* <Stack className="w-full bg-ms-white rounded-2xl mb-4">
            <HorizontalLinearStepper activeStep={0} />
          </Stack> */}

          <Stack spacing={4} className="w-full bg-ms-white rounded-2xl mb-10">
            <Typography
              className="w-full text-right p-5 pb-0 text-ms-thick-green"
              fontWeight={'bold'}
              marginTop={'0 !important'}
              variant="body1"
              component="h4"
            >
              چه نوع اقامتگاهی دارید؟
            </Typography>

            <Grid container spacing={0} className="flex justify-center">
              {data.map((value,key) => (
                <Stack
                key={key}
                  onClick={() =>
                    handlePicType(value.en_name + '-' + value.enum)
                  }
                  className={`${
                    state.residenceName == value.enum ? 'residence-type-bg' : ''
                  } accommodation-type-card hover:text-ms-light-green rounded-2xl flex flex-col justify-center mx-2 pb-2 mb-2`}
                  spacing={1}
                >
                  <Image
                    src={`/static/images/accommodation/register/${value.images}`}
                    alt={'alt'}
                    width={0} //automatically provided
                    height={0} //automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                    className={`${
                      state.residenceName == value.enum
                        ? 'residence-type-card'
                        : ''
                    } accommodation-type-pic w-full h-36 rounded-2xl`}
                  />
                  <Typography
                    className="text-center hover:text-ms-light-green text-ms-thick-green text-ms-lg"
                    marginTop={'0 !important'}
                    variant="body1"
                    component="h2"
                  >
                    {value.text}
                  </Typography>
                </Stack>
              ))}
            </Grid>
          </Stack>
        </Grid>
      </Box>
    </Box>
  );
};

export default Page;
