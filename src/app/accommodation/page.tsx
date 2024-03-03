import Link from 'next/link';
import Image from 'next/image';
import UiButton from '@/components/UI/ui-button';
import { Banner } from '@/components/UI/ui-banner';
import { PATH_ACCAMMODATION } from '@/routes/paths';
import { Box, Stack, Typography } from '@mui/material';
import UiAccommodationBanner from '@/components/UI/ui-banner/UiAccommodationBanner';

// ----------------------------------------------------------------------

// NOTE:
// The first page for accommodation.

// ----------------------------------------------------------------------

const Page = () => {
  return (
    <Box height={'100%'}>
      <UiAccommodationBanner
        className="w-full min-h-fit"
        title="اقامتگاه"
        alt="header"
        height={500}
        width={500}
      />

      <Box className="w-full flex -mt-4">
        <Stack
          spacing={2}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
          className="w-full bg-ms-white flex align-middle justify-center"
        >
          <Image
            src={`/static/images/accommodation/registraion.svg`}
            alt={'add'}
            width={0} //automatically provided
            height={0}
            className="w-[80%]"
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
              اقامتگاهی در ام سفر ندارید
            </Typography>

            <Typography
              className="text-ms-thick-green pr-6"
              variant="body2"
              component="h5"
            >
              اگر اقامتگاه خود را ثبت کرده اید منتظر تایید آن توسط پشتیبانی ام
              سفر باشید.
            </Typography>
          </Stack>

          <hr
            className="w-full py-2 text-ms-white"
            style={{ borderBottom: '1px dashed #D2D2D2' }}
          />

          <Typography
            className="text-ms-thick-green text-center font-ms-bold pt-4"
            variant="subtitle2"
            fontWeight={'bold'}
            component="h5"
          >
            در صورتی که اقامتگاهی ثبت نکرده اید می توانید اولین اقامتگاه خود را
            ثبت کنید
          </Typography>

          <Box className="py-8 px-6 text-center w-[60%]">
            <Link
              href={
                PATH_ACCAMMODATION.accommodation + PATH_ACCAMMODATION.register
              }
            >
              <UiButton
                className="bg-ms-btn-green-23 hover:bg-ms-btn-green-33 text-ms-white w-full py-8 border-ms-border-green-33 px-6 p-4 border-solid border-2 font-ms-bold text-ms-lg h-[48px] rounded-2xl"
                text="ثبت اولین اقامتگاه"
              ></UiButton>
            </Link>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Page;
