"use client"


import DateRangeCalendar from '@/components/common/calanders/DateRangeCalendar';
import CustomizedOptions from '@/components/common/customized-options/CustomizedOptions';
import ModalGestures from '@/components/common/modal/ModalGestures ';
import SearchBar from '@/components/common/search-bar/SearchBar';
import DestinationView from '@/components/layout/DestinationView';
import OriginVeiw from '@/components/layout/OriginVeiw';
import PassengersVeiw from '@/components/layout/PassengersVeiw';
import Image from 'next/image';
import { useState } from 'react';

const UiCustomizedTabTwo = ({status}:any) => {
  console.log('statusssssssss :>> ', status);
  const [isOpenOrigin, setOpenOrigin] = useState(false);
  const [isOpenDestination, setOpenDestination] = useState(false);
  const [isOpenPassengers, setOpenPassengers] = useState(false);

  const [origin, setOrigin] = useState("Tehran");
  const [destination, setDestination] = useState("Mashhad");



  const ChangeOriginAndDestination = () => {
    // Swap the origin and destination
    const newOrigin = destination;
    const newDestination = origin;

    setOrigin(newOrigin);
    setDestination(newDestination);
  };

  const ChangeOriginAndDestination2 = () => {
    // Get the origin and destination elements
    const originElement = document.querySelector(".origin");
    const destinationElement = document.querySelector(".destination");
  
    // Swap the values of the origin and destination elements
    // const originValue = originElement?.value;
    // originElement.value = destinationElement?.value;
    // destinationElement.value = originValue;
  };
  

  const ChooseOrigin = () => setOpenOrigin(true);
  const onCloseOrigin = () => setOpenOrigin(false);
  
  const ChooseDestination = () => setOpenDestination(true);
  const onCloseDestination = () => setOpenDestination(false);

  const ChoosePassengers = () => setOpenPassengers(true);
  const onClosePassengers = () => setOpenPassengers(false);
  


  return (
    <>


      <div className="h-[116px] mt-[16px] relative bg-ms-white w-full rounded-[30px]  shadow-[0px 0px 1px 0px #11111126]">
        <div onClick={ChooseOrigin} className="text-orange flex justify-end flex-row align-middle items-center mx-5 mt-5 font-ms-iranSansMobile">
          <span className={`${origin ? "text-ms-green" : "text-[#969F9F]" } text-ms-sm mx-2 font-ms-regular -mb-1`}>
          {origin ? origin: "(شهر)"}
          </span>
          <span className={`${origin ? "text-ms-green" : "text-ms-thick-green"}    font-ms-medium`}>مبدا</span>
          <Image
            className="ml-1"
            src={`/static/images/flights/${origin ?"location-icon-selected.svg" :"location-icon.svg" }`}
            alt={'flight'}
            width={23} //automatically provided
            height={23} //automatically provide
          />
        </div>

        <div className="flex flex-row">
          <div className="w-[65%] xs:w-[75%] mt-[17px] right-[5%] absolute flex justify-end items-end border-[#F5BB00] border-dashed border-[1px] divide-[#F5BB00]"></div>
          <div className="w-[25%]">
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

        <div onClick={ChooseDestination} className="flex justify-end flex-row align-middle items-center mx-5 -mt-2 font-ms-iranSansMobile">
          <span 
          className={`${destination ? "text-ms-green" : "text-[#969F9F]"} text-ms-sm mx-2 font-ms-regular -mb-1`}>
            {destination ? destination : "(شهر)"}
          </span>
          <span className={`${destination ? "text-ms-green" : "text-ms-thick-green"}    font-ms-medium`}>مقصد</span>
          <Image
            className="ml-1"
            src={`/static/images/flights/${destination ?"location-icon-selected.svg" :"location-icon.svg" }`}
            alt={'flight'}
            width={23} //automatically provided
            height={23} //automatically provide
          />
        </div>
      </div>

      <div className="h-[50px] relative flex align-middle items-center justify-end bg-ms-white w-full font-ms-iranSansMobile rounded-[30px] mt-[24px] shadow-[0px 0px 1px 0px #11111126]">
        <div className="flex flex-row  mx-5 ">
          <span className="text-ms-thick-green font-ms-medium">تاریخ رفت</span>
          <Image
            className="ml-1"
            src={'/static/images/flights/calendar-icon.svg'}
            alt={'flight'}
            width={23} //automatically provided
            height={23} //automatically provide
          />
        </div>
      </div>

      {status == 'twoWay' ? (
        <div className="h-[50px] relative flex align-middle items-center justify-end bg-ms-white w-full font-ms-iranSansMobile rounded-[30px] mt-[24px] shadow-[0px 0px 1px 0px #11111126]">
          <div className="flex flex-row  mx-5 ">
            <span className="text-ms-thick-green font-ms-medium">
              تاریخ برگشت
            </span>
            <Image
              className="ml-1"
              src={'/static/images/flights/calendar-icon.svg'}
              alt={'flight'}
              width={23} //automatically provided
              height={23} //automatically provide
            />
          </div>
        </div>
      ) : ""
      }

      <div 
       onClick={ChoosePassengers} 
       className="h-[50px] relative flex align-middle items-center justify-end bg-ms-white w-full font-ms-iranSansMobile rounded-[30px] mt-[24px] shadow-[0px 0px 1px 0px #11111126]">
        <div className="flex flex-row mx-5 ">
          <span className="text-ms-thick-green font-ms-medium">1مسافر</span>
          <Image
            className="ml-1"
            src={'/static/images/flights/user-icon.svg'}
            alt={'flight'}
            width={23} //automatically provided
            height={23} //automatically provide
          />
        </div>
      </div>

      {isOpenOrigin && (
          <div>
            <ModalGestures
             title='انتخاب مبدا'
              isOpen={isOpenOrigin}
              onClose={onCloseOrigin}
            >
              <DestinationView />
            </ModalGestures>
          </div>
        )}
      {isOpenDestination && (
          <div>
           
           
              <ModalGestures
                  title='انتخاب مقصد'
                  isOpen={isOpenDestination}
                  onClose={onCloseDestination}
                  className='overflow-scroll'
                  // initialSnap={7}
                >

              <OriginVeiw />

            </ModalGestures>
          </div>
        )}
        
      {/* {true && (
          <div>
           
           
              <ModalGestures
                  title='eeeeee'
                  isOpen={isOpenPassengers}
                  onClose={onClosePassengers}
                  className='overflow-scroll'
                  // initialSnap={7}
                >

              <DateRangeCalendar 
                originDate={originDate}
                setOriginDate={setOriginDate}
                destinationDate={destinationDate}
                setDestinationDate={setDestinationDate}
                />

            </ModalGestures>
          </div>
        )} */}
      {isOpenPassengers && (
          <div>
           
           
              <ModalGestures
                  title='مسافران'
                  isOpen={isOpenPassengers}
                  onClose={onClosePassengers}
                  className='overflow-scroll'
                  // initialSnap={7}
                >

              <PassengersVeiw />

            </ModalGestures>
          </div>
        )}
    </>
  );
};

export default UiCustomizedTabTwo;
