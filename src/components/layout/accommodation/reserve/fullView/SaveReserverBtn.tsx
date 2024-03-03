'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import UiButton from '@/components/UI/ui-button';
import { Box, Stack, Typography } from '@mui/material';
import { StyledTextArea } from '@/components/common/form/FormControler';
import { PATH_ACCAMMODATION } from '@/routes/paths';

const SaveReserverBtn = () => {
  const router = useRouter();
  const path = usePathname();

  return (
    <>
      <Stack className="bg-ms-white m-4 pb-6 px-4 rounded-2xl">
        <Box className="py-4">
          <Typography
            gutterBottom
            fontWeight={'bold'}
            variant="body1"
            component="div"
            className="flex pr-1 text-start  text-ms-thick-green"
          >
            با میزبان گفتگو کن
          </Typography>

          <Typography
            gutterBottom
            //   fontWeight={'bold'}
            variant="caption"
            component="div"
            className="flex pr-1 text-start text-ms-thick-green"
          >
            میتونی هر سوالی که داری رو واسه میزبانت گفتگو کنی و هماهنگی های لازم
            رو قبل از پرداخت انجام بدی.
          </Typography>
        </Box>

        <StyledTextArea
          onChange={(e) => console.log(e.target.value)}
          placeholder={'متن پیام.....'}
          className={`border-[1px] border-[#E2E2E2]`}
        />
      </Stack>

      <Stack spacing={2} m={2} mt={4}>
        <UiButton
          onClick={() => router.push(path + PATH_ACCAMMODATION.confirm)}
          type="button"
          className="m-6 mt-10 hover:bg-ms-btn-green-33 text-ms-lg h-[50px] w-full border-none text-ms-white font-ms-medium rounded-2xl bg-ms-btn-green-23"
          text="ثبت رزرو"
        />
      </Stack>
    </>
  );
};

export default SaveReserverBtn;
