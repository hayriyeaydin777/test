import React from 'react';
import DistanceSalesPage from '../../middleware/distance-sales-contract';

import Master from '../master';

const DistanceSalesContract = (props) => {
  return (
    <Master>
      <div className="container-fluid main-container">
        <DistanceSalesPage/>
      </div>
    </Master>
  );
};

export default DistanceSalesContract;
