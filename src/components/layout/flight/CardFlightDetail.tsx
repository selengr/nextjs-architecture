import { Flight, FlightClass } from '@/@types/flight/bookingProcess';
import { useAppSelector } from '@/redux/hook';
import Image from 'next/image';

const CardFlightDetail = ({
  flight,
  flightClass
}: {
  flight: Flight;
  flightClass: FlightClass;
}) => {
  console.log('flight.origin.code :>> ', flight.origin.code);

  return (
    <>
      <div className="flex flex-row justify-between w-full items-center">
        <div className="flex items-center">
          <Image
            src={'/static/images/flights/flight-sign.svg'}
            alt={'card'}
            width={28} //automatically provided
            height={28} //automatically provided
          />
          <span className="pr-1 text-ms-thick-green font-medium text-xs font-ms-iranSansMobile">
            ایران ایر
          </span>
        </div>
        <span className="text-ms-thick-green font-medium text-xs">
          {flightClass.onewayFare?.adult_Fare.baseFare && <span>سیستمی</span>}
          {flightClass.adultFare?.baseFare && <span>چارتری</span>}
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
            {flight.departureDateTime.split(' ')[1]}
          </span>
        </div>

        <Image
          src={'/static/images/flights/arrow-origin-destination.svg'}
          alt={'card'}
          width={0} //automatically provided
          height={0} //automatically provided
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
            {flight.arrivalDateTime.split(' ')[1]}
          </span>
        </div>
      </div>

      <div className="border-b-[#E5E5E7] border-dashed border-b-[1px] pt-5" />

      <div className="flex flex-row justify-between w-full items-center p-1 pb-0">
        <span className="pr-1 text-ms-crimson font-medium text-sm font-ms-iranSansMobile">
          {flightClass.availableSeat} نفر ظرفیت
        </span>
        <span className="text-[#605858] font-medium text-sm">
          {flightClass?.onewayFare &&
            flightClass.onewayFare?.adult_Fare.baseFare}
          {!flightClass.onewayFare && flightClass.adultFare?.baseFare} ریال
        </span>
      </div>

      <div className="flex items-center justify-center w-full mb-1">
        <Image
          src={'/static/images/flights/arrow-down.svg'}
          alt={'card'}
          width={10} //automatically provided
          height={6} //automatically provided
        />
      </div>
    </>
  );
};

export default CardFlightDetail;
