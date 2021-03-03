import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../../data-table/Table';
import ChooseCompanyButton from '../../data-table/data-table-buttons/ChooseCompanyButton';

const WithItemsinBasket = (props) => {
  const selectedCount = [];

  const pageName = 'Sepette Ürün Olanlar';
  const height = '30px';

  const rando = (max) => Math.floor(Math.random() * max);
  const brand = ["C1", "Oto İsmail", "Mepa"];
  const phones = ["0 565 565 75 35", "0212 333 433", "0505 444 55 24"];
  const cities = ["İstanbul", "Sakarya", "Samsun"];
  const rawData = [];

  for (let i = 0; i < 100; i++)
    rawData.push({
      kodu: rando(800),
      urunAdi: brand[i % brand.length],
      phone: phones[i % phones.length],
      listeFiyati: rando(50) + " TL",
      d_54: cities[i % cities.length],
    });

  const comonscol = [
    { title: 'Firma Kodu', field: 'kodu' },
    { title: 'Firma Adı', field: 'urunAdi' },
    { title: 'Telefon', field: 'phone' },
    { title: 'İlçe', field: 'd_54' },
    { title: 'İl', field: 'd_54' },
    { title: 'Bakiye', field: 'listeFiyati' },
    { title: 'Şube', field: 'd_54' },
    { title: 'Sepet Tutarı', field: 'listeFiyati' },
    {
      title: "Excell'e Aktar",
      render: (rowData) => (
        <div className="d-flex justify-content-center">
          <ChooseCompanyButton />
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
      />
    </>
  );
};

export default WithItemsinBasket;
