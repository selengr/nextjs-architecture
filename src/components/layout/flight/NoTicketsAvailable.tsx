import Image from "next/image";


const NoTicketsAvailable = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center mt-4">
                <Image
                    src={'/static/images/flights/noTicketsAvailable.svg'}
                    alt={'card'}
                    width={28} //automatically provided
                    height={28} //automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                      className={"w-[50%] mb-2"}
                  />
                  <span className=" text-ms-thick-green text-ms-sm font-ms-medium pt-6">در تاریخ و مسیر مورد نظر پروازی موجود نیست !</span>
        <div className="bg-ms-yellow-14 rounded-2xl w-full p-4 my-8">

        <div className="w-full flex flex-row p-2">
        <Image
                    src={'/static/images/flights/Letmeknow.svg'}
                    alt={'card'}
                    width={25} //automatically provided
                    height={25} //automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                      className={""}
                  />
            <span  className="text-ms-thick-green text-ms-lg font-ms-medium">
            خبرم کن !
            </span>
            </div>

            <span className="text-ms-thick-green text-ms-xs font-ms-medium">در صورت خالی شدن ظرفیت یکی از پروازها به من اطلاع بده.</span>

        </div>
        
       
      </div>
    );
}

export default NoTicketsAvailable;