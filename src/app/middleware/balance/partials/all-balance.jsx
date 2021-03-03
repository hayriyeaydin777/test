import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../../data-table/Table';

import awesomeIcon from '../../../../statics/icon';

import InformationBox from '../../data-table/data-table-icons/InformationBox';
import CampaignButton from '../../data-table/data-table-buttons/CampaignButton';
import ImageGallery from '../../data-table/image-gallery/ImageGallery';
import SpinnerInput from '../../data-table/data-table-icons/SpinnerInput';
import AddtoBasketButton from '../../data-table/data-table-buttons/AddtoBasketButton';

const AllBalance = (props) => {
  const selectedCount = [];

  const pageName = 'Hepsi';
  const height = '30px';

  const rando = (max) => Math.floor(Math.random() * max);
  const notes = ['SEVK EDİLEN' , 'SEVK EDİLMEYEN'];
  const sender = ['CEVDET BOZTAŞ', 'GÖZDE OCAK', 'İSMAİL OSMAN'];
  const urunAdi = ['WÜRTH KESME TAŞI 115X1', 'GÖMLEK CONTASI' , 'KRANK KEP CİVATASI' , 'FREN BALATASI'];
  const iskonto = ['%35 + 5 + 5'];
  const spot = ['X'];
  const bilgi = ['SYD-16 58888'];
  const rawData = [];

  for (let i = 0; i < 100; i++)
    rawData.push({
      notes: notes[i % notes.length],
      sender: sender[i % sender.length],
      d_52: '000000' + rando(400),
      urunAdi: urunAdi[i % urunAdi.length],
      listeFiyati: rando(550) + ' TL',
      iskonto: iskonto[i % iskonto.length],
      spot: spot[i % spot.length],
      bilgi: bilgi[i % bilgi.length],
      d_54: rando(40),
    });

  const comonscol = [
    { title: 'Türü', field: 'notes' },
    { title: 'Ekleyen', field: 'sender' },
    { title: 'Stok Kodu', field: 'd_52' },
    {
      title: 'Stok Adı',
      field: 'urunAdi',
    },
    { title: 'Liste Fiyat', field: 'listeFiyati' },
    { title: 'İskonto', field: 'iskonto' },
    { title: 'Net Fiyat', field: 'listeFiyati' },
    { title: 'Toplam', field: 'listeFiyati' },
    { title: '06.', field: 'd_54' },
    { title: '216', field: 'd_54' },
    { title: '38', field: 'd_54' },
    { title: 'Spot', field: 'spot' },
    { title: 'Miktar', field: 'd_54' },
    { title: 'Oto Sevkiyat', field: 'spot' },
    { title: 'Bilgilendirme', field: 'bilgi' },
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

export default AllBalance;
