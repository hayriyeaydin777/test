import React, { memo } from 'react';

import Master from '../master';

import OldPaymentsButtons from '../../middleware/old-payments/old-payments-buttons/old-payments-buttons';

const OldPayments = memo(({children}) => {
  return (
    <Master>
      <div className="container-fluid main-container">
        <OldPaymentsButtons/>
        {children}
        </div>
    </Master>
  );
});

export default OldPayments;
