import Image from 'next/image';
import { Box, Stack, Typography } from '@mui/material';
import SwiperSlides from '@/components/UI/carousel/SwiperSlides';
import MobileBottomNavigation from '@/components/common/menu/MobileBottomNavigation';
import TransportTypeSelector from '@/components/UI/ui-transport-type-selector/TransportTypeSelector';
import { Suspense } from 'react';
import OtpNatoinalCode from '@/components/Layout/payment/otp/OtpNatoinalCode';
import ModalGestures from '@/components/common/modal/ModalGestures ';


export default async function Home() {
  return (
    <div className="h-screen w-full overflow-hidden">
      {/* <Banner
        bannerPic="/static/images/msafar/msafar-header-banner.svg"
        alt="header"
        width={0}
        height={500}
        className="w-full h-full"
      /> */}

      <TransportTypeSelector type="msafar" />

      <Box sx={{ mt: '6rem', px: '4rem' }}></Box>

      {/* <Box className="mr-4">
        <Typography
          className="px-2 flex text-ms-thick-green text-center items-start font-ms-bold"
          variant="body2"
          component="span"
        >
          محبوب ترین ها
        </Typography>
        <Suspense fallback={<div>Loading... Loading... Loading... Loading... Loading... Loading... Loading... Loading... Loading...</div>}>
        
        <SwiperSlides>
          <>
            {' '}
            <Image
              src={`/static/images/msafar/popular_slider_1.svg`}
              alt={'No-passengers-found'}
              width={0} //automatically provided
              height={0}
              className="h-[90%] w-[90%]"
            />
            <Box className="bg-ms-white rounded-2xl absolute bottom-6 h-[30%] w-[80%]">
              <Typography
                className="px-3 pt-1 flex text-ms-thick-green text-center items-start font-ms-bold"
                variant="body1"
                component="h6"
              >
                اندونزی
              </Typography>
              <Stack className="pb-3 flex flex-row text-center pr-2">
                <Image
                  src={`/static/images/msafar/pin_point.svg`}
                  alt={'No-passengers-found'}
                  width={14} //automatically provided
                  height={18}
                  // className='h-[100px]'
                />
                <Typography
                  className="px-2 flex text-ms-thick-green text-center items-start font-ms-regular"
                  variant="body2"
                  component="span"
                >
                  بالی,جزیره
                </Typography>
              </Stack>
            </Box>
          </>
        </SwiperSlides>
      </Suspense>
      </Box>

      <Box className="mr-4 my-8">
        <Typography
          className="px-2 my-4 flex text-ms-thick-green text-center items-start font-ms-bold"
          variant="body2"
          component="span"
        >
          لیست تورها
        </Typography>
        <Suspense fallback={<div>Loading... Loading... Loading... Loading... Loading... Loading... Loading... Loading... Loading...</div>}>
        <SwiperSlides
          slidesPerView={5}
          breakpointsSm={5}
          breakpointsLg={6}
          breakpointsMd={6}
          className="tour-list border-none"
        >
          <Box
            sx={{ border: '1px solid #E8E8E8' }}
            className="text-center flex items-center justify-center bg-ms-white rounded-xl h-[56px] w-[100%]"
          >
            <Typography
              className="px-3 pt-1 flex text-ms-thick-green text-center items-start font-ms-bold"
              variant="body1"
              component="h6"
            >
              اندونزی
            </Typography>
          </Box>
        </SwiperSlides>
        </Suspense>
      </Box> */}
      <Box sx={{ mb: '6rem', px: '4rem' }}></Box>

      <div className="relative flex align-middle items-center">
        <MobileBottomNavigation />
      </div>
    </div>
  );
}
