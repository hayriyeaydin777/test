import React, { memo } from 'react';

import { default as DefProductListing } from '../../../components/ProductListing/partials';

import Slider from '../product-listing/slider';
import Banner from '../product-listing/banner';

const CampaignProductsSlider = memo(() => {

  const title_2 = ' KAMPANYALI ÜRÜNLER ';

  const slider_2 = {
    status: true,
    className: 'slider',
    element: () => <Slider banner={false} />,
  };

  const banner_2 = {
    status: false,
    className: 'banner',
    element: () => <Banner />,
  };

  const banner_status2 = 'passive-banner';
  return (

    <div className="container">
      <DefProductListing
        className={`row popular-products ${banner_status2}`}
        title={title_2}
        slider={slider_2}
        banner={banner_2}
      />

    </div>
  );
});

export default CampaignProductsSlider;
