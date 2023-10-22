
import callApi from "@/services/axios";
import React from "react";
import DayAndPrice from "./DayAndPrice";
import CardFlight from "./CardFlight";


type PriceDate = {
  day: string;
  month: string;
  price: string;
};
interface Cheapest {
  departureDate: string | number;
  cheapest: string | number;
}


export const dynamic = 'force-dynamic'

async function getData() {

  const body  = {
      "originIataCode": "IKA",
      "destinationIataCode": "IST"
  }

   let response = await callApi().post(`/msafar/availability/time-cheapest`,body)
    return  response
}


const PriceCalendar: React.FC = async (query,data) => {
  const cheapestList = await getData()
    .then(res => {
      // console.log('res.data :>> ', res);
      return res
  }).catch(err => {
      // Handle error
      console.log(err);
  });



  const priceDates: PriceDate[] = [
    {
      day: "یکشنبه",
      month: " ۲۰ فروردین",
      price: "1.010",
    },
    // Add more price dates here
  ];
  
  return (
    <div className="h-[70px] -mb-4 bg-ms-white w-full overflow-auto flex flex-row justify-start items-center relative">

     {/* <UiCarousel> */}
     {cheapestList?.map((cheapest:Cheapest )=> {
      
        return <>
        <DayAndPrice date={query} cheapest={cheapest} />
        </>
      })}
    

          {/* <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div> */}
     {/* </UiCarousel> */}
      


    

    </div>
  );
};

export default PriceCalendar;