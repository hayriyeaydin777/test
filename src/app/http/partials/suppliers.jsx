import React from 'react';
import SuppliersPage from '../../middleware/suppliers';

import Master from '../master';

const Suppliers = (props) => {
  return (
    <Master>
      <div className="container-fluid main-container">
        <SuppliersPage />
      </div>
    </Master>
  );
};

export default Suppliers;
