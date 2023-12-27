

// Component definition
export interface SwiperSlidesProps {
    slidesPerView?: number; // Default value: 2
    spaceBetween?: number; // Default value: 10
    slideToClickedSlide?: boolean; // Default value: true
    pagination?: { clickable?: boolean };
    breakpointsSm?: number;
    breakpointsMd?: number;
    breakpointsLg?: number;
    className?: string; 
    children?: React.ReactNode | null
  }