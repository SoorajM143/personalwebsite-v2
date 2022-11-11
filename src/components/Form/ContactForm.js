import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';
import { Button, ThemeProvider } from '@mui/material';
import { theme } from '../utils/util';
import { Fade } from 'react-reveal';
import ConfirmationDialog from './ConfirmationDialog';
import AlertDialog from './AlertDialog';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [formError, setFormError] = useState(null);

  const submit = () => {
    if (name.length && email && message.length && formError == null) {
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
      setConfirmOpen(true);
    } else {
      setAlertOpen(true);
      setError(true);
      if (formError === null) setValue('Enter All Mandatory Fields');
      else setValue('Errors found in the Form');
    }
  };

  const handleClose = () => {
    setConfirmOpen(false);
  };

  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (ev) => {
    if (!isValidEmail(ev.target.value)) {
      setFormError('Invalid Email');
    } else {
      setFormError(null);
      setEmail(ev.target.value);
    }

    setEmail(ev.target.value);
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
                  required
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
                  onChange={handleChange}
                  required
                />
                {formError && (
                  <h5 style={{ color: 'red', paddingTop: '2px' }}>
                    {formError}
                  </h5>
                )}
                <span className="focus-border"></span>
              </li>
            </Fade>
            <Fade bottom delay={1400}>
              <li>
                <textarea
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
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
                  <ConfirmationDialog
                    open={confirmOpen}
                    onClose={handleClose}
                  />
                )}
                {!emailSent && error && (
                  <AlertDialog
                    open={alertOpen}
                    onClose={handleAlertClose}
                    value={value}
                  ></AlertDialog>
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
