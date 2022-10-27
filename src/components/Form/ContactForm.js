import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';
import { Button, ThemeProvider } from '@mui/material';
import { theme } from '../utils/util';
import { Fade } from 'react-reveal';
import ConfirmationDialog from './ConfirmationDialog';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [open, setOpen] = useState(false);

  const submit = () => {
    if (name && email && message) {
      const serviceId = 'service_l5dtajc';
      const templateId = 'template_gp15u2c';
      const userId = '-UCRSjfcZvDKLXw3l';
      const templateParams = {
        name,
        email,
        message,
      };
      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName('');
      setEmail('');
      setMessage('');
      setEmailSent(true);
      setOpen(true);
    } else {
      alert('Please fill in all fields.');
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fade delay={700}>
      <div id="contact-form">
        <form className="contact">
          <ul>
            <Fade bottom delay={1000}>
              <li className="half">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <span className="focus-border"></span>
              </li>
            </Fade>
            <Fade bottom delay={1200}>
              <li className="half">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="focus-border"></span>
              </li>
            </Fade>
            <Fade bottom delay={1400}>
              <li>
                <textarea
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <span className="focus-border"></span>
              </li>
            </Fade>
            <Fade bottom delay={1600}>
              <li>
                <ThemeProvider theme={theme}>
                  <Button onClick={submit} color="neutral" variant="outlined">
                    Send Message
                  </Button>
                </ThemeProvider>
                {emailSent && (
                  <ConfirmationDialog open={open} onClose={handleClose} />
                )}
              </li>
            </Fade>
          </ul>
        </form>
      </div>
    </Fade>
  );
};

export default ContactForm;
