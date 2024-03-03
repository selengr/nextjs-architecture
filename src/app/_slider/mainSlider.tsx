'use client';

import SwiperSlides from '@/components/UI/carousel/SwiperSlides';
import { Box } from '@mui/material';
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';

const MainSlider = () => {
  return (
    <>
      <SwiperSlides
        className=""
        slidesPerView={1}
        breakpointsSm={1}
        breakpointsMd={1}
        breakpointsLg={1}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
      >
        {[1, 2, 3, 4].map((item) => (
          <Box key={item}>
            <SwiperSlide>
              <Image
                src={`/static/images/msafar/first-page-slider-${item}.svg`}
                alt={'No-passengers-found'}
                width={0} //automatically provided
                height={0}
                className="w-[100%]"
              />
            </SwiperSlide>
          </Box>
        ))}
      </SwiperSlides>
    </>
  );
};

export default MainSlider;
