import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../../data-table/Table';

const BrandNetSaleTurnover = (props) => {
  const selectedCount = [];

  const pageName = 'Finansal Özet';
  const height = '30px';

  const comonscol = [
    { title: 'Toplam Çalışmamız', field: 'listeFiyati' },
    { title: 'Toplam Borç', field: 'listeFiyati' },
    { title: 'Toplam İade', field: 'listeFiyati' },
    { title: 'Toplam Net Satış', field: 'listeFiyati' },
    { title: 'Toplam Ödemeniz', field: 'listeFiyati' },
    { title: 'Toplam Çek Ödemeniz', field: 'listeFiyati' },
    { title: 'Toplam Senet Ödemeniz', field: 'listeFiyati' },
    { title: 'Toplam DBS Ödemeniz', field: 'listeFiyati' },
    { title: 'Toplam KK Ödemeniz', field: 'listeFiyati' },
    { title: 'Toplam EFT/Havale Ödemeniz', field: 'listeFiyati' },
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

export default BrandNetSaleTurnover;
