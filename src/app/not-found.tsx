import Image from 'next/image';
import Link from 'next/link';

// ----------------------------------------------------------------------

// Page404.getLayout = (page: React.ReactElement) => <CompactLayout>{page}</CompactLayout>;

// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <>
      <div className="w-full flex justify-center items-center align-middle flex-col bg-ms-light-green  h-full">
        <Image
          className="-ml-16 w-full mb-12"
          src={'/static/images/flights/404.svg'}
          alt={'flight'}
          width={0}
          height={0}
        />

        <h2 className="py-5 my-20 text-ms-thick-green text-ms-lg font-ms-iranSansMobile">
          {' '}
          صفحه مورد نظر یافت نشد!
        </h2>

        <Link
          href="/"
          className="mb-[32px] flex justify-center items-center mt-6 w-[80%] font-ms-iranSansMobile hover:bg-ms-btn-green-33 text-ms-xl h-[50px]  border-none text-ms-white font-ms-medium bg-ms-btn-green-23 rounded-2xl"
        >
          برگشت به صفحه اصلی
        </Link>
      </div>
    </>
  );
}
