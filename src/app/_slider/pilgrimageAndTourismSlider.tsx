/* eslint-disable react/jsx-key */
'use client';

import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import { Box, Stack, Typography } from '@mui/material';
import SwiperSlides from '@/components/UI/carousel/SwiperSlides';

const PilgrimageAndTourismSlider = () => {
  return (
    <>
      <SwiperSlides className="">
        {[1, 2, 3, 4].map((item) => (
          <Box key={item}>
            <SwiperSlide>
              <Stack
                sx={{ flexDirection: 'column', display: 'flex' }}
                className="flex flex-row text-center items-center"
              >
                <Image
                  style={{ padding: '0' }}
                  src={`/static/images/accommodation/_mock/_mock17.svg`}
                  alt={'No-passengers-found'}
                  width={0} //automatically provided
                  height={0}
                  className=" w-[100%] border-[#404040] border-[1px] rounded-[30px]"
                />
                <Typography
                  fontWeight={'bold'}
                  className="pt-2 flex text-ms-thick-green text-center items-start font-ms-bold"
                  variant="body1"
                  component="h6"
                >
                  مشهد مقدس
                </Typography>
              </Stack>
            </SwiperSlide>
          </Box>
        ))}
      </SwiperSlides>
    </>
  );
};

export default PilgrimageAndTourismSlider;
