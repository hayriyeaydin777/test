import React from 'react';
import svg from '../../../../statics/svg';

const OrderSummary = (props) => {
  return (
    <>
      <div className="order-summary-wrapper">
        <div className="order-summary">
          <div className="text-center order-summary-title">
            <span>SİPARİŞ ÖZETİ</span>
          </div>
          <ul>
            <li>
              <div className="col-7">Tutar:</div>{' '}
              <div className="col-5 price-text">1.738,21 TL</div>
            </li>
            <li>
              <div className="col-7">İskonto:</div>{' '}
              <div className="col-5 price-text">305,93 TL</div>
            </li>
            <li>
              <div className="col-7">Ara Toplam:</div>{' '}
              <div className="col-5 price-text">668,07 TL</div>
            </li>
            <li>
              <div className="col-7">KDV:</div> <div className="col-5 price-text">120,25 TL</div>
            </li>
          </ul>

          <div className="order-summary-total">TOPLAM: 1.095,87 TL</div>
          <div className="col-12 send-order-buttons-wrapper">
          <button className="col-6 order-summary-send-basket"><span><svg.export /></span>SİPARİŞ GÖNDER</button>
          <button className="col-6 order-summary-send-choosing">
              <span><svg.checklist /></span>SEÇİLİLERİ SİPARİŞ GÖNDER
            </button>
          </div>

          {/* <button className="btn-block order-summary-send-basket">SİPARİŞ GÖNDER</button> */}
          <div className="col-12 order-summary-basket-option-button-wrapper">
            {/* <button className="btn-block order-summary-basket-option-button">
              SEÇİLİLERİ SİPARİŞ GÖNDER
            </button> */}
            <button className="col-4  order-summary-basket-option-button">SEPETİ BOŞALT</button>
            <button className="col-4  order-summary-basket-option-button">EXCEL'E AKTAR</button>
            <button className="col-4  order-summary-basket-option-button">
              EXCEL'DEN ÜRÜN AL
            </button>
          </div>
        </div>
   {/*      <div className="order-summary-order-note">
          <p className="order-summary-note-title">Sipariş Notu</p>
          <textarea type="text" className="order-summary-note-textarea" />
        </div>
        <div className="order-summary-selection">
          <p className="order-summary-note-title">Sevkiyat Türü ( Tipleri )</p>
          <select className="order-summary-note-select">
            <option>Kargo</option>
            <option value="1">Siz Gönderin</option>
            <option value="2">Biz Alacağız</option>
            <option value="3">Kargo</option>
            <option value="4">Ambar</option>
          </select>
        </div>
        <button className="btn-block order-summary-note-save-button">
          NOT/SEVKİYAT TÜRÜ KAYDET
        </button> */}
      </div>
    </>
  );
};

export default OrderSummary;
