import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../../data-table/Table';

const OrderTab = (props) => {
  const selectedCount = [];

  const pageName = 'Siparişler';
  const height = '30px';

  const rando = (max) => Math.floor(Math.random() * max);
  const sender = ['CEVDET BOZTAŞ', 'GÖZDE OCAK', 'İSMAİL OSMAN'];
  const dates = ['22.04.2020', '03.05.2021', '11.10.2020'];
  const notes = ['ŞİRKET SERVİSİ', 'KARGO SEVKİYAT'];
  const durum = ['ONAYLANDI', 'ONAYLANMADI'];
  const message = ['ACİL', 'ACİL GELSİN', 'PARA YATIRILDI'];
  const rawData = [];

  for (let i = 0; i < 100; i++)
    rawData.push({
      sender: sender[i % sender.length],
      kodu: dates[i % dates.length],
      d_54: rando(10),
      notes: notes[i % notes.length],
      listeFiyati: rando(550) + ' TL',
      durum: durum[i % durum.length],
      d_52: 'D0000' + rando(500),
      message: message[i % message.length],
    });

  const comonscol = [
    { title: 'Gönderen', field: 'sender' },
    { title: 'Gönderme Tarihi', field: 'kodu' },
    { title: 'Satır Adedi', field: 'd_54' },
    { title: 'Toplam Fiyat', field: 'listeFiyati' },
    { title: "Toplam(KDV'li)", field: 'listeFiyati' },
    { title: 'Depo', field: 'd_54' },
    { title: 'Sevkiyat', field: 'notes' },
    { title: 'Durumu', field: 'durum' },
    { title: 'Fatura No', field: 'd_52' },
    { title: 'Sipariş Mesajı', field: 'message' },
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
      />
    </>
  );
};

export default OrderTab;
