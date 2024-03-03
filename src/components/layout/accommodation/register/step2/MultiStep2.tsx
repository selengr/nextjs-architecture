'use client';

import * as yup from 'yup';

import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/navigation';
import UiButton from '@/components/UI/ui-button';
import { PATH_ACCAMMODATION } from '@/routes/paths';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Grid, Link, Stack, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import FormControlFunctionChild from '@/components/common/form/FormControler';
import { saveAccommodationDetails } from '@/redux/slices/accommodation/register';
import { InputsCharacteristicsResidence } from '@/@types/accommodation/register';
import HorizontalLinearStepper from '@/components/UI/ui-horizontalLinearStepper/HorizontalLinearStepper';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

// ----------------------------------------------------------------------

// NOTE:
// The first page of room.

// ----------------------------------------------------------------------

const MultiStep2 = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector<InputsCharacteristicsResidence>(
    (state) => state.register.accommodationDetails
  );
  const router = useRouter();

  console.log('stateeeeeeeeeeeeeee MultiStep2 :>> ', state);

  const addingRoom = () => {
    router.push('?query=pricing');
  };

  const confirm = () => {
    router.push(
      PATH_ACCAMMODATION.accommodation +
        PATH_ACCAMMODATION.register +
        PATH_ACCAMMODATION.multiple +
        PATH_ACCAMMODATION.address
    );
  };

  return (
    <>
      <Box className="w-full flex pt-8">
        <Stack
          spacing={2}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
          className="w-full flex align-middle justify-center"
        >
          <Image
            src={`/static/images/accommodation/register/room-empty.svg`}
            alt={'add'}
            width={0} //automatically provided
            height={0}
            className="w-[50%] py-6"
          />

          <Stack
            spacing={2}
            sx={{ display: 'flex', flexDirection: 'column' }}
            className="w-full"
          >
            <Typography
              className="text-ms-thick-green text-center font-ms-bold"
              variant="subtitle1"
              fontWeight={'bold'}
              component="h5"
            >
              فضای اقامتگاه خود را توصیف کنید.
            </Typography>

            <Typography
              className="text-ms-thick-green pr-6 pb-6 text-center"
              variant="body2"
              component="h5"
            >
              شما در این مرحله می توانید مشخصات انواع اتاق ها و فضاهای مربوط به
              اقامتگاه خود را توصیف و ثبت کنید.
            </Typography>
          </Stack>

          <UiButton
            onClick={addingRoom}
            sx={{
              border: '1px dashed #A2A2A2',
              backgroundColor: 'inherit',
              borderRadius: '15px',
              padding: '4px 1rem'
            }}
            className="bg-transparent p-4 px-8 border-solid border-2 text-ms-lg h-[48px] rounded-2xl w-full"
            text=""
          >
            <div className="flex flex-row items-center">
              <AddIcon sx={{ color: '#A2A2A2' }} />
              <span className="text-[#A2A2A2] text-ms-sm p-2 py-4">
                افزودن اتاق
              </span>
            </div>
          </UiButton>
        </Stack>
      </Box>

      <Stack spacing={2} m={2} mt={8} mb={4}>
        <UiButton
          onClick={confirm}
          className="m-6 mt-10 hover:bg-ms-btn-green-33 text-ms-lg h-[50px] w-full border-none text-ms-white font-ms-medium rounded-2xl bg-ms-btn-green-23"
          text="ثبت و ادامه"
        />
      </Stack>
    </>
  );
};

export default MultiStep2;
