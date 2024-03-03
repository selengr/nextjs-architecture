import Image from 'next/image';
import UiButton from '@/components/UI/ui-button';
import { Box, Stack, Typography } from '@mui/material';
import AboutResidenceDetailZero from './AboutResidenceDetailZero';

const CommentsResidence = () => {
  return (
    <Stack className="w-full mt-4 space-y-4 pb-16" spacing={2}>
      <AboutResidenceDetailZero />

      <Typography
        gutterBottom
        fontWeight={'bold'}
        variant="body1"
        component="div"
        className="flex m-0 py-2 min-w-fit pr-1 text-start text-ms-thick-green"
      >
        ۴۶ نظر ثبت شده
      </Typography>

      <Box sx={{ margin: '50px 0' }} className="bg-ms-white rounded-2xl w-full">
        <Stack
          sx={{ display: 'flex', flexDirection: 'row' }}
          className="p-4 items-center justify-between"
        >
          <Box className="flex flex-row">
            <Image
              src={`/static/images/accommodation/_mock/_mock34_profile.svg`}
              alt="room"
              width={60}
              height={60}
            />
            <Box className="pr-4 ">
              <Typography
                gutterBottom
                fontWeight={'bold'}
                variant="body1"
                component="div"
                className="flex m-0 pt-6 text-ms-thick-green"
              >
                علی
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                component="div"
                className="flex pt-2 text-ms-thick-green"
              >
                اقامت ۱ روز پیش
              </Typography>
            </Box>
          </Box>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            className="flex pr-6 text-ms-thick-green"
          >
            4
          </Typography>
        </Stack>

        <Typography
          gutterBottom
          variant="body2"
          component="div"
          className="flex pb-4 pr-6 text-ms-thick-green"
        >
          مکان فوق العاده تمیز میزبان رفتار خیلی خوب و محیط کاملا تمیز
        </Typography>

        <Box
          sx={{ margin: '1rem' }}
          className="px-2 bg-ms-back-card-gray-12 rounded-2xl"
        >
          <Box className="flex flex-row">
            <Image
              src={`/static/images/accommodation/_mock/_mock34_profile.svg`}
              alt="room"
              width={60}
              height={60}
            />
            <Box className="pr-4 ">
              <Typography
                gutterBottom
                fontWeight={'bold'}
                variant="body1"
                component="div"
                className="flex m-0 pt-6 text-ms-thick-green"
              >
                عباس مکیان
              </Typography>
              <Typography
                gutterBottom
                fontWeight={'bold'}
                variant="body2"
                component="div"
                className="flex pb-2 text-ms-light-gray-300"
              >
                پاسخ میزبان
              </Typography>
            </Box>
          </Box>

          <Typography
            gutterBottom
            fontWeight={'bold'}
            variant="body2"
            component="div"
            className="flex pb-4 pr-6 text-ms-thick-green"
          >
            ممنون از شما خانم زوار به امید دیدار دوباره
          </Typography>
        </Box>
      </Box>

      <Box sx={{ margin: '50px 0' }} className="bg-ms-white rounded-2xl w-full">
        <Stack
          sx={{ display: 'flex', flexDirection: 'row' }}
          className="p-4 items-center justify-between"
        >
          <Box className="flex flex-row">
            <Image
              src={`/static/images/accommodation/_mock/_mock34_profile.svg`}
              alt="room"
              width={60}
              height={60}
            />
            <Box className="pr-4 ">
              <Typography
                gutterBottom
                fontWeight={'bold'}
                variant="body1"
                component="div"
                className="flex m-0 pt-6 text-ms-thick-green"
              >
                علی
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                component="div"
                className="flex pt-2 text-ms-thick-green"
              >
                اقامت ۱ روز پیش
              </Typography>
            </Box>
          </Box>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            className="flex pr-6 text-ms-thick-green"
          >
            4
          </Typography>
        </Stack>

        <Typography
          gutterBottom
          variant="body2"
          component="div"
          className="flex pb-4 pr-6 text-ms-thick-green"
        >
          مکان فوق العاده تمیز میزبان رفتار خیلی خوب و محیط کاملا تمیز
        </Typography>

        <Box
          sx={{ margin: '1rem' }}
          className="px-2 bg-ms-back-card-gray-12 rounded-2xl"
        >
          <Box className="flex flex-row">
            <Image
              src={`/static/images/accommodation/_mock/_mock34_profile.svg`}
              alt="room"
              width={60}
              height={60}
            />
            <Box className="pr-4 ">
              <Typography
                gutterBottom
                fontWeight={'bold'}
                variant="body1"
                component="div"
                className="flex m-0 pt-6 text-ms-thick-green"
              >
                عباس مکیان
              </Typography>
              <Typography
                gutterBottom
                fontWeight={'bold'}
                variant="body2"
                component="div"
                className="flex pb-2 text-ms-light-gray-300"
              >
                پاسخ میزبان
              </Typography>
            </Box>
          </Box>

          <Typography
            gutterBottom
            fontWeight={'bold'}
            variant="body2"
            component="div"
            className="flex pb-4 pr-6 text-ms-thick-green"
          >
            ممنون از شما خانم زوار به امید دیدار دوباره
          </Typography>
        </Box>
      </Box>


      <UiButton
        sx={{ position: 'fixed', bottom: 15, margin: '0 auto' }}
        className="z-10  hover:bg-ms-btn-green-33 text-ms-lg w-full max-w-[511px]  h-[50px] border-none text-ms-white font-ms-medium rounded-2xl bg-ms-btn-green-23"
        // onClick={confirm}
        type="button"
        text="رزرو اقامتگاه"
      />
    </Stack>
  );
};

export default CommentsResidence;
