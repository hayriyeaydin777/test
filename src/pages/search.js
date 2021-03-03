import React from 'react';

import {Container} from 'react-bootstrap';

import Search from '../app/http/partials/search';

export default (props) => {
  return (
    <div className="container-fluid p-0">
      <Search navigate={props.location.state}/>
    </div>
  );
};