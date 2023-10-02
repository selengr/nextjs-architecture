"use client"

import { useState } from "react";
import CustomizedOptions from "../common/customized-options/CustomizedOptions";

const DestinationView = () => {
    const [value, setValue] = useState("");
  return (
    <div>
      <div className="mt-4">
        {/* <SearchBar /> */}
        <div className="min-h-fit">
          <CustomizedOptions
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </div>

        <div className="flex justify-center align-middle flex-col mt-6">
          <span className="flex justify-end w-full text-ms-crimson font-ms-medium text-ms-sm p-2">
            شهر های پر تردد
          </span>

          <ul className="flex flex-col w-full bg-ms-back-card-gray-12 rounded-2xl mb-8 overflow-scroll max-h-[500px]">
            {[
              'کرمان',
              'تهران',
              'یزد',
              'اصفهان',
              'شیراز',
              'کیش',
              'تبریز',
              'تبریز',
              'تبریز',
              'تبریز',
              'تبریز',
              'تبریز'
            ].map((city) => {
              return (
                <li className="flex justify-end border-b-solid text-ms-gray-light text-ms-sm font-ms-medium border-b-[#EDEDED] border-b-[1px] px-[16px] pt-[16px] pb-[8px]">
                  {city}
                </li>
              );
            })}
            <div className="h-50px" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DestinationView;
