import Link from 'next/link';
import { Box, Stack, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SimilarHostingSlider from '@/app/_slider/similarHostingSlider';

const AboutResidenceDetailThree = () => {
  return (
    <>
      <Typography
        gutterBottom
        fontWeight={'bold'}
        variant="body1"
        component="div"
        className="flex m-0 min-w-fit pr-1 text-start text-ms-thick-green"
      >
        اقامتگاه های مشابه
      </Typography>

      <Typography
        gutterBottom
        fontWeight={'bold'}
        variant="body2"
        component="div"
        className="flex m-0 min-w-fit pr-1 text-strat text-ms-thick-green"
      >
        بر اساس جستجو ها و بازدید های اخیر شما موارد زیر نیز به شما پیشنهاد می
        شود.
      </Typography>

      <SimilarHostingSlider />

      <Link href={'#'} className="flex justify-end pb-14">
        <Typography
          gutterBottom
          fontWeight={'bold'}
          variant="body1"
          component="div"
          className="flex m-0 min-w-fit pr-1 text-ms-green items-center"
        >
          مشاهده بیشتر
          <ArrowBackIosNewIcon
            fontSize="inherit"
            className="text-ms-green items-center"
          />
        </Typography>
      </Link>
    </>
  );
};

export default AboutResidenceDetailThree;
