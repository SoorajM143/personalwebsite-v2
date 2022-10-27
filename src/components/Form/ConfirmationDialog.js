import React from 'react';
import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';

function ConfirmationDialog(props) {
  const { onClose, open } = props;
  const handleClose = () => {
    onClose(false);
  };
  return (
    <>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
            <Typography>Thank you for your Message!</Typography>
        </DialogContent>
        
      </Dialog>
    </>
  );
}

export default ConfirmationDialog;
