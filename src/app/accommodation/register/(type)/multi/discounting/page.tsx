'use client';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import UiButton from '@/components/UI/ui-button';
import { Box, Stack, Typography } from '@mui/material';
import { PATH_ACCAMMODATION } from '@/routes/paths';
import { yupResolver } from '@hookform/resolvers/yup';
import FormControlFunctionChild from '@/components/common/form/FormControler';
import HorizontalLinearStepper from '@/components/UI/ui-horizontalLinearStepper/HorizontalLinearStepper';
import UiAccommodationBanner from '@/components/UI/ui-banner/UiAccommodationBanner';

export const dynamic = 'force-dynamic';

const schema = yup.object().shape({});

const Page = () => {
  const {
    register,

    formState: { errors },
    reset
  } = useForm<any>({
    resolver: yupResolver(schema),
    defaultValues: {}
  });
  const router = useRouter();

  const confirm = () => {
    router.push(
      PATH_ACCAMMODATION.accommodation +
        PATH_ACCAMMODATION.register +
        PATH_ACCAMMODATION.multiple +
        PATH_ACCAMMODATION.msafarRules
    );
  };

  const sendZipCode = () => {};

  return (
    <Box height={'100%'}>
      <UiAccommodationBanner
        className="w-full min-h-fit"
        title=" تخفیف گذاری"
        alt="header"
        height={500}
        width={500}
      />

      <Box className="w-full flex flex-col justify-center px-4 -mt-12">
        <Stack className="flex justify-center bg-ms-white rounded-2xl z-50 ltr">
          <HorizontalLinearStepper activeStep={10} />
        </Stack>

        <Typography
          fontWeight={'bold'}
          className="w-full text-right p-5 pb-3 pt-6 text-ms-thick-green"
          marginTop={'0 !important'}
          variant="body1"
          component="h4"
        >
          تخفیف برای اقامت های بلند مدت
        </Typography>

        <Typography
          className="w-full text-right p-5 pb-3 pt-6 text-ms-thick-green"
          marginTop={'0 !important'}
          variant="body2"
          component="h4"
        >
          میتوانید برای افرادی که رزرو های بلند مدت دارندتخفیف های ویژه ثبت
          کنید.این تخفیف ها بر روی تقویم اقامتگاه شما ثبت می شود.
        </Typography>

        <Box>
          <hr className="border-[1px] text-[#D2D2D2] border-dashed mx-5 mt-2" />
          <Stack
            spacing={1}
            sx={{ display: 'flex', flexDirection: 'row' }}
            className="w-full flex flex-row items-center"
          >
            <Typography
              fontWeight={'bold'}
              className="w-full text-right pt-8 pr-6 text-ms-thick-green "
              marginTop={'0 !important'}
              variant="body2"
              component="h4"
            >
              تخفیفات هفتگی
            </Typography>
            <FormControlFunctionChild
              register={register}
              errors={errors}
              name={'stairs'}
              id={'stairs'}
              label={''}
              placeholder="درصد"
              fontWeight="medium"
            />
          </Stack>
          <Typography
            className="w-full text-right p-5 pb-3 pt-6 text-ms-thick-green"
            marginTop={'0 !important'}
            variant="body2"
            component="h4"
          >
            تخفیف برای اقامت بیش از ۷ روز
          </Typography>
          <hr className="border-[1px] text-[#D2D2D2] border-dashed mx-5 mt-2" />
        </Box>

        <Box>
          <Stack
            spacing={1}
            sx={{ display: 'flex', flexDirection: 'row' }}
            className="w-full flex flex-row items-center"
          >
            <Typography
              fontWeight={'bold'}
              className="w-full text-right pt-8 pr-6 text-ms-thick-green "
              marginTop={'0 !important'}
              variant="body2"
              component="h4"
            >
              تخفیفات ماهیانه
            </Typography>
            <FormControlFunctionChild
              register={register}
              errors={errors}
              name={'stairs'}
              id={'stairs'}
              label={''}
              placeholder="درصد"
              fontWeight="medium"
            />
          </Stack>
          <Typography
            className="w-full text-right p-5 pb-3 pt-6 text-ms-thick-green"
            marginTop={'0 !important'}
            variant="body2"
            component="h4"
          >
            تخفیف برای اقامت بیش از ۲۸ روز
          </Typography>
        </Box>

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
