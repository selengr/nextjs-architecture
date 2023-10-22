// "use client"/

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
import CardFlight from '@/components/Layout/flight/CardFlight';
import PriceCalendar from '@/components/Layout/flight/PriceCalendar';
import callApi from '@/services/axios';
import {
  IDepartureAndReturnDate,
  ISearchFlightsData
} from '@/types/searchFlight';
import { useAppDispatch, useAppSelector } from '@/redux/hook';


export const dynamic = 'force-dynamic'

// export const revalidate = 60
async function getData(flight: IDepartureAndReturnDate,d:any) {
  console.log('******************************************************** :>> ',  `${flight.fullYear}-${flight.month_number}-${flight.day}`)
  console.log('******************************************************** d :>> ',  d)
  const fullRangeDate = flight?.fullRangeDate?.split(',');
  // const gregorianTwoWaydepartur = moment.from(`${fullRangeDate?.[0].split(",")}`, 'fa', 'YYYY/MM/DD').locale('en').format('YYYY/MM/DD');
  // const gregorianTwoWayReturn = moment.from(`${fullRangeDate?.[1].split(",")}`, 'fa', 'YYYY/MM/DD').locale('en').format('YYYY/MM/DD');
  // const gregorianOneWay = moment.from(`${flight.fullYear}/${flight.month_number}/${flight.day}`, 'fa', 'YYYY/MM/DD').locale('en').format('YYYY/MM/DD');
  //  console.log('gregorian :>> ', gregorian);
  // console.log('fullRangeDate :>> ', fullRangeDate);
  // console.log('`${flight.fullYear}/${flight.month_number}/${flight.day}` :>> ', `${flight.fullYear}-${flight.month_number}-${flight.day}`);
  const data: ISearchFlightsData = {
    // "originIataCode": flight.city?.originAirportEnglishName,
    // "destinationIataCode": flight.city?.destinationAirportEnglishName,
    originIataCode: 'IST',
    destinationIataCode: 'IKA',
    departureDate: flight.fullRangeDate
      ? fullRangeDate?.[0]
      : d ? d : `${flight.fullYear}-${flight.month_number}-${flight.day}`,
    returningDate: flight.fullRangeDate ? fullRangeDate?.[1] : null,
    fetchSupplierWebserviceFlights: true,
    fetchFlighsWithBookingPolicy: false,
    language: 'FA'
  };


  const response = await callApi().post(`/msafar/availability/search`, data);
  return response;
}

// export async function loadData(): Promise<ISearchFlightsData> {
async function AvailableTickets(props) {
  const { searchParams } = props;
  const query: IDepartureAndReturnDate = JSON.parse(searchParams.q);
  const d = searchParams?.d ? JSON.parse(searchParams?.d) : ""

  //REDUX
  // const dispatch = useAppDispatch()
  // const flight = useAppSelector((state) => state.flight);

  const data = await getData(query,d)
    .then((res) => {
      console.log("oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo",res.data);
      return res;
    })
    .catch((err) => {
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
        <div className="flex z-10 text-ms-white justify-between w-full absolute top-[65%]">
         {/* <div className=''> */}
         <span className='xs:text-ms-lg sm:text-ms-xl text-ms-sm absolute right-8 sm:right-14'>کرمان</span>
          <span className='absolute right-[30%] left-[30%] text-center flex justify-center items-center md:text-ms-xl text-ms-lg'>رفت  -26فروردین ۱۴۰۲</span>
          <span className='xs:text-ms-lg sm:text-ms-xl text-ms-sm absolute left-8 sm:left-14'>تهران</span>
         {/* </div> */}
        </div>
      </Banner>

      <div className="relative flex justify-center align-middle items-center">
        <TransportTypeSelector />
      </div>

      <Box sx={{ height: '74px' }}></Box>

      {/* ======================================== */}

      <div>
        <PriceCalendar
          query={
            query.fullRangeDate
            ? query.fullRangeDate?.[0]
            : `${query.fullYear}-${query.month_number}-${query.day}`
          }
          data={data}
        />
      </div>

      <div className="p-6">
        <CardFlight availableTicket={data} />
      </div>

      
      <div className="mt-24" />
    </div>
  );
}

export default AvailableTickets;
