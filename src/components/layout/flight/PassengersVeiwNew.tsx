'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import UiButton from '@/components/UI/ui-button';

export interface IPassenger {
  ageClass: string;
  ageGrade: string;
  count: number;
}

const PassengersVeiwNew: React.FC<{ confirm: any }> = ({ confirm }) => {
  const [passNew, setPassNew] = useState<IPassenger[]>([
    {
      ageClass: 'بزرگسالان',
      ageGrade: ' ۱۲ سال به بالا',
      count: 0
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

  const handleAddPassenger = (passenger: IPassenger) => {
    const updatedPassengers = passNew.map((pass) =>
      pass === passenger ? { ...pass, count: pass.count + 1 } : pass
    );
    setPassNew(updatedPassengers);
  };

  const handleSubtractPassenger = (passenger: IPassenger) => {
    if (passenger.count > 0) {
      const updatedPassengers = passNew.map((pass) =>
        pass === passenger ? { ...pass, count: pass.count - 1 } : pass
      );
      setPassNew(updatedPassengers);
    }
  };

  return (
    <div>
      <div className="bg-ms-back-card-gray-12 rounded-[15px] flex flex-col items-center">
        {passNew?.map((passenger, index) => {
          return (
            <div
              key={index}
              className={`${
                passNew[passNew.length - 1] !== passenger
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
        {passNew?.map((pass, index) => {
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
        onClick={() => confirm(passNew)}
        className="bg-ms-btn-green-23 hover:bg-ms-btn-green-33 text-ms-lg h-[50px] text-ms-white rounded-2xl w-full"
        text="تایید"
      />
    </div>
  );
};

export default PassengersVeiwNew;
