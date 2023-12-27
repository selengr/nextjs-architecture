'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import './uiCarousel.css';
import 'swiper/css/pagination';
import { SwiperSlidesProps } from './types';
import { Box } from '@mui/material';

// Component definition

export default function SwiperSlides({
  children = null,
  slidesPerView = 2,
  spaceBetween = 10,
  slideToClickedSlide = true, // Default value: true
  pagination = { clickable: true }, // Default value: { clickable: true }
  breakpointsSm = 3,
  breakpointsMd = 3,
  breakpointsLg = 3,
  className = 'mySwiper'
}: SwiperSlidesProps) {
  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        slideToClickedSlide={true}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          430: {
            slidesPerView: breakpointsSm,
            spaceBetween: spaceBetween
          },
          768: {
            slidesPerView: breakpointsMd,
            spaceBetween: spaceBetween ?? 20
          },
          1024: {
            slidesPerView: breakpointsLg,
            spaceBetween: spaceBetween ?? 22
          }
        }}
        // modules={[Navigation]}
        className={className}
      >
        {Array.apply(0, Array(30)).map((item, key) => (
          <Box key={key}>
            <SwiperSlide>{children && children}</SwiperSlide>
          </Box>
        ))}
      </Swiper>
    </>
  );
}
