'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Box, Stack, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';

export interface IProps {
  id: string;
  control: any;
  label: string;
  defaultValue?: number;
}

const FacilitiesCounter = ({
  id,
  label,
  control,
  defaultValue = 0
}: IProps) => {
  const [count, setCount] = useState<number>(defaultValue);

  const handleAddPassenger = (field: any) => {
    let update = count + 1;
    setCount(update);
    field.onChange(update);
  };

  const handleSubtractPassenger = (field: any) => {
    let update = count - 1;
    if (count > 0) {
      setCount(update);
      field.onChange(update);
    }
  };

  return (
    <Box sx={{ direction: 'rtl' }} className="">
      <Stack
        display={'contents'}
        className="rounded-2xl flex flex-col items-center "
      >
        <div
          className={`flex justify-center items-center font-ms-regular w-full`}
        >
          <Typography
            fontWeight={'bold'}
            className="w-2/3 text-right p-5 py-2 text-ms-thick-green"
            marginTop={'0 !important'}
            variant="body1"
            component="h5"
          >
            {label}
          </Typography>
          <Stack
            direction={'row'}
            className="w-1/3 flex flex-row justify-around ltr"
          >
            <Controller
              name={id}
              control={control}
              defaultValue={count}
              render={({ field }) => (
                <Image
                  className="ml-1 "
                  src={'/static/images/flights/add-Passengers.svg'}
                  alt="flight"
                  width={23} //automatically provided
                  height={23} //automatically provide
                  onClick={() => {
                    handleAddPassenger(field);
                  }}
                />
              )}
            />
            <Typography
              fontWeight={'bold'}
              className="text-center p-5 py-2 text-ms-thick-green"
              marginTop={'0 !important'}
              variant="body1"
              component="h5"
            >
              {count}
            </Typography>

            <Controller
              name={id}
              control={control}
              defaultValue={count}
              render={({ field }) => (
                <Image
                  className="ml-1"
                  src={'/static/images/flights/minus-Passengers.svg'}
                  alt="flight"
                  width={23} //automatically provided
                  height={23} //automatically provide
                  onClick={() => {
                    handleSubtractPassenger(field);
                  }}
                />
              )}
            />
          </Stack>
        </div>
      </Stack>
    </Box>
  );
};

export default FacilitiesCounter;
