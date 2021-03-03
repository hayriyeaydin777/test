import React from 'react';
import ContactPage from '../../middleware/contact';

import Master from '../master';

const Contact = (props) => {
  return (
    <Master>
      <div className="container-fluid main-container">
        <ContactPage />
      </div>
    </Master>
  );
};

export default Contact;
