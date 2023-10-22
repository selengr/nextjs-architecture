"use client"
import "./uiCarousel.css"
import Slider from "react-slick";


interface UiCarouselProps {
  children?: React.ReactNode;
  dots?: boolean;
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  arrows?: boolean;
}

const UiCarousel = ({children,...props} : UiCarouselProps) => {

  interface CarouselSettings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    arrows?: boolean;
    centerMode?: boolean;
    focusOnSelect : boolean
  }

  const settings :CarouselSettings = {
    dots: props.dots ?? false,
    infinite:  props.infinite ?? false,
    speed:  props.speed ?? 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows : props.arrows ?? false,
    centerMode: true,
    focusOnSelect: true,
  }

  return (
        <Slider {...settings} className="flex uiCarousel">
             {children}
        </Slider>
  );
}

export default UiCarousel;