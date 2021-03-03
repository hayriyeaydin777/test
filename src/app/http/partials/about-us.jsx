import React from 'react';
import AboutPage from '../../middleware/about-us';

import Master from '../master';

const AboutUs = (props) => {
  return (
    <Master>
      <div className="container-fluid main-container">
        <AboutPage />
      </div>
    </Master>
  );
};

export default AboutUs;
