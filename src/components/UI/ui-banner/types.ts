export type TBannerPic = {
  title?: string;
  back?: boolean;
  width?: number; //automatically provided
  height?: number; //automatically provided
  bannerPic?: string;
  text?: boolean | string;
  className?: string | '';
  alt: 'picture' | string;
  children?: React.ReactNode;
  //   blurDataURL="data:..." //automatically provided
  //   placeholder="blur" // Optional blur-up while loading
};
