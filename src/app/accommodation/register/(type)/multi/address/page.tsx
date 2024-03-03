'use client';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import UiButton from '@/components/UI/ui-button';
import { PATH_ACCAMMODATION } from '@/routes/paths';
// import CustomMap from '@/components/common/map/Map';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Stack, Typography } from '@mui/material';
import FormControlerBth from '@/components/common/form/FormControlerBth';
import FormControlFunctionChild from '@/components/common/form/FormControler';
import UiAccommodationBanner from '@/components/UI/ui-banner/UiAccommodationBanner';
import HorizontalLinearStepper from '@/components/UI/ui-horizontalLinearStepper/HorizontalLinearStepper';
import { useAppDispatch } from '@/redux/hook';

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

  const confirm = () => {
    router.push(
      PATH_ACCAMMODATION.accommodation +
        PATH_ACCAMMODATION.register +
        PATH_ACCAMMODATION.multiple +
        PATH_ACCAMMODATION.describePosition
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
          <HorizontalLinearStepper activeStep={4} />
        </Stack>

        <Stack spacing={4} className="px-4">
          <FormControlerBth
            register={register}
            errors={errors}
            name={'stairs'}
            id={'stairs'}
            label={'کد پستی'}
            placeholder=""
            required={true}
            sendZipCode={sendZipCode}
          />

          <Box
            sx={{ direction: 'rtl', display: 'flex', textAlign: 'end' }}
            role="alert"
            className="alert alert-warning bg-[#FCF4D6]"
          >
            <Typography
              className="text-ms-thick-green text-2xl text-start font-ms-bold"
              variant="body1"
              component="h2"
            >
              جـهت مراجـعه حضـوری ، برای ارائـه بهتـر خدمـات لطفا موقعیت دقیق
              منطبق با آدرس ثبتی سازمان را وارد نمایید
            </Typography>
          </Box>
        </Stack>

        <Stack spacing={4} className="px-4 mb-4 pt-6 rounded-2xl">
          {/* <CustomMap /> */}
        </Stack>

        <FormControlFunctionChild
          register={register}
          errors={errors}
          name={'tee'}
          id={'tee'}
          label={'اطلاعات تکمیلی آدرس'}
          placeholder=""
          caption=""
          styleClass="border-2 border-[#DEDEDE]"
          istextarea={true}
        />

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
