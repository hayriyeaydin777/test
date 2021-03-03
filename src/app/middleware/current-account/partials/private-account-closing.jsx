import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../../data-table/Table';

const AccountClosing = (props) => {
  const selectedCount = [];

  const pageName = 'Özel Hesap Kapatma';
  const height = '30px';

  const rando = (max) => Math.floor(Math.random() * max);
  const dates = ['22.04.2020', '03.05.2021', '11.10.2020'];
  const notes = ['FATURA', 'FATURAMIZ'];
  const cities = ['İstanbul', 'Sakarya', 'Samsun'];
  const rawData = [];

  for (let i = 0; i < 100; i++)
    rawData.push({
      kodu: dates[i % dates.length],
      urunAdi: notes[i % notes.length],
      listeFiyati: rando(550) + ' TL',
      city: cities[i % cities.length],
      d_54: + rando(40),
      d_52: "B000" + rando(400)
    });

  const comonscol = [
    { title: 'Fatura Tarihi', field: 'kodu' },
    { title: 'Vade Tarihi', field: 'kodu' },
    { title: 'Fatura no', field: 'd_52' },
    { title: 'Tutar', field: 'listeFiyati' },
    { title: 'Ödenen Tutar', field: 'listeFiyati' },
    { title: 'Kalan Tutar', field: 'listeFiyati' },
    { title: 'Kalan Gün', field: 'd_54' },
  ];

  const [data, setData] = useState(rawData);

/*   const [data, setData] = useState([]);

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
      />
    </>
  );
};

export default AccountClosing;
