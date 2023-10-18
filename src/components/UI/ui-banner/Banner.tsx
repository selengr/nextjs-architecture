import Image from 'next/image';
import { TBannerPic } from '.';

export default function Banner({ bannerPic, alt, width, height,className, children }: TBannerPic) {
  return (
    <div className='relative flex flex-col'>
      <Image
        src={bannerPic}
        alt={alt}
        width={0} //automatically provided
        height={0} //automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
        className={className}
      />
       {children}
    </div>
  );
}
