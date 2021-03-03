import React from 'react';

import Master from '../master';

import CampaignProductsSlider from '../../middleware/campaign-products/campaign-products-slider';
import NewProductsSlider from '../../middleware/new-products/new-products-slider';

const CampaignProducts = (props) => {
  return (
    <Master>
      <div className="container-fluid main-container">
        {props.children}
        <CampaignProductsSlider />
        <NewProductsSlider />
      </div>
    </Master>
  );
};

export default CampaignProducts;
