import Image from 'next/image';
import { Box, Stack, Typography } from '@mui/material';

const AboutResidenceDetailZero = () => {
  return (
    <>
      <Image
        className="w-full pt-2"
        src={`/static/images/accommodation/_mock/_mock${31}.svg`}
        alt="room"
        width={0}
        height={0}
      />

      <Typography
        fontWeight={'bold'}
        gutterBottom
        variant="body1"
        component="div"
        className="flex flex-row m-0 align-middle items-center text-ms-thick-green  font-ms-bold"
      >
        اجاره بوم گردی کاملا سنتی و تمیز فول امکانات
      </Typography>

      <Stack
        sx={{ flexDirection: 'row' }}
        className="w-[100%] flex items-start justify-between py-2"
      >
        <Box className="flex flex-row items-center">
          <Image
            src={`/static/images/accommodation/reserve/location-yellow.svg`}
            alt="room"
            width={15}
            height={20}
          />
          <Typography
            sx={{ m: 0 }}
            gutterBottom
            fontWeight={'bold'}
            variant="body2"
            component="div"
            className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
          >
            مازندران رامسر
          </Typography>

          <Typography
            //   fontWeight={'bold'}
            gutterBottom
            variant="body1"
            component="div"
            className="flex flex-row pr-4 m-0 align-middle items-center text-ms-thick-green  font-ms-bold"
          >
            (۲۹ نظر ثبت شده)
          </Typography>
        </Box>
        <Typography
          //   fontWeight={'bold'}
          gutterBottom
          variant="body1"
          component="div"
          className="flex flex-row m-0 align-middle items-center text-ms-thick-green  font-ms-bold"
        >
          4.5
        </Typography>
      </Stack>

      <Box
        sx={{ direction: 'rtl', display: 'flex', textAlign: 'end' }}
        role="alert"
        className="alert alert-warning bg-[#EDF5FF] border-none p-3"
      >
        <Image
          src={`/static/images/accommodation/reserve/hint.svg`}
          alt="room"
          width={25}
          height={25}
        />

        <Typography
          className="text-[#006FFF] text-2xl text-start font-ms-bold"
          variant="body1"
          component="h5"
        >
          امکان گفتگوی انلاین بعد از ثبت رایگان رزرو
        </Typography>
      </Box>

      <Box className="w-full flex justify-center">
        <Stack
          sx={{ m: 0, width: '40%' }}
          className="border-[1px] m-0 border-ms-crimson-300 rounded-2xl bg-[#FFF1F1] px-4 p-[4px]"
        >
          <Typography
            gutterBottom
            fontWeight={'bold'}
            variant="body2"
            component="div"
            sx={{ m: 0 }}
            className="flex m-0 text-center justify-center text-ms-crimson-300  font-ms-bold"
          >
            تا ۲۵٪ درصد تخفیف
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default AboutResidenceDetailZero;
