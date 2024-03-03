import callApi from '@/services/axios';
import React from 'react';
import DayAndPrice from './DayAndPrice';
import { Box } from '@mui/material';

type PriceDate = {
  city: string;
  departing: string;
  returning: string | null;
  data: any;
};

// export const revalidate = 60;
// export const dynamic = 'force-dynamic'
export const fetchCache = 'default-cache';

async function getData(city: string) {
  // ================================================================ will change to real data soon
  const body = {
    originIataCode: 'IFN',
    destinationIataCode: 'AWZ'
    // originIataCode: 'IKA',
    // destinationIataCode: 'IST'
  };
  let response = await callApi().post(
    `/msafar/availability/time-cheapest`,
    body
  );
  return response;
}

const PriceCalendar = async ({ city, departing, returning }: PriceDate) => {
  const cheapestList: any = await getData(city)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      // Handle error
      console.log(err);
    });

  if (Array.isArray(cheapestList) && cheapestList.length)
    return (
      <>
        <Box sx={{ height: '74px' }}></Box>
        <div className="h-[70px] -mb-4 bg-ms-white w-full overflow-auto flex flex-row justify-start items-center relative">
          {cheapestList?.map((cheapest: any, index: number) => {
            return (
              <Box key={index}>
                <DayAndPrice
                  returning={returning}
                  departing={departing}
                  cheapest={cheapest}
                />
              </Box>
            );
          })}
        </div>
      </>
    );
};

export default PriceCalendar;
