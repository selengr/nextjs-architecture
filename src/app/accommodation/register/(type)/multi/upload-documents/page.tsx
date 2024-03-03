'use client';

import * as yup from 'yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/redux/hook';
import UiButton from '@/components/UI/ui-button';
import { PATH_ACCAMMODATION } from '@/routes/paths';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Paper, Stack, Typography } from '@mui/material';
import { FileUploader } from '@/components/common/fileUploader';
import CustomizedSwitches from '@/components/UI/ui-switch/CustomizedSwitches';
import UiAccommodationBanner from '@/components/UI/ui-banner/UiAccommodationBanner';
import HorizontalLinearStepper from '@/components/UI/ui-horizontalLinearStepper/HorizontalLinearStepper';

export const dynamic = 'force-dynamic';

type Inputs = {};

const schema = yup.object().shape({});

const Page = () => {
  const dispatch = useAppDispatch();
  //   const state = useAppSelector<any>(
  //     (state) => state.register.accommodationDetails
  //   );
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm<any>({
    resolver: yupResolver(schema),
    defaultValues: {}
  });
  const router = useRouter();

  const [files, setFiles] = useState<any>([]);

  const handleUpdateFiles = (fileItems: any) => {
    console.log('fileItems :>> ', fileItems);
    setFiles(fileItems.map((fileItem: any) => fileItem.file));
  };

  const confirm = () => {
    router.push(
      PATH_ACCAMMODATION.accommodation +
        PATH_ACCAMMODATION.register +
        PATH_ACCAMMODATION.multiple +
        PATH_ACCAMMODATION.rulesAndPrinciples
    );
  };

  const sendZipCode = () => {};

  return (
    <Box height={'100%'}>
      <UiAccommodationBanner
        className="w-full min-h-fit"
        title="آدرس اقامتگاه"
        alt="header"
        height={500}
        width={500}
      />

      <Box className="w-full flex flex-col justify-center px-4 -mt-12">
        <Stack className="flex justify-center bg-ms-white rounded-2xl z-50 ltr">
          <HorizontalLinearStepper activeStep={6} />
        </Stack>

        <Stack spacing={2} mt={4} className="rounded-2xl">
          <Paper elevation={0} sx={{ borderRadius: '15px' }}>
            <Stack
              spacing={2}
              sx={{ flexDirection: 'row' }}
              className="flex justify-between pl-4"
            >
              <Typography
                fontWeight={'bold'}
                className="w-full text-right p-5 text-ms-thick-green"
                marginTop={'0 !important'}
                variant="body1"
                component="h4"
              >
                آیا مالک اقامتگاه شخص دیگری است؟
              </Typography>
              <CustomizedSwitches
                id="suitableForTheElderly"
                name="suitableForTheElderly"
                register={register}
              />
            </Stack>
            <Typography
              className="w-full text-right p-5 text-ms-thick-green"
              marginTop={'0 !important'}
              variant="body1"
              component="h5"
            >
              در صورتی که شخص دیگری مالک این اقامتگاه است علاوه بر مدارک خود
              مدارک مالک نیز باید بار گذاری شود.
            </Typography>
          </Paper>
        </Stack>

        <Stack spacing={2} className="rounded-2xl">
          <Typography
            fontWeight={'bold'}
            className="w-full text-right p-4 text-ms-thick-green"
            marginTop={'0 !important'}
            variant="body1"
            component="h4"
          >
            لطفا مدارک خود را بار گذاری کنید.
          </Typography>
          <Typography
            className="w-full text-right px-4 text-ms-thick-green"
            marginTop={'0 !important'}
            variant="body1"
            component="h4"
          >
            مدارک هویتی مانند کارت ملی را بار گذاری کنید.
          </Typography>
        </Stack>

        <Stack spacing={4} className="w-full p-6">
          <FileUploader
            handleUpdateFiles={handleUpdateFiles}
            files={files}
            title="بارگذاری کارت ملی"
            caption="عکس کارت ملی خود را بار گذاری کنید"
          />
        </Stack>

        <Stack spacing={4} className="w-full p-6">
          <FileUploader
            handleUpdateFiles={handleUpdateFiles}
            files={files}
            title="بارگذاری سند ملک یا قبض برق یا مجوز گردشگری"
            caption="میتوانید چند عکس را بار گذاری کنید"
          />
        </Stack>

        <Stack spacing={4} className="w-full px-4 my-8">
          <UiButton
            onClick={confirm}
            type="button"
            className=" hover:bg-ms-btn-green-33 text-ms-lg h-[50px] w-full border-none text-ms-white font-ms-medium rounded-2xl bg-ms-btn-green-23"
            text="ثبت و ادامه"
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default Page;
