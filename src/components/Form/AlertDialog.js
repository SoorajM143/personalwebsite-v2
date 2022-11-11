import { Dialog, DialogContent, Typography } from '@mui/material';
import React from 'react';
import ErrorAnimation from './ErrorAnimation';
import './AlertDialog.css';

function AlertDialog(props) {
  const { onClose, open, value } = props;
  const handleClose = () => {
    onClose(false);
  };
  return (
    <Dialog
      className="alert-dialog"
      onClose={handleClose}
      open={open}
      sx={{
        '& .MuiDialog-container': {
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: '350px', // Set your width here
          },
        },
      }}
    >
      <DialogContent>
        <ErrorAnimation />
        <Typography align="center" variant="h2" gutterBottom>
          Error.!
        </Typography>
        <Typography align="center" variant="h5" gutterBottom>
          {value}
        </Typography>
      </DialogContent>
    </Dialog>
  );
}

export default AlertDialog;
