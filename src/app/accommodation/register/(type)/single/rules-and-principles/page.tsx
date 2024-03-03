'use client';

import * as yup from 'yup';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import UiButton from '@/components/UI/ui-button';
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
  Stack,
  Typography
} from '@mui/material';
import { useAppDispatch } from '@/redux/hook';
import { PATH_ACCAMMODATION } from '@/routes/paths';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import UICustomizedSelect from '@/components/UI/ui-customized-select';
import UiAccommodationBanner from '@/components/UI/ui-banner/UiAccommodationBanner';
import FacilitiesCounter from '@/components/Layout/accommodation/register/FacilitiesCounter';
import HorizontalLinearStepper from '@/components/UI/ui-horizontalLinearStepper/HorizontalLinearStepper';

export const dynamic = 'force-dynamic';

const hours = [
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00',
  '00:00',
  '01:00',
  '02:00',
  '03:00',
  '04:00',
  '05:00',
  '06:00',
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00'
];

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
        PATH_ACCAMMODATION.single +
        PATH_ACCAMMODATION.cancellationRules
    );
  };

  const sendZipCode = () => {};

  return (
    <Box height={'100%'}>
      <UiAccommodationBanner
        className="w-full min-h-fit"
        title=" قوانین و مقررات"
        alt="header"
        height={500}
        width={500}
      />

      <Box className="w-full flex flex-col justify-center px-4 -mt-12">
        <Stack className="flex justify-center bg-ms-white rounded-2xl z-50 ltr">
          <HorizontalLinearStepper activeStep={9} />
        </Stack>

        <Stack spacing={2} mt={4} className="rounded-2xl bg-ms-white">
          <Typography
            fontWeight={'bold'}
            className="w-full text-right p-5 text-ms-thick-green"
            marginTop={'0 !important'}
            variant="body1"
            component="h4"
          >
            قوانین و مقررات اقامتگاه خود را اعلام کنید.
          </Typography>

          <FormGroup>
            {[
              'استعمال دخانیات مجاز است.',
              'میتوانید حیوانات خانگی خود را همراه خود بیاورید.',
              'امکان برگزاری مراسم در محیط اقامتگاه وجود دارد.',
              'محیط و امکانات برای کودکان و سالمندان مناسب است.',
              'پذیرایی جمع های دوستانه نیز هستیم.'
            ].map((value, key) => (
              <FormControlLabel
                key={key}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'row-reverse',
                  paddingLeft: '12px'
                }}
                control={
                  <Controller
                    name={`facilitiesOptions`}
                    control={control}
                    //   defaultValue={}
                    render={({ field }) => (
                      <Checkbox
                        {...field}
                        sx={{ color: '#F5BB00 !important' }}
                        color="warning"
                        className="border-[1px]"
                        //   onChange={(event) =>
                        //     handleAddPassenger(index, key, event.target.checked)
                        //   }
                      />
                    )}
                  />
                }
                label={value}
              />
            ))}
          </FormGroup>
        </Stack>

        <Stack spacing={2} mt={4} p={1} className="rounded-2xl bg-ms-white">
          <FacilitiesCounter
            control={control}
            defaultValue={0}
            id="details.maximumRoomCapacity"
            label="حداقل تعداد شب و روز"
          />
        </Stack>

        <Typography
          fontWeight={'bold'}
          className="w-full text-right p-5 pb-1 text-ms-thick-green"
          marginTop={'0 !important'}
          variant="body1"
          component="h4"
        >
          ساعت ورود
        </Typography>

        <UICustomizedSelect list={hours} />

        <Typography
          fontWeight={'bold'}
          className="w-full text-right p-5 pb-1 text-ms-thick-green"
          marginTop={'0 !important'}
          variant="body1"
          component="h4"
        >
          ساعت خروج
        </Typography>

        <UICustomizedSelect list={hours} />

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
