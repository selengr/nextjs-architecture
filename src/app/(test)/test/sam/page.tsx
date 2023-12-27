
"use server"
import Image from 'next/image';

const loading = () => {
  return (
    <div id="gradient" className="flex w-full h-screen justify-center items-center bg-ms-light-green flex-col">
      <Image
        className="w-[50%]"
        src={'/static/illustrations/favicon/favicon-chrome.svg'}
        alt={'flight'}
        width={0}
        height={0}
      />

      <h2 className="text-ms-green text-ms-xl font-ms-bold py-16 w-full text-center">
        در حال دریافت اطلاعات...
      </h2>
    </div>
  );
};

export default loading;
