import React from 'react';
import TermsOfUsePage from '../../middleware/terms-of-use';

import Master from '../master';

const TermsOfUse = (props) => {
  return (
    <Master>
      <div className="container-fluid main-container">
        <TermsOfUsePage />
      </div>
    </Master>
  );
};

export default TermsOfUse;
