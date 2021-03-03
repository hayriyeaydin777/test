import React from 'react';
import PersonelDataUsePage from '../../middleware/personal-data-use';

import Master from '../master';

const PersonelDataUse = (props) => {
  return (
    <Master>
      <div className="container-fluid main-container">
        <PersonelDataUsePage/>
      </div>
    </Master>
  );
};

export default PersonelDataUse;
