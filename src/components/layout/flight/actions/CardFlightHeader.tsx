'use client';

import { useAppSelector } from '@/redux/hook';

const CardFlightHeader = ({ data, departing, returning }: any) => {
  const booking = useAppSelector((state) => state.booking);
  if (
    booking.departureSegment.flightNumber &&
    booking.departureSegment.fareName &&
    returning
  ) {
    return (
      <div>
        <span className="xs:text-ms-lg sm:text-ms-xl text-ms-sm absolute right-8 sm:right-14">
          {data.destinationFarsi}
        </span>
        <span
          className="absolute right-[30%] left-[30%] text-center flex justify-center items-center
               md:text-ms-xl text-ms-lg"
        >
          برگشت -
          {`${returning.split('-')[0]}/${returning.split('-')[1]}/${parseInt(
            returning.split('-')[2]
          )}`}
        </span>
        <span className="xs:text-ms-lg sm:text-ms-xl text-ms-sm absolute left-8 sm:left-14">
          {data.originFarsi}
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="xs:text-ms-lg sm:text-ms-xl text-ms-sm absolute right-8 sm:right-14">
          {data.originFarsi}
        </span>
        <span
          className="absolute right-[30%] left-[30%] text-center flex justify-center items-center
          md:text-ms-xl text-ms-lg"
        >
          رفت -
          {`${departing.split('-')[0]}/${departing.split('-')[1]}/${parseInt(
            departing.split('-')[2]
          )}`}
        </span>
        <span className="xs:text-ms-lg sm:text-ms-xl text-ms-sm absolute left-8 sm:left-14">
          {data.destinationFarsi}
        </span>
      </div>
    );
  }
};

export { CardFlightHeader };
