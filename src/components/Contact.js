import React from 'react';
import '../styles/Contact.css';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';

function Contact() {
  return (
    <div className="button_main_contact">
      <a href="mailto:soorajmohan7@gmail.com">
        <QuestionAnswerOutlinedIcon />
        <span>
          <strong>Say Hi!</strong>
        </span>
      </a>
    </div>
  );
}

export default Contact;
