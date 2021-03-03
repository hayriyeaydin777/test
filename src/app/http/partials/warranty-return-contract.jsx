import React from 'react';
import WarrentyReturnPage from '../../middleware/warranty-return-contract';

import Master from '../master';

const WarrantyReturnContract= (props) => {
  return (
    <Master>
      <div className="container-fluid main-container">
        <WarrentyReturnPage />
      </div>
    </Master>
  );
};

export default WarrantyReturnContract;
