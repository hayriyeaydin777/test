import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../../data-table/Table';

import InformationBox from '../../data-table/data-table-icons/InformationBox';
import CampaignButton from '../../data-table/data-table-buttons/CampaignButton';
import SpinnerInput from '../../data-table/data-table-icons/SpinnerInput';
import AddtoBasketButton from '../../data-table/data-table-buttons/AddtoBasketButton';
import ProductPricePopover from '../../data-table/data-table-icons/ProductPricePopover';

const DailyBasket = (props) => {
  const selectedCount = [];

  const pageName = 'Günlük Sepet';
  const selection = true;
  const height = '30px';

  const rando = (max) => Math.floor(Math.random() * max);
  const urunAdi = [
    'WÜRTH KESME TAŞI 115X1',
    'GÖMLEK CONTASI',
    'KRANK KEP CİVATASI',
    'FREN BALATASI',
  ];
  const iskonto = ['%35 + 5 + 5'];
  const spot = ['VAR', 'YOK'];
  const dates = ['22.04.2020', '03.05.2021', '11.10.2020'];
  const rawData = [];

  for (let i = 0; i < 100; i++)
    rawData.push({
      spot: spot[i % spot.length],
      d_52: '000000' + rando(400),
      urunAdi: urunAdi[i % urunAdi.length],
      listeFiyati: rando(550) + ' TL',
      iskonto: iskonto[i % iskonto.length],
      date: dates[i % dates.length],
      d_54: rando(40),
    });


  const comonscol = [
    { title: 'Stok D.', field: 'spot' },
    { title: 'Stok Kodu', field: 'd_52' },
    {
      title: 'Ürün Adı',
      field: 'urunAdi',
      render: (rowData) => (
        <div>
          {rowData.urunAdi}

          <InformationBox />
          <CampaignButton />
        </div>
      ),
    },
    {
      title: 'Adet',
      field: '',
      sorting: false,
      render: (rowData) => (
        <>
          <SpinnerInput />
        </>
      ),
    },
    {
      title: 'Liste Fiyatı',
      field: 'listeFiyati',
      render: (rowData) => (
        <div>
          <ProductPricePopover price={rowData.listeFiyati} />
        </div>
      ),
    },
    { title: 'İskonto', field: 'iskonto' },
    { title: 'Eklenme Tarihi', field: 'date' },
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
        selection={selection}
        height={height}
      />
    </>
  );
};

export default DailyBasket;
