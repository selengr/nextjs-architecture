'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PreviewBooking from './PreviewBooking';
import CardFlightDetail from './CardFlightDetail';
import NoTicketsAvailable from './NoTicketsAvailable';
import { PreviewBookingHeader } from './PreviewBooking';
import { setDate } from '@/redux/slices/flight/flights';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import ModalGestures from '@/components/common/modal/ModalGestures ';
import { CompareFarsiAndEnglishNumbers } from '@/utils/helpers/digitNormalizer';
import {
  Flight,
  FlightClass,
  IPropsCardFlight
} from '@/@types/flight/bookingProcess';

const CardFlight: React.FC<IPropsCardFlight> = ({
  data,
  returning,
  departing,
  adult,
  child,
  infant,
  city
}) => {
  // REDUX
  const router = useRouter();
  const [isOpenBooking, setOpenBooking] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<any>();

  const dispatch = useAppDispatch();
  const flight = useAppSelector((state) => state.flight);
  const booking = useAppSelector((state) => state.booking);

  const combinedFlights = data.charterFlightList.concat(
    data.webserviceFlightList
  );

  const handle_otherDay = async (e: any) => {
    const adult = `&adult=${flight.passengers?.[0].count}`;
    const child = `&child=${flight.passengers?.[1].count}`;
    const infant = `&infant=${flight.passengers?.[2].count}`;

    if (e.target.id === 'befor') {
      let update = `${departing.split('-')[0]}/${departing.split('-')[1]}/${
        parseInt(departing.split('-')[2]) - 1
      }`;
      dispatch(
        setDate({
          departing: update,
          returning: returning ?? ''
        })
      );
      const cityIata =
        `${flight.city?.destinationIata}-${flight?.city?.originIata}`.replaceAll(
          ' ',
          '-'
        );
      const departe = `departing=${CompareFarsiAndEnglishNumbers(
        update.toString()
      )}`.replaceAll('/', '-');
      const return_date = `${
        flight.returning
          ? `&returning=${CompareFarsiAndEnglishNumbers(flight.returning)}`
          : ''
      }`.replaceAll('/', '-');
      return router.push(
        `${cityIata}/?${departe}${return_date}${return_date}${adult}${child}${infant}`
      );
    }
    if (e.target.id === 'after') {
      let update = `${departing.split('-')[0]}/${departing.split('-')[1]}/${
        parseInt(departing.split('-')[2]) + 1
      }`;
      dispatch(
        setDate({
          departing: update,
          returning: returning ?? ''
        })
      );
      const cityIata =
        `${flight.city?.destinationIata}-${flight?.city?.originIata}`.replaceAll(
          ' ',
          '-'
        );
      const departe = `departing=${CompareFarsiAndEnglishNumbers(
        update.toString()
      )}`.replaceAll('/', '-');
      const return_date = `${
        flight.returning
          ? `&returning=${CompareFarsiAndEnglishNumbers(flight.returning)}`
          : ''
      }`.replaceAll('/', '-');
      return router.push(
        `${cityIata}/?${departe}${return_date}${return_date}${adult}${child}${infant}`
      );
    }
  };

  const handle_booking = (flight: Flight, flightClass: FlightClass) => {
    setSelectedItem({ flight, flightClass });
    setOpenBooking(true);
  };

  return (
    <div>
      <div className="max-w-[576px] p-6">
        {combinedFlights.length == 0 && (
          <div className="p-6">
            <NoTicketsAvailable />
          </div>
        )}

        {combinedFlights?.map((flight: Flight, keyId: any) => {
          return flight?.flightClassList?.map(
            (flightClass: FlightClass, key: number) => {
              if (
                booking.departureSegment.flightNumber &&
                booking.departureSegment.fareName
              ) {
                // if(flight.origin.code === city.split("-")[0]){
                // if (flight.origin.code === 'IST') {
                if (flight.origin.code === 'AWZ') { 
                  return (
                    <>
                      <div
                        onClick={() => handle_booking(flight, flightClass)}
                        key={key}
                        className="py-4 px-6 bg-ms-white h-[210px] rounded-[15px] w-full flex flex-col my-6"
                      >
                        <CardFlightDetail
                          flight={flight}
                          flightClass={flightClass}
                        />
                      </div>
                    </>
                  );
                }
              } else {
                // if (flight.origin.code === 'IKA') {
                if (flight.origin.code === 'IFN') {
                  return (
                    <>
                      <div
                        onClick={() => handle_booking(flight, flightClass)}
                        key={key}
                        className="py-4 px-6 bg-ms-white h-[210px] rounded-[15px] w-full flex flex-col my-6"
                      >
                        <CardFlightDetail
                          flight={flight}
                          flightClass={flightClass}
                        />
                      </div>
                    </>
                  );
                }
              }
            }
          );
        })}
      </div>
      <OtherDay
        combinedFlights={combinedFlights}
        handle_otherDay={handle_otherDay}
      />

      {isOpenBooking && (
        <div>
          <ModalGestures
            title={<PreviewBookingHeader selectedItem={selectedItem} />}
            isOpen={isOpenBooking}
            onClose={() => setOpenBooking(false)}
            className={'overflow-scroll'}
            // initialSnap={7}
          >
            <PreviewBooking
              setOpenBooking={setOpenBooking}
              flight={selectedItem.flight}
              flightClass={selectedItem.flightClass}
              adult={parseInt(adult)}
              child={parseInt(child)}
              infant={parseInt(infant)}
            />
          </ModalGestures>
        </div>
      )}
    </div>
  );
};

export default CardFlight;

// ---------------------------------------------------- منو انتخاب روز قبل و بعد
export const OtherDay = ({combinedFlights,handle_otherDay}:{combinedFlights : Flight[],handle_otherDay : any} 
) => {
  if (combinedFlights.length != 0) {
    return (
      <div className="flex justify-center align-middle items-center max-w-[576px] w-full z-50 fixed bottom-6 ">
        <div className="w-full bg-ms-white rounded-3xl border-[1px] border-[#E4E4E4] mx-6 h-[50px] flex flex-row">
          <span
            onClick={handle_otherDay}
            id="befor"
            className="w-1/3 pl-4 flex items-center h-full cursor-pointer  motion-reduce:transition-none motion-reduce:hover:transform-none"
          >
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
          <span
            onClick={handle_otherDay}
            id="after"
            className="w-1/3 flex justify-end pl-4 items-center h-full cursor-pointer  motion-reduce:transition-none motion-reduce:hover:transform-none"
          >
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
    );
  }
};
