import React from 'react';
import PointsPage from '../../middleware/points';

import Master from '../master';

const Points = (props) => {
  return (
    <Master>
      <div className="container-fluid main-container">
        <PointsPage />
      </div>
    </Master>
  );
};

export default Points;
