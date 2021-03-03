import React from 'react';

import Master from '../master';

import NewProductsSlider from '../../middleware/new-products/new-products-slider';

const NewProducts = (props) => {
  return (
    <Master>
      <div className="container-fluid main-container">
        {props.children}
        <NewProductsSlider />
      </div>
    </Master>
  );
};

export default NewProducts;
