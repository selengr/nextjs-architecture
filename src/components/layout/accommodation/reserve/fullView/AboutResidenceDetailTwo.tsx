'use client';

import { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import ModalGestures from '@/components/common/modal/ModalGestures ';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const AboutResidenceDetailTwo = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Typography
        gutterBottom
        fontWeight={'bold'}
        variant="body1"
        component="div"
        className="flex m-0 min-w-fit pr-1 text-start text-ms-thick-green"
      >
        امکانات
      </Typography>

      <Stack
        sx={{ flexDirection: 'row' }}
        className="w-[100%] flex items-start"
      >
        <Typography
          gutterBottom
          fontWeight={'bold'}
          variant="caption"
          component="div"
          className="flex w-[50%] m-0 min-w-fit pr-1 text-start text-ms-thick-green"
        >
          تاکسی سرویس
        </Typography>

        <Typography
          gutterBottom
          fontWeight={'bold'}
          variant="caption"
          component="div"
          className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
        >
          خدمات اینترنت بی سیم
        </Typography>
      </Stack>

      <Stack
        sx={{ flexDirection: 'row' }}
        className="w-[100%] flex items-start"
      >
        <Typography
          gutterBottom
          fontWeight={'bold'}
          variant="caption"
          component="div"
          className="flex w-[50%] m-0 min-w-fit pr-1 text-start text-ms-thick-green"
        >
          سرویس بهداشتی فرنگی
        </Typography>

        <Typography
          gutterBottom
          fontWeight={'bold'}
          variant="caption"
          component="div"
          className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
        >
          تلفن
        </Typography>
      </Stack>

      <Stack
        sx={{ flexDirection: 'row' }}
        className="w-[100%] flex items-start"
      >
        <Typography
          gutterBottom
          fontWeight={'bold'}
          variant="caption"
          component="div"
          className="flex w-[50%] m-0 min-w-fit pr-1 text-start text-ms-thick-green"
        >
          تلویزیون
        </Typography>

        <Typography
          gutterBottom
          fontWeight={'bold'}
          variant="caption"
          component="div"
          className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
        >
          سیستم تهویه هوا
        </Typography>
      </Stack>

      <Stack
        sx={{ flexDirection: 'row' }}
        className="w-[100%] flex items-start"
      >
        <Typography
          gutterBottom
          fontWeight={'bold'}
          variant="subtitle2"
          component="div"
          className="flex w-[40%] m-0 min-w-fit pr-1 text-start text-ms-thick-green"
        >
          یخچال
        </Typography>

        <Typography
          gutterBottom
          fontWeight={'bold'}
          variant="subtitle2"
          component="div"
          className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
        >
          پارکینگ
        </Typography>
      </Stack>

      {/* <Link href={'#'} className="flex justify-end"> */}
      <Typography
        gutterBottom
        fontWeight={'bold'}
        variant="body1"
        component="div"
        className="flex justify-end m-0 min-w-fit pr-1 text-ms-green items-center"
        onClick={() => setOpen(true)}
      >
        مشاهده بیشتر امکانات
        <ArrowBackIosNewIcon
          fontSize="inherit"
          className="text-ms-green items-center"
        />
      </Typography>
      {/* </Link> */}

      {open && (
        <ModalGestures
          title={''}
          isOpen={open}
          onClose={() => setOpen(false)}
          className={'overflow-scroll'}
          initialSnap={2}
          customStyle={{ background: '#FFF' }}
        >
          <ResidenceFacilitiesModal />
        </ModalGestures>
      )}
    </>
  );
};

export default AboutResidenceDetailTwo;

