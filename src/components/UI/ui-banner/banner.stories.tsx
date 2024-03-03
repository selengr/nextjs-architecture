import React from 'react';
import { Typography } from '@mui/material';
import Banner from './Banner';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Banner',
  component: Banner,
};

const Template = (args:any) => <Banner {...args} />;

export const Default = Template.bind({});
Default.arguments = {
  bannerPic: 'path/to/banner-image.jpg',
  alt: 'Banner image',
  children: <Typography variant="h1">Welcome!</Typography>,
};

export const WithoutImage = Template.bind({});
WithoutImage.arguments = {
  text: true,
  children: <Typography variant="h1">Hello, world!</Typography>,
};
