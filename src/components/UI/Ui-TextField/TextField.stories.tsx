'use client';
import { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import UiTextField from '.';
import IconButton from '@mui/material/IconButton';
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default {
  title: 'Example/TextField',
  component: UiTextField
} as Meta;

const Template: Story<any> = (args) => <UiTextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'outlined',
  text: 'outlined'
};
// const [showPassword, setShowPassword] = useState(false);

// const handleClickShowPassword = () => setShowPassword((show) => !show);

const handleMouseDownPassword = (event: any) => {
  event.preventDefault();
};

export const TextField = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'start'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 16
        }}
      >
        <UiTextField required label="Filled" variant="filled" color="primary" />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 16
        }}
      >
        <UiTextField label="Standard" variant="standard" color="success" />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 16
        }}
      >
        <UiTextField
          required
          label="Outlined"
          variant="outlined"
          helperText="متن اضافه"
          color="warning"
        />
      </div>
    </div>
  )
};
