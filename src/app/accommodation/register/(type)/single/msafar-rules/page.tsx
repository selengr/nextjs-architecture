'use client';
import { useRouter } from 'next/navigation';
import UiButton from '@/components/UI/ui-button';
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography
} from '@mui/material';
import { PATH_ACCAMMODATION } from '@/routes/paths';
import CircleIcon from '@mui/icons-material/Circle';
import UiAccommodationBanner from '@/components/UI/ui-banner/UiAccommodationBanner';
import HorizontalLinearStepper from '@/components/UI/ui-horizontalLinearStepper/HorizontalLinearStepper';

export const dynamic = 'force-dynamic';

const Page = () => {
  const router = useRouter();

  const confirm = () => {
    router.push(
      PATH_ACCAMMODATION.accommodation + PATH_ACCAMMODATION.myResidences
    );
  };

  return (
    <Box height={'100%'}>
      <UiAccommodationBanner
        className="w-full min-h-fit"
        title="قوانین و مقررات ام سفر"
        alt="header"
        height={500}
        width={500}
      />

      <Box className="w-full flex flex-col justify-center px-4 -mt-12">
        <Stack className="flex justify-center bg-ms-white rounded-2xl z-50 ltr">
          <HorizontalLinearStepper activeStep={11} />
        </Stack>
        <Stack sx={{ display: 'flex', flexDirection: 'row' }}>
          <Typography
            fontWeight={'bold'}
            className="w-full text-right p-5 pb-3 text-ms-thick-green"
            marginTop={'0 !important'}
            variant="body1"
            component="h4"
          >
            قوانین ثبت اقامتگاه
          </Typography>
          <Typography
            color={'#019C54'}
            fontWeight={'bold'}
            className="w-full text-right p-5 pb-3"
            marginTop={'0 !important'}
            variant="body1"
            component="h4"
          >
            به روز رسانی در تاریخ 1402/11/2
          </Typography>
        </Stack>
        <Typography
          fontWeight={'bold'}
          className="w-full text-right p-5 pb-3 pt-6 text-ms-thick-green"
          marginTop={'0 !important'}
          variant="body2"
          component="h4"
        >
          مرتبط با قوانین ثبت اقامتگاه
        </Typography>

        <List sx={{ width: '100%' }}>
          {[
            'میزبان می پذیرد با توجه به شرایط کنسلی رزرو که در هر حساب کاربری تعریف شده یکی را به دلخواه انتخاب نموده و طبق آن برای جریمه کنسلی اقدام نمایید.',
            'میزبان می پذیرد با توجه به شرایط کنسلی رزرو که در هر حساب کاربری تعریف شده یکی را به دلخواه انتخاب نموده و طبق آن برای جریمه کنسلی اقدام نمایید.',
            'میزبان می پذیرد با توجه به شرایط کنسلی رزرو که در هر حساب کاربری تعریف شده یکی را به دلخواه انتخاب نموده و طبق آن برای جریمه کنسلی اقدام نمایید.',
            'میزبان می پذیرد با توجه به شرایط کنسلی رزرو که در هر حساب کاربری تعریف شده یکی را به دلخواه انتخاب نموده و طبق آن برای جریمه کنسلی اقدام نمایید.',
            'میزبان می پذیرد با توجه به شرایط کنسلی رزرو که در هر حساب کاربری تعریف شده یکی را به دلخواه انتخاب نموده و طبق آن برای جریمه کنسلی اقدام نمایید.'
          ].map((value,key) => {
            return (
              <ListItemButton key={key} component="a" href="#simple-list">
                <CircleIcon
                  sx={{ width: '12px', color: '#F5BB00', marginLeft: '4px' }}
                />
                <ListItemText
                  sx={{
                    direction: 'rtl',
                    display: 'flex',
                    textAlign: 'justify',
                    color: '#1B3D13',
                    fontSize: '10px'
                  }}
                  primary=""
                />
                <Typography
                  className="w-full text-right text-ms-thick-green"
                  marginTop={'0 !important'}
                  variant="body2"
                  component="h4"
                >
                  {value}
                </Typography>
              </ListItemButton>
            );
          })}
        </List>

        <Typography
          className="w-full text-right p-5 pb-3 pt-6 text-ms-thick-green"
          marginTop={'0 !important'}
          variant="body2"
          component="h4"
        >
          میزبان می پذیرد با توجه به شرایط کنسلی رزرو که در هر حساب کاربری تعریف
          شده یکی را به دلخواه انتخاب نموده و طبق آن برای جریمه کنسلی اقدام
          نمایید.
        </Typography>

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
