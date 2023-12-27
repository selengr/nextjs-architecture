// "use client"/

import { Box } from '@mui/material';
import callApi from '@/services/axios';
import { Banner } from '@/components/UI/ui-banner';
import CardFlight from '@/components/Layout/flight/CardFlight';
import PriceCalendar from '@/components/Layout/flight/PriceCalendar';
import TransportTypeSelector from '@/components/UI/ui-transport-type-selector/TransportTypeSelector';

interface IDataProps {
  currencyCode: 'IRR' | string;
  originFarsi: string;
  destinationFarsi: string;
  charterFlightList: Flight[];
  webserviceFlightList: Flight[];
}

export const revalidate = 60;
// export const dynamic = 'force-dynamic'

import { Gregorian_Date } from '@/utils/helpers/gregorian_Date';
import { Flight } from '@/@types/flight/bookingProcess';
import { ISearchFlightsUrl } from '@/@types/flight/searchFlight';
import { Suspense } from 'react';
import { CardFlightHeader } from '@/components/Layout/flight/actions/CardFlightHeader';

async function getData(
  city: string,
  departing: string,
  returning: string | undefined
) {
  let gregorian_Departing: string = departing;
  let gregorian_Returning: string | undefined = returning;

  if (parseInt(gregorian_Departing) < 1450) {
    gregorian_Departing = Gregorian_Date(gregorian_Departing);
  }

  if (gregorian_Returning && parseInt(gregorian_Returning) < 1450) {
    gregorian_Returning = Gregorian_Date(gregorian_Returning);
  }

  const body = {
    // "originIataCode": city.split("-")[0],
    // "destinationIataCode": city.split("-")[1],
    // originIataCode: 'IKA',
    // destinationIataCode: 'IST',
    originIataCode: 'IFN',
    destinationIataCode: 'AWZ',
    departureDate: gregorian_Departing,
    returningDate: gregorian_Returning ?? null,
    fetchSupplierWebserviceFlights: true,
    fetchFlighsWithBookingPolicy: false,
    language: 'FA'
  };
  console.log('body :>> ', body);

  try {
    const response = await callApi().post(`/msafar/availability/search`, body);
    console.log('response :>> ', response);
    return response;
  } catch (error) {
    // Handle the error
    console.error("error in search",error);
  }
}

async function AvailableTickets({ params, searchParams }: ISearchFlightsUrl) {
  const { city } = params;
  const { departing, returning, adult, child, infant } = searchParams;

  //REDUX

  //FETCHING
  const data = await getData(city, departing, returning)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      // Handle error
      console.log(err);
    });

  return (
    <div className="h-screen w-full">
      <Banner
        bannerPic="/static/images/flights/available-tickets-header-banner.svg"
        alt="header"
        width={0}
        height={500}
        className="w-full"
      >
        <div className="flex z-10 text-ms-white justify-between w-full absolute top-[65%]">
          {/* <Suspense fallback={<span>loading-----</span>}> */}
          <CardFlightHeader
            returning={returning}
            departing={departing}
            data={data}
          />
          {/* </Suspense> */}
        </div>
      </Banner>

      <div className="relative flex justify-center align-middle items-center">
        <TransportTypeSelector />
      </div>


      <div>
        <PriceCalendar
          city={city}
          departing={departing}
          returning={returning}
          data={data}
        />
      </div>

      <div>
        <CardFlight
          data={data}
          departing={departing}
          returning={returning}
          adult={adult}
          child={child}
          infant={infant}
          city={city}
        />
      </div>

      <div className="mt-14" />
    </div>
  );
}

export default AvailableTickets;
