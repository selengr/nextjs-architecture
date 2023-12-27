'use client';

import Image from 'next/image';
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/redux/hook';
import UiButton from '@/components/UI/ui-button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { FlightBookingData } from '@/@types/flight/bookingProcess';
import UICustomizedCombo from '@/components/UI/customized_combo/UICustomizedCombo';


const Maghsat_plus = () => {
  const router = useRouter()
  const booking = useAppSelector<FlightBookingData>((state) => state.booking);
  console.log('booking === Maghsat_plus :>> ', booking);


  const total_amount = () =>{
   let amount : number  = 0
   booking.passenger.map((item:any,index:number)=> amount += parseInt(item.payable_Fare))
   return amount
  }


  return (
    <div className="flex flex-col bg-ms-pay w-full">
      <div className="w-full bg-ms-violet pb-3 flex justify-around place-items-end rounded-b-3xl relativel min-h-[110px] h-28">
        <div className="w-full flex justify-center ">
          <ArrowBackIcon onClick={router.back}  className="ml-1 absolute right-4 text-ms-white rotate-180"/>

          <span className="font-ms-bold text-ms-white w-full flex justify-center text-center items-center">
            اعتبار ام اقساط پلاس
          </span>

          <Image
            className="ml-1 absolute left-4"
            src={'/static/icons/components/maghsat-worn.png'}
            alt={'worn'}
            width={20} //automatically provided
            height={20} //automatically provide
          />
        </div>
      </div>

      <div className="p-4">
        <div
          style={{
            background:
              'linear-gradient(270deg, #EAFFFE 0%, #FFF 45.92%, #EAFFFE 97.96%)'
          }}
          className="p-4 mt-8 mb-6 text-[#2F3134] text-ms-lg font-ms-bold flex justify-between rounded-2xl"
        >
          <span className="">مجموع مبلغ </span>
          <span className="">
            {total_amount()} تومان </span>
        </div>

        <div className="w-full my-4 bg-ms-white p-4 rounded-2xl min-h-[60%] max-h-[100%]">
          <span className="font-ms-bold text-[#FF2E00] text-ms-xs mb-4">
            کاربر گرامی شما میتوانید اولویت اعتبارات خود را تغییر دهید.
          </span>
          {/* <UICustomizedCombo placeholder={'اعتبارات خود را انتخاب نمائید'} /> */}
        </div>

        <Box className="mt-36"></Box>

        <div className="w-[92%] mt-4 font-ms-bold text-ms-sm max-w-[549px] fixed bottom-12">
          <div className="flex justify-between p-4 text-[#25282B]">
            <span className="">مبلغ باقی مانده</span>
            <span className="">3.000.000 تومان</span>
          </div>
        <div>
          <UiButton
            // onClick={handle_Booking}
            className="hover:bg-[#07BEB8] text-ms-lg h-[50px] w-full border-none text-ms-white font-ms-medium bg-[#07BEB8] rounded-[15px]"
          >
            <span className="text-ms-lg">ادامه و پرداخت 5.000.000 تومان</span>
          </UiButton>
        </div>
        </div>


      </div>
    </div>
  );
};

export default Maghsat_plus;
