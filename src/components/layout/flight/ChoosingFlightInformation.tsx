'use client';

import Image from 'next/image';
import { toast } from 'sonner';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import OriginVeiw from '@/components/Layout/OriginVeiw';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import PassengersVeiw from '@/components/Layout/PassengersVeiw';
import DestinationView from '@/components/Layout/DestinationView';
import ModalGestures from '@/components/common/modal/ModalGestures ';
import { CompareFarsiAndEnglishNumbers } from '@/utils/helpers/digitNormalizer';
import CustomMultiDatePicker from '@/components/common/calanders/CustomMultiDatePicker';

import { setCity, setDate } from '@/redux/slices/flight/flights';
import UiButton from '@/components/UI/ui-button';

const ChoosingFlightInformation = ({ status }: { status: string }) => {
  const [isOpenOrigin, setOpenOrigin] = useState(false);
  const [isOpenDestination, setOpenDestination] = useState(false);
  const [isOpenPassengers, setOpenPassengers] = useState(false);

  const [isOpenTwoWay, setOpenTwoWay] = useState<boolean>(false);
  const [isOpenDepartureDate, setOpenDepartureDate] = useState(false);

  const [mode, setMode] = useState<'persian' | 'gregorian'>('persian');

  const dispatch = useAppDispatch();
  const twoWay = useAppSelector((state) => state.flight);
  const departureDate = useAppSelector((state) => state.flight);
  const flight = useAppSelector((state) => state.flight);

  const [calenderErorr, setCalenderErorr] = useState<boolean>(false);
  const router = useRouter();

  const ChangeOriginAndDestination = () => {
    dispatch(
      setCity({
        type: 'DESTINATION',
        destination: departureDate.city?.origin as string,
        destinationIata: departureDate.city?.originIata as string,
        destinationAirportEnglishName: departureDate.city
          ?.originAirportEnglishName as string
      })
    );
    dispatch(
      setCity({
        type: 'ORIGIN',
        origin: departureDate.city?.destination as string,
        originIata: departureDate.city?.destinationIata as string,
        originAirportEnglishName: departureDate.city
          ?.destinationAirportEnglishName as string
      })
    );
    // Swap the origin and destination
  };

  const ChooseOrigin = () => setOpenOrigin(true);
  const onCloseOrigin = () => setOpenOrigin(false);

  const ChooseDestination = () => setOpenDestination(true);
  const onCloseDestination = () => setOpenDestination(false);

  const ChoosePassengers = () => setOpenPassengers(true);
  const onClosePassengers = () => setOpenPassengers(false);

  const ChooseDepatureDate = () => setOpenDepartureDate(true);

  const onCloseDepatureDate = () => {
    dispatch(
      setDate({
        departing: ''
      })
    );
    setOpenDepartureDate(false);
  };

  const ChooseDepatureAndReturnDate = () => setOpenTwoWay(true);
  const onCloseTwoWay = () => {
    dispatch(
      setDate({
        departing: '',
        returning: ''
      })
    );
    setOpenTwoWay(false);
  };

  useEffect(() => {
    if (status == 'oneWay') {
      if (flight.returning) {
        dispatch(
          setDate({
            departing: flight.departing,
            returning: ''
          })
        );
        return;
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // =========================================================یک طرفه تاریخ رفت
  const handleDeparture = () => {
    if (flight.departing) {
      setOpenDepartureDate(false);
    } else {
      toast.error('ابتدا تاریخ رفت را انتخاب کنید');
    }
  };
  const handleDepartureDate = (time: any) => {
    dispatch(
      setDate({
        departing: time.toString()
      })
    );
  };

  // ======================================================== دو طرفه تاریخ رفت و برگشت
  const handleTwoWay = () => {
    if (flight.returning && flight.departing) {
      setOpenTwoWay(false);
      toast.success('تاریخ رفت و برگشت انتخاب شد');
    } else if (!flight.departing) {
      toast.error(' تاریخ رفت انتخاب شود');
    } else if (!flight.returning) {
      toast.error(' تاریخ برگشت انتخاب شود');
    } else {
      toast.error('لطفا تاریخ رفت و برگشت را انتخاب کنید');
    }
  };
  const handleTwoWayDate = (time: any) => {
    dispatch(
      setDate({
        departing: time.toString().split(',')[0],
        returning: time.toString().split(',')[1]
      })
    );
  };

  // ========================================================

  // ------------------
  const confirm = () => {
    // dispatch(addPassengers(passengers))
    setOpenPassengers(false);
    // toast.success('انتخاب شد')
  };

  const date_type = (date: string) => {
    let year = date.split('/')[0];
    if (date && parseInt(year) > 1450) return 'font-ms-IRANSansXPro';
    return 'IRANSansWeb';
  };
  const dateTextColorOne = () => {
    if (calenderErorr && !flight.departing) return 'text-ms-crimson';
    if (flight.departing) return 'text-ms-green';
    else return 'text-ms-thick-green';
  };
  // ------------------color
  const dateImageColorOne = () => {
    if (calenderErorr && !flight.departing) return 'calendar-error.svg';
    if (flight.departing) return 'calendar-choose.svg';
    else return 'calendar-icon.svg';
  };
  const dateTextColorTwo = () => {
    if (calenderErorr && !flight.departing && !flight.returning)
      return 'text-ms-crimson';
    if (flight.returning && flight.departing) return 'text-ms-green';
    else return 'text-ms-thick-green';
  };
  const dateImageColorTwo = () => {
    if (calenderErorr && !flight.departing && !flight.returning)
      return 'calendar-error.svg';
    if (flight.departing && flight.returning) return 'calendar-choose.svg';
    else return 'calendar-icon.svg';
  };
  const validateCityImageOrigin = () => {
    if (departureDate.city?.origin) return 'location-icon-selected';
    if (calenderErorr && !departureDate.city?.origin)
      return 'location-icon-error';
    else return 'location-icon';
  };
  const validateCityTextOrigin = () => {
    if (calenderErorr && !departureDate.city?.origin) return 'text-ms-crimson';
    if (departureDate.city?.origin) return 'text-ms-green';
    else return 'text-ms-thick-green';
  };
  const validateCityImageDestination = () => {
    if (departureDate.city?.destination) return 'location-icon-selected';
    if (calenderErorr && !departureDate.city?.destination)
      return 'location-icon-error';
    else return 'location-icon';
  };
  const validateCityTextDestination = () => {
    if (calenderErorr && !departureDate.city?.destination)
      return 'text-ms-crimson';
    if (departureDate.city?.destination) return 'text-ms-green';
    else return 'text-ms-thick-green';
  };

  // ========================================================

  const handle_search_in_tickets = () => {
    // const encodedData = encodeURIComponent(JSON.stringify(flight));
    const cityIata =
      `${flight.city?.destinationIata}-${flight?.city?.originIata}`.replaceAll(
        ' ',
        '-'
      );
    const departing = `departing=${CompareFarsiAndEnglishNumbers(
      flight.departing.toString()
    )}`.replaceAll('/', '-');
    const returning = `${
      flight.returning
        ? `&returning=${CompareFarsiAndEnglishNumbers(flight.returning)}`
        : ''
    }`.replaceAll('/', '-');
    const adult = `&adult=${flight.passengers?.[0].count}`;
    const child = `&child=${flight.passengers?.[1].count}`;
    const infant = `&infant=${flight.passengers?.[2].count}`;
    if (
      flight.city?.destination &&
      flight.city?.origin &&
      (flight.returning?.toString().length != 0 ||
        flight.departing.toString().length != 0)
    ) {
      return router.push(
        `${cityIata}/?${departing}${returning}${adult}${child}${infant}`
      );
    } else setCalenderErorr(true);
  };

  return (
    <>
      <div className="h-[116px] mt-[16px] relative bg-ms-white w-full rounded-[30px]  shadow-[0px 0px 1px 0px #11111126]">
        <div
          onClick={ChooseOrigin}
          className="text-orange flex flex-row align-middle items-center mx-5 mt-5 font-ms-iranSansMobile"
        >
          <Image
            className="ml-1"
            src={`/static/images/flights/${validateCityImageOrigin()}.svg`}
            alt={'flight'}
            width={23} //automatically provided
            height={23} //automatically provide
          />

          {calenderErorr && !departureDate.city?.origin ? (
            <span className={`${validateCityTextOrigin()} font-ms-medium`}>
              مبدا خود را انتخاب کنید
            </span>
          ) : (
            <>
              <span className={`${validateCityTextOrigin()} font-ms-medium`}>
                مبدا
              </span>

              <span
                className={`${
                  departureDate.city?.origin
                    ? 'text-ms-green'
                    : 'text-[#969F9F]'
                } text-ms-sm mx-2 font-ms-regular -mb-1`}
              >
                {departureDate.city?.origin
                  ? departureDate.city?.origin
                  : '(شهر)'}
              </span>
            </>
          )}
        </div>

        <div className="flex flex-row relative">
          <div className="w-[65%] xs:w-[75%] mt-[17px] absolute right-[5%] flex border-b-[#F5BB00] border-dashed border-b-[1px] divide-[#F5BB00]"></div>
          <div className="w-[15%] absolute left-[2%] flex justify-center">
            <Image
              onClick={ChangeOriginAndDestination}
              className="ml-[25%]"
              src={'/static/images/flights/change-direction.svg'}
              alt={'flight'}
              width={40} //automatically provided
              height={40} //automatically provide
            />
          </div>
        </div>

        <div
          onClick={ChooseDestination}
          className="flex flex-row align-middle items-center mx-5 mt-8 font-ms-iranSansMobile"
        >
          <Image
            className="ml-1"
            src={`/static/images/flights/${validateCityImageDestination()}.svg`}
            alt={'flight'}
            width={23} //automatically provided
            height={23} //automatically provide
          />
          {calenderErorr && !departureDate.city?.destination ? (
            <span className={`${validateCityTextDestination()} font-ms-medium`}>
              مقصد خود را انتخاب کنید
            </span>
          ) : (
            <>
              <span
                className={`${validateCityTextDestination()} font-ms-medium`}
              >
                مقصد
              </span>
              <span
                className={`${
                  departureDate.city?.destination
                    ? 'text-ms-green'
                    : 'text-[#969F9F]'
                } text-ms-sm mx-2 font-ms-regular -mb-1`}
              >
                {departureDate.city?.destination
                  ? departureDate.city?.destination
                  : '(شهر)'}
              </span>
            </>
          )}
        </div>
      </div>

      {status == 'oneWay' ? (
        <div
          onClick={ChooseDepatureDate}
          className={`h-[50px] relative flex align-middle items-center  bg-ms-white w-full font-ms-iranSansMobile
          ${
            calenderErorr && !flight.departing
              ? 'border-[1px] border-solid border-[#B3261E]'
              : ''
          } rounded-2xl mt-[24px] shadow-[0px 0px 1px 0px #11111126]`}
        >
          <div className="flex flex-row mx-5 justify-between w-full">
            <div className="flex justify-start">
              <Image
                className="ml-1"
                src={`/static/images/flights/${dateImageColorOne()}`}
                alt={'flight'}
                width={23} //automatically provided
                height={23} //automatically provide
              />
              <span className={`${dateTextColorOne()} font-ms-medium`}>
                {flight.departing ? (
                  <span
                    className={`${date_type(
                      flight.departing.toString()
                    )} flex flex-row`}
                  >
                    {flight.departing}
                  </span>
                ) : (
                  'تاریخ رفت'
                )}
              </span>
            </div>

            {!flight.departing && calenderErorr && (
              <Image
                className="ml-1 left-4 absolute"
                src={'/static/images/flights/error-icon.svg'}
                alt={'flight'}
                width={20} //automatically provided
                height={20} //automatically provide
              />
            )}
            {flight.departing && (
              <Image
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(
                    setDate({
                      departing: ''
                    })
                  );
                }}
                className="ml-1"
                src={'/static/images/flights/close_icon.svg'}
                alt={'flight'}
                width={20} //automatically provided
                height={20} //automatically provide
              />
            )}
          </div>
        </div>
      ) : (
        ''
      )}

      {status == 'twoWay' ? (
        <div
          onClick={ChooseDepatureAndReturnDate}
          className={`h-[50px] relative flex align-middle items-center  bg-ms-white w-full font-ms-iranSansMobile
          ${
            calenderErorr && !flight.returning && !flight.departing
              ? 'border-[1px] border-solid border-[#B3261E]'
              : ''
          } rounded-2xl mt-[24px] shadow-[0px 0px 1px 0px #11111126]`}
        >
          <div className="flex flex-row mx-5 justify-between w-full">
            <div className="flex justify-start">
              <Image
                className="ml-1"
                src={`/static/images/flights/${dateImageColorTwo()}`}
                alt={'flight'}
                width={23} //automatically provided
                height={23} //automatically provide
              />
              <span
                className={`${
                  flight.departing.toString()?.split('/')[0] > '1450'
                    ? 'font-ms-IRANSansXPro'
                    : ''
                } font-ms-medium`}
              >
                {flight.departing ? <>{flight.departing}</> : 'تاریخ رفت'}
              </span>
            </div>

            <div className="flex flex-row mx-5 justify-between w-6/12 border-r-[1px] h-full border-r-ms-gray pr-4">
              <div className="flex justify-start">
                <Image
                  className="ml-1"
                  src={`/static/images/flights/${dateImageColorTwo()}`}
                  alt={'flight'}
                  width={23} //automatically provided
                  height={23} //automatically provide
                />
                <span
                  className={`${dateTextColorTwo()} ${
                    flight.returning &&
                    flight.returning.toString()?.split('/')[0] > '1450'
                      ? 'font-ms-IRANSansXPro'
                      : ''
                  } font-ms-medium`}
                >
                  {flight.returning ? <>{flight.returning}</> : 'تاریخ برگشت'}
                </span>
              </div>
            </div>
          </div>

          {calenderErorr && !flight.returning && !flight.departing && (
            <Image
              className="ml-2 -mr-6"
              src={'/static/images/flights/error-icon.svg'}
              alt={'flight'}
              width={20} //automatically provided
              height={20} //automatically provide
            />
          )}
          {flight.returning && flight.departing && (
            <Image
              onClick={(e) => {
                e.stopPropagation();
                // setOpenDepartureDate
                dispatch(
                  setDate({
                    departing: '',
                    returning: ''
                  })
                );
              }}
              className="ml-2 -mr-6"
              src={'/static/images/flights/close_icon.svg'}
              alt={'flight'}
              width={20} //automatically provided
              height={20} //automatically provide
            />
          )}
        </div>
      ) : (
        // {/*
        //             // -----------------------------------------------------------------
        //         // <div
        //         //   onClick={ChooseReturnDate}
        //         //   className="h-[50px] relative flex align-middle items-center bg-ms-white w-full font-ms-iranSansMobile rounded-2xl mt-[24px] shadow-[0px 0px 1px 0px #11111126]"
        //         // >
        //         //   <div className="flex flex-row  mx-5 ">
        //         //     <Image
        //         //       className="ml-1"
        //         //       src={`/static/images/flights/${
        //         //         returnDate.year ? 'calendar-choose.svg' : 'calendar-icon.svg'
        //         //       }`}
        //         //       alt={'flight'}
        //         //       width={23} //automatically provided
        //         //       height={23} //automatically provide
        //         //     />
        //         //     <span
        //         //     className={`${
        //         //       returnDate.year ? 'text-ms-green' : 'text-ms-thick-green'
        //         //       } font-ms-medium`}
        //         //     >
        //         //       {returnDate ? returnDate : 'تاریخ برگشت'}
        //         //     </span>
        //         //   </div>
        //         // </div> */}
        ''
      )}

      <div
        onClick={ChoosePassengers}
        className="h-[50px] relative flex align-middle items-center bg-ms-white w-full font-ms-iranSansMobile rounded-2xl mt-[24px] shadow-[0px 0px 1px 0px #11111126]"
      >
        <div className="flex flex-row mx-5">
          <Image
            className="ml-1"
            src={`/static/images/flights/${
              twoWay.totalPassenger !== undefined && twoWay.totalPassenger > 1
                ? 'passenger-selected-icon.svg'
                : 'passenger-icon.svg'
            }`}
            alt={'flight'}
            width={20} //automatically provided
            height={23} //automatically provide
          />

          <span
            className={`${
              twoWay.totalPassenger !== undefined && twoWay.totalPassenger > 1
                ? 'text-ms-green'
                : 'text-ms-thick-green'
            }  font-ms-medium flex items-center`}
          >
            {twoWay?.totalPassenger}مسافر
          </span>
        </div>
      </div>

      <div className="mt-[27px]">
        {/* <Toaster richColors/> */}
        <UiButton
          onClick={handle_search_in_tickets}
          className="mb-[32px] hover:bg-ms-btn-green-33 text-ms-lg h-[50px] w-full border-none text-ms-white font-ms-medium bg-ms-btn-green-23 rounded-2xl"
          text="جستجو"
        />
      </div>

      {isOpenOrigin && (
        <div>
          <ModalGestures
            title="انتخاب مبدا"
            isOpen={isOpenOrigin}
            onClose={onCloseOrigin}
            initialSnap={1}
          >
            <OriginVeiw onClose={() => setOpenOrigin(false)} />
          </ModalGestures>
        </div>
      )}
      {isOpenDestination && (
        <div>
          <ModalGestures
            title="انتخاب مقصد"
            isOpen={isOpenDestination}
            onClose={onCloseDestination}
            className="overflow-scroll"
            initialSnap={1}
          >
            <DestinationView onClose={onCloseDestination} />
          </ModalGestures>
        </div>
      )}

      {isOpenDepartureDate && (
        <div>
          <ModalGestures
            title="تاریخ رفت"
            isOpen={isOpenDepartureDate}
            onClose={onCloseDepatureDate}
            className="overflow-scroll"
            initialSnap={1}
          >
            <CustomMultiDatePicker
              value={flight.departing ? flight.departing : ''}
              onChange={handleDepartureDate}
              selectDateRange={false}
              dateFormat="YYYY/MM/DD"
              locale={mode}
              theme="dark"
            />
            <div className="flex flex-row justify-between items-center mt-6 text-[#969696] text-ms-xs w-full">
              {flight.departing && (
                <span className="px-2 text-[#000] text-ms-sm">
                  {' '}
                  رفت
                  <span className="text-[#969696] text-ms-xs">
                    {' '}
                    &nbsp; {flight.departing.toString().split('/')[2]}{' '}
                    {flight.departing.toString().split('/')[1]}
                  </span>
                </span>
              )}
              <span
                className="text-ms-crimson text-ms-lg font-ms-medium absolute left-1 mt-8 mb-8"
                onClick={() =>
                  setMode(mode == 'persian' ? 'gregorian' : 'persian')
                }
              >
                {mode === 'persian'
                  ? 'تغییر تاریخ به میلادی '
                  : 'تغییر تاریخ به شمسی '}
              </span>
              {/* <UiButton
                  onClick={() => toast.error('please fill all input')}
                  className="bg-transparent border-ms-border-green-33 p-2 border-solid border-2 text-ms-lg h-[40px] text-ms-white rounded-xl w-full"
                  text=""
                >
                  <div className="flex flex-row">
                    <span className="text-ms-green text-ms-sm p-2 py-4">
                      {' '}
                      انتخاب تاریخ برگشت{' '}
                    </span>
                    <Image
                      className="ml-1"
                      src={'/static/images/flights/plus-green.svg'}
                      alt={'flight'}
                      width={10} //automatically provided
                      height={10} //automatically provide
                    />
                  </div>
                </UiButton> */}
            </div>

            <UiButton
              onClick={handleDeparture}
              className="top-5 bg-ms-btn-green-23 hover:bg-ms-btn-green-33 text-ms-lg h-[50px] text-ms-white rounded-2xl w-full"
              text="تایید"
            />
          </ModalGestures>
        </div>
      )}

      {isOpenTwoWay && (
        <div>
          <ModalGestures
            title="تاریخ برگشت"
            isOpen={isOpenTwoWay}
            onClose={onCloseTwoWay}
            className="overflow-scroll"
            initialSnap={1}
          >
            {/* =================================2 */}
            <CustomMultiDatePicker
              value={
                flight.returning || flight.departing
                  ? (flight.returning + ',' + flight.departing)
                      .replaceAll('/', '-')
                      .split(',')
                  : ''
              }
              onChange={handleTwoWayDate}
              selectDateRange={true}
              dateFormat="DD/MM/YYYY"
              theme="dark"
              locale={mode}
            />

            <div className="flex flex-row mt-8 text-[#969696] text-ms-xs mb-6">
              {flight.departing && (
                <span className="px-2 text-[#000] text-ms-sm">
                  {' '}
                  رفت
                  <span className="text-[#969696] text-ms-xs">
                    {' '}
                    &nbsp; {flight.departing.toString().split('/')[2]}{' '}
                    {flight.departing.toString().split('/')[1]}
                    &nbsp;
                  </span>
                </span>
              )}
              {flight.returning && (
                <span className="px-2 text-[#000] text-ms-sm">
                  {' '}
                  برگشت
                  <span className="text-[#969696] text-ms-xs">
                    {' '}
                    &nbsp; {flight.returning.toString().split('/')[2]}{' '}
                    {flight.returning.toString().split('/')[1]}
                  </span>
                </span>
              )}
              <span
                className="text-ms-crimson text-ms-lg font-ms-medium absolute left-1 "
                onClick={() =>
                  setMode(mode == 'persian' ? 'gregorian' : 'persian')
                }
              >
                {mode === 'persian'
                  ? 'تغییر تاریخ به میلادی '
                  : 'تغییر تاریخ به شمسی '}
              </span>
            </div>

            <UiButton
              onClick={handleTwoWay}
              className="bg-ms-btn-green-23 hover:bg-ms-btn-green-33 text-ms-lg
               h-[50px] text-ms-white rounded-2xl w-full"
              text="تایید"
            />
          </ModalGestures>
        </div>
      )}

      {isOpenPassengers && (
        <div>
          <ModalGestures
            title="مسافران"
            isOpen={isOpenPassengers}
            onClose={onClosePassengers}
            className="overflow-scroll"
            initialSnap={1}
          >
            <PassengersVeiw confirm={confirm} />
          </ModalGestures>
        </div>
      )}
    </>
  );
};

export default ChoosingFlightInformation;
