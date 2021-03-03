import React from 'react';

import PointsBackground from '../../../statics/png/points-page-images/points-gold.png'
import PointsLeftTable from './partials/points-left-table';
import PointsRightTable from './partials/points-right-table';

const PointsPage = () => {
  return (
    <>
      <div className="points-wrapper">
        <div className="col-4">
          <div className="safe-background">
              <p className="points-page-title">Hediye Puanı</p>
              <img className="img-fluid" src={PointsBackground} />
          </div>
          <div>
              <PointsLeftTable/>
          </div>
        </div>
        <div className="col-8">
            <PointsRightTable/>
        </div>
      </div>
    </>
  );
};

export default PointsPage;
