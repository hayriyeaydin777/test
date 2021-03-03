import React from 'react';

import {default as DefOpportunities} from '../../../components/Opportunities/partials';

import Slider from './opp-slider';
import Banner from './opp-banner';

const Opportunities = () => {
    const title = " POPÜLER ÜRÜNLER ";

    const oppSlider = {
        status: true,
        className: "slider",
        element: () => <Slider data=""/>
    }

    const oppBanner = {
        status: true,
        className: "banner",
        element: () => <Banner data=""/>
    }

    return (
        <DefOpportunities
            className="row opportunities"
            title={title}
            oppBanner={oppBanner}
            oppSlider={oppSlider}
        />
    )
}

export default Opportunities
