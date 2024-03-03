'use client';

import {
  FlightBookingData,
  Passenger,
  PassengerType,
  operationType
} from '@/@types/flight/bookingProcess';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { Box, Typography } from '@mui/material';
import UiButton from '@/components/UI/ui-button';
import { Banner } from '@/components/UI/ui-banner';
import PassengersViewNew, {
  IPassenger
} from '@/components/Layout/flight/PassengersViewNew';
import { UIAccordion } from '@/components/UI/accordion';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { addPassenger } from '@/redux/slices/flight/bookingProcess';
import ModalGestures from '@/components/common/modal/ModalGestures ';
import PassengersInfo from '@/components/Layout/flight/passengersInfo';
import TransitionsModal from '@/components/common/modal/modal_center/TransitionsModal';

type Props = {
  searchParams: {
    adult: string;
    child: string;
    infant: string;
  };
};

// export enum EPay_method {
//   PAYMENT_WITH_MAGHSAT_PLUS = 'PAYMENT_WITH_MAGHSAT_PLUS',
//   PAYMENT_WITH_MHESSAM = 'PAYMENT_WITH_MHESSAM'
// }
// export enum EPay_url {
//   MAGHSAT_PLUS = 'maghsat_plus',
//   PAYMENT = 'payment',
//   MHESSAM = 'mhesam'
// }
export interface IPay_method {
  maghsad: boolean;
  mhessam: boolean;
  selected: any;
  // | null
  // | EPay_method.PAYMENT_WITH_MAGHSAT_PLUS
  // | EPay_method.PAYMENT_WITH_MHESSAM;
}

