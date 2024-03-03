'use client';


import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import UiButton from '@/components/UI/ui-button';
import { PATH_ACCAMMODATION } from '@/routes/paths';
import { Box, Stack, Typography } from '@mui/material';
import ModalGestures from '@/components/common/modal/ModalGestures ';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const ConfirmReserveBtn = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <UiButton
       sx={{position:"fixed",bottom:10,justifyContent:"center",display:"flex",margin:"0 auto",}}
        className="z-10 hover:bg-ms-btn-green-33 max-w-[511px] text-ms-lg w-full h-[50px] border-none text-ms-white font-ms-medium rounded-2xl bg-ms-btn-green-23"
        onClick={() => setOpen(true)}
        type="button"
        text="رزرو اقامتگاه"
      />

      {open && (
        <ModalGestures
          title={''}
          isOpen={open}
          onClose={() => setOpen(false)}
          className={'overflow-scroll'}
          initialSnap={2}
          customStyle={{ background: '#FFF' }}
        >
          <ContinueBookingModal />
        </ModalGestures>
      )}
    </>
  );
};

export default ConfirmReserveBtn;








const ContinueBookingModal = () => {
  const [peopleCounter, setPeopleCounter] = useState(0);
  const router = useRouter();
  const path = usePathname();


  const handleAdd = () => {
    setPeopleCounter(peopleCounter + 1);
  };
  const handleSubtract = () => {
    if (peopleCounter > 0) {
      setPeopleCounter(peopleCounter - 1);
    }
  };

  return (
    <>
      <Box className="px-4 pb-12 overflow-auto">
        <Box className="py-4">
          <Stack
            sx={{ flexDirection: 'row' }}
            className="w-[100%] flex justify-between"
          >
            <Stack
              sx={{ flexDirection: 'row' }}
              className="w-[100%] flex items-start"
            >
              <Image
                src={`/static/images/accommodation/reserve/date-icon.svg`}
                alt="room"
                width={30}
                height={30}
              />
              <Box className="flex flex-col items-start">
                <Typography
                  gutterBottom
                  fontWeight={'bold'}
                  variant="body1"
                  component="div"
                  className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
                >
                  تاریخ سفر
                </Typography>
                <Typography
                  variant="body2"
                  component="h5"
                  className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
                >
                  ۲۳ بهمن ـ ۲۵ بهمن
                </Typography>
              </Box>
            </Stack>

            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="body2"
              component="div"
              className="py-0 h-8 flex px-4 items-center bg-ms-back-card-gray-12 rounded-2xl text-ms-thick-green"
            >
              ویرایش
              <ArrowBackIosNewIcon
                fontSize="inherit"
                className="flex items-center"
              />
            </Typography>
          </Stack>
        </Box>

        <hr className="mx-4 border-[1px] text-[#D2D2D2] border-dashed mt-2" />

        <Box className="py-4">
          <Stack
            sx={{ flexDirection: 'row' }}
            className="w-[100%] flex justify-between"
          >
            <Stack
              sx={{ flexDirection: 'row' }}
              className="w-[100%] flex items-start"
            >
              <Image
                src={`/static/images/accommodation/reserve/capacity-icon.svg`}
                alt="room"
                width={30}
                height={30}
              />
              <Box className="flex flex-col items-start">
                <Typography
                  gutterBottom
                  fontWeight={'bold'}
                  variant="body1"
                  component="div"
                  className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
                >
                  تعداد نفرات
                </Typography>
                <Typography
                  variant="body2"
                  component="h5"
                  className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
                >
                  {peopleCounter} نفر
                </Typography>
              </Box>
            </Stack>
            {/* <form onSubmit={handleSubmit(onSubmit)} className="w-full">
              <FacilitiesCounter
                control={control}
                defaultValue={0}
                id="people"
                label=""
              />
            </form> */}

            <div className="flex justify-around">
              <Image
                className="ml-1 "
                src={'/static/images/flights/add-Passengers.svg'}
                alt="flight"
                width={23} //automatically provided
                height={23} //automatically provide
                onClick={() => {
                  handleAdd();
                }}
              />

              <Typography
                fontWeight={'bold'}
                className="flex text-center px-5 text-ms-thick-green items-center"
                marginTop={'0 !important'}
                variant="body1"
                component="h5"
              >
                {peopleCounter}
              </Typography>

              <Image
                className="ml-1"
                src={'/static/images/flights/minus-Passengers.svg'}
                alt="flight"
                width={23} //automatically provided
                height={23} //automatically provide
                onClick={() => {
                  handleSubtract();
                }}
              />
            </div>
          </Stack>
        </Box>

        <hr className="mx-4 border-[1px] text-[#D2D2D2] border-dashed mt-2" />

        <Box className="py-4">
          <Stack
            sx={{ display: 'flex', flexDirection: 'row' }}
            className="items-center"
          >
            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="subtitle1"
              component="h1"
              className="flex m-0  pr-1 text-start text-ms-thick-green"
            >
              خلاصه پرداخت
            </Typography>
            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="subtitle1"
              component="h1"
              className="flex m-0  pr-3 text-start text-ms-green"
            >
              برای ۶ نفر ظرفیت پایه
            </Typography>
          </Stack>

          <Stack
            sx={{ flexDirection: 'row' }}
            className="w-[100%] flex justify-between pt-4"
          >
            <Typography
              gutterBottom
              //   fontWeight={'bold'}
              variant="body2"
              component="div"
              className="flex w-[50%] m-0 min-w-fit pr-1 text-start text-ms-thick-green"
            >
              ۲ شب اقامت
            </Typography>

            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="body2"
              component="div"
              className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
            >
              13.000 تومان
            </Typography>
          </Stack>

          <Stack
            sx={{ flexDirection: 'row' }}
            className="w-[100%] flex justify-between pt-2"
          >
            <Typography
              gutterBottom
              //   fontWeight={'bold'}
              variant="body2"
              component="div"
              className="flex w-[50%] m-0 min-w-fit pr-1 text-start text-ms-thick-green"
            >
              جمع کل تخفیف ها
            </Typography>

            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="body2"
              component="div"
              className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-crimson-500"
            >
              11.000 تومان
            </Typography>
          </Stack>
        </Box>
        <hr className="mx-4 border-[1px] text-[#D2D2D2] border-dashed mt-2" />

        <Box className="py-4">
          <Stack
            sx={{ flexDirection: 'row' }}
            className="w-[100%] flex justify-between"
          >
            <Typography
              gutterBottom
              //   fontWeight={'bold'}
              variant="body2"
              component="div"
              className="flex w-[50%] m-0 min-w-fit pr-1 text-start text-ms-thick-green"
            >
              جمع مبلغ قابل پرداخت
            </Typography>

            <Typography
              gutterBottom
              fontWeight={'bold'}
              variant="body2"
              component="div"
              className="flex m-0 min-w-fit pr-1 text-center justify-center text-ms-thick-green"
            >
              13.000 تومان
            </Typography>
          </Stack>
        </Box>
      </Box>

      <UiButton
        className=" hover:bg-ms-btn-green-33 text-ms-lg w-full h-[50px] border-none text-ms-white font-ms-medium rounded-2xl bg-ms-btn-green-23"
        onClick={()=>router.push(path?.replace("/fullview","") + PATH_ACCAMMODATION.reserve)}
        type="button"
        text="ادامه رزرو"
      />
    </>
  );
};

export { ContinueBookingModal };
