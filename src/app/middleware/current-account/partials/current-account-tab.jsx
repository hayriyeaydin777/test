import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../../data-table/Table';

const CurrentAccountTab = (props) => {
  const selectedCount = [];

  const pageName = 'Cari Hesap';
  const height = '30px';

  const rando = (max) => Math.floor(Math.random() * max);
  const dates = ['22.04.2020', '03.05.2021', '11.10.2020'];
  const notes = ['FATURA', 'FATURAMIZ'];
  const cities = ['İstanbul', 'Sakarya', 'Samsun'];
  const rawData = [];

  for (let i = 0; i < 100; i++)
    rawData.push({
      date: dates[i % dates.length],
      urunAdi: notes[i % notes.length],
      listeFiyati: rando(550) + ' TL',
      city: cities[i % cities.length],
      d_54: "B000" + rando(4000)
    });

  const comonscol = [
    { title: 'Tarih', field: 'date' },
    { title: 'Vade Tarihi', field: 'date' },
    { title: 'Açıklama', field: 'urunAdi' },
    { title: 'Depo', field: 'city' },
    { title: 'Evrak No', field: 'd_54' },
    { title: 'Borç', field: 'listeFiyati' },
    { title: 'Alacak', field: 'listeFiyati' },
    { title: 'Borç Bakiyesi', field: 'listeFiyati' },
  ];

  const [data, setData] = useState(rawData);

 /*  const [data, setData] = useState([]);

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

export default CurrentAccountTab;
