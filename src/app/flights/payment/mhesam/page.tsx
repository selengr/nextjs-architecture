'use client';

import { Box } from '@mui/material';
import callApi from '@/services/axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/redux/hook';
import UiButton from '@/components/UI/ui-button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { TAccount } from '@/components/UI/customized_combo';
import {
  AdultPassenger,
  ChildPassenger,
  FlightBookingData,
  InfantPassenger,
  PassengerType
} from '@/@types/flight/bookingProcess';
import ModalGestures from '@/components/common/modal/ModalGestures ';
import OtpVerifycode from '@/components/Layout/payment/otp/OtpVerifycode';
import OtpNatoinalCode from '@/components/Layout/payment/otp/OtpNatoinalCode';
import UICustomizedCombo from '@/components/UI/customized_combo/UICustomizedCombo';

enum Pay_method {
  CREDIT = 'CREDIT',
  CASH = 'CASH'
}

export const dynamic = 'force-dynamic';

const Mhesam = () => {
  const router = useRouter();
  const [otp, setOtp] = useState<boolean>(false);
  const [account, setAccount] = useState<TAccount[]>();
  const [verifycode, setVerifycode] = useState<boolean>(false);
  const [issueRequestId, setIssueRequestId] = useState<number>();
  const [chosenCredits, setChosenCredits] = useState<TAccount[] | 0>(0);
  // const [payMethod, setpayMethod] = useState<
  //   Pay_method.CASH | Pay_method.CREDIT
  // >(Pay_method.CASH);
  const booking = useAppSelector<FlightBookingData>((state) => state.booking);
  let payableAmount: number = 0;
  const payable_amount = () => {
    booking.passenger.map(
      (item: any, index: number) =>
        (payableAmount += parseInt(item.payable_Fare))
    );
    return payableAmount;
  };
  // const total_credite_amount = () => {
  //   let amount: number = 0;
  //   chosenCredites?.map(
  //     (item: TAccount, index: number) => (amount += item.availableAmount)
  //   );
  //   return amount;
  // };
  // const left_amount = () => {
  //   return;
  // };
  const selectedCredits = (value: TAccount[] | undefined | any) => {
    setChosenCredits(value);
  };

  let left: number = 0;
  let Pay: string = Pay_method.CASH;
  const handleCredits = () => {
    let sum_credits: number = 0;
    chosenCredits &&
      chosenCredits?.map(
        (item: TAccount, index: number) => (sum_credits += item.availableAmount)
      );

    if (payableAmount < sum_credits) {
      Pay = Pay_method.CREDIT;
      return payableAmount;
    } else if (payableAmount > sum_credits) {
      Pay = Pay_method.CASH;
      left = payableAmount - sum_credits;
    }
    return sum_credits;
  };

  const handleChargeCredit = () => {
    // localStorage.setItem('MQRdataStore', JSON.stringify({
    //     remainingAmount,
    //     paymentCredit,
    //     satInfo,
    //     selectedCreditHesan
    // }))
    //  const remainingCharge = cartAmount - selectedCredits.reduce((sum, a) => sum + a.availableAmount, 0)
    //  const redirectUrlMQR = "http://www.mbz2.ir" + location.pathname
    // window.location.href = apiDomain + `/mhesam/credit/before-gateway?redirectUrl=${redirectUrlMQR}&amount=${remainingCharge}&access-token=${localStorage.getItem("access_token")}`
  };

  // type TodoPreview = Omit<Passenger , "id"|"passengerType"|"payable_Fare">;

  useEffect(() => {
    let adultPassengers: AdultPassenger[] = [];
    let childPassengers: ChildPassenger[] = [];
    let infantPassengers: InfantPassenger[] = [];
    booking.passenger.map(
      ({
        birthDate,
        firstName,
        iranianCartMelli,
        lastName,
        passport,
        title,
        passengerType
      }) => {
        let model = {
          title,
          firstName,
          lastName,
          birthDate,
          iranianCartMelli,
          passport
        };
        if (passengerType == 'بزرگسال') adultPassengers.push(model);
        if (passengerType == PassengerType.child) childPassengers.push(model);
        if (passengerType == PassengerType.infant) infantPassengers.push(model);
      }
    );

    let data: any = {
      departureSegment: {
        flightNumber: booking.departureSegment.flightNumber,
        departureDateTime: booking.departureSegment.departureDateTime,
        arrivalDateTime: booking.departureSegment.arrivalDateTime,
        originIataCode: booking.departureSegment.originIataCode,
        destinationIataCode: booking.departureSegment.destinationIataCode,
        fareName: booking.departureSegment.fareName,
        infant_Fare: booking.departureSegment.infant_Fare,
        child_Fare: booking.departureSegment.child_Fare,
        adult_Fare: booking.departureSegment.adult_Fare,
        lockId: booking.departureSegment.lockId
      },
      returningSegment: booking.returningSegment.flightNumber
        ? {
            flightNumber: booking.returningSegment.flightNumber,
            departureDateTime: booking.returningSegment.departureDateTime,
            arrivalDateTime: booking.returningSegment.arrivalDateTime,
            originIataCode: booking.returningSegment.originIataCode,
            destinationIataCode: booking.returningSegment.destinationIataCode,
            fareName: booking.returningSegment.fareName,
            infant_Fare: booking.returningSegment.infant_Fare,
            child_Fare: booking.returningSegment.child_Fare,
            adult_Fare: booking.returningSegment.adult_Fare,
            lockId: booking.returningSegment.lockId
          }
        : null,

      mobileNumber: '+989307711106',
      email: 'youraddress@domain.com',
      totalPayable: 6650000
    };

    if (adultPassengers.length > 0) data.adultPassengers = adultPassengers;
    if (childPassengers.length > 0) data.childPassengers = childPassengers;
    if (infantPassengers.length > 0) data.infantPassengers = infantPassengers;

    console.log('data :>> ', data);

    async function IssueRequest() {
      try {
        const response: number = await callApi().post(
          '/msafar/booking/issue-request',
          data
        );
        setIssueRequestId(response);
      } catch (error) {
        // Handle the error
        console.error(error);
      }
    }
    IssueRequest();
  }, []);

  useEffect(() => {
    async function fetchUserCreditList() {
      try {
        const response: TAccount[] = await callApi().get(
          '/mhesam/bus/user-credit-list'
        );
        setAccount(response);
      } catch (error) {
        // Handle the error
        console.error(error);
      }
    }

    fetchUserCreditList();
  }, []);

  return (
    <div className="flex flex-col p-4 bg-ms-pay w-full h-full">
      <ArrowBackIcon
        onClick={router.back}
        className="ml-1 absolute right-4 my-2 text-neutral-950 rotate-180"
      />

      <div className="min-h-[55px] px-6 mt-12 h-14 w-full bg-ms-violet flex justify-between align-middle items-center rounded-2xl">
        <span className="font-ms-bold text-ms-white ml-6">مبلغ سبد خرید</span>
        <span className="font-ms-bold text-ms-orange">
          {payable_amount()} تومان
        </span>
      </div>

      <div className="text-[#2F3134] text-ms-lg pt-10 pl-4 font-ms-bold">
        <span className="">
          برای ادامه و پرداخت خرید خود، میتوانید اعتبارات خود را به ترتیب الویت
          انتخاب نمائید
        </span>
      </div>

      <div className="w-full my-4">
        {account && (
          <UICustomizedCombo
            account={account}
            placeholder={'جستجوی اعتبار'}
            label="لطفا اعتبارات خود را انتخاب نمائید"
            selectedCredits={selectedCredits}
          />
        )}
      </div>

      <Box className="mt-48"></Box>
      <div className="w-[94%] max-w-[548px] fixed bottom-10">
        <div className=" bg-[#E5EBF5] rounded-2xl font-ms-bold text-ms-sm">
          <div className="flex justify-between p-4">
            <span className="text-[#25282B]">مبلغ کل استفاده شده</span>
            <span className="text-[#DC3A54] ">
              {/* {total_credite_amount()} تومان */}
              {handleCredits()}
            </span>
          </div>
          <div className="flex justify-between p-4">
            <span className="text-[#25282B]">
              مبلغ باقی مانده جهت شارژ اعتبار ام حسام
            </span>
            <span className="text-[#DC3A54] ">{left} تومان</span>
          </div>
        </div>

        <>
          <div className="mt-6">
           {Pay == Pay_method.CREDIT ? (
              <UiButton
                onClick={() => setVerifycode(true)}
                className="mb-0 mt-10 hover:bg-[#198B9A] text-ms-lg h-[50px] w-full border-none text-ms-white font-ms-medium bg-[#009AAE] rounded-[15px]"
                text="تایید و پرداخت"
              />
            ):<></>}
            </div>
          <div className="mt-6">
            {Pay == Pay_method.CASH && (
              <UiButton
                onClick={handleChargeCredit}
                className="mb-0 mt-10 hover:bg-ms-btn-green-23 text-ms-lg h-[50px] w-full border-none text-ms-white font-ms-medium bg-ms-btn-green-23 rounded-[15px]"
                text="درگاه پرداخت"
              />
            )}
          </div>
        </>
      </div>

      {otp && (
        <div>
          <ModalGestures
            title={''}
            isOpen={otp}
            onClose={() => setOtp(false)}
            className={'overflow-scroll'}
            initialSnap={2}
            customStyle={{ background: '#F6F7F9' }}
          >
            {chosenCredits && (
              <OtpVerifycode
                chosenCredits={chosenCredits}
                issueRequestId={issueRequestId}
              />
            )}
          </ModalGestures>
        </div>
      )}

      {verifycode && (
        <div>
          <ModalGestures
            title={''}
            isOpen={verifycode}
            onClose={() => setVerifycode(false)}
            className={'overflow-scroll'}
            initialSnap={2}
            customStyle={{ background: '#F6F7F9' }}
          >
            <OtpNatoinalCode issueRequestId={issueRequestId} setOtp={setOtp} />
          </ModalGestures>
        </div>
      )}
    </div>
  );
};

export default Mhesam;
