'use client';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import UiButton from '@/components/UI/ui-button';
import { PATH_ACCAMMODATION } from '@/routes/paths';
import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Box, Stack, Typography } from '@mui/material';
import FormControlFunctionChild from '@/components/common/form/FormControler';
import UiAccommodationBanner from '@/components/UI/ui-banner/UiAccommodationBanner';
import HorizontalLinearStepper from '@/components/UI/ui-horizontalLinearStepper/HorizontalLinearStepper';

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
        PATH_ACCAMMODATION.discounting
    );
  };

  const sendZipCode = () => {};

  return (
    <Box height={'100%'}>
      <UiAccommodationBanner
        className="w-full min-h-fit"
        title="قیمت گذاری جمعی"
        alt="header"
        height={500}
        width={500}
      />

      <Box className="w-full flex flex-col justify-center px-4 -mt-12">
        <Stack className="flex justify-center bg-ms-white rounded-2xl z-50 ltr">
          <HorizontalLinearStepper activeStep={9} />
        </Stack>

        <Typography
          fontWeight={'bold'}
          className="w-full text-right p-5 pb-3 pt-6 text-ms-thick-green"
          marginTop={'0 !important'}
          variant="body1"
          component="h4"
        >
          قیمت گذاری دسته بندی شده
        </Typography>

        <Typography
          className="w-full text-right p-5 pb-3 pt-6 text-ms-thick-green"
          marginTop={'0 !important'}
          variant="body2"
          component="h4"
        >
          این قیمت ها به صورت کلی بر روی تمامی روز های تقویم قیمتی اقامتگاه شما
          لحاظ خواهند شد.
        </Typography>

        <Alert
          severity="info"
          className="text-center flex items-center rounded-2xl mx-2"
          sx={{ borderRadius: '15px' }}
        >
          <Typography
            color={'#006FFF'}
            className="w-full text-right p-3 pb-3 pt-6  pr-2 text-ms-thick-green "
            marginTop={'0 !important'}
            variant="body2"
            component="h4"
          >
            قیمت ها در تخفیف به تفکیک قابل تغییر هستند.
          </Typography>
        </Alert>

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
              قیمت برای روز های عادی
            </Typography>
            <FormControlFunctionChild
              register={register}
              errors={errors}
              name={'stairs'}
              id={'stairs'}
              label={''}
              placeholder="قیمت به تومان"
              fontWeight="medium"
            />
          </Stack>
          <Typography
            className="w-full text-right p-5 pb-3 pt-6 text-ms-thick-green"
            marginTop={'0 !important'}
            variant="body2"
            component="h4"
          >
            این قیمت برای تمامی روزهای عادی تقویم شما(شنبه تا سه شنبه) برای ۲۰
            روز آینده اعمال خواهد شد.
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
              قیمت برای آخر هفته ها
            </Typography>
            <FormControlFunctionChild
              register={register}
              errors={errors}
              name={'stairs'}
              id={'stairs'}
              label={''}
              placeholder="قیمت به تومان"
              fontWeight="medium"
            />
          </Stack>
          <Typography
            className="w-full text-right p-5 pb-3 pt-6 text-ms-thick-green"
            marginTop={'0 !important'}
            variant="body2"
            component="h4"
          >
            این قیمت برای تمامی روزهای آخر هفته تقویم شما(چهارشنبه تا جمعه )برای
            ۲۰ روز آینده اعمال خواهد شد.
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
              قیمت برای روز های تعطیل
            </Typography>
            <FormControlFunctionChild
              register={register}
              errors={errors}
              name={'stairs'}
              id={'stairs'}
              label={''}
              placeholder="قیمت به تومان"
              fontWeight="medium"
            />
          </Stack>
          <Typography
            className="w-full text-right p-5 pb-3 pt-6 text-ms-thick-green"
            marginTop={'0 !important'}
            variant="body2"
            component="h4"
          >
            این قیمت برای تمامی روزهای تعطیل مثلا ۲۲ بهمن برای 60 روز آینده
            اعمال خواهد شد.
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
              قیمت برای نفر اضافه
            </Typography>
            <FormControlFunctionChild
              register={register}
              errors={errors}
              name={'stairs'}
              id={'stairs'}
              label={''}
              placeholder="قیمت به تومان"
              fontWeight="medium"
            />
          </Stack>
          <Typography
            className="w-full text-right p-5 pb-3 pt-6 text-ms-thick-green"
            marginTop={'0 !important'}
            variant="body2"
            component="h4"
          >
            این قیمت برای هر نفر اضافهکه بیشتر از ظرفیتاعلامی شما باشد اعمال
            خواهد شد.
          </Typography>
          <hr className="border-[1px] text-[#D2D2D2] border-dashed mx-5 mt-2" />
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
