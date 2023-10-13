"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { toast } from 'sonner';
import UiButton from '../UI/ui-button';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { addPassengers } from '@/redux/slices/flights';
import { count } from 'console';

interface Passenger {
  ageClass: string;
  ageGrade: string;
  count: number;
}

const PassengersVeiw: React.FC<{ confirm: (passengers: Passenger[]) => void }> = ({
  confirm,
}) => {

  const [passengers, setPassengers] = useState<Passenger[]>([
    {
      ageClass: 'بزرگسالان',
      ageGrade: ' ۱۲ سال به بالا',
      count: 1
    },
    {
      ageClass: 'کودک ',
      ageGrade: '۲ تا ۱۲ سال ',
      count: 0
    },
    {
      ageClass: 'نوزاد',
      ageGrade: ' ۱۰ روز تا ۲ سال',
      count: 0
    }
  ]);

  //REDUX
  const dispatch = useAppDispatch()
  const twoWay = useAppSelector((state) => state.flight);

  const handleAddPassenger = (passenger: Passenger) => {
    console.log('passenger+++++++ :>> ', passenger);
    const updatedPassengers = [...passengers];
    passenger.count += 1;
    setPassengers(updatedPassengers);
   
  };

  const handleSubtractPassenger = (passenger: Passenger) => {
    // if(passenger.ageClass === 'بزرگسالان') {
    //    if(passenger.count === 1) {
    //     toast.error('حداقل 1 نفر')
    //     return 
    //    }
    // }
    // if (passenger.count > 0) {
    //   const updatedPassengers = [...passengers];
    //   passenger.count -= 1;
    //   setPassengers(updatedPassengers);
    // }
  };
  console.log('passengers------ reza :>> ', passengers);
  // const confirmPassengers = () =>{
  //      ()
  // }

  return (
    <div>
      <div className="bg-ms-back-card-gray-12 rounded-[15px] flex flex-col items-center">
        {passengers.map((passenger, index) => {
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
        {passengers.map((pass, index) => {
          if (pass.count > 0) {
            return (
              <li key={index} className='px-2'>{pass.ageClass}{"  "}{pass.count}</li>
            );
          }
        })}
      </ul>

      <UiButton
        onClick={()=>confirm(passengers)}
        className='bg-ms-btn-green-23 hover:bg-ms-btn-green-33 text-ms-lg h-[50px] text-ms-white rounded-2xl w-full'
        text='تایید'
      />
    </div>
  );
};

export default PassengersVeiw;