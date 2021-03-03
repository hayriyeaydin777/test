import React, { useState } from 'react';
import { Form, Row } from 'react-bootstrap';

const Suggestions = (props) => {
  const [fileName, setFileName] = useState('Dosya Seçiniz');

  return (
    <>
      <div className="suggestion-form-wrapper">
        <p className="suggestion-form-title">Müşteri Yedek Talep/Şikayet/Öneri Formu</p>
        <form className="suggestion-form">
          <div className="suggestion-form-body">
            {/*   <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Ad Soyad"
                required
              />
            </div> */}
            {/*    <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Telefon"
                required
              />
            </div> */}
            {/*    <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div> */}
  
            <div className="form-group ">
            <div className="form-check">
                <input type="radio" className="form-check-input" id="productReturn" />
                <label className="form-check-label" htmlFor="productReturn">
                  Ürün İadesi
                </label>
              </div>
              <div className="form-check">
                <input type="radio" className="form-check-input" id="shipmentTime" />
                <label className="form-check-label" htmlFor="shipmentTime">
                  Kargo Süresi
                </label>
              </div>
              <div className="form-check">
                <input type="radio" className="form-check-input" id="billRequest" />
                <label className="form-check-label" htmlFor="billRequest">
                  Fatura İstemi
                </label>
              </div>
              <div className="form-check">
                <input type="radio" className="form-check-input" id="partRequest" />
                <label className="form-check-label" htmlFor="partRequest">
                  Yedek Parça Talep
                </label>
              </div>
              <div className="form-check">
                <input type="radio" className="form-check-input" id="otherRequest" />
                <label className="form-check-label" htmlFor="otherRequest">
                  Diğer
                </label>
              </div>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Konu" required></input>
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                placeholder="Mesajınızı Yazınız..."
                required
              ></textarea>
            </div>
            <div className="form-group">
              <div className="custom-file mb-3">
                <input
                  type="file"
                  className="custom-file"
                  id="customFile"
                  name="filename"
                  onChange={(e) => setFileName(e.target.files[0].name)}
                />
                <label className="custom-file-label" htmlFor="customFile">
                  {fileName}
                </label>
              </div>
            </div>
            <div className="text-center">
              <input type="submit" value="Gönder" className="btn-block submit-suggestion" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Suggestions;
