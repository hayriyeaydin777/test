import React from 'react';

import BasketBackgroundImg from '../../../statics/background/images/basket-background.png';

import svg from '../../../statics/svg';

const BasketTrain = (props) => {
  const sliderItems = [
    {
      id: 1,
      name: '212 Esenyurt Depo',
      item: [],
      cargo: '',
      color: 'blue',
    },
    {
      id: 2,
      name: '212 Esenyurt Depo',
      item: [],
      cargo: '',
      color: 'blue',
    },
    {
      id: 3,
      name: '212 Esenyurt Depo',
      item: [],
      cargo: '',
      color: 'blue',
    },
    {
      id: 4,
      name: '212 Esenyurt Depo',
      item: [],
      cargo: '',
      color: 'blue',
    },
  ];

  return (
    <>
      <div className="basket-boxes-row" /* style={{backgroundImage: `url(${BasketBackgroundImg})`}} */>
        <div className="truck-icon">
          <button className="button truck-submit-button">
            <span className="icon">
              <svg.sendBox />
            </span>
            <span>SEPETİ GÖNDER</span>
          </button>
        </div>
        <div className="basket-boxes">
          {sliderItems.map((value, key) => {
            return (
              <div key={key} className={`basket-box ${value.color}`}>
                <div className="basket-title-div">
                  <p className={`basket-title ${value.color}`}>{value.name}</p>
                </div>
                <div className="basket-wrapper-inside">
                  <div className="price-list">
                    <ul>
                      <li>Brüt:</li>
                      <li>İskonto:</li>
                      <li>Toplam:</li>
                      <li>KDV:</li>
                      <li>G.Toplam:</li>
                      <li>1000 TL</li>
                      <li>-100 TL</li>
                      <li>1000 TL</li>
                      <li>100 TL</li>
                      <li>1000 TL</li>
                    </ul>
                  </div>
                  <div className="select-shipping">
                    <select name="shipping-type" id="shipping">
                      <option>Sevkiyat Adresi</option>
                      <option value="shipp-type1">Adres 1</option>
                      <option value="shipp-type">Adres 2</option>
                    </select>
                    <select name="adresses" id="adress">
                      <option>Sevkiyat Türü</option>
                      <option value="address1">Tür 1</option>
                      <option value="address2">Tür 2</option>
                    </select>
                  </div>
                </div>
                <input className={`${value.color}`} type="text" placeholder="Sipariş Mesajı:"></input>
                <button className={`add-basket-submit ${value.color}`}>Sepeti Gönder</button>
              </div>
            );
          })}
        </div>
        <div className="basket-total">
			<div className="total-list">
          <p>SEPET TOPLAM</p>
          <ul>
            <li>Brüt:</li>
            <li>İskonto:</li>
            <li>Toplam:</li>
            <li>KDV:</li>
            <li>G.Toplam:</li>
            <li>K.Bakiye</li>
            <li>1000 TL</li>
            <li>-100 TL</li>
            <li>1000 TL</li>
            <li>100 TL</li>
            <li>1000 TL</li>
            <li>1000 TL</li>
          </ul>
		 {/*  <div className="all-baskets-wrapper">
		  <button className="all-baskets-submit">Tüm Sepetleri Gönder</button>
		  </div> */}
		</div>
        </div>
		
      </div>
	  
    </>
  );
};

export default BasketTrain;
