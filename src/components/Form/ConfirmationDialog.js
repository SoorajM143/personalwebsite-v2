import React from "react";
import { Dialog, DialogContent, Typography } from "@mui/material";
import SuccessAnimation from "./SuccessAnimation";
import "./ConfirmDialog.css";
import Constants from "../utils/Constant";

function ConfirmationDialog(props) {
  const { onClose, open } = props;
  const handleClose = () => {
    onClose(false);
  };
  return (
    <>
      <Dialog
        className="confirm-dialog"
        onClose={handleClose}
        open={open}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "500px", // Set your width here
            },
          },
        }}
      >
        <DialogContent>
          <SuccessAnimation />
          <Typography align="center" gutterBottom variant="h1">
            {Constants.CONTACT_CONFIRM_HEADER}
          </Typography>
          <Typography align="center" variant="h5" gutterBottom>
            {Constants.CONTACT_CONFIRM_MESSAGE}
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ConfirmationDialog;
