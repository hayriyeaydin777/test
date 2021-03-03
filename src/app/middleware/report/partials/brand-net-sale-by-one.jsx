import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../../data-table/Table';

import InformationBox from '../../data-table/data-table-icons/InformationBox';
import CampaignButton from '../../data-table/data-table-buttons/CampaignButton';

const BrandNetSaleOne = (props) => {
  const selectedCount = [];

  const pageName = 'Adetsel-Marka Net Satış Raporu';
  const height = '30px';

  const rando = (max) => Math.floor(Math.random() * max);
  const words = ['Airtex', 'Bando', 'Anka'];
  const rawData = [];

  for (let i = 0; i < 100; i++)
    rawData.push({
      d_54: rando(300) + ' TL',
      urunAdi: words[i % words.length],
      kdvli: rando(300) + ' TL',
    });

  const comonscol = [
    {
      title: 'Marka',
      field: 'urunAdi',
    },
    { title: 'Ocak', field: 'd_54' },
    { title: 'Şubat', field: 'd_54' },
    { title: 'Mart', field: 'd_54' },
    { title: 'Nisan', field: 'd_54' },
    { title: 'Mayıs', field: 'd_54' },
    { title: 'Haziran', field: 'd_54' },
    { title: 'Temmuz', field: 'd_54' },
    { title: 'Ağustos', field: 'd_54' },
    { title: 'Eylül', field: 'd_54' },
    { title: 'Ekim', field: 'd_54' },
    { title: 'Kasım', field: 'd_54' },
    { title: 'Aralık', field: 'd_54' },
    { title: 'Toplam', field: 'kdvli' },
  ];

  const [data, setData] = useState(rawData);

  /* const [data, setData] = useState([]);

  useEffect(() => {
    const URL = 'https://testdinamikoto.yuceyazilim.com.tr/api/Products/AllProducts';
    axios
      .get(URL)
      .then((response) => {
        setData(response.data);

        
      })
      .catch((error) => {
        console.log('ERROR:', error);
      });
  }, []);
 */
  return (
    <>
      <Table
        col={comonscol}
        data={data}
        selectedCount={selectedCount}
        pageName={pageName}
        height={height}
      />
    </>
  );
};

export default BrandNetSaleOne;
