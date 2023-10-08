'use client';

import CustomMultiDatePicker from '@/components/common/calanders/CustomMultiDatePicker';
import DateRangeCalendar from '@/components/common/calanders/DateRangeCalendar';
import CustomizedOptions from '@/components/common/customized-options/CustomizedOptions';
import ModalGestures from '@/components/common/modal/ModalGestures ';
import SearchBar from '@/components/common/search-bar/SearchBar';
import DestinationView from '@/components/layout/DestinationView';
import OriginVeiw from '@/components/layout/OriginVeiw';
import PassengersVeiw from '@/components/layout/PassengersVeiw';
import Image from 'next/image';
import { useState } from 'react';
import UiButton from '../ui-button';
import { toast } from 'sonner';

let dateReturnPreminent = '';
let dateDeparturePreminent = '';

const UiCustomizedTabTwo = ({ status }: any) => {
  console.log('statusssssssss :>> ', status);
  const [isOpenOrigin, setOpenOrigin] = useState(false);
  const [isOpenDestination, setOpenDestination] = useState(false);
  const [isOpenPassengers, setOpenPassengers] = useState(false);
  const [todayDate, setTodayDate] = useState<Date | Date[]>(new Date());

  const [origin, setOrigin] = useState('Tehran');
  const [destination, setDestination] = useState('Mashhad');

  const [isOpenReturnDate, setOpenReturnDate] = useState(false);
  const [isOpenDepartureDate, setOpenDepartureDate] = useState(false);

  const [returnDate, setReturnDate] = useState<any>(false);
  const [departureDate, setDepartureDate] = useState({
    day : "",
    month: "",
    year : ""
  });

  const ChangeOriginAndDestination = () => {
    // Swap the origin and destination
    const newOrigin = destination;
    const newDestination = origin;

    setOrigin(newOrigin);
    setDestination(newDestination);
  };

  const ChangeOriginAndDestination2 = () => {
    // Get the origin and destination elements
    const originElement = document.querySelector('.origin');
    const destinationElement = document.querySelector('.destination');

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

  const ChooseDepatureDate = () => setOpenDepartureDate(true);
  const onCloseDepatureDate = () => setOpenDepartureDate(false);

  const ChooseReturnDate = () => setOpenReturnDate(true);
  const onCloseReturnDate = () => setOpenReturnDate(false);

  const handleDepartureDate = (time:any) => {
    // setDepartureDate(time.toString())
    setOpenDepartureDate(false)
    toast.success('soon')
  }

  const handleReturnDate = () => setOpenReturnDate(false);


  console.log('departureDatetodayDate :>> ', todayDate);
  console.log('departureDate.year ? departureDate?.year  ', departureDate.year);

  return (
    <>
      <div className="h-[116px] mt-[16px] relative bg-ms-white w-full rounded-[30px]  shadow-[0px 0px 1px 0px #11111126]">
        <div
          onClick={ChooseOrigin}
          className="text-orange flex flex-row align-middle items-center mx-5 mt-5 font-ms-iranSansMobile"
        >
          <Image
            className="ml-1"
            src={`/static/images/flights/${
              origin ? 'location-icon-selected.svg' : 'location-icon.svg'
            }`}
            alt={'flight'}
            width={23} //automatically provided
            height={23} //automatically provide
          />
          <span
            className={`${
              origin ? 'text-ms-green' : 'text-ms-thick-green'
            }    font-ms-medium`}
          >
            مبدا
          </span>

          <span
            className={`${
              origin ? 'text-ms-green' : 'text-[#969F9F]'
            } text-ms-sm mx-2 font-ms-regular -mb-1`}
          >
            {origin ? origin : '(شهر)'}
          </span>
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
            src={`/static/images/flights/${
              destination ? 'location-icon-selected.svg' : 'location-icon.svg'
            }`}
            alt={'flight'}
            width={23} //automatically provided
            height={23} //automatically provide
          />

          <span
            className={`${
              destination ? 'text-ms-green' : 'text-ms-thick-green'
            }    font-ms-medium`}
          >
            مقصد
          </span>
          <span
            className={`${
              destination ? 'text-ms-green' : 'text-[#969F9F]'
            } text-ms-sm mx-2 font-ms-regular -mb-1`}
          >
            {destination ? destination : '(شهر)'}
          </span>
        </div>
      </div>

      <div
        onClick={ChooseDepatureDate}
        className="h-[50px] relative flex align-middle items-center  bg-ms-white w-full font-ms-iranSansMobile rounded-[30px] mt-[24px] shadow-[0px 0px 1px 0px #11111126]"
      >
        <div className="flex flex-row mx-5 justify-between w-full">
          <div className='flex justify-start'>
          <Image
            className="ml-1"
            src={`/static/images/flights/${
              departureDate.year ? 'calendar-choose.svg' : 'calendar-icon.svg'
            }`}
            alt={'flight'}
            width={23} //automatically provided
            height={23} //automatically provide
          />
          <span 
          className={`${
            departureDate.year ? 'text-ms-green' : 'text-ms-thick-green'
          } font-ms-medium`}
          >
            {departureDate.year ? departureDate.year : 'تاریخ رفت'}
          </span>
          </div>

                   <Image
                      className="ml-1"
                      src={'/static/images/flights/close_icon.svg'}
                      alt={'flight'}
                      width={20} //automatically provided
                      height={20} //automatically provide
                    />

        </div>
      </div>

      {status == 'twoWay' ? (
        <div
          onClick={ChooseReturnDate}
          className="h-[50px] relative flex align-middle items-center bg-ms-white w-full font-ms-iranSansMobile rounded-[30px] mt-[24px] shadow-[0px 0px 1px 0px #11111126]"
        >
          <div className="flex flex-row  mx-5 ">
            <Image
              className="ml-1"
              src={`/static/images/flights/${
                returnDate.year ? 'calendar-choose.svg' : 'calendar-icon.svg'
              }`}
              alt={'flight'}
              width={23} //automatically provided
              height={23} //automatically provide
            />
            <span
            className={`${
              returnDate.year ? 'text-ms-green' : 'text-ms-thick-green'
              } font-ms-medium`}
            >
              {returnDate ? returnDate : 'تاریخ برگشت'}
            </span>
          </div>
        </div>
      ) : (
        ''
      )}

      <div
        onClick={ChoosePassengers}
        className="h-[50px] relative flex align-middle items-center bg-ms-white w-full font-ms-iranSansMobile rounded-[30px] mt-[24px] shadow-[0px 0px 1px 0px #11111126]"
      >
        <div className="flex flex-row mx-5 ">
          <Image
            className="ml-1"
            src={'/static/images/flights/user-icon.svg'}
            alt={'flight'}
            width={23} //automatically provided
            height={23} //automatically provide
          />
          <span className="text-ms-thick-green font-ms-medium">1مسافر</span>
        </div>
      </div>

      {isOpenOrigin && (
        <div>
          <ModalGestures
            title="انتخاب مبدا"
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
            title="انتخاب مقصد"
            isOpen={isOpenDestination}
            onClose={onCloseDestination}
            className="overflow-scroll"
            // initialSnap={7}
          >
            <OriginVeiw />
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
            // initialSnap={7}
          >
            {/* <DateRangeCalendar /> */}

            <CustomMultiDatePicker
              value={departureDate.year ? departureDate?.year : todayDate}
              onChange={(time) =>{
                //  console.log('time :>> ', time.day)
                //  console.log('time ', time.month.name)
                setDepartureDate({
                  day : time.day,
                  month : time.month.name,
                  year : time.toString()
                })
                }
              }
              // onChange={(time: string) => (dateDeparturePreminent = time)}
              selectDateRange={false}
              dateFormat="DD/MM/YYYY"
              locale='fa'
              theme="dark"
            />
            {departureDate.day && (
              <div className="flex flex-row justify-between items-center mt-6 text-[#969696] text-ms-xs w-full">
             
             <UiButton
                  onClick={() => toast.error('please fill all input')}
                  className="bg-transparent border-ms-border-green-33 p-2 border-solid border-2 text-ms-lg h-[40px] text-ms-white rounded-xl w-full"
                  text=""
                >
                  <div className="flex flex-row">
                    <span className="text-ms-green text-ms-sm p-2 py-4"> انتخاب تاریخ برگشت </span>
                    <Image
                      className="ml-1"
                      src={'/static/images/flights/plus-green.svg'}
                      alt={'flight'}
                      width={10} //automatically provided
                      height={10} //automatically provide
                    />

                  </div>   
                </UiButton>
             
             
             
             
             
                <span className="px-2 text-[#000] text-ms-sm">
                  {' '}
                  رفت
                  <span className="text-[#969696] text-ms-xs">
                    {' '}
                    &nbsp; {departureDate?.day} {departureDate?.month}
                  </span>
                </span>   
              </div>
           )} 

            <UiButton
              onClick={handleDepartureDate}
              className="top-5 bg-ms-btn-green-23 hover:bg-ms-btn-green-33 text-ms-lg h-[50px] text-ms-white rounded-2xl w-full"
              text="تایید"
            />
          </ModalGestures>
        </div>
      )}

      {isOpenReturnDate && (
        <div>
          <ModalGestures
            title="تاریخ برگشت"
            isOpen={isOpenReturnDate}
            onClose={onCloseReturnDate}
            className="overflow-scroll"
            // initialSnap={7}
          >
            {/* =================================2 */}
            <CustomMultiDatePicker
              value={departureDate?.year}
              
              // value={departureDate?.year}
              onChange={(time:any) => setReturnDate(time.toString())}
              // onChange={(time: string) => (datePreminent = time)}
              selectDateRange={true}   
              dateFormat="DD/MM/YYYY"
              theme="dark" 
              locale='fa'
            />

            <div className="flex flex-row mt-8 text-[#969696] text-ms-xs">
              {departureDate.day && (
                <span className="px-2 text-[#000] text-ms-sm">
                  {' '}
                  رفت
                  <span className="text-[#969696] text-ms-xs">
                    {' '}
                    &nbsp; {departureDate.day}
                  </span>
                </span>
              )}
              {returnDate && (
                <span className="px-2 text-[#000] text-ms-sm">
                  {' '}
                  برگشت
                  <span className="text-[#969696] text-ms-xs">
                    {' '}
                    &nbsp; {returnDate}
                  </span>
                </span>
              )}
            </div>

            <UiButton
              onClick={() => toast.error('please fill all input')}
              className="bg-ms-btn-green-23 hover:bg-ms-btn-green-33 text-ms-lg h-[50px] text-ms-white rounded-2xl w-full"
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
