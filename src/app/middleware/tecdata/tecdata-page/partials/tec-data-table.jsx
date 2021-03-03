import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../../../data-table/Table';

import InformationBox from '../../../data-table/data-table-icons/InformationBox';
import CampaignButton from '../../../data-table/data-table-buttons/CampaignButton';
import SpinnerInput from '../../../data-table/data-table-icons/SpinnerInput';
import AddtoBasketButton from '../../../data-table/data-table-buttons/AddtoBasketButton';
import ProductPricePopover from '../../../data-table/data-table-icons/ProductPricePopover';

const TecDataTable = (props) => {
  const selectedCount = [];

  const pageName = 'TecData';

  const comonscol = [
    { title: 'Stok Kodu', field: 'kodu' },
    { title: 'Bulunma Durumu', field: 'kodu' },
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
    { title: 'Tutar', field: 'kdvli' },
    { title: '212', field: 'listeFiyati' },
    { title: '54', field: 'd_54' },
    { title: 'Spot', field: 'spot' },
    { title: 'Toplam', field: 'listeFiyati' },
    { title: 'Br', field: 'd_54' },
    {
      title: 'Liste Fiyatı',
      field: 'listeFiyati',
      render: (rowData) => (
        <div>
          <ProductPricePopover price={rowData.listeFiyati} />
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
      title: 'Sepet',
      field: '',
      sorting: false,
      render: (rowData) => (
        <>
          <AddtoBasketButton />
        </>
      ),
    },
    { title: "KDV'siz", field: 'kdvsiz' },
    { title: "KDV'li", field: 'kdvli' },
    { title: 'İskonto', field: 'iskonto' },
  ];

  const [data, setData] = useState([]);

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
  return (
    <>
      <Table col={comonscol} data={data} selectedCount={selectedCount} pageName={pageName} />
    </>
  );
};

export default TecDataTable;
