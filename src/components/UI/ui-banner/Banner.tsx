import Image from 'next/image';
import { TBannerPic } from '.';
import { Typography } from '@mui/material';

export default function Banner({
  bannerPic,
  alt,
  width,
  height,
  className,
  children,
  text = false
}: TBannerPic) {
  return (
    <>
      {' '}
      {!text && (
        <div className="relative flex flex-col justify-center w-full items-center ">
          <Image
            src={bannerPic??""}
            alt={alt}
            width={0} //automatically provided
            height={0} //automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
            className={className}
          />
          {children}
        </div>
      )}
    </>
  );
}
