'use client';

import * as yup from 'yup';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import UiButton from '@/components/UI/ui-button';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import FormControlFunctionChild from '@/components/common/form/FormControler';
import {
  saveAccommodationDetails,
  updateAccommodationDetails
} from '@/redux/slices/accommodation/register';
import HorizontalLinearStepper from '@/components/UI/ui-horizontalLinearStepper/HorizontalLinearStepper';
import { PATH_ACCAMMODATION } from '@/routes/paths';
import FacilitiesCounter from '../FacilitiesCounter';
import { CustomizedAccordion } from '@/components/common/customized-accordion';
import { useState } from 'react';

export const dynamic = 'force-dynamic';

const facilitiesOptions = [
  {
    name: 'امکانات رفاهی',
    id: 10001,
    options: [
      {
        checked: false,
        name: 'هیییییییییییییچی ندارهههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههه',
        id: 1063083
      }
    ]
  },
  {
    name: 'امکانات بهداشتی',
    id: 10002,
    options: [
      { checked: false, name: 'سرویس بهداشتی ایرانی', id: 10633 },
      { checked: false, name: 'سرویس بهداشتی فرنگی', id: 3398032 },
      { checked: false, name: 'حمام', id: 3063036 },
      { checked: false, name: 'ماشین لباسشویی', id: 490839830 }
    ]
  },
  {
    name: 'امکانات آشپزخانه',
    id: 10003,
    options: [
      { checked: false, name: 'آشپزخانه', id: 199 },
      { checked: false, name: 'یخچال', id: 288 },
      { checked: false, name: 'اجاق گاز', id: 377 },
      { checked: false, name: 'وسایل پخت و پز', id: 55444 },
      { checked: false, name: 'لوازم سرو غذا', id: 556 },
      { checked: false, name: 'چای ساز', id: 623 },
      { checked: false, name: 'میز نهار خوری', id: 72 },
      { checked: false, name: 'مایکرویو', id: 856 },
      { checked: false, name: 'کابینت', id: 921 },
      { checked: false, name: 'قهوه ساز', id: 120 },
      { checked: false, name: 'دستگاه تصفیه آب خانگی', id: 211 },
      { checked: false, name: 'ماشین ظرفشویی', id: 1222 },
      { checked: false, name: 'دیگ برقی', id: 1325 }
    ]
  },
  {
    name: 'امکانات تفریحی',
    id: 10004,
    options: [
      { checked: false, name: 'استخر', id: 555555551 },
      { checked: false, name: 'سونا', id: 26222 },
      { checked: false, name: 'جکوزی', id: 5323 },
      { checked: false, name: 'میز بیلیارد', id: 4033 },
      { checked: false, name: 'میز پینگ پنگ', id: 53506306 },
      { checked: false, name: 'کنسول بازی', id: 6036306530 },
      { checked: false, name: 'فوتبال دستی ', id: 73035 },
      { checked: false, name: 'زمین تنیس', id: 830630 }
    ]
  },
  {
    name: 'امکانات ساختمان',
    id: 10005,
    options: [
      { checked: false, name: 'پارکینگ', id: 12345 },
      { checked: false, name: 'منظره به دریا', id: 2967 },
      { checked: false, name: 'منظره به کوه/جنگل', id: 37078 },
      { checked: false, name: 'منظره به حیاط اقامتگاه', id: 67584 },
      { checked: false, name: 'منظره به شهر', id: 645545 },
      { checked: false, name: 'آسانسور', id: 63123 },
      { checked: false, name: 'بالکن', id: 79877 },
      { checked: false, name: 'باربیکیو', id: 85413 },
      { checked: false, name: 'آلاچیق', id: 956132 },
      { checked: false, name: 'فضای سبز', id: 106879 },
      { checked: false, name: 'رستوران', id: 118798 },
      { checked: false, name: 'نمازخانه', id: 123512 },
      { checked: false, name: 'لابی', id: 13568789 }
    ]
  },
  {
    name: 'امکانات ویژه',
    id: 10006,
    options: [
      { checked: false, name: 'وعده غذایی', id: 346531 },
      { checked: false, name: 'سم پاشی دوره ای', id: 23 },
      { checked: false, name: 'سرویس روزانه اتاق', id: 3154 },
      { checked: false, name: 'سرویس رفت و آمد', id: 634 },
      { checked: false, name: 'تاکسی سرویس', id: 5632 },
      { checked: false, name: 'کافی شاپ', id: 566546 },
      { checked: false, name: 'فروشگاه', id: 77987 },
      { checked: false, name: 'صندلی ماساژور', id: 89879 },
      { checked: false, name: 'خدمات پزشکی', id: 93413 },
      { checked: false, name: 'صندوق امانات', id: 1031654 },
      { checked: false, name: 'سالن بدن سازی', id: 19871 },
      { checked: false, name: 'سالن کنفرانس', id: 12896744 },
      { checked: false, name: 'سالن اجتماعات', id: 1396874 },
      { checked: false, name: 'پارک', id: 1468749 },
      { checked: false, name: 'آرایشگاه', id: 1685795 },
      { checked: false, name: 'تالار عروسی', id: 1987976 }
    ]
  },
  {
    name: 'امکانات ایمنی',
    id: 10007,
    options: [
      { checked: false, name: 'کمک های اولیه', id: 14 },
      { checked: false, name: 'سیستم اطفای حریق', id: 25 },
      { checked: false, name: 'کپسول آتش نشانی', id: 36 },
      { checked: false, name: 'دوربین مدار بسته', id: 47 },
      { checked: false, name: 'نگهبان', id: 5 }
    ]
  }
];

