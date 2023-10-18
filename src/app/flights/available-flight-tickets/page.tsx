// "use client"

import { Banner } from '@/components/UI/ui-banner';
import UiButton from '@/components/UI/ui-button';
import UiSwitchSelector from '@/components/UI/ui-switch-selector/UiSwitchSelector';
import UiCustomizedTabs from '@/components/UI/ui-tabs/UICustomizedTabs';
import UiCustomizedTabOne from '@/components/UI/ui-tabs/UiCustomizedTabOne';
import UiCustomizedTabTwo from '@/components/UI/ui-tabs/UiCustomizedTabTwo';
import TransportTypeSelector from '@/components/UI/ui-transport-type-selector/TransportTypeSelector';
import CustomizedOptions from '@/components/common/customized-options/CustomizedOptions';
import ModalGestures from '@/components/common/modal/ModalGestures ';
import TabPanel from '@mui/joy/TabPanel/TabPanel';
import { Toaster, toast } from 'sonner';

import { Box } from '@mui/material';
import Image from 'next/image';
import CardFlight from '@/components/Layout/CardFlight';
import PriceCalendar from '@/components/Layout/PriceCalendar';
import callApi from '@/services/axios';
import { IDepartureAndReturnDate, ISearchFlightsData } from '@/types/searchFlight';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import moment from "jalali-moment"



// export const revalidate = 60
async function getData(flight: IDepartureAndReturnDate) {
  const fullRangeDate = flight?.fullRangeDate?.split(",")
  // const gregorianTwoWaydepartur = moment.from(`${fullRangeDate?.[0].split(",")}`, 'fa', 'YYYY/MM/DD').locale('en').format('YYYY/MM/DD');
  // const gregorianTwoWayReturn = moment.from(`${fullRangeDate?.[1].split(",")}`, 'fa', 'YYYY/MM/DD').locale('en').format('YYYY/MM/DD');
  // const gregorianOneWay = moment.from(`${flight.fullYear}/${flight.month_number}/${flight.day}`, 'fa', 'YYYY/MM/DD').locale('en').format('YYYY/MM/DD');
//  console.log('gregorian :>> ', gregorian);
    // console.log('fullRangeDate :>> ', fullRangeDate);
    // console.log('`${flight.fullYear}/${flight.month_number}/${flight.day}` :>> ', `${flight.fullYear}-${flight.month_number}-${flight.day}`);
  const data : ISearchFlightsData = {
    // "originIataCode": flight.city?.originAirportEnglishName,
    // "destinationIataCode": flight.city?.destinationAirportEnglishName,
    "originIataCode": "IST",
    "destinationIataCode": "IKA",
    "departureDate": flight.fullRangeDate ? fullRangeDate?.[0] : `${flight.fullYear}-${flight.month_number}-${flight.day}`,
    "returningDate": flight.fullRangeDate ? fullRangeDate?.[1] : null,
    "fetchSupplierWebserviceFlights": true,
    "fetchFlighsWithBookingPolicy": false,
    "language": "FA"
  }

    const response = await callApi().post(
      `/msafar/availability/search`,data
    )
    return response;
  }

  // export async function loadData(): Promise<ISearchFlightsData> {
 async function AvailableTickets(props) {
   const {searchParams} = props
   const query: IDepartureAndReturnDate = JSON.parse(searchParams.query)

   //REDUX
    // const dispatch = useAppDispatch()
    // const flight = useAppSelector((state) => state.flight);

    const data = await getData(query)
    .then(res => {
      console.log('res.data :>> ', res)
      return res
  }).catch(err => {
      // Handle error
      console.log(err);
  });
   
    // console.log('data :>> ', data);



  return (
    <div className="h-full w-full overflow-hidden">
      <Banner
        bannerPic="/static/images/flights/header-available-tickets.svg"
        alt="header"
        width={0}
        height={500}
        className="w-full"
      >
          <div className='flex justify-around z-10 text-ms-white absolute top-0 w-full'>
            {/* <span className='text-ms-xl'>{data[0].destination.code}</span>
            <span className='text-ms-xl'>{data[0].origin.code}</span>s */}
          </div>
      </Banner>

      <div className="relative flex justify-center align-middle items-center">
        <TransportTypeSelector />
      </div>

      <Box sx={{ height: '74px' }}></Box>

{/* ======================================== */}

<div>
  <PriceCalendar query={query.fullRangeDate ? query.fullRangeDate?.[0] : `${query.fullYear}-${query.month_number}-${query.day}` } />
</div>


          <div className='p-6'>
              <CardFlight availableTicket={data}  />
         </div>

   
 
        <div className='mx-8'>    
              <div className='w-full flex flex-row bg-ms-white h-[50px] justify-center items-center rounded-3xl border-[1px] border-[#E4E4E4]'>
                <span className='w-1/3 pl-4 flex items-center h-full'>
                <Image
                  className="ml-2 mr-4"
                  src={`/static/images/flights/arrow-right.svg`}
                  alt={'flight'}
                  width={11} //automatically provided
                  height={8} //automatically provide
                /> 
                  روز قبل
              
                </span>
                <div className='w-1/3 flex justify-center'>
                <Image
                  className="ml-1"
                  src={`/static/images/flights/filter-icon.svg`}
                  alt={'flight'}
                  width={42} //automatically provided
                  height={42} //automatically provide
                />
                </div>
                <span className='w-1/3 flex justify-end pl-4 items-center h-full'>روز بعد
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

    

  

      <div className='mt-24' />

    </div>
  );
}

export default AvailableTickets;

