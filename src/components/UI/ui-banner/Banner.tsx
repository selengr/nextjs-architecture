import Image from 'next/image';
import { TBannerPic } from '.';

export default function Banner({ bannerPic, alt, width, height,className }: TBannerPic) {
  return (
    <div className=''>
      <Image
        src={bannerPic}
        alt={alt}
        width={0} //automatically provided
        height={0} //automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
        className={className}
      />
    </div>
  );
}
