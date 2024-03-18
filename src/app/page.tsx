import Image from 'next/image';
import { Suspense } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import SwiperSlides from '@/components/UI/carousel/SwiperSlides';
import TransportTabs from '@/components/common/tabs/TransportTabs';
import UiAccommodationBanner from '@/components/UI/ui-banner/UiAccommodationBanner';
import MobileBottomNavigation from '@/components/common/menu/MobileBottomNavigation';
import MainSlider from './_slider/mainSlider';
import SpecialOfferSlider from './_slider/specialOfferSlider';
import PilgrimageAndTourismSlider from './_slider/pilgrimageAndTourismSlider';
import MostAttractiveHostingSlider from './_slider/mostAttractiveHostingSlider';
import MostPopularHostingSlider from './_slider/mostAttractiveHostingSlider';
import GetWay from '@/components/Layout/getWay/GetWay';

export default async function Home() {
  return (
    <div className="h-full w-full">
      {/* <Banner
        bannerPic="/static/images/msafar/msafar-header-banner.svg"
        alt="header"
        width={0}
        height={500}
        className="w-full h-full"
      /> */}

      {/* <TransportTypeSelector type="msafar" /> */}
      <UiAccommodationBanner
        back={false}
        bannerPic="/static/images/msafar/raw-header-banner.svg"
        className="w-full min-h-fit"
        title="ام سفر"
        alt="header"
        height={500}
        width={500}
      />

      <TransportTabs control={null} />

      <Box sx={{ mt: '2rem', pb: '100px' }}>

            <GetWay />
        
        {/* <Image
          src={`/static/images/msafar/first-page-slider.svg`}
          alt={'No-passengers-found'}
          width={0} //automatically provided
          height={0}
          className="w-[100%] px-6"
        /> */}

        {/* ==============================================پیشنهاد ویژه */}
        <Box className="px-2">
          <Suspense
            fallback={
              <div>
                Loading... Loading... Loading... Loading... Loading...
                Loading... Loading... Loading... Loading...
              </div>
            }
          >
            <MainSlider />
          </Suspense>
        </Box>

        {/* ==============================================اقامتگاه های جنوب */}
        <Box className="bg-ms-white mt-6 mb-8 pb-4 ">
          <Typography
            className="px-2 py-2 flex text-center items-center font-ms-bold text-ms-thick-green"
            variant="h5"
            fontWeight={'bold'}
            component="span"
          >
            اقامتگاه های جنوب
          </Typography>

          <Box className="flex row w-full p-2">
            {' '}
            <Stack
              sx={{ flexDirection: 'column', display: 'flex' }}
              className="w-[36%]"
            >
              <Stack className="w-full my-1 relative">
                <Image
                  src={`/static/images/accommodation/_mock/_mock19_gheshm.svg`}
                  alt={'No-passengers-found'}
                  width={0} //automatically provided
                  height={0}
                  className="w-full"
                />
                <Typography
                  className="absolute bottom-0 left-0 w-[47%] text-center rounded-r-lg opacity-70 p-1 bg-ms-white text-ms-thick-green border-[#2E3801] border-[1px]"
                  variant="body2"
                  fontWeight={'bold'}
                  component="span"
                >
                  قشم
                </Typography>
              </Stack>
              <Stack className="w-full my-1 relative">
                <Image
                  src={`/static/images/accommodation/_mock/_mock18_hengam.svg`}
                  alt={'No-passengers-found'}
                  width={0} //automatically provided
                  height={0}
                  className="w-full "
                />
                <Typography
                  className="absolute bottom-0 left-0 w-[47%] text-center rounded-r-lg opacity-70 p-1 bg-ms-white text-ms-thick-green border-[#2E3801] border-[1px]"
                  variant="body2"
                  fontWeight={'bold'}
                  component="span"
                >
                  هنگام
                </Typography>
              </Stack>
            </Stack>
            <Stack className="w-[28%] my-1 mx-2 relative">
              <Image
                src={`/static/images/accommodation/_mock/_mock20_hormoz.svg`}
                alt={'No-passengers-found'}
                width={0} //automatically provided
                height={0}
                className="w-full"
              />
              <Typography
                className="absolute bottom-0 left-0 w-[47%] text-center rounded-r-lg opacity-70 p-1 bg-ms-white text-ms-thick-green border-[#2E3801] border-[1px]"
                variant="body2"
                fontWeight={'bold'}
                component="span"
              >
                هرمز
              </Typography>
            </Stack>
            <Stack
              sx={{ flexDirection: 'column', display: 'flex' }}
              className="w-[36%]"
            >
              <Stack className="w-full my-1 relative">
                <Image
                  src={`/static/images/accommodation/_mock/_mock21_kish.svg`}
                  alt={'No-passengers-found'}
                  width={0} //automatically provided
                  height={0}
                  className="w-full"
                />
                <Typography
                  className="absolute bottom-0 left-0 w-[47%] text-center rounded-r-lg opacity-70 p-1 bg-ms-white text-ms-thick-green border-[#2E3801] border-[1px]"
                  variant="body2"
                  fontWeight={'bold'}
                  component="span"
                >
                  کیش
                </Typography>
              </Stack>
              <Stack className="w-full my-1 relative">
                <Image
                  src={`/static/images/accommodation/_mock/_mock22_boshahr.svg`}
                  alt={'No-passengers-found'}
                  width={0} //automatically provided
                  height={0}
                  className=" w-full"
                />
                <Typography
                  className="absolute bottom-0 left-0 w-[47%] text-center rounded-r-lg opacity-70 p-1 bg-ms-white text-ms-thick-green border-[#2E3801] border-[1px]"
                  variant="body2"
                  fontWeight={'bold'}
                  component="span"
                >
                  بوشهر
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        {/* ==============================================پیشنهاد ویژه */}
        <Box className="bg-ms-yellow mt-6 pb-8">
          <Typography
            className="px-2 py-4 flex text-center items-center font-ms-bold justify-center text-ms-white"
            variant="h4"
            fontWeight={'bold'}
            component="span"
          >
            پیشنهاد ویژه
          </Typography>
          <Suspense
            fallback={
              <div>
                Loading... Loading... Loading... Loading... Loading...
                Loading... Loading... Loading... Loading...
              </div>
            }
          >
            <SpecialOfferSlider />
          </Suspense>
        </Box>

        {/* ==============================================پیشنهاد ویژه */}
        <Box className="bg-[#D3FFFF] mt-6 pb-8">
          <Typography
            className="py-4 px-4 flex text-ms-thick-green text-center items-center font-ms-bold"
            variant="h5"
            fontWeight={'bold'}
            component="span"
          >
            زیارتی و سیاحتی
          </Typography>
          <Suspense
            fallback={
              <div>
                Loading... Loading... Loading... Loading... Loading...
                Loading... Loading... Loading... Loading...
              </div>
            }
          >
            <PilgrimageAndTourismSlider />
          </Suspense>
        </Box>

        {/* ==============================================جذاب ترین اقامتگاه ها */}
        <Box className="pt-10 pb-6">
          <Typography
            className="px-2 py-2 flex text-center items-center font-ms-bold  text-ms-thick-green"
            variant="h5"
            fontWeight={'bold'}
            component="span"
          >
            جذاب ترین اقامتگاه ها
          </Typography>
          <Suspense
            fallback={
              <div>
                Loading... Loading... Loading... Loading... Loading...
                Loading... Loading... Loading... Loading...
              </div>
            }
          >
            <MostAttractiveHostingSlider />
          </Suspense>
        </Box>

        {/* ==============================================محبوب ترین اقامتگاه ها */}
        <Box className="pb-8">
          <Typography
            className="px-2 py-2 flex text-center items-center font-ms-bold  text-ms-thick-green"
            variant="h5"
            fontWeight={'bold'}
            component="span"
          >
            محبوب ترین اقامتگاه ها
          </Typography>
          <Suspense
            fallback={
              <div>
                Loading... Loading... Loading... Loading... Loading...
                Loading... Loading... Loading... Loading...
              </div>
            }
          >
            <MostPopularHostingSlider />
          </Suspense>
        </Box>

        {/* <Box className="bg-ms-yellow rounded-2xl mt-6 pb-8">
          <Typography
            className="px-2 py-4 flex text-ms-thick-green text-center items-center font-ms-bold justify-center text-ms-white"
            variant="h4"
            fontWeight={'bold'}
            component="span"
          >
            2222222 پیشنهاد ویژه
          </Typography>
          <Suspense
            fallback={
              <div>
                Loading... Loading... Loading... Loading... Loading...
                Loading... Loading... Loading... Loading...
              </div>
            }
          >
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
        </Box> */}
      </Box>
      {/* 
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
