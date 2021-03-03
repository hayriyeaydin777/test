import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../../data-table/Table';

import InformationBox from '../../data-table/data-table-icons/InformationBox';
import CampaignButton from '../../data-table/data-table-buttons/CampaignButton';
import SpinnerInput from '../../data-table/data-table-icons/SpinnerInput';
import AddtoBasketButton from '../../data-table/data-table-buttons/AddtoBasketButton';

const OemResult = (props) => {
  const selectedCount = [];

  const pageName = 'Oem';

  const comonscol = [
    {
      title: 'Stok Kodu',
      field: 'kodu',
      cellStyle: {
        width: 150,
        maxWidth: 150,
      },
      headerStyle: {
        width: 150,
        maxWidth: 150,
      },
    },
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

      cellStyle: {
        width: 300,
        maxWidth: 300,
      },
      headerStyle: {
        width: 300,
        maxWidth: 300,
      },
    },
    { title: 'Yetkili Servis Fiyatı', field: 'kdvli' },
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

export default OemResult;
