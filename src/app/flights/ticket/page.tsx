import UiButton from '@/components/UI/ui-button';
import Image from 'next/image';

const Ticket = () => {
  return (
    <div className="h-full">
      <div
        className="min-h-[80%] max-h-fit pb-3 mb-6"
        style={{
          background: 'linear-gradient(180deg, #06BE69 0%, #047742 100%)'
        }}
      >
        <Image
          className="pt-8 -mb-12"
          src={'/static/icons/components/flight-ticket-icon.png'}
          alt={'card'}
          width={200} //automatically provided
          height={200} //automatically provided
        />

        <div className="px-9">
          <section className="py-3 bg-ms-back-card-gray-12 rounded-[15px] w-full flex flex-col my-6">
            <div className="flex flex-row p-2  px-6">
              <div className="flex flex-col w-2/12">
                <span className="text-ms-thick-green text-ms-lg font-ms-bold">
                  ۱۴۰۲/۲/۱۱
                </span>
                <span className="text-ms-thick-green text-ms-lg font-ms-medium py-3">
                  مبدا
                </span>
                <span className="text-ms-light-gray text-ms-sm font-ms-medium ">
                  بالی
                </span>
              </div>

              <div className="flex flex-col w-8/12 justify-center text-center pb-2">
                <span className="text-ms-thick-green text-ms-sm font-ms-bold pb-4">
                  رفت
                </span>
                <Image
                  src={'/static/images/flights/arrow-origin-destination.svg'}
                  alt={'card'}
                  width={0} //automatically provided
                  height={0} //automatically provided
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                  className={'w-full'}
                />
              </div>

              <div className="flex flex-col w-2/12 ">
                <span className="text-ms-thick-green text-ms-lg font-ms-bold flex justify-end">
                  بلیط
                </span>
                <span className="text-ms-thick-green text-ms-lg font-ms-medium flex justify-end py-3">
                  مقصد
                </span>
                <span className="text-ms-light-gray text-ms-sm font-ms-medium flex justify-end">
                  تهران
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="bg-[#06A95D] w-[15px] h-[15px] rounded absolute -right-2"></div>
              <div className="border-b-[#F3F3F3] border-dotted border-b-[3px] absolute top-1 w-[96%] mx-2" />
              <div className="bg-[#06A95D] w-[15px] h-[15px] rounded  absolute -left-2 top-1"></div>
            </div>

            <div className=" text-ms-light-gray w-full flex justify-center text-center text-ms-sm font-ms-medium py-4">
              <span className="w-1/3">کد ملی</span>
              <span className="w-1/3">نوع سفر</span>
              <span className="w-1/3">نام مسافر</span>
            </div>

            <div className="text-ms-thick-green w-full flex justify-center text-center text-ms-sm font-ms-medium pt-1">
              <span className="w-1/3">۷۶۶۵۶۸۷۹۰</span>
              <span className="w-1/3">یک طرفه</span>
              <span className="w-1/3">رضا صابری</span>
            </div>

            <div className="border-b-[#F3F3F3] border-b-[2px] border-b-solid  w-full pt-1" />

            <div className=" text-ms-light-gray w-full flex justify-center text-center text-ms-sm font-ms-medium pt-4">
              <span className="w-1/3">ترمینال</span>
              <span className="w-1/3">تاریخ سفر</span>
              <span className="w-1/3">ساعت حرکت</span>
            </div>

            <div className="text-ms-thick-green w-full flex justify-center text-center text-ms-sm font-ms-medium pt-1">
              <span className="w-1/3">3</span>
              <span className="w-1/3">۱۴۰۲/۰۲/۲۵</span>
              <span className="w-1/3">۱۴:۰۰</span>
            </div>

            <div className="text-ms-thick-green w-full flex justify-between text-ms-sm font-ms-medium pt-1">
              <span className="w-1/3 flex justify-center items-center pt-2">
                ۸۷۴۷۸۷۵۶۴۲۳۹۸
              </span>

              <Image
                className="ml-7 mt-3 mb-2"
                src={'/static/icons/components/barcode.png'}
                alt={'card'}
                width={65} //automatically provided
                height={65} //automatically provided
              />
            </div>
          </section>

          <section className="py-3 bg-ms-back-card-gray-12 rounded-[15px] w-full flex flex-col my-6">
            <div className="flex flex-row p-2  px-6">
              <div className="flex flex-col w-2/12">
                <span className="text-ms-thick-green text-ms-lg font-ms-bold">
                  ۱۴۰۲/۲/۱۱
                </span>
                <span className="text-ms-thick-green text-ms-lg font-ms-medium py-3">
                  مبدا
                </span>
                <span className="text-ms-light-gray text-ms-sm font-ms-medium ">
                  بالی
                </span>
              </div>

              <div className="flex flex-col w-8/12 justify-center text-center pb-2">
                <span className="text-ms-thick-green text-ms-sm font-ms-bold pb-4">
                  برگشت
                </span>
                <Image
                  src={'/static/images/flights/arrow-origin-destination.svg'}
                  alt={'card'}
                  width={0} //automatically provided
                  height={0} //automatically provided
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                  className={'w-full'}
                />
              </div>

              <div className="flex flex-col w-2/12 ">
                <span className="text-ms-thick-green text-ms-lg font-ms-bold flex justify-end">
                  بلیط
                </span>
                <span className="text-ms-thick-green text-ms-lg font-ms-medium flex justify-end py-3">
                  مقصد
                </span>
                <span className="text-ms-light-gray text-ms-sm font-ms-medium flex justify-end">
                  تهران
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="bg-[#06A95D] w-[15px] h-[15px] rounded absolute -right-2"></div>
              <div className="border-b-[#F3F3F3] border-dotted border-b-[3px] absolute top-1 w-[96%] mx-2" />
              <div className="bg-[#06A95D] w-[15px] h-[15px] rounded  absolute -left-2 top-1"></div>
            </div>

            <div className=" text-ms-light-gray w-full flex justify-center text-center text-ms-sm font-ms-medium py-4">
              <span className="w-1/3">کد ملی</span>
              <span className="w-1/3">نوع سفر</span>
              <span className="w-1/3">نام مسافر</span>
            </div>

            <div className="text-ms-thick-green w-full flex justify-center text-center text-ms-sm font-ms-medium pt-1">
              <span className="w-1/3">۷۶۶۵۶۸۷۹۰</span>
              <span className="w-1/3">یک طرفه</span>
              <span className="w-1/3">رضا صابری</span>
            </div>

            <div className="border-b-[#F3F3F3] border-b-[2px] border-b-solid  w-full pt-1" />

            <div className=" text-ms-light-gray w-full flex justify-center text-center text-ms-sm font-ms-medium pt-4">
              <span className="w-1/3">ترمینال</span>
              <span className="w-1/3">تاریخ سفر</span>
              <span className="w-1/3">ساعت حرکت</span>
            </div>

            <div className="text-ms-thick-green w-full flex justify-center text-center text-ms-sm font-ms-medium pt-1">
              <span className="w-1/3">3</span>
              <span className="w-1/3">۱۴۰۲/۰۲/۲۵</span>
              <span className="w-1/3">۱۴:۰۰</span>
            </div>

            <div className="text-ms-thick-green w-full flex justify-between text-ms-sm font-ms-medium pt-1">
              <span className="w-1/3 flex justify-center items-center pt-2">
                ۸۷۴۷۸۷۵۶۴۲۳۹۸
              </span>

              <Image
                className="ml-7 mt-3 mb-2"
                src={'/static/icons/components/barcode.png'}
                alt={'card'}
                width={65} //automatically provided
                height={65} //automatically provided
              />
            </div>
          </section>
        </div>
      </div>

      <UiButton
        // onClick={()=>confirm(passNew)}
        className="bg-ms-btn-green-23 px-9 mb-8 hover:bg-ms-btn-green-33 text-ms-lg h-[50px] text-ms-white rounded-2xl w-full"
        text="دانلود"
      />
    </div>
  );
};

export default Ticket;
