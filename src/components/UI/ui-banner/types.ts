import { ReactNode } from 'react';

export type TBannerPic = {
  bannerPic: string;
  alt: 'picture' | string;
  width?: number | ''; //automatically provided
  height?: number | ''; //automatically provided
  className?: string | '';
  children?: React.ReactNode;
  //   blurDataURL="data:..." //automatically provided
  //   placeholder="blur" // Optional blur-up while loading
};
