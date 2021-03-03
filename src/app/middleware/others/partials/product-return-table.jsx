import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../../data-table/Table';

import InformationBox from '../../data-table/data-table-icons/InformationBox';
import CampaignButton from '../../data-table/data-table-buttons/CampaignButton';
import SpinnerInput from '../../data-table/data-table-icons/SpinnerInput';
import AddtoBasketButton from '../../data-table/data-table-buttons/AddtoBasketButton';

const ProductReturnTable = (props) => {
  // const data = [
  //   { param: "Admin", val: "0.03" },
  //   { param: "Margin", val: "444" },
  //   { param: "Price", val: "555" }
  // ];
  const selectedCount = [];

  const pageName = 'İade Sepeti';
  const selection = true;

  const comonscol = [
    { title: 'Kodu', field: 'kodu' },
    { title: 'Grup Kodu', field: 'kodu' },
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
        <SpinnerInput>
          <SpinnerInput />
        </SpinnerInput>
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
    { title: 'İade Tipi', field: 'd_54' },
    { title: 'Miktar', field: 'd_54' },
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
      <Table
        col={comonscol}
        data={data}
        selectedCount={selectedCount}
        pageName={pageName}
        selection={selection}
      />
    </>
  );
};

export default ProductReturnTable;
