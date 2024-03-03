'use client';
import { Typography } from '@mui/material';
import { TBannerPic } from '.';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function UiAccommodationBanner({
  bannerPic,
  alt,
  back = true,
  width,
  title,
  height,
  children,
  className
}: TBannerPic) {
  const router = useRouter();

  return (
    <>
      <div className="relative flex flex-col justify-center w-full items-center">
        {back && (
          <>
            <Image
              onClick={router.back}
              src={'/static/images/accommodation/back.svg'}
              alt={alt}
              width={0} //automatically provided
              height={0} //automatically provided
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
              className="w-[35px] h-[35px] md:w-[45px] md:h-[45px] absolute top-7 right-8"
            />
            <Image
              src={'/static/images/accommodation/note.svg'}
              alt={alt}
              width={0} //automatically provided
              height={0} //automatically provided
              className="w-[35px] h-[35px] md:w-[45px] md:h-[45px] absolute top-7 left-8"
            />
          </>
        )}

        <Image
          src={`${
            bannerPic
              ? bannerPic
              : '/static/images/accommodation/register-header-banner.svg'
          }`}
          alt={alt}
          width={width} //automatically provided
          height={height} //automatically provided
          className={className}
        />
        <Typography
          sx={{ fontSize: '35px' }}
          fontWeight={'bold'}
          className={`${
            bannerPic != undefined ? 'bottom-[50%]' : 'bottom-[20%]'
          } absolute  text-ms-white`}
          variant="subtitle1"
          component="h2"
        >
          {title}
        </Typography>
      </div>
    </>
  );
}
