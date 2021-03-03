import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../../data-table/Table';

const CurrentAccountChecks = (props) => {
  const selectedCount = [];

  const pageName = 'Cari Çekler';
  const height = '30px';

  const rando = (max) => Math.floor(Math.random() * max);
  const dates = ['22.04.2020', '03.05.2021', '11.10.2020'];
  const ciro = ['ASIL', 'ASIL DEĞİL'];
  const banks = ['Ziraat Bankası', 'Vakıfbank', 'İş Bankası'];
  const durum = ["ÖDENDİ", "CİRO EDİLDİ", "BEKLENİYOR"]
  const rawData = [];

  for (let i = 0; i < 100; i++)
    rawData.push({
      d_52: "000000" + rando(400),
      kodu: dates[i % dates.length],
      d_54: rando(40),
      listeFiyati: rando(550) + ' TL',
      stok: ciro[i % ciro.length],
      durum: durum[i% durum.length],
      banks: banks[i % banks.length],      
    });

  const comonscol = [
    { title: 'Bordro No', field: 'd_52' },
    { title: 'Giriş Tarihi', field: 'kodu' },
    { title: 'Vade Tarihi', field: 'kodu' },
    { title: 'Çek No', field: 'd_54' },
    { title: 'Tutar', field: 'listeFiyati' },
    { title: 'Asıl Ciro', field: 'stok' },
    { title: 'Çek Durumu', field: 'durum' },
    { title: 'Banka', field: 'banks' },
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
  }, []);
 */
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

export default CurrentAccountChecks;
