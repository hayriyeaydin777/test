import React from 'react';
import {default as DefBanner} from '../../../components/Banner/partials';
import Slider from './slider';

const Banner = () => {
    const bannerSlider = {
        status: true,
        className: "slider",
        element: () => <Slider data={""}/>
    }

    return (
        <DefBanner 
            className={"banner"}
            bannerSlider={bannerSlider}
        />
    );
};

export default Banner;