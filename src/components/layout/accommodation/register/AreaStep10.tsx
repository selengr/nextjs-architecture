'use client';

import * as yup from 'yup';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import UiButton from '@/components/UI/ui-button';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import FormControlFunctionChild from '@/components/common/form/FormControler';
import { saveAccommodationDetails } from '@/redux/slices/accommodation/register';
import HorizontalLinearStepper from '@/components/UI/ui-horizontalLinearStepper/HorizontalLinearStepper';
import { PATH_ACCAMMODATION } from '@/routes/paths';

export const dynamic = 'force-dynamic';

type Inputs = {
  nameOfResidence: string;
  totalArea: number;
  aboutTheResidence: string;
  descriptionOfAccommodation?: string;
  commonFacilities?: string;
  moreTips?: string;
};

const schema = yup.object().shape({
  nameOfResidence: yup.string().required('نام اقامتگاه انتخاب شود'),
  totalArea: yup.number().required('متراژ کل را وارد کنید'),
  aboutTheResidence: yup.string().required('درباره اقامتگاه بنویسید'),
  descriptionOfAccommodation: yup.string(),
  commonFacilities: yup.string(),
  moreTips: yup.string()
});

const AreaStep10 = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector<Inputs>(
    (state) => state.register.accommodationDetails
  );
  const router = useRouter();

  console.log('stateeeeeeeeeeeeeee :>> ', state);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      nameOfResidence: state.nameOfResidence ? state.nameOfResidence : '',
      totalArea: state.totalArea ? state.totalArea : undefined,
      aboutTheResidence: state.aboutTheResidence ? state.aboutTheResidence : '',
      descriptionOfAccommodation: state.descriptionOfAccommodation
        ? state.descriptionOfAccommodation
        : '',
      commonFacilities: state.commonFacilities ? state.commonFacilities : '',
      moreTips: state.moreTips ? state.moreTips : ''
    }
  });

  const onSubmit = (data: any) => {
    dispatch(saveAccommodationDetails(data));
    router.push(
      PATH_ACCAMMODATION.accommodation +
        PATH_ACCAMMODATION.register 
        // PATH_ACCAMMODATION.room
    );
  };

  // const onSubmit = (data: Inputs) => {

  //   dispatch(
  //     addPassenger({
  //       type: operationType.UPDATE_PASSENGER,
  //       id,
  //       payable_Fare: price,
  //       passengerType: P_T,
  //       title: data.gender,
  //       firstName: data.latinName,
  //       lastName: data.latinSurname,
  //       birthDate: data.dateOfBirth,
  //       iranianCartMelli: {
  //         codeMelli: data.nationalCode
  //       },
  //       passport: null
  //     })
  //   );
  //   onClose();
  // };

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
          .اقامتگاه خود را توصیف و اطلاعات آن راثبت کنید
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <FormControlFunctionChild
            register={register}
            errors={errors}
            name={'nameOfResidence'}
            id={'nameOfResidence'}
            label={'نام اقامتگاه'}
            caption=" .برای انتخاب نام از کلمات کوتاه و متناسب فضای اقامتگاه استفاده کنید"
            required={true}
          />
          <FormControlFunctionChild
            register={register}
            errors={errors}
            name={'totalArea'}
            id={'totalArea'}
            label={'متراژ کل(متر)'}
            required={true}
          />
          <FormControlFunctionChild
            register={register}
            errors={errors}
            name={'aboutTheResidence'}
            id={'aboutTheResidence'}
            label={'درباره اقامتگاه'}
            caption="درباره ویژگی ها  چشم انداز و هر آنچه که اقامت شما
              را منحصر به فرد می کند  بنویسید."
            required={true}
          />
          <FormControlFunctionChild
            register={register}
            errors={errors}
            name={'descriptionOfAccommodation'}
            id={'descriptionOfAccommodation'}
            label={'توصیف فضای اقامتگاه و واحد'}
            placeholder="مانند:ویلا نزدیک به دریاست.دارای دو اتاق خواب میباشد
              و در هر اتاق خواب یک تخت دو نفره ....."
          />
          <FormControlFunctionChild
            register={register}
            errors={errors}
            name={'commonFacilities'}
            id={'commonFacilities'}
            label={'امکانات مشترک اقامتگاه'}
            placeholder="مانند:حیاط و آشپز خانه اقامتگاه به صورت مشترک
              برای تمام واحد ها میباشد"
          />
          <FormControlFunctionChild
            register={register}
            errors={errors}
            name={'moreTips'}
            id={'moreTips'}
            label={'نکات بیشتری که باید بدانید'}
            placeholder="نکات خاصی که باید کاربران در مورد اقامتگاه شما 
              بدانند......."
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

export default AreaStep10;
