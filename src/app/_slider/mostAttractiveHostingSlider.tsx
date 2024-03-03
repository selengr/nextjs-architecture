/* eslint-disable react/jsx-key */
'use client';

import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import { Box, Stack, Typography } from '@mui/material';
import SwiperSlides from '@/components/UI/carousel/SwiperSlides';

const MostAttractiveHostingSlider = () => {
  return (
    <>
      <SwiperSlides>
        {[1, 2, 3, 4].map((item) => (
          <Box key={item} >
            <SwiperSlide>
              <Box className="min-h-[190px] w-full p-2 bg-ms-white rounded-2xl">
                {' '}
                <Image
                  src={`/static/images/accommodation/_mock/_mock16.svg`}
                  alt={'No-passengers-found'}
                  width={0} //automatically provided
                  height={0}
                  className="h-[30%] w-full"
                />
                <Box className="absolute w-[92%]">
                  <Typography
                    fontWeight={'bold'}
                    className="pt-2 flex text-ms-thick-green text-center items-start font-ms-bold"
                    variant="body2"
                    component="h6"
                  >
                    جذاب ترین اقامتگاه ها
                  </Typography>
                  <Stack
                    sx={{ flexDirection: 'row', display: 'flex' }}
                    className="py-2 flex flex-row justify-between w-full"
                  >
                    <Typography
                      className="flex text-ms-thick-green w-[85%] text-start"
                      variant="body2"
                      component="span"
                    >
                      ماسوله ۱۳ تا ۱۴ بهمن
                    </Typography>
                    <Typography
                      fontWeight={'bold'}
                      className="absolute left-0 flex text-ms-thick-green"
                      variant="body2"
                      component="h6"
                    >
                      ۳ نفر
                    </Typography>
                  </Stack>
                  <Stack
                    sx={{ flexDirection: 'row', display: 'flex' }}
                    className="flex flex-row text-center items-center"
                  >
                    <Box className="px-1 py-[2px]">
                      <Typography
                        fontWeight={'bold'}
                        className="flex text-ms-thick-green items-start font-ms-regular"
                        variant="body2"
                        component="span"
                      >
                        ظرفیت ۳ نفر
                      </Typography>
                    </Box>

                    <Typography
                      fontWeight={'bold'}
                      className="absolute left-0 text-ms-thick-green font-ms-regular"
                      variant="body2"
                      component="span"
                    >
                      ۱۲.0000
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </SwiperSlide>
          </Box>
        ))}
      </SwiperSlides>
    </>
  );
};

export default MostAttractiveHostingSlider;
