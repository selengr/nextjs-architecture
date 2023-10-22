"use client"

import Image from 'next/image';
import NoTicketsAvailable from './NoTicketsAvailable';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { setDepartureDate } from '@/redux/slices/flights';
import { useRouter, useSearchParams } from 'next/navigation';
import { PATH_FLIGHT } from '@/routes/paths';

interface Flight {
  flightNumber: string;
  departureDateTime: string;
  origin: {
    code: string;
    terminal: string;
  };
  destination: {
    code: string;
    terminal: string;
  };
  aircraft: string;
  arrivalDateTime: string;
  duration: number;
  airline: string;
  supplierId?: number;
  remarks?: string;
  isAirlineScheduleFlight?: boolean;
  stop1: string;
  stop2: string;
  flightClassList: FlightClass[];
}

interface FlightClass {
  cabinType: string;
  bookingCode: string;
  fareName: string;
  availableSeat: number;
  adultFare?: {
    baseFare: number,
    tax: number,
    totalFare: number,
    commision: number,
    payable: number
},
  onewayFare?: {
    adult_Fare: {
      baseFare: number;
      totalTax: number;
      totalFare: number;
      commision: number;
      markup: number;
      payable: number;
    };
    child_Fare: {
      baseFare: number;
      totalTax: number;
      totalFare: number;
      commision: number;
      markup: number;
      payable: number;
    };
    infant_Fare: {
      baseFare: number;
      totalTax: number;
      totalFare: number;
      commision: number;
      markup: number;
      payable: number;
    };
  };
  roundtripFare_FromOrigin?: number;
  roundtripFare_FromDestination?: number;
  adultFreeBaggage: {
    checkedBaggageQuantity: number;
    checkedBaggageTotalWeight: number;
    handBaggageQuantity: number;
    handBaggageTotalWeight: number;
  };
  childFreeBaggage: {
    checkedBaggageQuantity: number;
    checkedBaggageTotalWeight: number;
    handBaggageQuantity: number;
    handBaggageTotalWeight: number;
  };
  infantFreeBaggage: {
    checkedBaggageQuantity: number;
    checkedBaggageTotalWeight: number;
    handBaggageQuantity: number;
    handBaggageTotalWeight: number;
  };
  cancelationPolicy: string;
  bookingPolicy: string
}


