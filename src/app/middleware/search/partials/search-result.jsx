import React, { memo } from 'react';
import Table from '../../data-table/Table';
import Swal from 'sweetalert2';

import InformationBox from '../../data-table/data-table-icons/InformationBox';
import CampaignButton from '../../data-table/data-table-buttons/CampaignButton';
import ImageGallery from '../../data-table/image-gallery/ImageGallery';
import SpinnerInput from '../../data-table/data-table-icons/SpinnerInput';
import AddtoBasketButton from '../../data-table/data-table-buttons/AddtoBasketButton';
import ProductPricePopover from '../../data-table/data-table-icons/ProductPricePopover';

import { connect } from 'react-redux';
import axios from 'axios';

const SearchResult = memo(({ getSearchText = '' }) => {
  // const data = [
  //   { param: "Admin", val: "0.03" },
  //   { param: "Margin", val: "444" },
  //   { param: "Price", val: "555" }
  // ];
  const selectedCount = [];

  const pageName = 'Arama Sonuçları';

  const comonscol = [
    { title: 'Stok Kodu', field: 'kodu' },
    { title: 'RefNo', field: 'kodu' },
    {
      title: 'Ürün Adı',
      field: 'urunAdi',
      render: (rowData) => (
        <div>
          {rowData.urunAdi}

          <InformationBox info={rowData.urunAdi} />
          <CampaignButton />
        </div>
      ),
    },
    { title: 'Puan', field: 'd_54' },
    {
      title: '',
      sorting: false,
      field: 'resimKucuk',
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
    { title: 'depo1', field: 'kdvsiz' },
    { title: 'depo2', field: 'brAdet' },
    { title: 'depo3', field: 'brAdet' },
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
  ];

  const [data, setData] = React.useState([]);

  const getSearchTextTrim = getSearchText.toLocaleUpperCase('tr').trim().replace(/  +/g, ' ');

  React.useEffect(() => {
    const URL = `https://testdinamikoto.yuceyazilim.com.tr/api/Products/GetProductsByProductName?urunAdi=${getSearchTextTrim}`;
    axios
      .get(URL)
      .then((response) => {
        setData(response.data);
        const getData = response.data;
        if (getData.length <= 0) {
          Swal.fire({
            title: 'Sonuç Bulunamadı',
            icon: 'warning',
            showCancelButton: false,
            confirmButtonColor: '#3a8bb8',
            cancelButtonColor: '#d40104',
            iconColor: '#d40104',
            confirmButtonText: 'Tamam',
            customClass: {
              cancelButton: 'swal-fire-button',
              confirmButton: 'swal-fire-button',
            },
          });
          return false;
        }
      })
      .catch((error) => {
        console.log('ERROR:', error);
      });
  }, []);

  /*  const getSearchTextTrim = getSearchText.toLocaleUpperCase('tr').trim().replace(/  +/g, ' ');

  React.useEffect(() => {
    const url = `https://testdinamikoto.yuceyazilim.com.tr/api/Products/GetProductsByProductName?urunAdi=${getSearchTextTrim}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err.message));
  }, []);*/

  /* console.log(getSearchTextTrim); */

  return (
    <>
      <Table col={comonscol} data={data} selectedCount={selectedCount} pageName={pageName} />
    </>
  );
});

const mapStateToProps = (state) => {
  return {
    getSearchText: state.getSearchText,
  };
};

export default connect(mapStateToProps)(SearchResult);