const ResidenceFacilitiesModal = () => {
  return (
    <>
      <Box className="bg-ms-back-card-gray-12 rounded-2xl px-2 overflow-auto">
        <Box className=" px-6 py-4">
          <Typography
            gutterBottom
            fontWeight={'bold'}
            variant="h6"
            component="h1"
            className="flex m-0 min-w-fit pr-1 text-start text-ms-thick-green"
          >
            امکانات اقامتگاه
          </Typography>
          <Typography
            gutterBottom
            fontWeight={'bold'}
            variant="subtitle2"
            component="h1"
            className="flex m-0 min-w-fit pr-1 text-start text-ms-green"
          >
            امکانات رفاهی
          </Typography>

          <Stack
            sx={{ flexDirection: 'row' }}
            className="w-[100%] flex items-start pt-3"
          >
            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="caption"
              component="div"
              className="flex w-[50%] m-0 min-w-fit pr-1 text-start text-ms-thick-green"
            >
              تاکسی سرویس
            </Typography>

            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="caption"
              component="div"
              className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
            >
              خدمات اینترنت بی سیم
            </Typography>
          </Stack>

          <Stack
            sx={{ flexDirection: 'row' }}
            className="w-[100%] flex items-start"
          >
            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="caption"
              component="div"
              className="flex w-[50%] m-0 min-w-fit pr-1 text-start text-ms-thick-green"
            >
              سرویس بهداشتی فرنگی
            </Typography>

            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="caption"
              component="div"
              className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
            >
              تلفن
            </Typography>
          </Stack>

          <Stack
            sx={{ flexDirection: 'row' }}
            className="w-[100%] flex items-start"
          >
            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="caption"
              component="div"
              className="flex w-[50%] m-0 min-w-fit pr-1 text-start text-ms-thick-green"
            >
              تلویزیون
            </Typography>

            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="caption"
              component="div"
              className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
            >
              سیستم تهویه هوا
            </Typography>
          </Stack>

          <Stack
            sx={{ flexDirection: 'row' }}
            className="w-[100%] flex items-start"
          >
            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="caption"
              component="div"
              className="flex w-[50%] m-0 min-w-fit pr-1 text-start text-ms-thick-green"
            >
              یخچال
            </Typography>

            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="caption"
              component="div"
              className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
            >
              پارکینگ
            </Typography>
          </Stack>
        </Box>
        <hr className="border-[1px] text-[#D2D2D2] border-dashed mt-2" />

        <Box className=" px-8 py-4">
          <Typography
            gutterBottom
            fontWeight={'bold'}
            variant="subtitle2"
            component="h1"
            className="flex m-0 min-w-fit pr-1 text-start text-ms-green"
          >
            امکانات تفریحی
          </Typography>

          <Stack
            sx={{ flexDirection: 'row' }}
            className="w-[100%] flex items-start pt-3"
          >
            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="caption"
              component="div"
              className="flex w-[50%] m-0 min-w-fit pr-1 text-start text-ms-thick-green"
            >
              تاکسی سرویس
            </Typography>

            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="caption"
              component="div"
              className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
            >
              خدمات اینترنت بی سیم
            </Typography>
          </Stack>

          <Stack
            sx={{ flexDirection: 'row' }}
            className="w-[100%] flex items-start"
          >
            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="caption"
              component="div"
              className="flex w-[50%] m-0 min-w-fit pr-1 text-start text-ms-thick-green"
            >
              سرویس بهداشتی فرنگی
            </Typography>

            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="caption"
              component="div"
              className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
            >
              تلفن
            </Typography>
          </Stack>

          <Stack
            sx={{ flexDirection: 'row' }}
            className="w-[100%] flex items-start"
          >
            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="caption"
              component="div"
              className="flex w-[50%] m-0 min-w-fit pr-1 text-start text-ms-thick-green"
            >
              تلویزیون
            </Typography>

            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="caption"
              component="div"
              className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
            >
              سیستم تهویه هوا
            </Typography>
          </Stack>

          <Stack
            sx={{ flexDirection: 'row' }}
            className="w-[100%] flex items-start"
          >
            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="caption"
              component="div"
              className="flex w-[50%] m-0 min-w-fit pr-1 text-start text-ms-thick-green"
            >
              یخچال
            </Typography>

            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="caption"
              component="div"
              className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
            >
              پارکینگ
            </Typography>
          </Stack>
        </Box>

        <hr className="border-[1px] text-[#D2D2D2] border-dashed mt-2" />

        <Box className=" px-8 py-4">
          <Typography
            gutterBottom
            fontWeight={'bold'}
            variant="subtitle2"
            component="h1"
            className="flex m-0 min-w-fit pr-1 text-start text-ms-green"
          >
            امکانات ساختمان
          </Typography>

          <Stack
            sx={{ flexDirection: 'row' }}
            className="w-[100%] flex items-start pt-3"
          >
            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="caption"
              component="div"
              className="flex w-[50%] m-0 min-w-fit pr-1 text-start text-ms-thick-green"
            >
              تاکسی سرویس
            </Typography>

            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="caption"
              component="div"
              className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
            >
              خدمات اینترنت بی سیم
            </Typography>
          </Stack>

          <Stack
            sx={{ flexDirection: 'row' }}
            className="w-[100%] flex items-start"
          >
            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="caption"
              component="div"
              className="flex w-[50%] m-0 min-w-fit pr-1 text-start text-ms-thick-green"
            >
              سرویس بهداشتی فرنگی
            </Typography>

            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="caption"
              component="div"
              className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
            >
              تلفن
            </Typography>
          </Stack>

          <Stack
            sx={{ flexDirection: 'row' }}
            className="w-[100%] flex items-start"
          >
            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="caption"
              component="div"
              className="flex w-[50%] m-0 min-w-fit pr-1 text-start text-ms-thick-green"
            >
              تلویزیون
            </Typography>

            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="caption"
              component="div"
              className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
            >
              سیستم تهویه هوا
            </Typography>
          </Stack>

          <Stack
            sx={{ flexDirection: 'row' }}
            className="w-[100%] flex items-start"
          >
            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="caption"
              component="div"
              className="flex w-[50%] m-0 min-w-fit pr-1 text-start text-ms-thick-green"
            >
              یخچال
            </Typography>

            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="caption"
              component="div"
              className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
            >
              پارکینگ
            </Typography>
          </Stack>
        </Box>

        <hr className="border-[1px] text-[#D2D2D2] border-dashed mt-2" />

        <Box className=" px-8 py-4">
          <Typography
            gutterBottom
            fontWeight={'bold'}
            variant="subtitle2"
            component="h1"
            className="flex m-0 min-w-fit pr-1 text-start text-ms-green"
          >
            امکانات بهداشتی
          </Typography>

          <Stack
            sx={{ flexDirection: 'row' }}
            className="w-[100%] flex items-start pt-3"
          >
            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="caption"
              component="div"
              className="flex w-[50%] m-0 min-w-fit pr-1 text-start text-ms-thick-green"
            >
              تاکسی سرویس
            </Typography>

            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="caption"
              component="div"
              className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
            >
              خدمات اینترنت بی سیم
            </Typography>
          </Stack>

          <Stack
            sx={{ flexDirection: 'row' }}
            className="w-[100%] flex items-start"
          >
            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="caption"
              component="div"
              className="flex w-[50%] m-0 min-w-fit pr-1 text-start text-ms-thick-green"
            >
              سرویس بهداشتی فرنگی
            </Typography>

            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="caption"
              component="div"
              className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
            >
              تلفن
            </Typography>
          </Stack>

          <Stack
            sx={{ flexDirection: 'row' }}
            className="w-[100%] flex items-start"
          >
            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="caption"
              component="div"
              className="flex w-[50%] m-0 min-w-fit pr-1 text-start text-ms-thick-green"
            >
              تلویزیون
            </Typography>

            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="caption"
              component="div"
              className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
            >
              سیستم تهویه هوا
            </Typography>
          </Stack>

          <Stack
            sx={{ flexDirection: 'row' }}
            className="w-[100%] flex items-start"
          >
            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="caption"
              component="div"
              className="flex w-[50%] m-0 min-w-fit pr-1 text-start text-ms-thick-green"
            >
              یخچال
            </Typography>

            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="caption"
              component="div"
              className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
            >
              پارکینگ
            </Typography>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export { ResidenceFacilitiesModal };
