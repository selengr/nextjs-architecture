import Image from 'next/image';
import { Box, Stack, Typography } from '@mui/material';

const AboutResidenceDetailOne = () => {
  return (
    <>
      <Stack
        sx={{ flexDirection: 'row' }}
        className="w-[100%] flex items-start"
      >
        <Image
          src={`/static/images/accommodation/reserve/hospitablehost-icon.svg`}
          alt="room"
          width={30}
          height={30}
        />
        <Box className="flex flex-col items-start">
          <Typography
            gutterBottom
            fontWeight={'bold'}
            variant="body1"
            component="div"
            className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
          >
            میزبان مهمان نواز
          </Typography>
          <Typography
            variant="body2"
            component="h5"
            className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
          >
            امتیاز کامل ۹ مهمان از ۱۰ مهمان اخیر به(نحوه میزبانی) اقامتگاه
          </Typography>
        </Box>
      </Stack>

      <Stack
        sx={{ flexDirection: 'row' }}
        className="w-[100%] flex items-start"
      >
        <Image
          src={`/static/images/accommodation/reserve/aboutvilla-icon.svg`}
          alt="room"
          width={35}
          height={35}
        />
        <Box className="flex flex-col items-start">
          <Typography
            gutterBottom
            fontWeight={'bold'}
            variant="body1"
            component="div"
            className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
          >
            درباره ویلا
          </Typography>
          <Typography
            variant="subtitle2"
            component="h5"
            className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
          >
            ۲۲۰ متر زیر بنا دربست ۳ پله
          </Typography>
        </Box>
      </Stack>

      <Stack
        sx={{ flexDirection: 'row' }}
        className="w-[100%] flex items-start"
      >
        <Image
          src={`/static/images/accommodation/reserve/capacity-icon.svg`}
          alt="room"
          width={30}
          height={30}
        />
        <Box className="flex flex-col items-start">
          <Typography
            gutterBottom
            fontWeight={'bold'}
            variant="body1"
            component="div"
            className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
          >
            ظرفیت
          </Typography>
          <Typography
            variant="body2"
            component="h5"
            className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
          >
            ظرفیت تا ۱۰ نفر(۶ نفر پایه+ تا ۴نفر اضافه)
          </Typography>
        </Box>
      </Stack>

      <Stack
        sx={{ flexDirection: 'row' }}
        className="w-[100%] flex items-start"
      >
        <Image
          src={`/static/images/accommodation/reserve/sleepingservices-icon.svg`}
          alt="room"
          width={30}
          height={30}
        />
        <Box className="flex flex-col items-start">
          <Typography
            gutterBottom
            fontWeight={'bold'}
            variant="body1"
            component="div"
            className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
          >
            سرویس های خواب
          </Typography>
          <Typography
            variant="body2"
            component="h5"
            className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
          >
            ۳ اتاق ۲ تخت دو نفره تخت یک نفره ندارد ۴ رختخواب سنتی
          </Typography>
        </Box>
      </Stack>

      <Stack
        sx={{ flexDirection: 'row' }}
        className="w-[100%] flex items-start"
      >
        <Image
          src={`/static/images/accommodation/reserve/toilets-icon.svg`}
          alt="room"
          width={30}
          height={30}
        />
        <Box className="flex flex-col items-start">
          <Typography
            gutterBottom
            fontWeight={'bold'}
            variant="body1"
            component="div"
            className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
          >
            سرویس های بهداشتی
          </Typography>
          <Typography
            variant="body2"
            component="h5"
            className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
          >
            ۱ سرویس ایرانی ۱ سرویس فرنگی ۱ حمام
          </Typography>
        </Box>
      </Stack>

      <Stack
        sx={{ flexDirection: 'row' }}
        className="w-[100%] flex items-start"
      >
        <Image
          src={`/static/images/accommodation/reserve/time-icon.svg`}
          alt="room"
          width={30}
          height={30}
        />
        <Box className="flex flex-col items-start">
          <Typography
            gutterBottom
            fontWeight={'bold'}
            variant="body1"
            component="div"
            className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
          >
            ساعت ورود
          </Typography>
          <Typography
            variant="subtitle2"
            component="h5"
            className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
          >
            14:00 ظهر
          </Typography>
        </Box>
        <Box className="flex flex-col items-start pr-6">
          <Typography
            gutterBottom
            fontWeight={'bold'}
            variant="body1"
            component="div"
            className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
          >
            ساعت خروج
          </Typography>
          <Typography
            variant="body2"
            component="h5"
            className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
          >
            14:00 ظهر روز بعد
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

export default AboutResidenceDetailOne;
