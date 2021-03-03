import React from 'react';

import {Container} from 'react-bootstrap';

import CurrentAccount from '../app/http/partials/current-account';

export default () => {
  return (
    <div className="container-fluid p-0">
        <CurrentAccount/>
    </div>
  );
};