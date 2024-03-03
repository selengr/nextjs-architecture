'use client';

import { Box, Stack, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState } from 'react';
import ModalGestures from '@/components/common/modal/ModalGestures ';
import Image from 'next/image';
import UiButton from '@/components/UI/ui-button';
import FormControlFunctionChild from '@/components/common/form/FormControler';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const EditReserveDate = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Typography
        onClick={() => setOpen(true)}
        gutterBottom
        fontWeight={'bold'}
        variant="body2"
        component="div"
        className="py-0 h-8 flex px-4 items-center bg-ms-back-card-gray-12 rounded-2xl text-ms-thick-green"
      >
        ویرایش
        <ArrowBackIosNewIcon fontSize="inherit" className="flex items-center" />
      </Typography>

      {open && (
        <ModalGestures
          title={''}
          isOpen={open}
          onClose={() => setOpen(false)}
          className={'overflow-scroll'}
          initialSnap={2}
          customStyle={{ background: '#FFF' }}
        >
          nbvgfcds
        </ModalGestures>
      )}
    </>
  );
};

export { EditReserveDate };

const EditReservePeople = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Typography
        onClick={() => setOpen(true)}
        gutterBottom
        fontWeight={'bold'}
        variant="body2"
        component="div"
        className="py-0 h-8 flex px-4 items-center bg-ms-back-card-gray-12 rounded-2xl text-ms-thick-green"
      >
        ویرایش
        <ArrowBackIosNewIcon fontSize="inherit" className="flex items-center" />
      </Typography>

      {open && (
        <ModalGestures
          title={'مسافران'}
          isOpen={open}
          onClose={() => setOpen(false)}
          className={'overflow-scroll'}
          initialSnap={3}
          customStyle={{ background: '#FFF' }}
        >
          <EditReservePeopleModal />
        </ModalGestures>
      )}
    </>
  );
};

const EditReservePeopleModal = () => {
  const [peopleCounter, setPeopleCounter] = useState(0);

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
      <Box className="py-4 bg-ms-back-card-gray-12 rounded-2xl px-4">
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
              width={30} //automatically provided
              height={30} //automatically provide
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
              width={30} //automatically provided
              height={30} //automatically provide
              onClick={() => {
                handleSubtract();
              }}
            />
          </div>
        </Stack>
      </Box>

      <Stack mt={4}>
        <UiButton
          //   onClick={() => router.push(path + PATH_ACCAMMODATION.confirm)}
          type="button"
          className="m-6 mt-10 hover:bg-ms-btn-green-33 text-ms-lg h-[50px] w-full border-none text-ms-white font-ms-medium rounded-2xl bg-ms-btn-green-23"
          text="تایید"
        />
      </Stack>
    </>
  );
};

export { EditReservePeople };

const EditReserveGuestInfo = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Typography
        onClick={() => setOpen(true)}
        gutterBottom
        fontWeight={'bold'}
        variant="body2"
        component="div"
        className="py-0 h-8 flex px-4 items-center bg-ms-back-card-gray-12 rounded-2xl text-ms-thick-green"
      >
        ویرایش
        <ArrowBackIosNewIcon fontSize="inherit" className="flex items-center" />
      </Typography>

      {open && (
        <ModalGestures
          title={'اطلاعات سفر'}
          isOpen={open}
          onClose={() => setOpen(false)}
          className={'overflow-scroll'}
          initialSnap={2}
          customStyle={{ background: '#FFF' }}
        >
          <EditReserveGuestInfoModal />
        </ModalGestures>
      )}
    </>
  );
};

export { EditReserveGuestInfo };

type Inputs = {
  name?: string;
  lastName?: string;
  phone?: string;
};

const schema = yup.object().shape({
  name: yup.string(),
  lastName: yup.string(),
  phone: yup.string()
});

const EditReserveGuestInfoModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      lastName: '',
      phone: '',
    }
  });

  const onSubmit = (data: any) => {};

  return (
    <>
      <Box className="-mt-4">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <Stack
            sx={{ display: 'flex', flexDirection: 'row' }}
            className="flex flex-row"
          >
            <FormControlFunctionChild
              register={register}
              errors={errors}
              name={'name'}
              id={'name'}
              label={''}
              styleClass="w-[50%] border-[1px] border-[#E2E2E2] rounded-2xl"
              placeholder="نام"
            />
            <FormControlFunctionChild
              register={register}
              errors={errors}
              name={'lastName'}
              id={'lastName'}
              label={''}
              styleClass="w-[50%] border-[1px] border-[#E2E2E2] rounded-2xl"
              placeholder="نام خانوادگی"
            />
          </Stack>
          <FormControlFunctionChild
            register={register}
            errors={errors}
            name={'phone'}
            id={'phone'}
            label={''}
            styleClass="w-[50%] border-[1px] border-[#E2E2E2] rounded-2xl"
            placeholder="شماره تماس"
          />

          <Typography
            variant="body2"
            component="h5"
            className="flex m-0 min-w-fit pr-5 pt-4 text-start text-ms-thick-green"
          >
            نام و نام خانوادگی خود را دقیق و مطابق کارت شناسایی وارد کنید.
          </Typography>

          <Stack spacing={2} m={2} mt={2}>
            <UiButton
              type="submit"
              className="m-6 mt-10 hover:bg-ms-btn-green-33 text-ms-lg h-[50px] w-full border-none text-ms-white font-ms-medium rounded-2xl bg-ms-btn-green-23"
              text="تایید"
            />
          </Stack>
        </form>
      </Box>
    </>
  );
};
