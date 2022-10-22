import React from 'react';
import '../styles/Contact.css';
import { Link } from 'react-router-dom';

import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';

function Contact() {
  return (
    <div className="button_main_contact">
      <Link to="/contact">
        <QuestionAnswerOutlinedIcon />
        <span>
          <strong>Say Hi!</strong>
        </span>
      </Link>
    </div>
  );
}

export default Contact;
