'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { toast } from 'sonner';
import UiButton from '../UI/ui-button';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import {
  addPassengers,
  subtractPassengers
} from '@/redux/slices/flight/flights';

interface Passenger {
  ageClass: string;
  ageGrade: string;
  count: number;
}

const PassengersVeiw: React.FC<{ confirm: () => void }> = ({ confirm }) => {
  //REDUX
  const dispatch = useAppDispatch();
  const passengers = useAppSelector((state) => state.flight.passengers);

  const handleAddPassenger = (passenger: Passenger) => {
    dispatch(addPassengers(passenger));
  };

  const handleSubtractPassenger = (passenger: Passenger) => {
    dispatch(subtractPassengers(passenger));
  };

  return (
    <div>
      <div className="bg-ms-back-card-gray-12 rounded-[15px] flex flex-col items-center">
        {passengers?.map((passenger, index) => {
          return (
            <div
              key={index}
              className={`${
                passengers[passengers.length - 1] !== passenger
                  ? 'border-b-[1px] border-b-ms-gray border-dashed'
                  : ''
              } h-16 flex justify-center items-center font-ms-regular w-11/12 `}
            >
              <span className="w-1/3 flex font-ms-regular text-ms-sm">
                {passenger.ageClass}
              </span>
              <span className="w-1/3 flex font-ms-regular text-ms-sm">
                {passenger.ageGrade}
              </span>
              <div className="w-1/3 flex justify-around -ml-8">
                <Image
                  className="ml-1 "
                  src={'/static/images/flights/add-Passengers.svg'}
                  alt="flight"
                  width={23} //automatically provided
                  height={23} //automatically provide
                  onClick={() => handleAddPassenger(passenger)}
                />
                <span className=" font-ms-regular text-ms-lg ">
                  {passenger.count}
                </span>
                <Image
                  className="ml-1 "
                  src={'/static/images/flights/minus-Passengers.svg'}
                  alt="flight"
                  width={23} //automatically provided
                  height={23} //automatically provide
                  onClick={() => handleSubtractPassenger(passenger)}
                />
              </div>
            </div>
          );
        })}
      </div>

      <ul className="flex flex-row my-8 text-[#969696] text-ms-xs">
        {passengers?.map((pass, index) => {
          if (pass.count > 0) {
            return (
              <li key={index} className="px-2 ">
                {pass.ageClass}
                {'  '}
                {pass.count}
              </li>
            );
          }
        })}
      </ul>

      <UiButton
        onClick={() => confirm()}
        className="bg-ms-btn-green-23 hover:bg-ms-btn-green-33 text-ms-lg h-[50px] text-ms-white rounded-2xl w-full"
        text="تایید"
      />
    </div>
  );
};

export default PassengersVeiw;
