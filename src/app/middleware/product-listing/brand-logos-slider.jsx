import React, { useState } from 'react';

import Slider from 'react-slick';

import autoplaybrans from '../../../statics/svg/autoplay-brands';

export default function BrandLogosSlider(props) {
  const brandLogosImages = [
    {
      id: 1,
      image: <autoplaybrans.acddelcoLogo />,
    },
    {
      id: 2,
      image: <autoplaybrans.airtexLogo />,
    },
    {
      id: 3,
      image: <autoplaybrans.aisinLogo />,
    },
    {
      id: 4,
      image: <autoplaybrans.ateLogo />,
    },
    {
      id: 5,
      image: <autoplaybrans.bandoLogo />,
    },
    {
      id: 6,
      image: <autoplaybrans.barumLogo />,
    },
    {
      id: 7,
      image: <autoplaybrans.behrLogo />,
    },
    {
      id: 8,
      image: <autoplaybrans.bendixLogo />,
    },
    {
      id: 9,
      image: <autoplaybrans.blueprintLogo />,
    },
    {
      id: 10,
      image: <autoplaybrans.boschLogo />,
    },
    {
      id: 11,
      image: <autoplaybrans.inaLogo />,
    },
    {
      id: 12,
      image: <autoplaybrans.sachsLogo />,
    },
    {
      id: 13,
      image: <autoplaybrans.trwLogo />,
    },
    {
      id: 14,
      image: <autoplaybrans.behrLogo />,
    },
    {
      id: 15,
      image: <autoplaybrans.airtexLogo />,
    },
    {
      id: 16,
      image: <autoplaybrans.aisinLogo />,
    },
    {
      id: 17,
      image: <autoplaybrans.ateLogo />,
    },
    {
      id: 18,
      image: <autoplaybrans.bandoLogo />,
    },
    {
      id: 19,
      image: <autoplaybrans.bendixLogo />,
    },
    {
      id: 20,
      image: <autoplaybrans.blueprintLogo />,
    },
    {
      id: 21,
      image: <autoplaybrans.boschLogo />,
    },
  ];
  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 100,
    speed: 1000,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
  };
  return (
    <div className="container-fluid brand-logos-slider">
      <div className="col">
        <Slider {...settings}>
          {brandLogosImages.map((value, key) => {
            return (
              <div key={key} className="brand-logos-slider-images">
                <div className="">{value.image}</div>

                {/* <img className="w-50" src={value.image}/> */}
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
