'use client';

import * as yup from 'yup';

import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import UiButton from '@/components/UI/ui-button';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Stack,
  Typography
} from '@mui/material';
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
  roomName?: string;
  roomSize?: number;
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
  stairs: yup.string()
});

const SingleStep5 = () => {
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
  } = useForm<any>({
    resolver: yupResolver(schema),
    defaultValues: {
      stairs: 'jhwd'
    }
  });

  const onSubmit = (data: any) => {
    router.push(
      PATH_ACCAMMODATION.accommodation +
        PATH_ACCAMMODATION.register +
        PATH_ACCAMMODATION.single +
        PATH_ACCAMMODATION.uploadDocuments
    );
  };

  return (
    <Box className="w-full flex flex-col justify-center px-4 -mt-12">
      <Stack className="flex justify-center bg-ms-white  rounded-2xl z-50 ltr">
        <HorizontalLinearStepper activeStep={5} />
      </Stack>

      <Grid
        container
        spacing={0}
        className="w-full flex justify-end rounded-2xl mt-4 z-50 ltr"
      >
        <Typography
          fontWeight={'bold'}
          className="w-full text-right p-5 pb-2 text-ms-thick-green"
          marginTop={'0 !important'}
          variant="body1"
          component="h4"
        >
          فواصل حدودی اقامتگاه خود را از مراکز مهم وارد کنید.
        </Typography>

        <Typography
          className="w-full text-right px-6 text-ms-thick-green"
          marginTop={'0 !important'}
          variant="caption"
          component="h4"
        >
          (لازم به پر کردن تمامی موارد نیست)
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <Stack sx={{ direction: 'rtl' }} className="rounded-2xl ">
            <Stack
              direction="row"
              className=" flex items-center pt-4 -mb-4 px-2"
            >
              <Checkbox sx={{ color: '#F5BB00 !important' }} color="warning" />

              <Typography
                fontWeight={'bold'}
                variant="body1"
                component={'label'}
                className="text-ms-light-black"
              >
                فاصله از دریا
              </Typography>
            </Stack>

            <FormControlFunctionChild
              register={register}
              errors={errors}
              name={'stairs'}
              id={'stairs'}
              label={'خودرو'}
              placeholder="۵ دقیقه"
              fontWeight="medium"
            />

            <FormControlFunctionChild
              register={register}
              errors={errors}
              name={'stairs'}
              id={'stairs'}
              label={'پیاده'}
              placeholder="5دقیقه"
              fontWeight="medium"
            />
            <hr className="border-[1px] text-[#D2D2D2] border-dashed mx-5 mt-6" />
          </Stack>

          <Stack sx={{ direction: 'rtl' }} className="rounded-2xl ">
            <Stack
              direction="row"
              className=" flex items-center pt-4 -mb-4 px-2"
            >
              <Checkbox sx={{ color: '#F5BB00 !important' }} color="warning" />

              <Typography
                fontWeight={'bold'}
                variant="body1"
                component={'label'}
                className="text-ms-light-black"
              >
                فاصله از مراکز تفریحی
              </Typography>
            </Stack>

            <FormControlFunctionChild
              register={register}
              errors={errors}
              name={'stairs'}
              id={'stairs'}
              label={'خودرو'}
              placeholder="۵ دقیقه"
              fontWeight="medium"
            />

            <FormControlFunctionChild
              register={register}
              errors={errors}
              name={'stairs'}
              id={'stairs'}
              label={'پیاده'}
              placeholder="5دقیقه"
              fontWeight="medium"
            />
            <hr className="border-[1px] text-[#D2D2D2] border-dashed mx-5 mt-6" />
          </Stack>

          <Stack sx={{ direction: 'rtl' }} className="rounded-2xl ">
            <Stack
              direction="row"
              className=" flex items-center pt-4 -mb-4 px-2"
            >
              <Checkbox sx={{ color: '#F5BB00 !important' }} color="warning" />

              <Typography
                fontWeight={'bold'}
                variant="body1"
                component={'label'}
                className="text-ms-light-black"
              >
                فاصله از مراکز خرید
              </Typography>
            </Stack>

            <FormControlFunctionChild
              register={register}
              errors={errors}
              name={'stairs'}
              id={'stairs'}
              label={'خودرو'}
              placeholder="۵ دقیقه"
              fontWeight="medium"
            />

            <FormControlFunctionChild
              register={register}
              errors={errors}
              name={'stairs'}
              id={'stairs'}
              label={'پیاده'}
              placeholder="5دقیقه"
              fontWeight="medium"
            />
            <hr className="border-[1px] text-[#D2D2D2] border-dashed mx-5 mt-6" />
          </Stack>

          <Stack sx={{ direction: 'rtl' }} className="rounded-2xl ">
            <Stack
              direction="row"
              className=" flex items-center pt-4 -mb-4 px-2"
            >
              <Checkbox sx={{ color: '#F5BB00 !important' }} color="warning" />

              <Typography
                fontWeight={'bold'}
                variant="body1"
                component={'label'}
                className="text-ms-light-black"
              >
                فاصله از مرکز شهر
              </Typography>
            </Stack>

            <FormControlFunctionChild
              register={register}
              errors={errors}
              name={'stairs'}
              id={'stairs'}
              label={'خودرو'}
              placeholder="۵ دقیقه"
              fontWeight="medium"
            />

            <FormControlFunctionChild
              register={register}
              errors={errors}
              name={'stairs'}
              id={'stairs'}
              label={'پیاده'}
              placeholder="5دقیقه"
              fontWeight="medium"
            />
            <hr className="border-[1px] text-[#D2D2D2] border-dashed mx-5 mt-6" />
          </Stack>

          <Stack sx={{ direction: 'rtl' }} className="rounded-2xl ">
            <Stack
              direction="row"
              className=" flex items-center pt-4 -mb-4 px-2"
            >
              <Checkbox sx={{ color: '#F5BB00 !important' }} color="warning" />

              <Typography
                fontWeight={'bold'}
                variant="body1"
                component={'label'}
                className="text-ms-light-black"
              >
                فاصله از سوپر مارکت
              </Typography>
            </Stack>

            <FormControlFunctionChild
              register={register}
              errors={errors}
              name={'stairs'}
              id={'stairs'}
              label={'خودرو'}
              placeholder="۵ دقیقه"
              fontWeight="medium"
            />

            <FormControlFunctionChild
              register={register}
              errors={errors}
              name={'stairs'}
              id={'stairs'}
              label={'پیاده'}
              placeholder="5دقیقه"
              fontWeight="medium"
            />
            <hr className="border-[1px] text-[#D2D2D2] border-dashed mx-5 mt-6" />
          </Stack>

          <Stack sx={{ direction: 'rtl' }} className="rounded-2xl ">
            <Stack
              direction="row"
              className=" flex items-center pt-4 -mb-4 px-2"
            >
              <Checkbox sx={{ color: '#F5BB00 !important' }} color="warning" />

              <Typography
                fontWeight={'bold'}
                variant="body1"
                component={'label'}
                className="text-ms-light-black"
              >
                فاصله از نانوایی
              </Typography>
            </Stack>

            <FormControlFunctionChild
              register={register}
              errors={errors}
              name={'stairs'}
              id={'stairs'}
              label={'خودرو'}
              placeholder="۵ دقیقه"
              fontWeight="medium"
            />

            <FormControlFunctionChild
              register={register}
              errors={errors}
              name={'stairs'}
              id={'stairs'}
              label={'پیاده'}
              placeholder="5دقیقه"
              fontWeight="medium"
            />
            <hr className="border-[1px] text-[#D2D2D2] border-dashed mx-5 mt-6" />
          </Stack>

          <Stack sx={{ direction: 'rtl' }} className="rounded-2xl ">
            <Stack
              direction="row"
              className=" flex items-center pt-4 -mb-4 px-2"
            >
              <Checkbox sx={{ color: '#F5BB00 !important' }} color="warning" />

              <Typography
                fontWeight={'bold'}
                variant="body1"
                component={'label'}
                className="text-ms-light-black"
              >
                فاصله از حرم
              </Typography>
            </Stack>

            <FormControlFunctionChild
              register={register}
              errors={errors}
              name={'stairs'}
              id={'stairs'}
              label={'خودرو'}
              placeholder="۵ دقیقه"
              fontWeight="medium"
            />

            <FormControlFunctionChild
              register={register}
              errors={errors}
              name={'stairs'}
              id={'stairs'}
              label={'پیاده'}
              placeholder="5دقیقه"
              fontWeight="medium"
            />
            <hr className="border-[1px] text-[#D2D2D2] border-dashed mx-5 mt-6" />
          </Stack>

          <Stack sx={{ direction: 'rtl' }} className="rounded-2xl ">
            <Stack
              direction="row"
              className=" flex items-center pt-4 -mb-4 px-2"
            >
              <Checkbox sx={{ color: '#F5BB00 !important' }} color="warning" />

              <Typography
                fontWeight={'bold'}
                variant="body1"
                component={'label'}
                className="text-ms-light-black"
              >
                فاصله از رستوران
              </Typography>
            </Stack>

            <FormControlFunctionChild
              register={register}
              errors={errors}
              name={'stairs'}
              id={'stairs'}
              label={'خودرو'}
              placeholder="۵ دقیقه"
              fontWeight="medium"
            />

            <FormControlFunctionChild
              register={register}
              errors={errors}
              name={'stairs'}
              id={'stairs'}
              label={'پیاده'}
              placeholder="5دقیقه"
              fontWeight="medium"
            />
            <hr className="border-[1px] text-[#D2D2D2] border-dashed mx-5 mt-6" />
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

export default SingleStep5;
