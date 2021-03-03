import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../../data-table/Table';

const AdvantagePurchase = (props) => {
  const selectedCount = [];

  const pageName = 'Avantajlı Çekim';
  const height = '30px';

  const rando = (max) => Math.floor(Math.random() * max);
  const dates = ['11.02.2020', '04.05.2021', '01.04.2020'];
  const notes = ['FATURA', 'ÖNEMLİ FATURA'];
  const rawData = [];

  for (let i = 0; i < 100; i++)
    rawData.push({
      tarih: dates[i % dates.length],
      kodu: 'D000' + rando(800),
      stok: notes[i % notes.length],
      listeFiyati: rando(300) + ' TL',
      d_54: rando(50),
    });

  const comonscol = [
    { title: 'Tarih', field: 'tarih' },
    { title: 'Vade Tarihi', field: 'tarih' },
    { title: 'Belge No', field: 'kodu' },
    { title: 'Açıklama', field: 'stok' },
    { title: 'Borç', field: 'listeFiyati' },
    { title: 'Borç Bakiye', field: 'listeFiyati' },
    { title: 'Geçen Gün', field: 'd_54' },
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

export default AdvantagePurchase;
