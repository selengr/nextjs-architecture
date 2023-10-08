import Image from 'next/image';

// const CardFlight = (flights: number[]) => {
    const CardFlight: React.FC<{ flights: number[] }> = ({ flights }) => {
  return (
    <div >
        {flights.map((item :number,index) => {
            return(
                <div className="py-4 px-6 bg-ms-white h-[210px] rounded-[15px] w-full flex flex-col my-6">
                <div className="flex flex-row justify-between w-full items-center">
                  <div className="flex items-center">
                    <Image
                      src={'/static/images/flights/flight-sign.svg'}
                      alt={'card'}
                      width={28} //automatically provided
                      height={28} //automatically provided
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                      //   className={className}
                    />
                    <span className="pr-1 text-ms-thick-green font-medium text-xs font-ms-iranSansMobile">
                      ایران ایر
                    </span>
                  </div>
                  <span className="text-ms-thick-green font-medium text-xs">
                    سیستمی / چارتری
                  </span>
                </div>
        
                <div className="flex flex-row pt-6 px-2">
                  <div className="flex flex-col w-2/12">
                    <span className="text-ms-thick-green text-lg font-ms-medium">
                      مبدا
                    </span>
                    <span className="text-[#605858] text-sm font-ms-regular pt-1">
                      تهران
                    </span>
                    <span className="text-ms-thick-green text-sm font-ms-medium pt-2">
                      22:00
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
        
                  <div className="flex flex-col w-2/12 justify-end ">
                    <span className="text-ms-thick-green text-lg font-ms-medium flex justify-end">
                      مقصد
                    </span>
                    <span className="text-[#605858] text-sm font-ms-regular pt-1 flex justify-end">
                      کرمان
                    </span>
                    <span className="text-ms-thick-green text-sm font-ms-medium pt-2 flex justify-end">
                      23:00
                    </span>
                  </div>
                </div>
        
                <div className="border-b-[#E5E5E7] border-dashed border-b-[1px] pt-5" />
        
                <div className="flex flex-row justify-between w-full items-center p-1 pb-0">
                  <span className="pr-1 text-ms-crimson font-medium text-sm font-ms-iranSansMobile">
                    9 نفر ظرفیت
                  </span>
                  <span className="text-[#605858] font-medium text-sm">
                    ۷۲۴.۰۰۰ تومان
                  </span>
                </div>
        
                <div className="flex items-center justify-center w-full mb-1">
                  <Image
                    src={'/static/images/flights/arrow-down.svg'}
                    alt={'card'}
                    width={10} //automatically provided
                    height={6} //automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                    className={''}
                  />
                </div>
              </div>
            )
        })}
    
    </div>
  );
};

export default CardFlight;