// const CardFlight = (flights: number[]) => {
    const CardFlight: React.FC<{ availableTicket:any }> = ({ availableTicket }) => {
      console.log('availableTicket :>> ', availableTicket);
      const router = useRouter()  
      const searchParams = useSearchParams()
      const search = searchParams?.get('d')
      const dispatch = useAppDispatch();
      const flight = useAppSelector((state) => state.flight);

    const combinedFlights = availableTicket.charterFlightList.concat(availableTicket.webserviceFlightList);


    
    // let month = date.date.query.split("-")[1]
    // let day = parseInt(search?.split('-')[2]) ?? date.date.query.split("-")[2]

    const handle_otherDay = async (e) => {
      // console.log('flight.day :>> ', flight.day);
      // console.log('flight.month :>> ', flight.month);
      // console.log('flight.month_number :>> ', flight.month_number);
      // console.log('flight.fullYear :>> ', flight.fullYear);
  if (e.target.id === "befor") {
    dispatch(
      setDepartureDate({
        day: flight.day,
        month: flight.month,
        month_number: flight.month_number,
        year: `${flight.fullYear}/${flight.month_number}/${flight.day}`,
        fullYear: flight.fullYear,
      })
    )
  }
  // if (e.target.id === "after") {
  //   dispatch(
  //     setDepartureDate({
  //       day: cheapest_day,
  //       month: "",
  //       month_number:cheapest_month,
  //       year: `${cheapest_year}/${cheapest_month}/${cheapest_day}`,
  //       fullYear: cheapest_year,
  //     })
  //   )
  // }
       

            // const encodedData = encodeURIComponent(JSON.stringify(flight));
            // const encodedDepartur = encodeURIComponent(JSON.stringify(`${cheapest_year}-${cheapest_month}-${cheapest_day}`));
            // router.push(`/${PATH_FLIGHT.availableTickets}/?q=${encodedData}&d=${encodedDepartur}`)

        //    router.refresh()
}

  return (
    <main >
      {}

      {combinedFlights.length == 0 && 
          <div className='p-6'>
              <NoTicketsAvailable />
         </div>
      }

        {combinedFlights.map((flight:Flight) => {
          return flight.flightClassList.map((flightClass:FlightClass,index:number)=>{
            return(
              <div className="py-4 px-6 bg-ms-white h-[210px] rounded-[15px] w-full flex flex-col my-6">
              <div className="flex flex-row justify-between w-full items-center">
                <div className="flex items-center">
                  <Image
                    src={'/static/images/flights/flight-sign.svg'}
                    alt={'card'}
                    width={28} //automatically provided
                    height={28} //automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                    //   className={className}
                  />
                  <span className="pr-1 text-ms-thick-green font-medium text-xs font-ms-iranSansMobile">
                    ایران ایر
                  </span>
                </div>
                <span className="text-ms-thick-green font-medium text-xs">
                  {flightClass.onewayFare?.adult_Fare.baseFare && <span>سیستمی</span> }
                  {flightClass.adultFare?.baseFare && <span>چارتری</span> }
                </span>
              </div>
      
              <div className="flex flex-row pt-6 px-2">
                <div className="flex flex-col w-2/12">
                  <span className="text-ms-thick-green text-lg font-ms-medium">
                    مبدا
                  </span>
                  <span className="text-[#605858] text-sm font-ms-regular pt-1">
                  {flight.origin.code}
                  </span>
                  <span className="text-ms-thick-green text-sm font-ms-medium pt-2">
                    {flight.departureDateTime.split(" ")[1] }
                  </span>
                </div>
      
                <Image
                  src={'/static/images/flights/arrow-origin-destination.svg'}
                  alt={'card'}
                  width={0} //automatically provided
                  height={0} //automatically provided
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                  className={'w-8/12'}
                />
      
                <div className="flex flex-col w-2/12 justify-end ">
                  <span className="text-ms-thick-green text-lg font-ms-medium flex justify-end">
                    مقصد
                  </span>
                  <span className="text-[#605858] text-sm font-ms-regular pt-1 flex justify-end">
                  {flight.destination.code}
                  </span>
                  <span className="text-ms-thick-green text-sm font-ms-medium pt-2 flex justify-end">
                    {flight.arrivalDateTime.split(" ")[1] }
                  </span>
                </div>
              </div>
      
              <div className="border-b-[#E5E5E7] border-dashed border-b-[1px] pt-5" />
      
              <div className="flex flex-row justify-between w-full items-center p-1 pb-0">
                <span className="pr-1 text-ms-crimson font-medium text-sm font-ms-iranSansMobile">
                  {flightClass.availableSeat} نفر ظرفیت
                </span>
                <span className="text-[#605858] font-medium text-sm">
                  {flightClass.onewayFare && flightClass.onewayFare?.adult_Fare.baseFare } 
                  {!flightClass.onewayFare && flightClass.adultFare?.baseFare } ریال
                </span>
              </div>
      
              <div className="flex items-center justify-center w-full mb-1">
                <Image
                  src={'/static/images/flights/arrow-down.svg'}
                  alt={'card'}
                  width={10} //automatically provided
                  height={6} //automatically provided
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                  className={''}
                />
              </div>







        




            </div>
          )
          })
            
        })}

        {/* {flights.map((item :number,index) => {
            return(
                <div className="py-4 px-6 bg-ms-white h-[210px] rounded-[15px] w-full flex flex-col my-6">
                <div className="flex flex-row justify-between w-full items-center">
                  <div className="flex items-center">
                    <Image
                      src={'/static/images/flights/flight-sign.svg'}
                      alt={'card'}
                      width={28} //automatically provided
                      height={28} //automatically provided
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                      //   className={className}
                    />
                    <span className="pr-1 text-ms-thick-green font-medium text-xs font-ms-iranSansMobile">
                      ایران ایر
                    </span>
                  </div>
                  <span className="text-ms-thick-green font-medium text-xs">
                    سیستمی / چارتری
                  </span>
                </div>
        
                <div className="flex flex-row pt-6 px-2">
                  <div className="flex flex-col w-2/12">
                    <span className="text-ms-thick-green text-lg font-ms-medium">
                      مبدا
                    </span>
                    <span className="text-[#605858] text-sm font-ms-regular pt-1">
                      تهران
                    </span>
                    <span className="text-ms-thick-green text-sm font-ms-medium pt-2">
                      22:00
                    </span>
                  </div>
        
                  <Image
                    src={'/static/images/flights/arrow-origin-destination.svg'}
                    alt={'card'}
                    width={0} //automatically provided
                    height={0} //automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                    className={'w-8/12'}
                  />
        
                  <div className="flex flex-col w-2/12 justify-end ">
                    <span className="text-ms-thick-green text-lg font-ms-medium flex justify-end">
                      مقصد
                    </span>
                    <span className="text-[#605858] text-sm font-ms-regular pt-1 flex justify-end">
                      کرمان
                    </span>
                    <span className="text-ms-thick-green text-sm font-ms-medium pt-2 flex justify-end">
                      23:00
                    </span>
                  </div>
                </div>
        
                <div className="border-b-[#E5E5E7] border-dashed border-b-[1px] pt-5" />
        
                <div className="flex flex-row justify-between w-full items-center p-1 pb-0">
                  <span className="pr-1 text-ms-crimson font-medium text-sm font-ms-iranSansMobile">
                    9 نفر ظرفیت
                  </span>
                  <span className="text-[#605858] font-medium text-sm">
                    ۷۲۴.۰۰۰ تومان
                  </span>
                </div>
        
                <div className="flex items-center justify-center w-full mb-1">
                  <Image
                    src={'/static/images/flights/arrow-down.svg'}
                    alt={'card'}
                    width={10} //automatically provided
                    height={6} //automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                    className={''}
                  />
                </div>
              </div>
            )
        })} */}
    

    {combinedFlights.length != 0 && 
    <div className="mx-8">
        <div className="w-full flex flex-row bg-ms-white h-[50px] justify-center items-center rounded-3xl border-[1px] border-[#E4E4E4]">
          <span onClick={handle_otherDay} id="befor" className="w-1/3 pl-4 flex items-center h-full">
            <Image
              className="ml-2 mr-4"
              src={`/static/images/flights/arrow-right.svg`}
              alt={'flight'}
              width={11} //automatically provided
              height={8} //automatically provide
            />
            روز قبل
          </span>
          <div className="w-1/3 flex justify-center">
            <Image
              className="ml-1"
              src={`/static/images/flights/filter-icon.svg`}
              alt={'flight'}
              width={42} //automatically provided
              height={42} //automatically provide
            />
          </div>
          <span onClick={handle_otherDay} id="after"  className="w-1/3 flex justify-end pl-4 items-center h-full">
            روز بعد
            <Image
              className="rotate-180 mr-2"
              src={`/static/images/flights/arrow-right.svg`}
              alt={'flight'}
              width={11} //automatically provided
              height={8} //automatically provide
            />
          </span>
        </div>
      </div>
    }


    </main>
  );
};

export default CardFlight;
