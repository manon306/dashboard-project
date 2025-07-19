import React, { useState } from 'react';
import { Fab, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, Tooltip } from '@mui/material';
import FeedbackIcon from '@mui/icons-material/Feedback';

const FeedbackWidget = () => {
  const [open, setOpen] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFeedback('');
  };

  const handleSubmit = () => {
    console.log("Feedback:", feedback);
    // هنا ممكن تبعتي البيانات لـ API
    handleClose();
  };

  return (
    <>
      <Tooltip title="Send Feedback" placement="left">
        <Fab
          color="primary"
          onClick={handleClickOpen}
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            zIndex: 9999
          }}
        >
          <FeedbackIcon />
        </Fab>
      </Tooltip>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Send Feedback</DialogTitle>
        <DialogContent>
          <TextField
            multiline
            fullWidth
            rows={4}
            variant="outlined"
            label="Your feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">Cancel</Button>
          <Button onClick={handleSubmit} color="primary" variant="contained">Send</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FeedbackWidget;
