'use client';

import * as yup from 'yup';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import UiButton from '@/components/UI/ui-button';
import { PATH_ACCAMMODATION } from '@/routes/paths';
import FacilitiesCounter from '../FacilitiesCounter';
import { yupResolver } from '@hookform/resolvers/yup';
import { Grid, Stack, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import {
  EnumOfWellFare,
  IListOfRecidences,
  IListOfWellFare
} from '@/@types/accommodation/register';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

type Inputs = {
  bathroom_inroom?: number;
  squatToilet_inroom?: number;
  sittingToilet_inroom?: number;
};

// ----------------------------------------------------------------------
let data: IListOfWellFare[] = [
  {
    text: 'تلفن',
    images: '_mock1.svg',
    enum: EnumOfWellFare.PHONE
  },
  {
    text: 'آشپز خانه',
    images: '_mock2.svg',
    enum: EnumOfWellFare.KITCHEN
  },
  {
    text: 'تهویه هوا',
    images: '_mock3.svg',
    enum: EnumOfWellFare.AIR_CONDITIONONG
  },
  {
    text: 'سشووار',
    images: '_mock4.svg',
    enum: EnumOfWellFare.HAIR_DRYER
  },
  {
    text: 'سرویس ایرانی',
    images: '_mock5.svg',
    enum: EnumOfWellFare.SQUAT_ROOM
  },
  {
    text: 'سرویس فرنگی',
    images: '_mock6.svg',
    enum: EnumOfWellFare.SITTING_ROOM
  },
  {
    text: 'تلویزیون',
    images: '_mock7.svg',
    enum: EnumOfWellFare.TV
  },
  {
    text: 'صندوق امانات',
    images: '_mock8.svg',
    enum: EnumOfWellFare.SAFE_BOX
  },
  {
    text: 'یخچال',
    images: '_mock9.svg',
    enum: EnumOfWellFare.REFRIGERATOR
  },
  {
    text: 'آب',
    images: '_mock10.svg',
    enum: EnumOfWellFare.WATER
  },
  {
    text: 'مبلمان',
    images: '_mock11.svg',
    enum: EnumOfWellFare.FURNITURE
  },
  {
    text: 'ماشین ظرفشویی',
    images: '_mock12.svg',
    enum: EnumOfWellFare.DISHWASHER
  },

  {
    text: 'قهوه ساز',
    images: '_mock13.svg',
    enum: EnumOfWellFare.COFFEE_MAKER
  },
  {
    text: 'مایکروویو',
    images: '_mock14.svg',
    enum: EnumOfWellFare.MICROWAVE
  }
];
// ----------------------------------------------------------------------

const schema = yup.object().shape({
  bathroom_inroom: yup.number(),
  squatToilet_inroom: yup.number(),
  sittingToilet_inroom: yup.number()
});

const MultiStep2_WelfareSevices = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector<Inputs>(
    (state) => state.register.accommodationDetails
  );
  const [active, setActive] = useState('');

  console.log('state eeeeeeeeeeeeeeeeeeeeeeeeeee first:>> ', state);

  const handlePicType = (value: string) => {
    // router.push();
  };

  const router = useRouter();

  console.log('stateeeeeeeeeeeeeee :>> ', state);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      bathroom_inroom: 0,
      squatToilet_inroom: 0,
      sittingToilet_inroom: 0
    }
  });

  const onSubmit = (data: any) => {
    router.push('?query=pic');
  };

  return (
    <Grid
      container
      spacing={0}
      className="w-full flex justify-end rounded-2xl mt-4 z-50 ltr"
    >
      <Typography
        fontWeight={'bold'}
        className="w-full text-right p-5 text-ms-thick-green"
        marginTop={'0 !important'}
        variant="body1"
        component="h4"
      >
        .مشخصات اتاق را ثبت کنید
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <Stack spacing={1} m={3} className="bg-ms-white rounded-2xl p-2 py-4">
          <FacilitiesCounter
            control={control}
            defaultValue={0}
            id="bathroom_inroom"
            label="حمام(اختصاصی اتاق)"
          />
          <FacilitiesCounter
            control={control}
            defaultValue={0}
            id="squatToilet_inroom"
            label="سرویس ایرانی(اختصاصی اتاق)"
          />
          <FacilitiesCounter
            control={control}
            defaultValue={0}
            id="sittingToilet_inroom"
            label="سرویس فرنگی(اختصاصی اتاق)"
          />
        </Stack>

        <Grid container spacing={0} className="flex justify-center">
          {data.map((value, key) => (
            <Stack
              key={key}
              onClick={() => setActive(value.enum)}
              className={`${active == value.enum ? 'residence-type-card' : ''}
             hover:text-ms-light-green rounded-2xl flex flex-col justify-center mx-2 pb-2 mb-2 bg-ms-white w-[28%]`}
              spacing={1}
            >
              <Image
                src={`/static/images/accommodation/_mock/${value.images}`}
                alt={'alt'}
                width={0} //automatically provided
                height={0} //automatically provided
                style={{ margin: '1rem 0' }}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
                className={`accommodation-type-pic w-full h-8 rounded-2xl`}
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

        <Stack spacing={2} m={2} mt={4}>
          <UiButton
            type="submit"
            className="m-6 mt-10 hover:bg-ms-btn-green-33 text-ms-lg h-[50px] w-full border-none text-ms-white font-ms-medium rounded-2xl bg-ms-btn-green-23"
            text="ثبت و ادامه"
          />
        </Stack>
      </form>
    </Grid>
  );
};

export default MultiStep2_WelfareSevices;
