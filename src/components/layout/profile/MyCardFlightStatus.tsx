"use client"

import ModalGestures from "@/components/common/modal/ModalGestures ";
import Image from "next/image";
import { useState } from "react";
import RefundReason from "./RefundReason";
import PreviewReund, { PreviewRefundHeader } from './PreviewReund';



const MyCardFlightStatus = () => {
    const [isOpenRefund, setOpenRefund] = useState<boolean>(false)
    return (
        <>
        <div className="flex flex-row justify-between w-full items-center ">
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
            سیسمتی
            {/* {flightClass.onewayFare?.adult_Fare.baseFare && <span>سیستمی</span>}
          {flightClass.adultFare?.baseFare && <span>چارتری</span>} */}
          </span>
        </div>

        <div className="flex flex-row pt-6 px-2">
          <div className="flex flex-col w-2/12">
            <span className="text-ms-thick-green text-lg font-ms-medium">
              مبدا
            </span>
            <span className="text-[#605858] text-sm font-ms-regular pt-1">
              {/* {flight.origin.code} */}78
            </span>
            <span className="text-ms-thick-green text-sm font-ms-medium pt-2">
              {/* {flight.departureDateTime.split(' ')[1]} */}52
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
              {/* {flight.destination.code} */}12
            </span>
            <span className="text-ms-thick-green text-sm font-ms-medium pt-2 flex justify-end">
              {/* {flight.arrivalDateTime.split(' ')[1]} */}85531
            </span>
          </div>
        </div>

   
        <div className="flex flex-row justify-between w-full items-center p-1 pb-0 py-4">
          <span className="py-2 px-8 bg-[#C9FFE6] font-medium text-sm font-ms-iranSansMobile rounded-3xl">
            نهایی شده
          </span>
          <span
            onClick={()=>setOpenRefund(true)}
          className="text-ms-crimson font-medium text-sm flex flex-row">
            تعداد ۳ مسافر /استرداد
            <Image
            className='rotate-90'
              src={'/static/images/flights/arrow-down.svg'}
              alt={'card'}
              width={10} //automatically provided
              height={6} //automatically provided
            />
          </span>
        </div>

        
        {isOpenRefund && (
        <div>
          <ModalGestures
            title={<PreviewRefundHeader />}
            isOpen={isOpenRefund}
            onClose={()=>setOpenRefund(false)}
            className="overflow-scroll"
            // initialSnap={7}
          >
             <PreviewReund />
          </ModalGestures>
        </div>
      )}
      </>
    );
}

export default MyCardFlightStatus;