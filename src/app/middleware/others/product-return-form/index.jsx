import React from 'react';
import awesomeIcon from '../../../../statics/icon';
import ProductReturnTable from '../partials/product-return-table';

const ProductReturnForm = (props) => {
  return (
    <>
      <div className="product-return-form-page-wrapper">
        <div className="product-return-form-wrapper">
          <form className="product-return-form">
            <div className="product-return-form-body">
              <div className="form-group">
                <p className="form-check-inline">İade Ürün Tipi: </p>
                <div className="form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">
                    SAĞLAM
                  </label>
                </div>
                <div className="form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox2">
                    HASARLI
                  </label>
                </div>
                <div className="form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox3">
                    ARIZALI
                  </label>
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="productcode"
                  name="productcode"
                  placeholder="Ürün Kodu"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="groupcode"
                  name="groupcode"
                  placeholder="Grup Kodu"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="productname"
                  name="productname"
                  placeholder="Ürün Adı"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  name="date"
                  placeholder="Tarih"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="billno"
                  name="billno"
                  placeholder="Fatura No"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="productnumber"
                  name="productnumber"
                  placeholder="Miktar"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  name="price"
                  placeholder="Birim Fiyatı"
                  required
                />
              </div>
              <div className="form-group ">
                <select className="custom-select" id="inputGroupSelect02">
                  <option defaultValue>İade Nedeni</option>
                  <option value="1">Parça Hasarlı Geldi</option>
                  <option value="2">Parça Boyutları Farklı</option>
                  <option value="3">Parça Rengi Değişik</option>
                </select>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  placeholder="İade Açıklaması Yazınız..."
                ></textarea>
              </div>
              <div className="text-center">
                <input type="submit" value="Gönder" className="btn-block submit-return-form" />
              </div>
            </div>
          </form>
        </div>
        <div className="col-6">
          <ProductReturnTable />
        </div>
      </div>
    </>
  );
};

export default ProductReturnForm;
