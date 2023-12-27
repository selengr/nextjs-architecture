'use client';

import { CompareFarsiAndEnglishNumbers } from '@/utils/helpers/digitNormalizer';
import { Gregorian_Date } from '@/utils/helpers/gregorian_Date';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { useRouter, useSearchParams } from 'next/navigation';
import { setDate } from '@/redux/slices/flight/flights';

interface ICommeuting {
  returning: string | undefined | null;
  departing: string;
  cheapest: any;
}

const DayAndPrice = ({ departing, returning, cheapest }: ICommeuting) => {
  let verify_cheapest_date = cheapest.departureDate.split(' ')[0];
  let verify_date: string;
  if (parseInt(departing) < 1450) {
    verify_date = Gregorian_Date(departing).toString();
  } else verify_date = departing;

  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams?.get('d');

  const dispatch = useAppDispatch();
  const flight = useAppSelector((state) => state.flight);

  let cheapest_day = verify_cheapest_date?.split('-')[2];
  let cheapest_month = verify_cheapest_date?.split('-')[1];

  const handle_otherDay = async () => {
    dispatch(
      setDate({
        departing: departing,
        returning: returning ?? ''
      })
    );

    const cityIata =
      `${flight.city?.destinationIata}-${flight?.city?.originIata}`.replaceAll(
        ' ',
        '-'
      );
    const departe = `departing=${CompareFarsiAndEnglishNumbers(
      verify_cheapest_date.toString()
    )}`.replaceAll('/', '-');
    const return_date = `${
      flight.returning
        ? `&returning=${CompareFarsiAndEnglishNumbers(flight.returning)}`
        : ''
    }`.replaceAll('/', '-');
    const adult = `&adult=${flight.passengers?.[0].count}`;
    const child = `&child=${flight.passengers?.[1].count}`;
    const infant = `&infant=${flight.passengers?.[2].count}`;
    return router.push(
      `${cityIata}/?${departe}${return_date}${adult}${child}${infant}`
    );
    //    router.refresh()
  };

  if (verify_cheapest_date === verify_date) {
    return (
      <div
      style={{boxShadow: "2px 0px 3px 0px rgba(0, 0, 0, 0.25)",borderRadius: "0px 15px 15px 0px"}}
        className="text-ms-crimson border-r-ms-gray border-r-[1px] min-w-[192px] 
                      flex flex-col justify-center h-full"
      >
        <span className="text-ms-crimson w-full flex items-center justify-center text-ms-lg font-ms-bold ">
          {cheapest.cheapest}
        </span>
        <span className="text-ms-crimson flex flex-row items-center justify-center text-ms-xs font-ms-bold pt-1 ">
          {/* {cheapest.departureDate.split(" ")[1] } */}
          <span>
            {cheapest_month}/{cheapest_day}
          </span>
        </span>
      </div>
    );
  } else {
    return (
      <div
        onClick={() => handle_otherDay()}
        className=" motion-reduce:transition-none motion-reduce:hover:transform-none text-ms-thick-green min-w-[192px] mx-auto hover:shadow-ms-r-side flex flex-col justify-center h-full cursor-pointer"
      >
        <span className="w-full flex items-center justify-center text-ms-lg font-ms-medium ">
          {cheapest.cheapest}
        </span>
        <span className="flex flex-row items-center justify-center text-ms-xs font-ms-medium pt-1 ">
          {/* {cheapest.departureDate.split(" ")[1] } */}
          <span>
            {cheapest_month}/{cheapest_day}
          </span>
        </span>
      </div>
    );
  }
};

export default DayAndPrice;