const PassengersInformation = ({ searchParams }: Props) => {
  // const searchParams = useSearchParams()
  const router = useRouter();
  const pathname = usePathname();

  const [isOpenBooking, setOpenBooking] = useState<boolean>(false);
  const [ageHood, setAgeHood] = useState<'بزرگسال' | 'کودک' | 'نوزاد'>(
    'بزرگسال'
  );
  const [id, setId] = useState<number>();
  const [edit, setٍEdit] = useState<Passenger>();
  const [error, setError] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const [paymentMethod, setPaymentMethod] = useState<any>({
    maghsad: false,
    mhessam: false,
    selected: null
  });

  const booking = useAppSelector<FlightBookingData>((state) => state.booking);
  const { adult, child, infant } = searchParams;
  const [isOpenPassengers, setOpenPassengers] = useState<boolean>(false);
  const [verifyPassenger, setVerifyPassenger] = useState<boolean>(false);

  function create_passenger(
    count: number,
    type: PassengerType,
    list: Passenger[]
  ) {
    for (let index = 0; index < count; index++) {
      const uniqueId = Math.random().toString(36).substring(2);
      list.push({
        payable_Fare: 0,
        id: uniqueId,
        passengerType: type,
        title: '',
        firstName: '',
        lastName: '',
        birthDate: '',
        iranianCartMelli: {
          codeMelli: ''
        },
        passport: null
      });
    }
  }

  useEffect(() => {
    let initiate_passenger: Passenger[] = [];
    create_passenger(parseInt(adult), PassengerType.adult, initiate_passenger);
    create_passenger(parseInt(child), PassengerType.child, initiate_passenger);
    create_passenger(
      parseInt(infant),
      PassengerType.infant,
      initiate_passenger
    );
    dispatch(
      addPassenger({
        type: operationType.INITIATE_PASSENGER,
        payload: initiate_passenger
      })
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ChoosePassengers = () => setOpenPassengers(true);
  const onClosePassengers = () => setOpenPassengers(false);

  // ------------------

  const confirm = (pass: IPassenger[]) => {
    let initiate_passenger: Passenger[] = [];

    create_passenger(pass[0].count, PassengerType.adult, initiate_passenger);
    create_passenger(pass[1].count, PassengerType.child, initiate_passenger);
    create_passenger(pass[2].count, PassengerType.infant, initiate_passenger);

    dispatch(
      addPassenger({
        type: operationType.ADD_PASSENGER,
        payload: initiate_passenger
      })
    );

    setOpenPassengers(false);
    // toast.success('انتخاب شد')
  };

  const JSX = (item: Passenger, id: number) => {
    console.log('booking :>> ', booking);
    return (
      <>
        <div className="bg-ms-white my-2 mx-4 rounded-2xl relative p-4 h-[123px]">
          {item.firstName && (
            <div className="text-ms-thick-green font-ms-medium text-ms-xs w-full flex text-center pb-4">
              <span className="w-1/3">نام و نام خانوادگی:</span>
              <span className="w-1/3">{item.firstName}</span>
              <span className="w-1/3">{item.passengerType}</span>
            </div>
          )}

          {!item.firstName && (
            <div className="text-ms-thick-green font-ms-medium text-ms-xs w-full flex text-center pb-4 justify-between">
              <span className="text-[#969696] text-ms-lg ">
                وارد کردن اطلاعات شخصی نفر {id + 1}
              </span>
              <span className="w-1/3">{item.passengerType}</span>
            </div>
          )}

          <div className="flex justify-between px-6 h-[45px] p-2 space-x-5">
            {item.firstName && (
              <span className="text-ms-thick-green font-ms-medium text-ms-xs absolute right-8">
                قیمت {item.payable_Fare}
              </span>
            )}

            <div className="flex flex-row absolute left-8 bottom-6">
              {item.firstName && (
                <Image
                  onClick={() => {
                    setOpenBooking(true);
                    setٍEdit(item);
                    setAgeHood(item.passengerType);
                    setId(id);
                  }}
                  src={`/static/images/flights/edit-passenger.svg`}
                  alt={'add'}
                  width={40} //automatically provided
                  height={40}
                  className="mx-2"
                />
              )}
              {!item.firstName && (
                <Image
                  onClick={() => {
                    setOpenBooking(true);
                    setAgeHood(item.passengerType);
                    setId(id);
                  }}
                  src={`/static/images/flights/add-passenger.svg`}
                  alt={'add'}
                  width={40} //automatically provided
                  height={40}
                  className="mx-2"
                />
              )}

              <Image
                onClick={() => {
                  dispatch(
                    addPassenger({
                      type: operationType.DELETE_PASSENGER,
                      id
                    })
                  );
                }}
                src={'/static/images/flights/delete-passenger.svg'}
                alt={'delete'}
                width={40} //automatically provided
                height={40}
                className="mx-2"
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  const Person = () => {
    return booking.passenger.map((item, index) => {
      return <> {JSX(item, index)} </>;
    });
  };

  const handle_payWith = (e: any) => {
    if (e.target?.name == 'PAYMENT_WITH_MAGHSAT_PLUS') {
      if (error) setError(false);
      setPaymentMethod({
        maghsad: true,
        mhessam: false,
        selected: 'PAYMENT_WITH_MAGHSAT_PLUS'
      });
    } else if (e.target.name == 'PAYMENT_WITH_MHESSAM') {
      if (error) setError(false);
      setPaymentMethod({
        maghsad: false,
        mhessam: true,
        selected: 'PAYMENT_WITH_MHESSAM'
      });
    }
  };

  const handle_pay = () => {
    booking.passenger.map((item: any, index: number) => {
      if (
        parseInt(item.payable_Fare) != 0 &&
        parseInt(item.payable_Fare) != null
      ) {
        if ('PAYMENT_WITH_MAGHSAT_PLUS' == paymentMethod.selected) {
          router.push(
            // '/flights/' + EPay_url.PAYMENT + '/' + EPay_url.MAGHSAT_PLUS
            '/flights/' + 'payment' + '/' + 'maghsat_plus'
          );
        } else if ('PAYMENT_WITH_MHESSAM' == paymentMethod.selected) {
          router.push('/flights/' + 'payment' + '/' + 'mhesam');
        }
      } else setVerifyPassenger(true);
      if (!paymentMethod.maghsad && !paymentMethod.mhessam) setError(true);
    });
  };

  return (
    <div className="w-full bg-ms-white">
      <Banner
        bannerPic="/static/images/flights/header-passenger.svg"
        alt="header"
        width={0}
        height={500}
        className="w-full"
      />

      <div className="relative flex justify-center align-middle items-center h-screen">
        <div className="-top-28 absolute z-20 w-full rounded-2xl flex flex-col p-4 mx-8">
          <div
            //   onClick={handle_booking}
            //     key={index}
            className="py-4 px-6 bg-ms-back-card-gray-12 rounded-2xl w-full flex flex-col my-3"
          >
            <div className="flex flex-row w-full justify-between p-2">
              <span className="text-ms-thick-green text-ms-lg font-ms-medium">
                رفت
              </span>
              <span className="text-ms-thick-gray text-ms-sm font-ms-regular pt-1">
                {booking.departureSegment.departureDateTime.split(' ')[0]}
              </span>
            </div>

            <div className="flex flex-row p-2">
              <div className="flex flex-col w-2/12">
                <span className="text-ms-thick-green text-ms-lg font-ms-medium">
                  مبدا
                </span>
                <span className="text-ms-thick-gray text-ms-sm font-ms-regular pt-1">
                  {booking.departureSegment.originFarsiName.split('-')[0]}
                </span>
                <span className="text-ms-thick-green text-ms-sm font-ms-medium pt-2">
                  {booking.departureSegment.departureDateTime.split(' ')[1]}
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
                  {booking.departureSegment.destinationFarsiName.split('-')[0]}
                </span>
                <span className="text-ms-thick-green text-ms-sm font-ms-medium pt-2 flex justify-end">
                  {booking.departureSegment.arrivalDateTime.split(' ')[1]}
                </span>
              </div>
            </div>
          </div>

          {booking.returningSegment.flightNumber && (
            <div
              //   onClick={handle_booking}
              //     key={index}
              className="py-4 px-6 bg-ms-back-card-gray-12 rounded-2xl w-full flex flex-col my-3"
            >
              <div className="flex flex-row w-full justify-between p-2">
                <span className="text-ms-thick-green text-ms-lg font-ms-medium">
                  برگشت
                </span>
                <span className="text-ms-thick-gray text-ms-sm font-ms-regular pt-1">
                  {booking.returningSegment.departureDateTime.split(' ')[0]}
                </span>
              </div>

              <div className="flex flex-row p-2">
                <div className="flex flex-col w-2/12">
                  <span className="text-ms-thick-green text-ms-lg font-ms-medium">
                    مبدا
                  </span>
                  <span className="text-ms-thick-gray text-ms-sm font-ms-regular pt-1">
                    {booking.returningSegment.originFarsiName.split('-')[0]}
                  </span>
                  <span className="text-ms-thick-green text-ms-sm font-ms-medium pt-2">
                    {booking.returningSegment.departureDateTime.split(' ')[1]}
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
                    {
                      booking.returningSegment.destinationFarsiName.split(
                        '-'
                      )[0]
                    }
                  </span>
                  <span className="text-ms-thick-green text-ms-sm font-ms-medium pt-2 flex justify-end">
                    {booking.returningSegment.arrivalDateTime.split(' ')[1]}
                  </span>
                </div>
              </div>
            </div>
          )}

          <div className="bg-ms-back-card-gray-12 rounded-2xl flex flex-col my-6">
            <div className="px-4 py-6 flex justify-between">
              <span className="text-ms-thick-green font-ms-regular text-ms-sm">
                اطلاعات شخصی مسافران
              </span>
              <span className="text-ms-thick-gray font-ms-medium text-ms-lg">
                {parseInt(adult) > 0 && `بزرگسال${adult}نفر`} &nbsp;
                {parseInt(child) > 0 && <span>کودک{child}نفر</span>} &nbsp;
                {parseInt(infant) > 0 && <span>نوزاد{infant}نفر</span>}
              </span>
            </div>

            <Person />

            <div className="m-4">
              <UiButton
                onClick={ChoosePassengers}
                // onClick={() => toast.error('please fill all input')}
                className="bg-transparent border-ms-border-green-33 p-2 border-solid border-2 text-ms-lg h-[45px] text-ms-white rounded-xl w-full"
                text=""
              >
                <div className="flex flex-row">
                  <span className="text-ms-green text-ms-sm p-2 py-4">
                    {' '}
                    اضافه کردن مسافر جدید{' '}
                  </span>
                  <Image
                    className="ml-1"
                    src={'/static/images/flights/plus-green.svg'}
                    alt={'flight'}
                    width={10} //automatically provided
                    height={10} //automatically provide
                  />
                </div>
              </UiButton>
            </div>
          </div>
          <div className="mx-4">
            <div className="flex flex-row my-2">
              <Image
                className="ml-1"
                src={'/static/images/flights/worn.svg'}
                alt={'flight'}
                width={16} //automatically provided
                height={16} //automatically provide
              />
              <span className="text-ms-thick-green text-ms-xs font-ms-regular">
                شیوه پرداخت را انتخاب نمایید
              </span>
            </div>

            <UIAccordion
              handle_payWith={handle_payWith}
              label="پرداخت با ام اقساط پلاس"
              details="توضیحات توضیحات توضیحات ......"
              tabIndex={0}
              name={'PAYMENT_WITH_MAGHSAT_PLUS'}
              checked={paymentMethod.maghsad}
              error={error}
            />
            <UIAccordion
              handle_payWith={handle_payWith}
              label="پرداخت با ام حسام"
              details="توضیحات توضیحات توضیحات ......"
              name={'PAYMENT_WITH_MHESSAM'}
              checked={paymentMethod.mhessam}
              error={error}
            />

            {/* <Testo /> */}
            <Box sx={{ height: '45px' }}></Box>
            <UiButton
              onClick={handle_pay}
              className="mb-6 mt-4 hover:bg-ms-btn-green-33 text-ms-lg h-[50px] w-full border-none text-ms-white font-ms-medium bg-ms-btn-green-23 rounded-2xl"
              text="پرداخت"
            />
          </div>
        </div>
      </div>

      <Box sx={{ height: '74px' }}></Box>

      {/* ======================================== */}

      {verifyPassenger && (
        <div>
          <TransitionsModal
            className="rounded-2xl bg-ms-white w-[80%] h-36 flex justify-center align-middle items-center p-2"
            open={verifyPassenger}
            handleClose={() => setVerifyPassenger(false)}
          >
            <Image
              className="mx-2"
              src={'/static/icons/components/worn-out.png'}
              alt={'flight'}
              width={25} //automatically provided
              height={25} //automatically provide
            />

            <Typography className="text-ms-lg" component="span">
              لطفا اطلاعات شخص را وارد کنید
            </Typography>
          </TransitionsModal>
        </div>
      )}

      {isOpenBooking && (
        <div>
          <ModalGestures
            title={'مشخصات مسافران'}
            isOpen={isOpenBooking}
            onClose={() => setOpenBooking(false)}
            className={'overflow-scroll'}
            // initialSnap={7}
          >
            <PassengersInfo
              ageHood={ageHood}
              id={id}
              edit={edit}
              onClose={() => setOpenBooking(false)}
            />
          </ModalGestures>
        </div>
      )}

      {isOpenPassengers && (
        <div>
          <ModalGestures
            title="افزودن مسافر جدید"
            isOpen={isOpenPassengers}
            onClose={onClosePassengers}
            className="overflow-scroll"
            // initialSnap={7}
          >
            <PassengersViewNew confirm={confirm} />
          </ModalGestures>
        </div>
      )}
    </div>
  );
};

export default PassengersInformation;
