import React, { memo } from 'react';
import { default as DefProductListing } from '../../../components/ProductListing/partials';

import Slider from './slider';
import Banner from './banner';

const ProductListing = memo(() => {
  //first list
  const title = ' KAMPANYALI ÜRÜNLER ';

  const slider = {
    status: true,
    className: 'slider',
    element: () => <Slider banner={false} />,
  };

  const banner = {
    status: false,
    className: 'banner',
    element: () => <Banner />,
  };
  //second list
  const title_2 = ' YENİ ÜRÜNLER ';

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
  //third list
  const title_3 = ' POPÜLER ÜRÜNLER ';

  const slider_3 = {
    status: true,
    className: 'slider',
    element: () => <Slider banner={true} />,
  };

  const banner_3 = {
    status: true,
    className: 'banner',
    element: () => <Banner />,
  };


  const banner_status = 'passive-banner';
  const banner_status2 = 'passive-banner';
  const banner_status3 = 'active-banner';

  return (
    <>
      <DefProductListing
        className={`row popular-products ${banner_status}`}
        title={title}
        slider={slider}
        banner={banner}
      />
      <DefProductListing
        className={`row popular-products ${banner_status2}`}
        title={title_2}
        slider={slider_2}
        banner={banner_2}
      />
      <DefProductListing
        className={`row popular-products ${banner_status3}`}
        title={title_3}
        slider={slider_3}
        banner={banner_3}
      />
    </>
  );
});

export default ProductListing;
