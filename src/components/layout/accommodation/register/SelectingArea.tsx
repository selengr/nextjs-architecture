'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { PATH_ACCAMMODATION } from '@/routes/paths';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { EnumOfArea, IListOfArea } from '@/@types/accommodation/register';
import { saveAccommodationDetails } from '@/redux/slices/accommodation/register';
import HorizontalLinearStepper from '@/components/UI/ui-horizontalLinearStepper/HorizontalLinearStepper';

const SelectingArea = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const state = useAppSelector<any>(
    (state) => state.register.accommodationDetails
  );
  console.log('stateeee step one :>> ', state);

  // ----------------------------------------------------------------------
  const setArea = (value: string) => {
    // dispatch(saveAccommodationDetails({ name: 'residenceArea', value }));
    const multiple = state.residenceName.includes('multi');
    const single = state.residenceName.includes('single');

    if (single) {
      router.push(
        PATH_ACCAMMODATION.accommodation +
          PATH_ACCAMMODATION.register.replace(' ', '') +
          `${single ? PATH_ACCAMMODATION.single : PATH_ACCAMMODATION.single}`
      );
    } else {
      router.push(
        PATH_ACCAMMODATION.accommodation +
          PATH_ACCAMMODATION.register.replace(' ', '') +
          `${
            multiple ? PATH_ACCAMMODATION.multiple : PATH_ACCAMMODATION.multiple
          }`
      );
    }
  };
  // ----------------------------------------------------------------------

  let data: IListOfArea[] = [
    { text: 'شهری', images: 'area1.svg', enum: EnumOfArea.URBAN },
    { text: 'کویری', images: 'area6.svg', enum: EnumOfArea.DESERT },
    { text: 'جنگلی', images: 'area3.svg', enum: EnumOfArea.WOODSY },
    { text: 'ساحلی', images: 'area2.svg', enum: EnumOfArea.COASTAL },
    { text: 'روستایی', images: 'area5.svg', enum: EnumOfArea.RURAL },
    { text: 'کوهستانی', images: 'area4.svg', enum: EnumOfArea.MOUNTAINOUS }
  ];

  return (
    <Box className="w-full flex justify-center px-4 -mt-12">
      <Grid container spacing={0} className="flex justify-center z-50 ltr">
        {/* <Stack className="w-full bg-ms-white rounded-2xl mb-4">
          <HorizontalLinearStepper activeStep={1} />
        </Stack> */}

        <Stack
          spacing={4}
          className="w-full bg-ms-white rounded-2xl pb-4 mb-10"
        >
          <Typography
            className="w-full h-20 text-right p-5 text-ms-thick-green font-ms-bold "
            marginTop={'0 !important'}
            variant="body1"
            component="h4"
          >
            اقامتگاه شما در چه منطقه ای قرار دارد؟
          </Typography>

          <Grid container spacing={0} className="flex justify-center pb-4">
            {data.map((value,key) => (
              <Stack
              key={key}
                onClick={() => setArea(value.enum)}
                className={`${
                  state.residenceArea == value.enum ? 'residence-type-bg' : ''
                } accommodation-type-card hover:text-ms-light-green rounded-2xl flex flex-col justify-center mx-2 pb-2 mb-2`}
                spacing={1}
              >
                <Image
                  src={`/static/images/accommodation/register/${value.images}`}
                  alt={'alt'}
                  width={100} //automatically provided
                  height={100} //automatically provided
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                  className={`${
                    state.residenceArea == value.enum
                      ? 'residence-type-card'
                      : ''
                  } accommodation-type-pic w-full h-32 rounded-2xl`}
                />
                <Typography
                  className="text-center hover:text-ms-light-green text-ms-thick-green text-ms-lg"
                  marginTop={'0 !important'}
                  variant="body1"
                  component="h2"
                >
                  {value.text}
                </Typography>
              </Stack>
            ))}
          </Grid>
        </Stack>
      </Grid>
    </Box>
  );
};

export default SelectingArea;
