'use client';

import * as yup from 'yup';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import UiButton from '@/components/UI/ui-button';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Grid, Paper, Stack, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import FormControlFunctionChild from '@/components/common/form/FormControler';
import {
  saveAccommodationDetails,
  updateAccommodationDetails
} from '@/redux/slices/accommodation/register';
import HorizontalLinearStepper from '@/components/UI/ui-horizontalLinearStepper/HorizontalLinearStepper';
import { PATH_ACCAMMODATION } from '@/routes/paths';
import CustomizedSwitches from '@/components/UI/ui-switch/CustomizedSwitches';
import FacilitiesCounter from '../FacilitiesCounter';

export const dynamic = 'force-dynamic';

type Inputs = {
  roomName: string;
  roomSize: number;
  floor?: number;
  stairs?: number;
  suitableForTheElderly?: boolean;
  details: {
    basicRoomCapacity?: number | undefined;
    maximumRoomCapacity?: number | undefined;
    numberOfRooms?: number | undefined;
    numberOfSingleBeds?: number | undefined;
    numberOfDoublesBeds?: number | undefined;
    numberOfTraditionalBeds?: number | undefined;
  };
};

const schema = yup.object().shape({
  roomName: yup.string().required('نام اقامتگاه انتخاب شود'),
  roomSize: yup.number().required('متراژ کل را وارد کنید'),
  floor: yup.number(),
  stairs: yup.number(),
  suitableForTheElderly: yup.boolean(),
  details: yup.object()
});

const SingleStep2 = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector<Inputs>(
    (state) => state.register.accommodationDetails
  );
  const router = useRouter();
  console.log('state-single-type :>> ', state);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      roomName: state.roomName ? state.roomName : '',
      roomSize: state.roomSize ? state.roomSize : undefined,
      floor: state.floor ? state.floor : undefined,
      stairs: state.stairs ? state.stairs : undefined,
      suitableForTheElderly: state.suitableForTheElderly
        ? state.suitableForTheElderly
        : false,
      details: {
        basicRoomCapacity: 0,
        maximumRoomCapacity: 0,
        numberOfRooms: 0,
        numberOfSingleBeds: 0,
        numberOfDoublesBeds: 0,
        numberOfTraditionalBeds: 0
      }
    }
  });

  const onSubmit = (data: any) => {
    dispatch(updateAccommodationDetails(data));
    router.push('?details=room');
  };

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
          .مشخصات اتاق را ثبت کنید
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <FormControlFunctionChild
            register={register}
            errors={errors}
            name={'roomName'}
            id={'roomName'}
            label={'نام اقامتگاه'}
            placeholder="نام اتاق را وارد کنید."
            caption=""
            required={true}
          />
          <FormControlFunctionChild
            register={register}
            errors={errors}
            name={'roomSize'}
            id={'roomSize'}
            label={'متراژ اقامتگاه'}
            placeholder="متراژ حدودی اتاق را وارد کنید."
            required={true}
          />
          <FormControlFunctionChild
            register={register}
            errors={errors}
            name={'floor'}
            id={'floor'}
            label={'طبقه'}
            caption="در صورت طبقه همکف عدد 0 و طبقه زیر همکف عدد -1 را
        وارد کنید."
            placeholder="مانند:۳"
          />
          <FormControlFunctionChild
            register={register}
            errors={errors}
            name={'stairs'}
            id={'stairs'}
            label={'پله'}
            caption="در صورت نداشتن پله عدد 0 را وارد کنید."
            placeholder="مانند:35"
          />

          <Stack spacing={2} m={2} mt={4} className="px-2 rounded-2xl">
            <Paper elevation={0} sx={{ borderRadius: '15px' }}>
              <Stack
                spacing={2}
                sx={{ flexDirection: 'row-reverse' }}
                className="flex justify-between pl-4"
              >
                <Typography
                  fontWeight={'bold'}
                  className="w-full text-right p-5 text-ms-thick-green"
                  marginTop={'0 !important'}
                  variant="body1"
                  component="h4"
                >
                  .مناسب برای سالمندان و معلولین{' '}
                </Typography>
                <CustomizedSwitches
                  id="suitableForTheElderly"
                  name="suitableForTheElderly"
                  register={register}
                />
              </Stack>
              <Typography
                fontWeight={'bold'}
                className="w-full text-right p-5 text-ms-thick-green"
                marginTop={'0 !important'}
                variant="body1"
                component="h5"
              >
                در صورت نداشتن پله و داشتن توالت فرنگی این بخش را می توانید
                .فعال کنید
              </Typography>
            </Paper>
          </Stack>

          <Stack spacing={1} m={3} className="bg-ms-white rounded-2xl p-2 py-4">
            {/* <FacilitiesCounter
            control={control}
            defaultValue={0}
            id="details.basicRoomCapacity"
            label="ظرفیت پایه اتاق(نفر)"
          /> */}
            <FacilitiesCounter
              control={control}
              defaultValue={0}
              id="details.maximumRoomCapacity"
              label="حداکثر ظرفیت اتاق(نفر)"
            />
            <FacilitiesCounter
              control={control}
              defaultValue={0}
              id="details.numberOfRooms"
              label="تعداد اتاق ها"
            />
            <FacilitiesCounter
              control={control}
              defaultValue={0}
              id="details.numberOfSingleBeds"
              label="تعداد تخت های یک نفره"
            />
            <FacilitiesCounter
              control={control}
              defaultValue={0}
              id="details.numberOfDoublesBeds"
              label="تعداد تخت های یا دو نفره"
            />
            <FacilitiesCounter
              control={control}
              defaultValue={0}
              id="details.numberOfTraditionalBeds"
              label="تعداد رختخواب سنتی(تشک)"
            />
          </Stack>

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

export default SingleStep2;
