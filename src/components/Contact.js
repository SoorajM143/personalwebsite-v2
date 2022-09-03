import React from 'react';
import { Button } from '@mui/material';
import { Fade } from 'react-reveal';
import '../styles/Contact.css';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './utils/util';

function Contact() {
  return (
    <Fade bottom>
      <div className="button_main_contact">
        <ThemeProvider theme={theme}>
          <Button color="neutral" variant="outlined">
            Contact me
          </Button>
        </ThemeProvider>
      </div>
    </Fade>
  );
}

export default Contact;
