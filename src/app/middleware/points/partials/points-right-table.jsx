import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../../data-table/Table';

import InformationBox from '../../data-table/data-table-icons/InformationBox';
import CampaignButton from '../../data-table/data-table-buttons/CampaignButton';

const PointsRightTable = (props) => {
  // const data = [
  //   { param: "Admin", val: "0.03" },
  //   { param: "Margin", val: "444" },
  //   { param: "Price", val: "555" }
  // ];
  const selectedCount = [];

  const pageName = 'Ürünler';
  const height = '30px';

  const comonscol = [
    { title: 'Tarih', field: 'kodu' },
    { title: 'Evrak No', field: 'kodu' },
    {
      title: 'Marka',
      field: 'urunAdi',
      render: (rowData) => (
        <div>
          {rowData.urunAdi}

          <InformationBox />
          <CampaignButton />
        </div>
      ),
    },
    { title: 'Stok Kodu', field: 'd_54' },
    { title: 'Miktar', field: 'd_54' },
    { title: 'Tutar', field: 'd_54' },
    { title: 'Puan', field: 'd_54' },
    { title: 'Spot', field: 'spot' },
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
        height={height}
      />
    </>
  );
};

export default PointsRightTable;
