'use client';

import * as yup from 'yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import UiButton from '@/components/UI/ui-button';
import { Box, Stack, Typography } from '@mui/material';
import { PATH_ACCAMMODATION } from '@/routes/paths';
import { yupResolver } from '@hookform/resolvers/yup';
import UiAccommodationBanner from '@/components/UI/ui-banner/UiAccommodationBanner';
import HorizontalLinearStepper from '@/components/UI/ui-horizontalLinearStepper/HorizontalLinearStepper';

export const dynamic = 'force-dynamic';

const schema = yup.object().shape({});

const Page = () => {
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
        PATH_ACCAMMODATION.single +
        PATH_ACCAMMODATION.collectivePricing
    );
  };

  const sendZipCode = () => {};

  return (
    <Box height={'100vh'}>
      <UiAccommodationBanner
        className="w-full min-h-fit"
        title="قوانین لغو و رزرو"
        alt="header"
        height={500}
        width={500}
      />

      <Box className="w-full flex flex-col justify-center px-4 -mt-12">
        <Stack className="flex justify-center bg-ms-white rounded-2xl z-50 ltr">
          <HorizontalLinearStepper activeStep={10} />
        </Stack>

        <Stack
          spacing={2}
          mt={4}
          className="rounded-2xl bg-ms-white border-r-4 border-r-ms-yellow pb-3 mb-16"
        >
          <Typography
            fontWeight={'bold'}
            className="w-full text-right p-5 pb-3 text-ms-thick-green"
            marginTop={'0 !important'}
            variant="body1"
            component="h4"
          >
            قوانین لغو و رزرو
          </Typography>
          <Typography
            className="w-full text-right px-5 py-1 text-ms-thick-green"
            marginTop={'0 !important'}
            variant="body2"
            component="h4"
          >
            از زمان ورود تا ۷۲ ساعت قبل از ورود
          </Typography>
          <Typography
            className="w-full text-right px-5 py-1 text-ms-thick-green"
            marginTop={'0 !important'}
            variant="body2"
            component="h4"
          >
            در ۷۲ ساعت پایانی قبل از ورود
          </Typography>
          <Typography
            className="w-full text-right px-5 py-1 text-ms-thick-green"
            marginTop={'0 !important'}
            variant="body2"
            component="h4"
          >
            از روز ورود تا روز خروج
          </Typography>
        </Stack>

        <Stack spacing={4} className="w-full my-8">
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
