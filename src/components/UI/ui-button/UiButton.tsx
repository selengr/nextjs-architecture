import * as React from 'react';
import { IButtonProps } from './';
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import { PropsWithChildren } from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

export default function UiButton({
  children,
  ...props
}: PropsWithChildren<ButtonProps & IButtonProps>) {
  return (
    <Box sx={{ '& button': { m: 1 },width:"100%" }}>
      <Stack  sx={{width:"100%"}} direction="row" spacing={2}>
        <Button {...props}>
          <> {children} </>
          <> {props.text} </>
        </Button>
      </Stack>
    </Box>
  );
}
