import * as React from 'react';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '512px'
};

export default function TransitionsModal({
  open,
  handleClose,
  className,
  children
}: {
  open: boolean;
  handleClose: any;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        // className="flex justify-center align-middle items-center w-full max-w-[576px]"
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500
          }
        }}
      >
        <Fade in={open}>
          <Box sx={style} className={className}>
            {children}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
