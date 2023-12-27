import UiButton from '@/components/UI/ui-button/UiButton';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import {
  departureSegment,
  returningSegment
} from '@/redux/slices/flight/bookingProcess';
import { IPreviewBooking } from '@/@types/flight/bookingProcess';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const PreviewBookingHeader = ({ selectedItem }: any) => {
  // const flight = useAppSelector((state) => state.flight);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center text-center align-middle items-center">
        <Image
          src={'/static/images/flights/flight-sign.svg'}
          alt={'card'}
          width={28} //automatically provided
          height={28} //automatically provided
        />
        <span className="text-ms-xs font-ms-regular text-ms-light-black px-2">
          {selectedItem.flightClass.flightType}
        </span>
      </div>
      <span className="text-ms-xs font-ms-regular text-ms-light-black pt-2">
        {selectedItem.flight.airline}
      </span>
    </div>
  );
};

const PreviewBooking = ({
  flightClass,
  flight,
  adult,
  child,
  infant,
  setOpenBooking
}: IPreviewBooking) => {
  const [stage, updateStage] = useState<'FlightRules' | 'RefundRules'>(
    'FlightRules'
  );
  const dispatch = useAppDispatch();
  const booking = useAppSelector((state) => state.booking);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const returning = searchParams?.get('returning');

  const handle_Booking = () => {
    if (
      booking.departureSegment.flightNumber &&
      booking.departureSegment.fareName
    ) {
      dispatch(
        returningSegment({
          flightNumber: flight.flightNumber, //parent
          departureDateTime: flight.departureDateTime, //parent
          originIataCode: flight.origin.code, //parent
          destinationIataCode: flight.destination.code, //parent
          fareName: flightClass.fareName, //child
          lockId: null,

          arrivalDateTime: flight.arrivalDateTime,
          originFarsiName: flight.origin.farsiName,
          destinationFarsiName: flight.destination.farsiName,

          adult_Fare:
            flightClass.adultFare?.payable ??
            flightClass.onewayFare?.adult_Fare.payable ??
            0,
          child_Fare:
            flightClass.childFare?.payable ??
            flightClass.onewayFare?.child_Fare.payable ??
            0,
          infant_Fare:
            flightClass.infantFare?.payable ??
            flightClass.onewayFare?.infant_Fare.payable ??
            0
        })
      );
      setOpenBooking(false);
      return router.push(
        `${pathname}/passengers?adult=${adult}&child=${child}&infant=${infant}`
      );
    } else {
      dispatch(
        departureSegment({
          flightNumber: flight.flightNumber, //parent
          departureDateTime: flight.departureDateTime, //parent
          originIataCode: flight.origin.code, //parent
          destinationIataCode: flight.destination.code, //parent
          fareName: flightClass.fareName, //child
          lockId: null,

          arrivalDateTime: flight.arrivalDateTime,
          originFarsiName: flight.origin.farsiName,
          destinationFarsiName: flight.destination.farsiName,

          adult_Fare:
            flightClass.adultFare?.payable ??
            flightClass.onewayFare?.adult_Fare.payable ??
            0,
          child_Fare:
            flightClass.childFare?.payable ??
            flightClass.onewayFare?.child_Fare.payable ??
            0,
          infant_Fare:
            flightClass.infantFare?.payable ??
            flightClass.onewayFare?.infant_Fare.payable ??
            0
        })
      );
      if (returning && returning !== null) {
        setOpenBooking(false);
      } else {
        return router.push(
          `${pathname}/passengers?adult=${adult}&child=${child}&infant=${infant}`
        );
      }
    }
  };

  const handle_Status = (e: any) => {
    updateStage(e.target.id);
  };

  return (
    <div>
      <div
        // onClick={handle_booking}
        //     key={index}
        className="py-4 px-6 bg-ms-back-card-gray-12 rounded-[15px] w-full flex flex-col my-6"
      >
        <div className="flex flex-row p-2">
          <div className="flex flex-col w-2/12">
            <span className="text-ms-thick-green text-ms-lg font-ms-medium">
              مبدا
            </span>
            <span className="text-ms-thick-gray text-ms-sm font-ms-regular pt-1">
              {flight.origin.farsiName}
            </span>
            <span className="text-ms-thick-green text-ms-sm font-ms-medium pt-2">
              {flight.departureDateTime.split(' ')[1]}
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

          <div className="flex flex-col w-2/12 ">
            <span className="text-ms-thick-green text-ms-lg font-ms-medium flex justify-end">
              مقصد
            </span>
            <span className="text-ms-thick-gray text-ms-sm font-ms-regular pt-1 flex justify-end">
              {flight.destination.farsiName}
            </span>
            <span className="text-ms-thick-green text-ms-sm font-ms-medium pt-2 flex justify-end">
              {flight.arrivalDateTime.split(' ')[1]}
            </span>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex flex-row w-full text-center justify-around border-b-[1px] border-b-ms-gray-23">
          <span
            onClick={handle_Status}
            id="FlightRules"
            className={`${
              stage === 'FlightRules' ? 'border-b-ms-yellow-13 border-b-2' : ''
            } text-ms-thick-green text-ms-lg w-1/4 leading-[2rem]`}
          >
            قوانین پرواز
          </span>
          <span
            onClick={handle_Status}
            id="RefundRules"
            className={`${
              stage === 'RefundRules' ? 'border-b-ms-yellow-13 border-b-2' : ''
            } text-ms-thick-green text-ms-lg w-1/4 leading-[2rem]`}
          >
            قوانین استرداد
          </span>
        </div>

        {stage === 'FlightRules' && (
          <div className="flex flex-row w-full justify-start items-center align-middle px-2 py-7">
            <div className="text-ms-xs flex flex-col w-1/4 items-center">
              <span className="text-ms-gray text-ms-xs font-ms-regular">
                شماره پرواز
              </span>
              <span className="text-ms-light-black font-ms-medium pt-3">
                {flight.flightNumber ? flight.flightNumber : '---'}
              </span>
            </div>

            <div className="text-ms-xs flex flex-col w-1/4 items-center">
              <span className="text-ms-gray text-ms-xs font-ms-regular">
                ترمینال
              </span>
              <span className="text-ms-light-black font-ms-medium pt-3">
                {flight.origin.terminal ? flight.origin.terminal : '---'}
              </span>
            </div>

            <div className="text-ms-xs flex flex-col w-1/4 items-center">
              <span className="text-ms-gray text-ms-xs font-ms-regular">
                مقدار بار مجاز
              </span>
              <span className="text-ms-light-black font-ms-medium pt-3">
                {flightClass.adultFreeBaggage.checkedBaggageTotalWeight
                  ? flightClass.adultFreeBaggage.checkedBaggageTotalWeight
                  : '---'}
              </span>
            </div>

            <div className="text-ms-xs flex flex-col w-1/4 items-center">
              <span className="text-ms-gray text-ms-xs font-ms-regular">
                پرواز
              </span>
              <span className="text-ms-light-black font-ms-medium pt-3">
                {flightClass.flightType}
              </span>
            </div>
          </div>
        )}
        {stage === 'RefundRules' && (
          <div className="flex flex-col w-full justify-start align-middle px-2 py-6">
            <div className="text-ms-xs flex flex-row p-2">
              <Image
                src={'/static/images/flights/Attention.svg'}
                alt={'Attention'}
                width={16} //automatically provided
                height={16}
              />
              <span className="text-ms-gray text-ms-sm font-ms-regular px-2">
                {flightClass?.cancelationPolicy}
              </span>
            </div>

            {/* <div className="text-ms-xs flex flex-row p-2">
                 <span className="text-ms-crimson text-ms-lg font-ms-regular">30%</span>
                 <span className="text-ms-gray text-ms-sm font-ms-regular px-2">از زمان صدور بلیط تا۲۴ ساعت قبل از پرواز</span>
             </div> */}
            {flightClass?.bookingPolicy && (
              <div className="text-ms-xs flex flex-row p-2">
                <span className="text-ms-crimson text-ms-lg font-ms-regular">
                  قوانین رزرو
                </span>
                <span className="text-ms-gray text-ms-sm font-ms-regular px-2">
                  {flightClass?.bookingPolicy}
                </span>
              </div>
            )}
          </div>
        )}

        <div className="border-b-[#E5E5E7] border-dashed border-b-[1px]" />
      </div>
      <span className="text-ms-crimson text-ms-lg font-ms-black ">
        {flightClass.availableSeat} صندلی باقی مانده
      </span>

      <div className="flex flex-col w-full bg-ms-back-card-gray-12 text-center rounded-[15px] my-4 mb-8">
        {adult != 0 && (
          <div className="flex flex-row">
            <span className="w-1/3 py-4 text-ms-thick-gray text-ms-xs font-ms-regular">
              بزرگسال{adult > 1 ? `(${adult})` : ''}
            </span>
            {flightClass.adultFare?.totalFare && (
              <span className="w-1/3 py-4 text-ms-light-black text-ms-xs font-ms-regular">
                {flightClass.adultFare?.totalFare} تومان
              </span>
            )}
            {flightClass.onewayFare?.adult_Fare && (
              <span className="w-1/3 py-4 text-ms-light-black text-ms-xs font-ms-regular">
                {flightClass.onewayFare?.adult_Fare.totalFare} تومان
              </span>
            )}
            {flightClass.adultFare?.totalFare && (
              <span className="w-1/3 py-4 text-ms-crimson text-ms-xs font-ms-bold">
                {flightClass.adultFare?.totalFare * adult} تومان
              </span>
            )}
            {flightClass.onewayFare?.adult_Fare && (
              <span className="w-1/3 py-4 text-ms-crimson text-ms-xs font-ms-bold">
                {flightClass.onewayFare?.adult_Fare.totalFare * adult} تومان
              </span>
            )}
          </div>
        )}

        {child != 0 && (
          <>
            <div className="border-b-[#E5E5E7] border-dashed border-b-[1px]" />
            <div className="flex flex-row">
              <span className="w-1/3 py-4 text-ms-thick-gray text-ms-xs font-ms-regular">
                کودک{child > 1 ? `(${child})` : ''}
              </span>
              {flightClass.childFare?.totalFare && (
                <span className="w-1/3 py-4 text-ms-light-black text-ms-xs font-ms-regular">
                  {flightClass.childFare?.totalFare}تومان
                </span>
              )}
              {flightClass.onewayFare?.child_Fare.totalFare && (
                <span className="w-1/3 py-4 text-ms-light-black text-ms-xs font-ms-regular">
                  {flightClass.onewayFare?.child_Fare.totalFare}تومان
                </span>
              )}
              {flightClass.childFare?.totalFare && (
                <span className="w-1/3 py-4 text-ms-crimson text-ms-xs font-ms-bold">
                  {flightClass.childFare?.totalFare * child}تومان
                </span>
              )}
              {flightClass.onewayFare?.child_Fare.totalFare && (
                <span className="w-1/3 py-4 text-ms-crimson text-ms-xs font-ms-bold">
                  {flightClass.onewayFare?.child_Fare.totalFare * child}تومان
                </span>
              )}
              {/* <span className="w-1/3 py-4 text-ms-crimson text-ms-xs font-ms-bold">.۰۰۰ تومان</span> */}
            </div>
          </>
        )}

        {infant != 0 && (
          <>
            <div className="border-b-[#E5E5E7] border-dashed border-b-[1px]" />
            <div className="flex flex-row">
              <span className="w-1/3 py-4 text-ms-thick-gray text-ms-xs font-ms-regular">
                نوزاد{infant > 1 ? `(${infant})` : ''}
              </span>
              {flightClass.infantFare?.totalFare && (
                <span className="w-1/3 py-4 text-ms-light-black text-ms-xs font-ms-regular">
                  {flightClass.infantFare?.totalFare}تومان
                </span>
              )}
              {flightClass.onewayFare?.infant_Fare.totalFare && (
                <span className="w-1/3 py-4 text-ms-light-black text-ms-xs font-ms-regular">
                  {flightClass.onewayFare?.infant_Fare.totalFare}تومان
                </span>
              )}
              {flightClass.infantFare?.totalFare && (
                <span className="w-1/3 py-4 text-ms-crimson text-ms-xs font-ms-bold">
                  {flightClass.infantFare?.totalFare * infant}تومان
                </span>
              )}
              {flightClass.onewayFare?.infant_Fare.totalFare && (
                <span className="w-1/3 py-4 text-ms-crimson text-ms-xs font-ms-bold">
                  {flightClass.onewayFare?.infant_Fare.totalFare * infant}تومان
                </span>
              )}
            </div>
          </>
        )}
      </div>

      <UiButton
        onClick={handle_Booking}
        className="mb-[32px] mt-6 hover:bg-ms-btn-green-33 text-ms-lg h-[50px] w-full border-none text-ms-white font-ms-medium bg-ms-btn-green-23 rounded-[15px]"
        text="رزرو"
      />
    </div>
  );
};

export default PreviewBooking;
