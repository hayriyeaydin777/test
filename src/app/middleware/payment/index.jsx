import React from 'react';


import PopUp from '../../../components/PopUp';
import banklogos from '../../../statics/svg/bank-logos';
import svg from '../../../statics/svg';

export default class PaymentPage extends React.Component {
  constructor() {
    super();
    this.state = {
      number: '',
      name: '',
      expiry: '',
      cvc: '',
      issuer: '',
      focused: '',
      formData: null,
      popupBankToggle: false,
      popupContractToggle: false,
    };
  }

  handleCallback = ({ issuer , isValid}) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name,
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === 'cvc') {g
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { issuer } = this.state;
    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    this.form.reset();
  };

  render() {
    const { name, number, expiry, cvc, focused, issuer, formData } = this.state;

    return (
      <>
        <div className="payment-form-capsule">
          <div className="col-7 payment-form-wrapper">
            <div className="col-7 payment-form-container">
              <form>
                <div className="row mb-3">
                  <div className="col-6">
                    <label>Tutar</label>
                    <input
                      className="form-control"
                      id="price-input"
                      type="text"
                      placeholder="Tutar"
                    />
                  </div>
                  <div className="col-6">
                    <button
                      type="button"
                      className="purchase-options"
                      onClick={() => {
                        return this.setState({ popupBankToggle: true });
                      }}
                    >
                      <svg.paymentOptions />
                      <span>Tüm Taksit Seçenekleri</span>
                    </button>
                  </div>
                </div>
                <div className="form-group">
                  <label>Kart Numarası</label>
                  <input
                    type="tel"
                    name="number"
                    className="form-control"
                    placeholder="Kart Numarası"
                    required
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                </div>
                <div className="form-group">
                  <label>Kart Üzerindeki İsim</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Ad Soyad"
                    required
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                </div>
                <div className="row mb-3">
                  <div className="col-6">
                    <label>Son Kullanma Tarihi</label>
                    <input
                      type="text"
                      name="expiry"
                      className="form-control"
                      placeholder="AA/YY"
                      required
                      onChange={this.handleInputChange}
                      onFocus={this.handleInputFocus}
                    />
                  </div>
                  <div className="col-6">
                    <label>CVC</label>
                    <input
                      type="tel"
                      name="cvc"
                      className="form-control"
                      placeholder="CVC"
                      pattern="\d{3,4}"
                      required
                      onChange={this.handleInputChange}
                      onFocus={this.handleInputFocus}
                    />
                  </div>
                </div>
                <div className="form-actions">
                  <button className="btn btn-block confirm-payment-button">
                    Ödemeyi Onaylayın
                  </button>
                </div>
              </form>
            </div>
            <div className=" col-5 card-container">
Card Settings
              <div className="col-auto mt-4 mx-auto">
                <p>
                  <b>Tek/Taksitli Çekim</b>
                </p>
                <input type="radio" id="single" name="purchase" />
                <label htmlFor="single"> Tek Çekim - 500,00 TL</label>
                <br />
                <input type="radio" id="multiple" name="purchase" />
                <label htmlFor="multiple"> 2+2 = 4 Taksit </label>
                <p>Aylık: 125,00 TL</p>
                <p>Toplam: 500 TL</p>
                <hr />
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="3dcheck" />
                  <label className="form-check-label" htmlFor="3dcheck">
                    3D Security ile Ödeme Yapmak İstiyorum.
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="contract-check"
                    required
                  />
                  <label className="form-check-label" htmlFor="contract-check">
                    <a
                      onClick={() => {
                        return this.setState({ popupContractToggle: true });
                      }}
                    >
                      <u>Sözleşme Şartlarını </u>
                    </a>
                    Okudum ve Kabul Ediyorum.
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 payment-form-wrapper-right">
            <h3 className="text-center">Tahsilat Linki ile Ödeme</h3>
            <div className="form-group">
              <label>Tutar</label>
              <input
                className="form-control"
                id="link-price-input"
                type="text"
                placeholder="Tutar"
              />
            </div>
            <div className="form-group">
              <label>Müşteri Telefon Numarası</label>
              <input
                type="tel"
                name="number"
                className="form-control"
                placeholder="Müşteri Telefon Numarası"
              />
            </div>
            <button className="btn btn-block with-link-button">Tahsilat Linkini Gönder</button>
          </div>
        </div>
        {this.state.popupBankToggle && (
          <PopUp
            title="Taksit Seçenekleri"
            className="purchase-popup"
            close={(close) => this.setState({ popupBankToggle: false })}
          >
            <>
              <div className="container pt-3 payment-table-container ">
                <table className="bank-table table">
                  <thead>
                    <tr>
                      <th scope="col">Banka</th>
                      <th scope="col">Kart</th>
                      <th scope="col">Taksit</th>
                      <th scope="col">Aylık</th>
                      <th scope="col">Toplam</th>
                      <th scope="col">Bilgi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <banklogos.halkbankLogo className="" />
                      </th>
                      <td>
                        <banklogos.parafLogo className="" />
                      </td>
                      <td>4+3=7</td>
                      <td>₺71,43</td>
                      <td>₺500,00</td>
                      <td>₺300,00 üzeri işlemlerde</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <banklogos.akbankLogo className="" />
                      </th>
                      <td>
                        <banklogos.axessLogo className="" />
                      </td>
                      <td>4+3=7</td>
                      <td>₺71,43</td>
                      <td>₺500,00</td>
                      <td>₺300,00 üzeri işlemlerde</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <banklogos.albarakaLogo className="" />
                      </th>
                      <td>
                        <banklogos.worldcardLogo className="" />
                      </td>
                      <td>4+3=7</td>
                      <td>₺71,43</td>
                      <td>₺500,00</td>
                      <td>₺300,00 üzeri işlemlerde</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <banklogos.ziraatLogo className="" />
                      </th>
                      <td>
                        <banklogos.maximumcardLogo className="" />
                      </td>
                      <td>4+3=7</td>
                      <td>₺71,43</td>
                      <td>₺500,00</td>
                      <td>₺300,00 üzeri işlemlerde</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <banklogos.vakifbankLogo className="" />
                      </th>
                      <td>
                        <banklogos.worldcardLogo className="" />
                      </td>
                      <td>4+3=7</td>
                      <td>₺71,43</td>
                      <td>₺500,00</td>
                      <td>₺300,00 üzeri işlemlerde</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <banklogos.yapikrediLogo className="" />
                      </th>
                      <td>
                        <banklogos.worldcardLogo className="" />
                      </td>
                      <td>4+3=7</td>
                      <td>₺71,43</td>
                      <td>₺500,00</td>
                      <td>₺300,00 üzeri işlemlerde</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <banklogos.alternatifbankLogo className="" />
                      </th>
                      <td>
                        <banklogos.bonuscardLogo className="" />
                      </td>
                      <td>4+3=7</td>
                      <td>₺71,43</td>
                      <td>₺500,00</td>
                      <td>₺300,00 üzeri işlemlerde</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <banklogos.denizbankLogo className="" />
                      </th>
                      <td>
                        <banklogos.bonuscardLogo className="" />
                      </td>
                      <td>4+3=7</td>
                      <td>₺71,43</td>
                      <td>₺500,00</td>
                      <td>₺300,00 üzeri işlemlerde</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <banklogos.fibabankLogo className="" />
                      </th>
                      <td>
                        <banklogos.bonuscardLogo className="" />
                      </td>
                      <td>4+3=7</td>
                      <td>₺71,43</td>
                      <td>₺500,00</td>
                      <td>₺300,00 üzeri işlemlerde</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <banklogos.finansbankLogo className="" />
                      </th>
                      <td>
                        <banklogos.bonuscardLogo className="" />
                      </td>
                      <td>4+3=7</td>
                      <td>₺71,43</td>
                      <td>₺500,00</td>
                      <td>₺300,00 üzeri işlemlerde</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          </PopUp>
        )}
        {this.state.popupContractToggle && (
          <PopUp
            title="Sözleşme Şartları"
            className="popup-overlay"
            close={(close) => this.setState({ popupContractToggle: false })}
          >
            <>
              <div className="container">
                <h3 className="text-center">Sözleşme Şartları</h3>
                <p className="mx-3">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                  with desktop publishing software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </p>
                <p className="mx-3">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                  with desktop publishing software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </p>
                <p className="mx-3">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                  with desktop publishing software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </p>
                <p className="mx-3">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                  with desktop publishing software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </p>
                <p className="mx-3">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                  with desktop publishing software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </p>
              </div>
            </>
          </PopUp>
        )}
      </>
    );
  }
}
