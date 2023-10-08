import React from "react";

type PriceDate = {
  day: string;
  month: string;
  price: string;
};

const PriceCalendar: React.FC = () => {
  const priceDates: PriceDate[] = [
    {
      day: "یکشنبه",
      month: " ۲۰ فروردین",
      price: "1.010",
    },
    {
      day: "دوشنبه",
      month: " ۲۱ فروردین",
      price: "1.020",
    },
    {
      day: "سه‌شنبه",
      month: " ۲۲ فروردین",
      price: "1.030",
    },
    {
      day: "سه‌شنبه",
      month: " ۲۲ فروردین",
      price: "1.030",
    },
    {
      day: "سه‌شنبه",
      month: " ۲۲ فروردین",
      price: "1.030",
    },
    {
      day: "سه‌شنبه",
      month: " ۲۲ فروردین",
      price: "1.030",
    },
    {
      day: "سه‌شنبه",
      month: " ۲۲ فروردین",
      price: "1.030",
    },
    {
      day: "سه‌شنبه",
      month: " ۲۲ فروردین",
      price: "1.030",
    },
    {
      day: "سه‌شنبه",
      month: " ۲۲ فروردین",
      price: "1.030",
    },
    {
      day: "سه‌شنبه",
      month: " ۲۲ فروردین",
      price: "1.030",
    },
    // Add more price dates here
  ];

  return (
    <div className="h-[70px] -mb-4 bg-ms-white w-full overflow-auto flex flex-row justify-start items-center">
      {priceDates.map((item, index) => {
        return (
       

          <div key={index} className="hover:text-ms-crimson text-ms-thick-green hover:border-r-ms-gray hover:border-r-[1px] hover:rounded-2xl min-w-[27%] 
              hover:shadow-ms-r-side flex flex-col justify-center h-full">
            <span className="hover:text-ms-crimson w-full flex items-center justify-center text-ms-lg font-ms-medium ">{item.price}</span>
            <span className="hover:text-ms-crimson flex flex-row items-center justify-center text-ms-xs font-ms-medium pt-1 ">
              {item.day}
              <span>{item.month}</span>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default PriceCalendar;