import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../../data-table/Table';

import ReceiptButton from '../../data-table/data-table-buttons/ReceiptButton';

const OldPaymentsTable = (props) => {
  // const data = [
  //   { param: "Admin", val: "0.03" },
  //   { param: "Margin", val: "444" },
  //   { param: "Price", val: "555" }
  // ];
  const selectedCount = [];

  const pageName = 'Geçmiş Ödemeler';
  const height = '30px';
  const comonscol = [
    {
      title: 'Tarih',
      field: 'urunAdi',
    },
    { title: 'Banka', field: 'd_54' },
    { title: 'Tutar', field: 'd_54' },
    { title: 'Provizyon No', field: 'd_54' },
    { title: 'Çekim', field: 'd_54' },
    { title: 'Banka Mesajı', field: 'd_54' },
    {
      title: 'Yazdır',
      render: (rowData) => (
        <div className="d-flex justify-content-center">
          <ReceiptButton />
        </div>
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

export default OldPaymentsTable;
