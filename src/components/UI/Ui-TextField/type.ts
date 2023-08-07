import { TextFieldProps } from '@mui/material';

export type ITextFieldProps = {
  // Add any custom props specific to your TextField component
  // variant:
  // 'filled' | 'outlined' | 'standard';
  // autoComplete: string;
  // classes:object;
  color?:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | string;
} & TextFieldProps;
