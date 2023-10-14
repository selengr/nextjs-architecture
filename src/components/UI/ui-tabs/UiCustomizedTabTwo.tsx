'use client';

import CustomMultiDatePicker from '@/components/common/calanders/CustomMultiDatePicker';
import DateRangeCalendar from '@/components/common/calanders/DateRangeCalendar';
import CustomizedOptions from '@/components/common/customized-options/CustomizedOptions';
import ModalGestures from '@/components/common/modal/ModalGestures ';
import SearchBar from '@/components/common/search-bar/SearchBar';
import DestinationView from '@/components/Layout/DestinationView';
import OriginVeiw from '@/components/Layout/OriginVeiw';
import Image from 'next/image';
import { useState } from 'react';
import UiButton from '../ui-button';
import { toast } from 'sonner';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { addPassengers, setCity, setDepartureDate, twoWayDate } from '@/redux/slices/flights';
import PassengersVeiw from '@/components/Layout/PassengersVeiw';




const UiCustomizedTabTwo = ({ status }: any) => {

  const [isOpenOrigin, setOpenOrigin] = useState(false);
  const [isOpenDestination, setOpenDestination] = useState(false);
  const [isOpenPassengers, setOpenPassengers] = useState(false);
  const [todayDate, setTodayDate] = useState<Date | Date[]>(new Date());

  const [origin, setOrigin] = useState('Tehran');
  const [destination, setDestination] = useState('Mashhad');

  const [isOpenTwoWay, setOpenTwoWay] = useState<boolean>(false);
  const [isOpenDepartureDate, setOpenDepartureDate] = useState(false);

  const dispatch = useAppDispatch()
  const twoWay = useAppSelector((state) => state.flight);
  const departureDate = useAppSelector((state) => state.flight);


  // const [departureDate, setDepartureDate] = useState({
  //   day: '',
  //   month: '',
  //   year: ''
  // });

  const ChangeOriginAndDestination = () => {
      dispatch(setCity({
        type : "DESTINATION",
        destination: departureDate.city?.origin as string
      }));
      dispatch(setCity({
        type : "ORIGIN",
        origin : departureDate.city?.destination as string
      }));
    // Swap the origin and destination
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

  const onCloseDepatureDate = () => {
    dispatch(setDepartureDate({
        day: "",
        month : "",
        year: ""
    }));
    setOpenDepartureDate(false);
  }

  const ChooseDepatureAndReturnDate = () => setOpenTwoWay(true);
  const onCloseTwoWay = () => {
    dispatch(twoWayDate(
      {
      departure: {
        day: "",
        month_name: "",
        month_number: "",
        year: ""
      },
        return: {
        day: "",
        month_name: "",
        month_number: "",
        year: ""
      },
      fullRangeDate : "",
    }
    ));
    setOpenTwoWay(false);
  }

  const handleDepartureDate = () => {
    if(departureDate.day && departureDate.month){
       setOpenDepartureDate(false);
       toast.success('تاریخ رفت انتخاب شد');
    }else {
      toast.error('ابتدا تاریخ رفت را انتخاب کنید');
    }
   
  };

  const handleTwoWay = () => {
    if(twoWay.return.day  && twoWay.departure.day && twoWay.departure.year !== "undefined" && twoWay.return.year !== "undefined") {
      setOpenTwoWay(false);
      toast.success('تاریخ رفت و برگشت انتخاب شد');
    }else if(!twoWay.departure.day || !twoWay.departure.month_name|| !twoWay.return.day && !twoWay.return.month_name){
      toast.error(' تاریخ رفت و برگشت انتخاب شود');
   }else  if(!twoWay.return.day && !twoWay.return.month_name) {
     toast.error(' تاریخ برگشت انتخاب شود');
   }else {
    toast.error('لطفا تاریخ رفت و برگشت را انتخاب کنید');
   }
   console.log('[twoWay.fullRangeDate] :>> ', twoWay.fullRangeDate.split(","));
  };


  // ------------------
  const confirm = (passengers:any) => {
  // dispatch(addPassengers(passengers))
  setOpenPassengers(false)
  // toast.success('انتخاب شد')
}

  // ------------------
  const Test = () => {
    let counts : number = 0
    twoWay.passengers?.map((item)=>{
      counts += item.count;
    })
    return counts
}


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
              departureDate.city?.origin ? 'location-icon-selected.svg' : 'location-icon.svg'
            }`}
            alt={'flight'}
            width={23} //automatically provided
            height={23} //automatically provide
          />
          <span
            className={`${
              departureDate.city?.origin ? 'text-ms-green' : 'text-ms-thick-green'
            }    font-ms-medium`}
          >
            مبدا
          </span>

          <span
            className={`${
              departureDate.city?.origin ? 'text-ms-green' : 'text-[#969F9F]'
            } text-ms-sm mx-2 font-ms-regular -mb-1`}
          >
            {departureDate.city?.origin ? departureDate.city?.origin : '(شهر)'}
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
              departureDate.city?.destination ? 'location-icon-selected.svg' : 'location-icon.svg'
            }`}
            alt={'flight'}
            width={23} //automatically provided
            height={23} //automatically provide
          />

          <span
            className={`${
              departureDate.city?.destination ? 'text-ms-green' : 'text-ms-thick-green'
            }    font-ms-medium`}
          >
            مقصد
          </span>
          <span
            className={`${
              departureDate.city?.destination ? 'text-ms-green' : 'text-[#969F9F]'
            } text-ms-sm mx-2 font-ms-regular -mb-1`}
          >
            {departureDate.city?.destination ? departureDate.city?.destination : '(شهر)'}
          </span>
        </div>
      </div>

      {status == 'oneWay' ? (
        <div
          onClick={ChooseDepatureDate}
          className="h-[50px] relative flex align-middle items-center  bg-ms-white w-full font-ms-iranSansMobile rounded-[30px] mt-[24px] shadow-[0px 0px 1px 0px #11111126]"
        >
          <div className="flex flex-row mx-5 justify-between w-full">
            <div className="flex justify-start">
              <Image
                className="ml-1"
                src={`/static/images/flights/${
                  departureDate.year
                    ? 'calendar-choose.svg'
                    : 'calendar-icon.svg'
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
                {departureDate.year ? (
                  <span className="flex flex-row">
                    {departureDate.year}
                  </span>
                ) : (
                  'تاریخ رفت'
                )}
              </span>
            </div>

            {departureDate.year && (
              <Image
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(setDepartureDate({
                    day: "",
                    month : "",
                    year: ""
                }));
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
          className="h-[50px] relative flex align-middle items-center  bg-ms-white w-full font-ms-iranSansMobile rounded-[30px] mt-[24px] shadow-[0px 0px 1px 0px #11111126]"
        >
          <div className="flex flex-row mx-5 justify-between w-full">
            <div className="flex justify-start">
              <Image
                className="ml-1"
                src={`/static/images/flights/${
                  twoWay.departure.day
                    ? 'calendar-choose.svg'
                    : 'calendar-icon.svg'
                }`}
                alt={'flight'}
                width={23} //automatically provided
                height={23} //automatically provide
              />
              <span
                className={`${
                  twoWay.departure.day ? 'text-ms-green' : 'text-ms-thick-green'
                } font-ms-medium`}
              >
                {twoWay.departure.day ? (
                  <>
                    {twoWay.return.year}/{twoWay.return.month_number}/
                    {twoWay.return.day}
                  </>
                ) : (
                  'تاریخ رفت'
                )}
              </span>
            </div>

            <div className="flex flex-row mx-5 justify-between w-6/12 border-r-[1px] h-full border-r-ms-gray pr-4">
              <div className="flex justify-start">
                <Image
                  className="ml-1"
                  src={`/static/images/flights/${
                    twoWay.return.day
                      ? 'calendar-choose.svg'
                      : 'calendar-icon.svg'
                  }`}
                  alt={'flight'}
                  width={23} //automatically provided
                  height={23} //automatically provide
                />
                <span
                  className={`${
                    twoWay.return.day ? 'text-ms-green' : 'text-ms-thick-green'
                  } font-ms-medium`}
                >
                  {twoWay.return.day ? (
                    <>
                      {twoWay.return.year}/{twoWay.return.month_number}/
                      {twoWay.return.day}
                    </>
                  ) : (
                    'تاریخ برگشت'
                  )}
                </span>
              </div>
            </div>
          </div>

          {twoWay.return.year && (
            <Image
              onClick={(e) => {
                e.stopPropagation();
                // setOpenDepartureDate
                dispatch(twoWayDate(
                  {
                  departure: {
                    day: "",
                    month_name: "",
                    month_number: "",
                    year: ""
                  },
                    return: {
                    day: "",
                    month_name: "",
                    month_number: "",
                    year: ""
                  },
                  fullRangeDate : "",
                }
                ));
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
        //         //   className="h-[50px] relative flex align-middle items-center bg-ms-white w-full font-ms-iranSansMobile rounded-[30px] mt-[24px] shadow-[0px 0px 1px 0px #11111126]"
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


          <span className={`${Test() > 1 ?  'text-ms-green' :"text-ms-thick-green"}  font-ms-medium`}>{Test()}مسافر</span>
        </div>
      </div>

      {isOpenOrigin && (
        <div>
          <ModalGestures
            title="انتخاب مبدا"
            isOpen={isOpenOrigin}
            onClose={onCloseOrigin}
            >
             <OriginVeiw onClose={()=>setOpenOrigin(false)}/>
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
            <DestinationView onClose={onCloseDestination}/>
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
              onChange={(time) => {
                dispatch(setDepartureDate({
                  day: time.day,
                  month: time.month.name,
                  year: time.toString()
              }));
                // setDepartureDate({
                //   day: time.day,
                //   month: time.month.name,
                //   year: time.toString()
                // });
              }}
              // onChange={(time: string) => (dateDeparturePreminent = time)}
              selectDateRange={false}
              dateFormat="YYYY/MM/DD"
              locale="fa"
              theme="dark"
            />
            {departureDate.day && (
              <div className="flex flex-row justify-between items-center mt-6 text-[#969696] text-ms-xs w-full">
             
             <span className="px-2 text-[#000] text-ms-sm">
                  {' '}
                  رفت
                  <span className="text-[#969696] text-ms-xs">
                    {' '}
                    &nbsp; {departureDate?.day} {departureDate?.month}
                  </span>
                </span>
             
                <UiButton
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
                </UiButton>

                
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

      {isOpenTwoWay && (
        <div>
          <ModalGestures
            title="تاریخ برگشت"
            isOpen={isOpenTwoWay}
            onClose={onCloseTwoWay}
            className="overflow-scroll"
            // initialSnap={7}
          >
            {/* =================================2 */}
            <CustomMultiDatePicker
             value={ twoWay.fullRangeDate && twoWay.fullRangeDate !== "undefined" ? twoWay.fullRangeDate.split(",")
                 : todayDate
              }
            // const [valuew, setValue] = useState(["2023-10-09", "2023-10-15"]);
            // value={todayDate}
              onChange={(time) => {
                console.log("tttttttttttttttttttttttt",time.toString());
                dispatch(twoWayDate(
                  {
                  departure: {
                    day: String(time?.[0].day),
                    month_name: String(time?.[0].month.name),
                    month_number: String(time?.[0].month.number),
                    year: String(time?.[0].year)
                  },
                    return: {
                    day: String(time?.[1]?.day),
                    month_name: String(time?.[0].month.name),
                    month_number: String(time?.[0].month.number),
                    year: String(time?.[1]?.year)
                  },
                  fullRangeDate : ""
                }
                ));

                // setTwoWay({
                //   departure: {
                //     day: String(time?.[0].day),
                //     month_name: String(time?.[0].month.name),
                //     month_number: String(time?.[0].month.number),
                //     year: String(time?.[0].year)
                //   },
                //   return: {
                //     day: String(time?.[1]?.day),
                //     month_name: String(time?.[0].month.name),
                //     month_number: String(time?.[0].month.number),
                //     year: String(time?.[1]?.year)
                //   },
                //   fullRangeDate : time.toString()
                // });
              }}
              //  setDepartureDate(time.toString())}
              // onChange={(time: string) => console.log(time)}
              selectDateRange={true}
              dateFormat="DD/MM/YYYY"
              theme="dark"
              locale="en"
            />

            <div className="flex flex-row mt-8 text-[#969696] text-ms-xs mb-6">
              {twoWay.departure.day.length > 0 && (
                <span className="px-2 text-[#000] text-ms-sm">
                  {' '}
                  رفت
                  <span className="text-[#969696] text-ms-xs">
                    {' '}
                    &nbsp; {twoWay.departure.day} {twoWay.departure.month_name}
                    &nbsp;
                  </span>
                </span>
              )}
              {twoWay.return.day && twoWay.return.day !== 'undefined' && (
                <span className="px-2 text-[#000] text-ms-sm">
                  {' '}
                  برگشت
                  <span className="text-[#969696] text-ms-xs">
                    {' '}
                    &nbsp; {twoWay.return.day} {twoWay.return.month_name}
                  </span>
                </span>
              )}
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
            // initialSnap={7}
          >
            <PassengersVeiw confirm={confirm}/>
          </ModalGestures>
        </div>
      )}
    </>
  );
};




export default UiCustomizedTabTwo;


