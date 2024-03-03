import UiButton from '@/components/UI/ui-button';
import { Stack, Typography } from '@mui/material';
import AboutResidenceDetailZero from './AboutResidenceDetailZero';
import LocationResidenceDetailTwo from './LocationResidenceDetailTwo';

const LocationResidence = () => {
  return (
    <Stack className="w-full mt-4 space-y-4  pb-16" spacing={2}>
      <AboutResidenceDetailZero />

      <Typography
        gutterBottom
        fontWeight={'bold'}
        variant="body2"
        component="div"
        className="flex m-0 pt-4 min-w-fit pr-1 text-start text-ms-thick-green"
      >
        موقعیت مکانی اقامتگاه
      </Typography>
      <Typography
        gutterBottom
        fontWeight={'bold'}
        variant="body2"
        component="div"
        className="flex m-0 min-w-fit pr-1 text-start text-ms-thick-green"
      >
        coming sooooooooooooooooooooooooooooooooooooooon
      </Typography>

      <hr className="border-[1px] text-[#D2D2D2] border-dashed mx-5 mt-2" />
      <LocationResidenceDetailTwo />

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

export default LocationResidence;
