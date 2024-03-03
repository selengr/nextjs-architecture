'use client';

import * as React from 'react';
import { styled } from '@mui/system';
import { Stack, TextareaAutosize, Typography } from '@mui/material';
import { FormControl } from '@mui/base/FormControl';
import { Input, inputClasses } from '@mui/base/Input';

interface FieldProps {
  id?: any;
  name?: any;
  label: string;
  errors?: any;
  caption?: string;
  register?: any;
  required?: boolean;
  istextarea?: boolean;
  styleClass?: string;
  placeholder?: string;
  fontWeight?:
    | string
    | 'medium'
    | 'bold'
    | 'italic'
    | 'underline'
    | 'reqular'
    | number;
}

// ========================================================input component

export default function FormControlFunctionChild({
  id,
  name,
  label,
  errors = false,
  register,
  caption,
  required = false,
  styleClass,
  placeholder,
  istextarea = false,
  fontWeight = 'bold'
}: FieldProps) {
  return (
    <Stack spacing={1} className="w-full px-4">
      <Typography
        fontWeight={fontWeight}
        className="w-full text-right p-2 pt-4 pb-1 text-ms-thick-green font-ms-bold"
        marginTop={'0 !important'}
        variant="body1"
        component="h4"
      >
        <span className="text-ms-crimson">{required ? '*' : ''}</span>
        {label}
      </Typography>

      <Typography
        className="w-full text-right text-ms-thick-green font-ms-medium pr-2"
        marginTop={'0 !important'}
        variant="body2"
        component="h5"
      >
        {caption}
      </Typography>
      <FormControl defaultValue="" className="w-full">
        {({ filled, focused, error }) => (
          <React.Fragment>
            {!istextarea && (
              <StyledInput
                error={errors}
                id={id}
                {...register(name, { required: required })}
                placeholder={placeholder}
                className={`${styleClass}
             ${filled ? 'filled' : ''} 
             ${styleClass ? 'styleClass' : ''} 
             ${errors[name] && errors[name].type ? 'error' : ''}`}
              />
            )}
            {istextarea && (
              <StyledTextArea
                error={errors}
                id={id}
                {...register(name, { required: required })}
                placeholder={placeholder}
                className={`${styleClass}
             ${filled ? 'filled' : ''} 
             ${styleClass ? 'styleClass' : ''} 
             ${errors[name] && errors[name].type ? 'error' : ''}`}
              />
            )}

            {errors[name] && errors[name].type && (
              <Typography
                className="text-ms-crimson pr-2"
                variant="caption"
                component="h5"
                dir="rtl"
              >
                {errors?.[name]?.message}
              </Typography>
            )}
            {filled && !focused}
          </React.Fragment>
        )}
      </FormControl>
    </Stack>
  );
}

const StyledInput = styled(Input)(
  ({ theme }) => `
  display: inline-block;
  width: 100%;

  .${inputClasses.input} {
    font-family: 'IRANSansMobile';
    height:50px;
    width: 100%;
    direction: rtl;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 15px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
 
    &:hover {
      border-color: ${green[200]};
    };
    
    &:focus {
      outline: 0;
      border-color: ${green[400]};
      box-shadow: 0 0 5px 1px ${green[200]};
    }
  }
  
  &.filled .${inputClasses.input} {
    box-shadow: 0 0 1px 0px ${green[400]};
  }
  &.error .${inputClasses.input} {
    border-color: ${red[400]};
    border-size:2px;
    box-shadow: 0 0 6px 0px ${red[400]};
    border-radius: 15px;
  }

`
);
export const StyledTextArea = styled(TextareaAutosize)(
  ({ theme }) => `
  display: inline-block;
  width: 100%;
  height:100px !important;

    font-family: 'IRANSansMobile';
    width: 100%;
    direction: rtl;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 15px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
 
    &:hover {
      border-color: ${green[200]};
    };
    
    &:focus {
      outline: 0;
      border-color: ${green[400]};
      box-shadow: 0 0 5px 1px ${green[200]};
    }
  
  
  &.filled .${inputClasses.input} {
    box-shadow: 0 0 1px 0px ${green[400]};
  }
  &.error .${inputClasses.input} {
    border-color: ${red[400]};
    border-size:2px;
    box-shadow: 0 0 6px 0px ${red[400]};
    border-radius: 15px;
  }

`
);

const OkMark = styled('span')`
  margin-left: 8px;
  margin-top: 10px;
  position: absolute;
  color: rgb(125 200 0 / 1);
`;

const green = {
  200: '#0CDA7B',
  400: '#00A458'
};
const red = {
  400: '#B40000'
};
const blue = {
  100: '#DAECFF',
  200: '#80BFFF',
  400: '#3399FF',
  600: '#0072E5'
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025'
};

// border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
// box-shadow: 0px 1px 1px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
