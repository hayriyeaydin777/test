import React from 'react';

import {Container} from 'react-bootstrap';
import OldPayments from '../app/http/partials/old-payments';

export default () => {
  return (
    <div className="container-fluid p-0">
        <OldPayments/>
    </div>
  );
};