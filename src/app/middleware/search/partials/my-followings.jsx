import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../../data-table/Table';

import InformationBox from '../../data-table/data-table-icons/InformationBox';
import CampaignButton from '../../data-table/data-table-buttons/CampaignButton';
import ImageGallery from '../../data-table/image-gallery/ImageGallery';
import SpinnerInput from '../../data-table/data-table-icons/SpinnerInput';
import AddtoBasketButton from '../../data-table/data-table-buttons/AddtoBasketButton';
import ProductPricePopover from '../../data-table/data-table-icons/ProductPricePopover';
import RemoveFollowingsButton from '../../data-table/data-table-buttons/RemoveFollowingsButton';

const MyFollowings = (props) => {
  // const data = [
  //   { param: "Admin", val: "0.03" },
  //   { param: "Margin", val: "0.4" },
  //   { param: "Price", val: "5080" }
  // ];
  const selectedCount = [];

  const pageName = 'Takip Ettiklerim';

  const comonscol = [
    { title: 'Stok Kodu', field: 'kodu' },
    { title: 'RefNo', field: 'kodu' },
    {
      title: 'Ürün Adı',
      field: 'urunAdi',
      render: (rowData) => (
        <div>
          {rowData.urunAdi}

          <InformationBox />
          <CampaignButton />
        </div>
      ),
    },
    { title: 'Puan', field: 'd_54' },
    {
      title: '',
      field: 'resimKucuk',
      sorting: false,
      render: (rowData) => (
        <>
          <ImageGallery
            productIcon={rowData.resimKucuk}
            productImage={rowData.resimBuyuk}
            imageGallery1={rowData.resimBuyuk}
            imageGallery2={rowData.resimBuyuk}
            imageGallery3={rowData.resimBuyuk}
          />
        </>
      ),
    },
    { title: 'depo1', field: 'd_54' },
    { title: 'depo2', field: 'd_54' },
    { title: 'depo3', field: 'd_54' },
    { title: 'Spot', field: 'spot' },
    { title: 'Toplam', field: 'kdvsiz' },
    { title: 'Br.', field: 'brAdet' },
    {
      title: 'Liste Fiyatı',
      field: 'listeFiyati',
      render: (rowData) => (
        <div>
          <ProductPricePopover price={rowData.listeFiyati} />
        </div>
      ),
    },
    {
      title: 'Adet',
      field: '',
      sorting: false,
      render: (rowData) => (
        <>
          <SpinnerInput />
        </>
      ),
    },
    {
      title: 'Sepet',
      field: '',
      sorting: false,
      render: (rowData) => (
        <>
          <AddtoBasketButton />
        </>
      ),
    },
    { title: "KDV'siz", field: 'kdvsiz' },
    { title: "KDV'li", field: 'kdvli' },
    { title: 'iskonto', field: 'iskonto' },
    {
      title: 'Sil',
      render: (rowData) => (
        <>
          <RemoveFollowingsButton />
        </>
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
      <Table col={comonscol} data={data} selectedCount={selectedCount} pageName={pageName} />
    </>
  );
};

export default MyFollowings;
