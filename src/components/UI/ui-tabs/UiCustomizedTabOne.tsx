import Image from "next/image";

const UiCustomizedTabOne = () => {
    return (
        <>
             <div className="h-[116px] mt-[16px] relative bg-ms-white w-full rounded-[30px]  shadow-[0px 0px 1px 0px #11111126]">
              <div className="flex justify-end flex-row align-middle items-center mx-5 mt-5">
                <span className="text-[#969F9F] text-ms-sm mx-2 font-ms-regular">(شهر)</span>
                <span className="text-ms-thick-green font-ms-medium">مبدا</span>
                <Image
                  className="ml-1"
                  src={'/static/images/flights/location-icon.svg'}
                  alt={'flight'}
                  width={23} //automatically provided
                  height={23} //automatically provide
                />
              </div>

              
              <div className='flex flex-row'>
                    <div className="w-[65%] xs:w-[75%] mt-[17px] right-[5%] absolute flex justify-end items-end border-[#F5BB00] border-dashed border-[1px] divide-[#F5BB00]"></div>
                    <div className='w-[25%]'>
                    <Image
                        className="ml-[25%]"
                        src={'/static/images/flights/change-direction.svg'}
                        alt={'flight'}
                        width={40} //automatically provided
                        height={40} //automatically provide
                    />
                    </div>
              </div>

              <div className="flex justify-end flex-row align-middle items-center mx-5 -mt-2">
                <span className="text-[#969F9F] text-ms-sm mx-2 font-ms-regular">(شهر)</span>
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



            <div className="h-[50px] relative flex align-middle items-center justify-end bg-ms-white w-full rounded-[30px] mt-[24px] shadow-[0px 0px 1px 0px #11111126]">
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

              <div className="h-[50px] relative flex align-middle items-center justify-end bg-ms-white w-full rounded-[30px] mt-[24px] shadow-[0px 0px 1px 0px #11111126]">
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
        </>
    );
}

export default UiCustomizedTabOne;