import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../../data-table/Table';

import InformationBox from '../../data-table/data-table-icons/InformationBox';
import CampaignButton from '../../data-table/data-table-buttons/CampaignButton';
import SpinnerInput from '../../data-table/data-table-icons/SpinnerInput';
import AddtoBasketButton from '../../data-table/data-table-buttons/AddtoBasketButton';

const Vehicles = (props) => {
  const selectedCount = [];

  const pageName = 'Araçlar';

  const comonscol = [
    {
      title: 'Model Adı',
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
      title: 'Sepet',
      field: '',
      sorting: false,
      render: (rowData) => (
        <>
          <AddtoBasketButton />
        </>
      ),
    },
    { title: 'Kasa Tipi', field: 'urunAdi' },
    { title: 'Yakıt Tipi', field: 'urunAdi' },
    { title: 'M.Hacmi', field: 'd_54' },
    { title: 'Motor Gücü', field: 'd_54' },
    { title: 'Silindir', field: 'd_54' },
    { title: 'Valf', field: 'd_54' },
    { title: 'Başlangıç', field: 'd_54' },
    { title: 'Bitiş', field: 'd_54' },
    { title: 'Motor Kodları', field: 'd_54' },
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

export default Vehicles;
