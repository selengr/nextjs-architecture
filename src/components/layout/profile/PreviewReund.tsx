import UiButton from '@/components/UI/ui-button/UiButton';
import Image from 'next/image';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import {
  departureSegment,
  returningSegment
} from '@/redux/slices/flight/bookingProcess';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Checkbox, Stack, Typography } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import ModalGestures from '@/components/common/modal/ModalGestures ';
import RefundReason from './RefundReason';

export const PreviewRefundHeader = () =>
  // { selectedItem }: any
  {
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
            {/* {selectedItem.flightClass.flightType} */}a
          </span>
        </div>
        <span className="text-ms-xs font-ms-regular text-ms-light-black pt-2">
          {/* {selectedItem.flight.airline} */}878
        </span>
      </div>
    );
  };

interface IFormPassengerRefund {
  passengers: { name: string; nationalCode: string }[];
}

const PreviewReund = () =>
  //   {
  //   flightClass,
  //   flight,
  //   adult,
  //   child,
  //   infant,
  //   setOpenBooking
  // }: IPreviewBooking
  {
    const [stage, updateStage] = useState<
      'Passengers' | 'TravelDetails' | 'RefundRules'
    >('Passengers');
    const searchParams = useSearchParams();
    const [isOpenRefundReason, setOpenRefundReason] = useState<boolean>(false);

    let passengers = [
      { name: 'ali', nationalCode: 'rzea1' },
      { name: 'ali', nationalCode: 'rzea5' },
      { name: 'ali', nationalCode: 'rzea4' },
      { name: 'ali', nationalCode: 'rzea3' },
      { name: 'ali', nationalCode: 'rzea2' }
    ];

    const { handleSubmit, control, reset } = useForm<IFormPassengerRefund>({
      defaultValues: {
        passengers
      }
    });
    const onSubmit: SubmitHandler<IFormPassengerRefund> = (data) =>
      console.log(data);

    const handle_Refund = () => {

      setOpenRefundReason(true);
    }

    const handle_Status = (e:any) => {
      updateStage(e.target.id);
    };

    return (
      <div className="overflow-y-scroll">
        <form onSubmit={handleSubmit(onSubmit)}>
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
                  {/* {flight.origin.farsiName}222222222 */}66666666
                </span>
                <span className="text-ms-thick-green text-ms-sm font-ms-medium pt-2">
                  {/* {flight.departureDateTime.split(' ')[1]} */}333333333333
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
                  {/* {flight.destination.farsiName} */}777777777777
                </span>
                <span className="text-ms-thick-green text-ms-sm font-ms-medium pt-2 flex justify-end">
                  {/* {flight.arrivalDateTime.split(' ')[1]} */}999999999999
                </span>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex flex-row w-full text-center justify-around border-b-[1px] border-b-ms-gray-23">
              <span
                onClick={handle_Status}
                id="Passengers"
                className={`${
                  stage === 'Passengers'
                    ? 'border-b-ms-yellow-13 border-b-2'
                    : ''
                } text-ms-thick-green text-ms-lg w-1/4 leading-[2rem]`}
              >
                مسافران
              </span>
              <span
                onClick={handle_Status}
                id="RefundRules"
                className={`${
                  stage === 'RefundRules'
                    ? 'border-b-ms-yellow-13 border-b-2'
                    : ''
                } text-ms-thick-green text-ms-lg w-1/4 leading-[2rem]`}
              >
                قوانین استرداد
              </span>
              <span
                onClick={handle_Status}
                id="TravelDetails"
                className={`${
                  stage === 'TravelDetails'
                    ? 'border-b-ms-yellow-13 border-b-2'
                    : ''
                } text-ms-thick-green text-ms-lg w-1/4 leading-[2rem]`}
              >
                قوانین استرداد
              </span>
            </div>

            {stage === 'Passengers' && (
              <div className="flex flex-col w-full justify-start items-start align-middle px-2 py-7">
                {passengers.map((item) => {
                  return (
                    <>
                      <Stack
                        direction="row"
                        spacing={2}
                        className=" flex items-center justify-between bg-ms-back-card-gray-12 rounded-2xl w-full m-4 p-4"
                      >
                        <Stack
                          direction="row"
                          spacing={2}
                          className=" flex items-center"
                        >
                          <Checkbox sx={{ color: '#F5BB00' }} color="warning" />

                          <Typography
                            variant="body1"
                            component={'label'}
                            className="text-ms-light-black"
                          >
                            سمیرا جوادی
                          </Typography>
                        </Stack>
                        <Stack
                          direction="row"
                          spacing={2}
                          className=" flex items-center"
                        >
                          <Typography
                            variant="body1"
                            component={'label'}
                            className="text-ms-light-black"
                          >
                            کد ملی:
                          </Typography>
                          <Typography variant="body1" component={'label'}>
                            2980283525
                          </Typography>
                        </Stack>
                      </Stack>
                    </>
                  );
                })}
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
                    {/* {flightClass?.cancelationPolicy} */}درصد جریمه کسر شده
                    بر اساس زمان اعلام کنسلی قوانین استرداد
                  </span>
                </div>

                {/* {flightClass?.bookingPolicy && ( */}
                <div className="text-ms-xs flex flex-row p-2">
                  <span className="text-ms-crimson text-ms-lg font-ms-regular">
                    قوانین رزرو
                  </span>
                  <span className="text-ms-gray text-ms-sm font-ms-regular px-2">
                    {/* {flightClass?.bookingPolicy} */}از زمان صدور بلیط تا۲۴
                    ساعت قبل از پرواز
                  </span>
                </div>
                {/* )} */}
              </div>
            )}
            {stage === 'TravelDetails' && (
              <div className="flex flex-row w-full justify-start items-center align-middle px-2 py-7">
                <div className="text-ms-xs flex flex-col w-1/3 items-center">
                  <span className="text-ms-gray text-ms-xs font-ms-regular">
                    شماره پرواز
                  </span>
                  <span className="text-ms-light-black font-ms-medium pt-3">
                    {/* {flight.flightNumber ? flight.flightNumber : '---'} */}
                    FES
                  </span>
                </div>

                <div className="text-ms-xs flex flex-col w-1/3 items-center">
                  <span className="text-ms-gray text-ms-xs font-ms-regular">
                    مبلغ بلیط
                  </span>
                  <span className="text-ms-light-black font-ms-medium pt-3">
                    {/* {flight.origin.terminal ? flight.origin.terminal : '---'} */}
                    724.000
                  </span>
                </div>

                <div className="text-ms-xs flex flex-col w-1/3 items-center">
                  <span className="text-ms-gray text-ms-xs font-ms-regular">
                    تاریخ
                  </span>
                  <span className="text-ms-light-black font-ms-medium pt-3">
                    {/* {flightClass.adultFreeBaggage.checkedBaggageTotalWeight
                       ? flightClass.adultFreeBaggage.checkedBaggageTotalWeight
                       : '---'} */}
                    1402/2/22
                  </span>
                </div>
              </div>
            )}

            <div className="border-b-[#E5E5E7] border-dashed border-b-[1px]" />
          </div>
          {/* <span className="text-ms-crimson text-ms-lg font-ms-black ">
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
      </div> */}
          <Stack
            direction="column"
            spacing={2}
            className=" flex items-start w-full mt-8"
          ></Stack>
          <UiButton
            onClick={handle_Refund}
            className="mb-[32px] mt-6 hover:bg-ms-btn-green-33 text-ms-lg h-[50px] w-full border-none text-ms-white font-ms-medium bg-ms-btn-green-23 rounded-[15px]"
            text="استرداد ۱ نفر"
          />
        </form>

        {isOpenRefundReason && (
          <div>
            <ModalGestures
              title="علت استرداد"
              isOpen={isOpenRefundReason}
              onClose={() => setOpenRefundReason(false)}
              className="overflow-scroll"
              // initialSnap={7}
            >
              <RefundReason />
            </ModalGestures>
          </div>
        )}
      </div>
    );
  };

export default PreviewReund;
