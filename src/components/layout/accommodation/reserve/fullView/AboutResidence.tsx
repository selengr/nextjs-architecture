import Image from 'next/image';
import UiButton from '@/components/UI/ui-button';
import { Box, Card, Stack, Typography } from '@mui/material';
import AboutResidenceDetailTwo from './AboutResidenceDetailTwo';
import AboutResidenceDetailOne from './AboutResidenceDetailOne';
import AboutResidenceDetailZero from './AboutResidenceDetailZero';
import AboutResidenceDetailThree from './AboutResidenceDetailThree';
import ConfirmReserveBtn from './confirmReserveBtn';

const AboutResidence = () => {
  return (
    <Stack className="w-full mt-4 space-y-4" spacing={2}>
      <AboutResidenceDetailZero />

      <hr className="border-[1px] text-[#D2D2D2] border-dashed mx-5 mt-2" />

      <Stack
        sx={{ flexDirection: 'row' }}
        className="w-[100%] flex items-start justify-between py-2"
      >
        <Box className="flex flex-col items-start">
          <Typography
            gutterBottom
            fontWeight={'bold'}
            variant="body1"
            component="div"
            className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
          >
            بوم گردی
          </Typography>
          <Typography
            fontWeight={'bold'}
            variant="body2"
            component="h5"
            className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
          >
            به میزبانی عباس مکین
          </Typography>
        </Box>

        <Image
          src={`/static/images/accommodation/_mock/_mock34_profile.svg`}
          alt="room"
          width={60}
          height={60}
        />
      </Stack>

      <hr className="border-[1px] text-[#D2D2D2] border-dashed mx-5 mt-2" />
      <AboutResidenceDetailOne />
      <hr className="border-[1px] text-[#D2D2D2] border-dashed mx-5 mt-2" />

      <Typography
        fontWeight={'bold'}
        variant="body2"
        component="h5"
        className="flex py-2 min-w-fit pr-1 text-start text-ms-thick-green"
      >
        هتل ماجرا هتلی واقع در ۲۰ کیلیو متری جزیره هرمز میباشد که از سال ۱۳۶۷
        تاسیس شده است و تا به امروز به فعالیت خود ادامه دااده. هتل ماجرا یکی
        از....
      </Typography>

      <hr className="border-[1px] text-[#D2D2D2] border-dashed mx-5 mt-2" />
      <AboutResidenceDetailTwo />
      <hr className="border-[1px] text-[#D2D2D2] border-dashed mx-5 mt-2" />

      <Stack
        sx={{ flexDirection: 'row' }}
        className="w-[100%] flex items-start"
      >
        <Image
          src={`/static/images/accommodation/reserve/extraperson-icon.svg`}
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
            نفر اضافه
          </Typography>
          <Typography
            gutterBottom
            fontWeight={'bold'}
            variant="body2"
            component="h5"
            className="flex m-0 min-w-fit pr-1 text-start justify-center text-ms-thick-green"
          >
            هزینه ای که برای نفرات بیش از استاندارد(سرویس خواب و...) به مبلغ
            رزرو اضافه میشود.
          </Typography>
          <Typography
            fontWeight={'bold'}
            variant="body2"
            component="h5"
            className="flex m-0 min-w-fit pr-1 pt-1 text-start  text-ms-thick-green"
          >
            قیمت هر نفر اضافه به ازای هر شب:
            <Typography
              fontWeight={'bold'}
              variant="body1"
              component="h5"
              className="flex m-0 min-w-fit pr-3 text-start text-ms-thick-green"
            >
              30.0000
            </Typography>
          </Typography>
        </Box>
      </Stack>

      <hr className="border-[1px] text-[#D2D2D2] border-dashed mx-5 mt-2" />
      <Typography
        gutterBottom
        fontWeight={'bold'}
        variant="body1"
        component="div"
        className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
      >
        calender sooooooooooooooon!
      </Typography>
      <hr className="border-[1px] text-[#D2D2D2] border-dashed mx-5 mt-2" />
      <AboutResidenceDetailThree />

      <ConfirmReserveBtn />
    </Stack>
  );
};

export default AboutResidence;
