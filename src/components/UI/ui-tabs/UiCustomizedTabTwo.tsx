import CustomizedOptions from '@/components/common/customized-options/CustomizedOptions';
import ModalGestures from '@/components/common/modal/ModalGestures ';
import SearchBar from '@/components/common/search-bar/SearchBar';
import Image from 'next/image';
import { useState } from 'react';

const UiCustomizedTabTwo = ({status}:any) => {
  console.log('statusssssssss :>> ', status);
  const [isOpenOrigin, setOpenOrigin] = useState(false);
  const [isOpenDestination, setOpenDestination] = useState(false);
  const [value, setValue] = useState("");

  const ChooseOrigin = () => {
    setOpenOrigin(true);
  };
  const ChooseDestination = () => {
    setOpenDestination(true);
  };
  const onCloseDestination = () => {
    setOpenDestination(false);
  };
  const onCloseOrigin = () => {
    setOpenOrigin(false);
  };

  return (
    <>
      <div className="h-[116px] mt-[16px] relative bg-ms-white w-full rounded-[30px]  shadow-[0px 0px 1px 0px #11111126]">
        <div onClick={ChooseOrigin} className="flex justify-end flex-row align-middle items-center mx-5 mt-5 font-ms-iranSansMobile">
          <span className="text-[#969F9F] text-ms-sm mx-2 font-ms-regular">
            (شهر)
          </span>
          <span className="text-ms-thick-green font-ms-medium">مبدا</span>
          <Image
            className="ml-1"
            src={'/static/images/flights/location-icon.svg'}
            alt={'flight'}
            width={23} //automatically provided
            height={23} //automatically provide
          />
        </div>

        <div className="flex flex-row">
          <div className="w-[65%] xs:w-[75%] mt-[17px] right-[5%] absolute flex justify-end items-end border-[#F5BB00] border-dashed border-[1px] divide-[#F5BB00]"></div>
          <div className="w-[25%]">
            <Image
              className="ml-[25%]"
              src={'/static/images/flights/change-direction.svg'}
              alt={'flight'}
              width={40} //automatically provided
              height={40} //automatically provide
            />
          </div>
        </div>

        <div onClick={ChooseDestination} className="flex justify-end flex-row align-middle items-center mx-5 -mt-2 font-ms-iranSansMobile">
          <span className="text-[#969F9F] text-ms-sm mx-2 font-ms-regular">
            (شهر)
          </span>
          <span className="text-ms-thick-green font-ms-medium">مقصد</span>
          <Image
            className="ml-1"
            src={'/static/images/flights/location-icon.svg'}
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

      <div className="h-[50px] relative flex align-middle items-center justify-end bg-ms-white w-full font-ms-iranSansMobile rounded-[30px] mt-[24px] shadow-[0px 0px 1px 0px #11111126]">
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
              <h1> و این یکی برای این است که بدونی مبدا هسته </h1>
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

              <div className='mt-4'>
                   {/* <SearchBar /> */}
                   <div className='min-h-fit'>
                     <CustomizedOptions onChange={(e)=>setValue(e.target.value) } value={value}/>
                   </div>


                   <div className='flex justify-center align-middle flex-col mt-6'>
                    <span className='flex justify-end w-full text-ms-crimson font-ms-medium text-ms-sm p-2'>
                          شهر های پر تردد    
                    </span>

                    <ul className='flex flex-col w-full bg-ms-back-card-gray-12 rounded-2xl mb-8 overflow-scroll max-h-[500px]'>
                      {["کرمان","تهران","یزد","اصفهان","شیراز","کیش","تبریز","تبریز","تبریز","تبریز","تبریز","تبریز"].map((city)=>{
                        return (
                          <li className='flex justify-end border-b-solid text-ms-gray-light text-ms-sm font-ms-medium border-b-[#EDEDED] border-b-[1px] px-[16px] pt-[16px] pb-[8px]'>{city}</li>
                        )
                      })}
                    <div className='h-50px'/>
                    </ul>
 </div>
               
              </div>
              
            </ModalGestures>
          </div>
        )}
    </>
  );
};

export default UiCustomizedTabTwo;
