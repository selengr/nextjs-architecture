import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 52,
  height: 26,
  padding: 0,
  boxShadow: '0px 1px 4px 0px #0000001A !important',
  borderRadius: 26 / 2,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(26px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#F5BB00',
        opacity: 1,
        border: 0
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5
      }
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff'
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600]
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      boxShadow: '0px 1px 4px 0px #0000001A'
    },
    '&.MuiSwitch-switchBase:not(.Mui-checked)': {
      color: '#FFF0C5'
    }
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#FFFFFF',

    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500
    })
  }
}));

interface IProps {
  lable?: string;
  defaultChecked?: boolean;
  register: any;
  id: string;
  name: string;
  required?: boolean;
}

export default function CustomizedSwitches({
  lable,
  defaultChecked = false,
  register,
  id,
  name,
  required = false
}: IProps) {
  return (
    <FormGroup>
      <FormControlLabel
        id={id}
        name={name}
        {...register(name, { required: required })}
        control={<IOSSwitch sx={{ m: 1 }}
        //  defaultChecked={defaultChecked} 
         />
        }
        label={lable ? lable : ''}
      />
    </FormGroup>
  );
}
