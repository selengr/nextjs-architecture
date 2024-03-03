import UiButton from '@/components/UI/ui-button';
import { Box, Stack, Typography } from '@mui/material';
import AboutResidenceDetailZero from './AboutResidenceDetailZero';

const CancellationResidenceRules = () => {
  return (
    <Stack className="w-full mt-4 space-y-4 pb-16" spacing={2}>
      <AboutResidenceDetailZero />

      <Box sx={{ margin: '50px 0' }} className="bg-ms-white rounded-2xl w-full">
        <Stack className="border-r-2 border-ms-yellow-13 px-4 my-4">
          <Typography
            gutterBottom
            fontWeight={'bold'}
            variant="body1"
            component="div"
            className="flex m-0 py-2 min-w-fit pr-1 text-start text-ms-thick-green"
          >
            قوانین لغو و رزرو
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            className="flex m-0 min-w-fit pr-1 text-start text-ms-thick-green"
          >
            از زمان ورود تا ۷۲ ساعت قبل از ورود
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            className="flex m-0 min-w-fit pr-1 text-start text-ms-thick-green"
          >
            در ۷۲ ساعت پایانی قبل از ورود
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            className="flex m-0 min-w-fit pr-1 text-start text-ms-thick-green"
          >
            از روز ورود تا روز خروج
          </Typography>

          <Typography
            gutterBottom
            fontWeight={'bold'}
            variant="body1"
            component="div"
            className="flex m-0 py-4 min-w-fit pr-1 text-start text-ms-thick-green"
          >
            قوانین روز های پیک
          </Typography>

          <Typography
            gutterBottom
            fontWeight={'bold'}
            variant="body2"
            component="div"
            className="flex m-0 pb-4 min-w-fit pr-1 text-start text-ms-thick-green"
          >
            بیش از ۷ روز مانده به تاریخ ورود (قبل از ساعت 00:00) ۲۰٪ از مبلغ کل
            رزرو کسر می شود. کمتر از ۷ روز مانده به تاریخ ورود تا روز (قبل از
            ساعت00:00) ۱۰۰٪ مبلغ شب اول و ۵۰٪ مبلغ سایر شب ها کسر می شود. از روز
            ورود به بعد کل مبلغ رزرو کسر می شود.
          </Typography>

          <Typography
            gutterBottom
            variant="body2"
            component="div"
            className="flex m-0 min-w-fit pr-1 text-start text-ms-thick-green"
          >
            از زمان ورود تا ۷۲ ساعت قبل از ورود
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            className="flex m-0 min-w-fit pr-1 text-start text-ms-thick-green"
          >
            در ۷۲ ساعت پایانی قبل از ورود
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            className="flex m-0 min-w-fit pr-1 text-start text-ms-thick-green"
          >
            از روز ورود تا روز خروج
          </Typography>
        </Stack>
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

export default CancellationResidenceRules;
