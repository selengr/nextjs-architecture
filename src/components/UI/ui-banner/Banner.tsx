import Image from 'next/image';
import { TBannerPic } from '.';

export default function Banner({ bannerPic, alt, width, height }: TBannerPic) {
  return (
    <div className=''>
      <Image
        src={bannerPic}
        alt={alt}
        width={width} //automatically provided
        height={height} //automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
    </div>
  );
}