type Inputs = {
  bathroom_inroom?: number;
  squatToilet_inroom?: number;
  sittingToilet_inroom?: number;
  //   facilitiesOptions: [
  //     {
  //       name: string;
  //       id: number;
  //       options: [{ name: string; id: number; checked: boolean }];
  //     }
  //   ];
};

const schema = yup.object().shape({
  bathroom_inroom: yup.number(),
  squatToilet_inroom: yup.number(),
  sittingToilet_inroom: yup.number()
  //   facilitiesOptions: yup.array().of(
  //     yup.object().shape({
  //       name: yup.string(),
  //       id: yup.number(),
  //       options: yup.array().of(
  //         yup.object().shape({
  //           name: yup.string(),
  //           id: yup.number(),
  //           checked: yup.boolean()
  //         })
  //       )
  //     })
  //   )

  // name: yup.string(),name: yup.number()
});

const SingleStep4 = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector<Inputs>(
    (state) => state.register.accommodationDetails
  );
  const [selectedFacilities, setSelectedFacilities] =
    useState<any>(facilitiesOptions);

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
      //   facilitiesOptions: [
      //     {
      //       name: '',
      //       id: 0,
      //       options: [{ name: '', id: 0, checked: false }]
      //     }
      //   ]
    }
  });

  const onSubmit = (data: any) => {
    let { bathroom_inroom, squatToilet_inroom, sittingToilet_inroom } = data;
    let body = {
      bathroom_inroom,
      squatToilet_inroom,
      sittingToilet_inroom,
      selectedFacilities
    };
    dispatch(updateAccommodationDetails(body));
    router.push(
      PATH_ACCAMMODATION.accommodation +
        PATH_ACCAMMODATION.register +
        PATH_ACCAMMODATION.single +
        PATH_ACCAMMODATION.pic
    );
  };

  //   console.log('updatedFacilities2 :>> ', selectedFacilities)

  return (
    <Box className="w-full flex flex-col justify-center px-4 -mt-12">
      <Stack className="flex justify-center bg-ms-white  rounded-2xl z-50 ltr">
        <HorizontalLinearStepper activeStep={2} />
      </Stack>
      <Grid
        container
        spacing={0}
        className="w-full flex justify-end rounded-2xl mt-4 z-50 ltr"
      >
        {/* <LinearDeterminate value={20}></LinearDeterminate> */}
        <Typography
          fontWeight={'bold'}
          className="w-full text-right p-5 text-ms-thick-green"
          marginTop={'0 !important'}
          variant="body1"
          component="h4"
        >
          .تصاویر اقامتگاه را انتخاب و بار گذاری کنید
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

          <Typography
            fontWeight={'bold'}
            className="w-full text-right p-5 text-ms-thick-green"
            marginTop={'0 !important'}
            variant="body1"
            component="h4"
          >
            .سایر امکانات اقامتگاه خود را انتخاب کنید
          </Typography>

          <CustomizedAccordion
            control={control}
            selectedFacilities={selectedFacilities}
            setSelectedFacilities={setSelectedFacilities}
            facilitiesOptions={facilitiesOptions}
            register={register}
          />

          <Stack spacing={2} m={2} mt={4}>
            <UiButton
              type="submit"
              className="m-6 mt-10 hover:bg-ms-btn-green-33 text-ms-lg h-[50px] w-full border-none text-ms-white font-ms-medium rounded-2xl bg-ms-btn-green-23"
              text="ثبت و ادامه"
            />
          </Stack>
        </form>
      </Grid>
    </Box>
  );
};

export default SingleStep4;
