import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../../data-table/Table';

const OrderStatus = (props) => {
  const selectedCount = [];

  const pageName = 'Sipariş Durumu';
  const height = '30px';

  const comonscol = [
    { title: 'Gönderen', field: 'kodu' },
    { title: 'Gönderme Tarihi', field: 'd_54' },
    { title: 'Satır Adedi', field: 'd_54' },
    { title: 'Toplam Fiyat', field: 'listeFiyati' },
    { title: "Toplam(KDV'li)", field: 'listeFiyati' },
    { title: 'Depo', field: 'd_54' },
    { title: 'Sevkiyat', field: 'listeFiyati' },
    { title: 'Durumu', field: 'listeFiyati' },
    { title: 'Fatura No', field: 'listeFiyati' },
    { title: 'Sipariş Mesajı', field: 'd_54' },
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

export default OrderStatus;
