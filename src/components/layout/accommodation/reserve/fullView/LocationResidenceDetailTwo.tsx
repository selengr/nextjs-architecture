import Link from 'next/link';
import { Box, Stack, Typography } from '@mui/material';


const LocationResidenceDetailTwo = () => {
  return (
    <>
      <Typography
        gutterBottom
        fontWeight={'bold'}
        variant="body1"
        component="div"
        className="flex m-0 min-w-fit pr-1 text-start text-ms-thick-green"
      >
        فاصله هتل تا مکان های دیگر
      </Typography>

      <Stack
        sx={{ flexDirection: 'row' }}
        className="w-[100%] flex justify-between"
      >
        <Typography
          gutterBottom
          fontWeight={'bold'}
          variant="body2"
          component="div"
          className="flex m-0 min-w-fit pr-1 text-start text-ms-thick-green"
        >
          صخره خرچنگ ها
        </Typography>

        <Typography
          gutterBottom
          fontWeight={'bold'}
          variant="body2"
          component="div"
          className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
        >
          1408 متر
        </Typography>
      </Stack>

      <Stack
        sx={{ flexDirection: 'row' }}
        className="w-[100%] flex justify-between"
      >
        <Typography
          gutterBottom
          fontWeight={'bold'}
          variant="body2"
          component="div"
          className="flex m-0 min-w-fit pr-1 text-start text-ms-thick-green"
        >
          استادیوم والیبال
        </Typography>

        <Typography
          gutterBottom
          fontWeight={'bold'}
          variant="body2"
          component="div"
          className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
        >
          1256 متر
        </Typography>
      </Stack>

      <Stack
        sx={{ flexDirection: 'row' }}
        className="w-[100%] flex justify-between"
      >
        <Typography
          gutterBottom
          fontWeight={'bold'}
          variant="body2"
          component="div"
          className="flex m-0 min-w-fit pr-1 text-start text-ms-thick-green"
        >
          پالاژ آقایان
        </Typography>

        <Typography
          gutterBottom
          fontWeight={'bold'}
          variant="body2"
          component="div"
          className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
        >
          1458متر
        </Typography>
      </Stack>

      <Stack
        sx={{ flexDirection: 'row' }}
        className="w-[100%] flex justify-between"
      >
        <Typography
          gutterBottom
          fontWeight={'bold'}
          variant="body2"
          component="div"
          className="flex m-0 min-w-fit pr-1 text-start text-ms-thick-green"
        >
          ساحل
        </Typography>

        <Typography
          gutterBottom
          fontWeight={'bold'}
          variant="body2"
          component="div"
          className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
        >
          1458متر
        </Typography>
      </Stack>

      <Stack
        sx={{ flexDirection: 'row' }}
        className="w-[100%] flex justify-between"
      >
        <Typography
          gutterBottom
          fontWeight={'bold'}
          variant="body2"
          component="div"
          className="flex m-0 min-w-fit pr-1 text-start text-ms-thick-green"
        >
          مرکز خرید ستاره
        </Typography>

        <Typography
          gutterBottom
          fontWeight={'bold'}
          variant="body2"
          component="div"
          className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
        >
          1458متر
        </Typography>
      </Stack>
    </>
  );
};

export default LocationResidenceDetailTwo;
