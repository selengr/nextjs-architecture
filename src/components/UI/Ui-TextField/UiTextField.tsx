import { Box, Stack, TextField, TextFieldProps } from '@mui/material';
import { ITextFieldProps } from './type';

export default function UiTextField(props: ITextFieldProps) {
  return (
    <Box sx={{ '& input': { m: 1 } }}>
      <Stack direction="row" spacing={2}>
        <TextField
          style={{ fontFamily: 'IRANSans' }}
          InputProps={{
            dir: 'rtl'
          }}
          id={props.id}
          variant={props.variant}
          label={props.label}
          {...props}
        >
          {props.children}
        </TextField>
      </Stack>
    </Box>
  );
}
