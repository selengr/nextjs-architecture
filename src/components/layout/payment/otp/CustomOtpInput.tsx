import React, { ChangeEvent } from 'react';
import OtpInput from 'react-otp-input';
import styles from './optStyle.module.css';
import { Box } from '@mui/material';

interface CustomOtpInputProps {
  otp: string;
  setOtp: (otp: string) => void;
  numInputs?: number;
  separator?: React.ReactNode;
  inputStyle?: React.CSSProperties;
  // register:any;errors:any;id:string
}

const CustomOtpInput: React.FC<CustomOtpInputProps> = ({
  otp,
  setOtp,
  numInputs = 4,
  separator = <></>,
  inputStyle
  // , register, errors,id
}) => {
  const handleOtpChange = (otp: string) => {
    setOtp(otp);
  };

  return (
    <div className={styles.optStyle}>
      <OtpInput
        value={otp}
        onChange={handleOtpChange}
        numInputs={numInputs}
        renderSeparator={separator}
        inputStyle={inputStyle}
        renderInput={(props) => <input {...props} />}
      />
    </div>
  );
};

export default CustomOtpInput;
