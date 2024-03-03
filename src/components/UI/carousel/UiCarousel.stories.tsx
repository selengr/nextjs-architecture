import React from 'react';
import './uiCarousel.css';
import UiCarousel from './UiCarousel';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/UiCarousel',
  component: UiCarousel,
  argTypes: {
    dots: { control: 'boolean' },
    infinite: { control: 'boolean' },
    speed: { control: { type: 'number', min: 100, max: 5000, step: 100 } },
    slidesToShow: { control: { type: 'number', min: 1, max: 6 } },
    slidesToScroll: { control: { type: 'number', min: 1, max: 6 } },
    arrows: { control: 'boolean' },
    children: { control: false }, // Provide mock slides separately
  },
};

const Template = ({ dots, infinite, speed, slidesToShow, slidesToScroll, arrows, children }:any) => (
  <UiCarousel dots={dots} infinite={infinite} speed={speed} slidesToShow={slidesToShow} slidesToScroll={slidesToScroll} arrows={arrows}>
    {children}
  </UiCarousel>
);

export const Primary = Template.bind({});
Primary.arguments = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  children: [
    <div key={1} className="slide">Slide 1</div>,
    <div key={2} className="slide">Slide 2</div>,
    <div key={3} className="slide">Slide 3</div>,
    // Add more mock slides as needed
  ],
};
