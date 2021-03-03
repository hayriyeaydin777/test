import React from 'react';
import aba from '../../../statics/png/supplier-images/aba.png';
import citroen from '../../../statics/png/supplier-images/citroen.png';
import dacia from '../../../statics/png/supplier-images/dacia.png';
import dayco from '../../../statics/png/supplier-images/dayco.png';
import fiat from '../../../statics/png/supplier-images/fiat.png';
import ford from '../../../statics/png/supplier-images/ford.png';
import fte from '../../../statics/png/supplier-images/fte.png';
import gva from '../../../statics/png/supplier-images/gva.png';
import hema from '../../../statics/png/supplier-images/hema.png';
import hua from '../../../statics/png/supplier-images/hua.png';
import hyundai from '../../../statics/png/supplier-images/hyundai.png';
import kia from '../../../statics/png/supplier-images/kia.png';
import land_rover from '../../../statics/png/supplier-images/land_rover.png';
import mitsubishi from '../../../statics/png/supplier-images/mitsubishi.png';
import opel from '../../../statics/png/supplier-images/opel.png';
import peugeot from '../../../statics/png/supplier-images/peugeot.png';
import renault from '../../../statics/png/supplier-images/renault.png';
import skoda from '../../../statics/png/supplier-images/skoda.png';
import supar from '../../../statics/png/supplier-images/supar.png';
import thermax from '../../../statics/png/supplier-images/thermax.png';
import toyota from '../../../statics/png/supplier-images/toyota.png';
import volvo from '../../../statics/png/supplier-images/volvo.png';
import vw from '../../../statics/png/supplier-images/vw.png';
import wahler from '../../../statics/png/supplier-images/wahler.png';

const SuppliersPage = () => {
  const brandLogosImages = [
    {
      id: 1,
      image: aba,
    },
    {
      id: 2,
      image: citroen,
    },
    {
      id: 3,
      image: dacia,
    },
    {
      id: 4,
      image: dayco,
    },
    {
      id: 5,
      image: fiat,
    },
    {
      id: 6,
      image: ford,
    },
    {
      id: 7,
      image: fte,
    },
    {
      id: 8,
      image: gva,
    },
    {
      id: 9,
      image: hema,
    },
    {
      id: 10,
      image: hua,
    },
    {
      id: 11,
      image: hyundai,
    },
    {
      id: 12,
      image: kia,
    },
    {
      id: 13,
      image: land_rover,
    },
    {
      id: 14,
      image: mitsubishi,
    },
    {
      id: 15,
      image: opel,
    },
    {
      id: 16,
      image: peugeot,
    },
    {
      id: 17,
      image: renault,
    },
    {
      id: 18,
      image: skoda,
    },
    {
      id: 19,
      image: supar,
    },
    {
      id: 20,
      image: thermax,
    },
    {
      id: 21,
      image: toyota,
    },
    {
      id: 22,
      image: volvo,
    },
    {
      id: 23,
      image: vw,
    },
    {
      id: 24,
      image: wahler,
    },
  ];
  return (
    <>
      <div className="suppliers-wrapper">
        <h2 className="text-center font-weight-bold suppliers-title">TEDARİKÇİLERİMİZ</h2>
        <div className="suppliers-content">
          <div className="row">
            {brandLogosImages.map((value, key) => {
              return (
                <div key={key} className="col-md-2 col-sm-3 col-xs-4 suppliers-image-wrapper">
                  <img className="img-fluid center suppliers-image" src={value.image} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SuppliersPage;
