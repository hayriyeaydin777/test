import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DetailButton from '../../data-table/data-table-buttons/DetailButton';
import Table from '../../data-table/Table';

const BillingDueDate = (props) => {
  const selectedCount = [];
  const selection = true;
  const pageName = 'FATURA VADE GÜNÜ';
  const height = '30px';

  const rando = (max) => Math.floor(Math.random() * max);
  const dates = ['22.04.2020', '03.05.2021', '11.10.2020'];
  const notes = ['FATURAMIZ', 'FATURA'];
  const rawData = [];

  for (let i = 0; i < 100; i++)
    rawData.push({
      d_52: '000000' + rando(400),
      kodu: dates[i % dates.length],
      notes: notes[i % notes.length],
      listeFiyati: rando(550) + ' TL',
      d_54: rando(40),
    });

  const comonscol = [
    { title: 'Belge No', field: 'd_52' },
    { title: 'Belge Tarihi', field: 'kodu' },
    { title: 'Vade Tarihi', field: 'kodu' },
    { title: 'Açıklama', field: 'notes' },
    { title: 'Borç', field: 'listeFiyati' },
    { title: 'Alacak', field: 'listeFiyati' },
    { title: 'Gün', field: 'd_54' },
    {
      title: 'Detay',
      render: (rowData) => (
        <div className="d-flex justify-content-center">
          <DetailButton />
        </div>
      ),
    },
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
  }, []); */

  return (
    <>
      <Table
        col={comonscol}
        data={data}
        selectedCount={selectedCount}
        pageName={pageName}
        height={height}
        selection={selection}
      />
    </>
  );
};

export default BillingDueDate;
