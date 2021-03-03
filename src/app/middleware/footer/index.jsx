import React from 'react';
import svg from '../../../statics/svg';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import { default as DefFooter } from '../../../components/Footer/partials';
import awesomeIcon from '../../../statics/icon';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <div className="footer-wrapper footer-wrapper col-xl-12 col-md-12">
      <div className="footer-top-wrapper">
        <div className="col-xl-5 col-md-6 footer-left">
          <div className="col-xl-5 col-md-6 footer-contact-wrapper">
            <div className="img-fluid footer-logo">
              <svg.logofooter />
              <p className="text-center">Bayi Yönetim Sistemi</p>
            </div>
            <div className="footer-contact-info-wrapper">
              <ul className="footer-contact-info-address">
                <li>
                  <span className="footer-contact-info-icon">
                    <svg.envelope />
                  </span>
                  <span>info@vistaoto.com</span>
                </li>
                <li>
                  <span className="footer-contact-info-icon">
                    <svg.bubbletalk />
                  </span>
                  <span>Whatsapp'tan sor</span>
                </li>
                <li>
                  <span className="footer-contact-info-icon">
                    <svg.phoneline />
                  </span>
                  <span>Çağrı Merkezi: 0850 000 00 00</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-7 col-md-6 footer-mail-info-wrapper">
            <div className="footer-mail-info-par">
              <p className="font-weight-bold">E-Bülten Aboneliği</p>
              <p>E-postanızı yazın, yeni ürünler ve kampanyalardan ilk siz haberdar olun.</p>
            </div>
            <div className="col-xl-12 col-md-12 input-group footer-mail-input-wrapper">
              <input
                type="text"
                className="col-xl-9 col-md-8 form-control footer-mail-input"
                placeholder="E-postanızı yazınız..."
              />
              <button className="col-xl-3 col-md-4 btn footer-mail-input-button">Gönder</button>
            </div>
          </div>
        </div>
        <div className="col-xl-7 col-md-6 footer-right">
          <div className="col-xl-3 col-md-3">
            <ul>
              <li>
                <Link to="/">Anasayfa</Link>
              </li>
              <li>
                <Link to="/about-us/">Hakkımızda</Link>
              </li>
              <li>
                <Link to="/">Sertifikalar</Link>
              </li>
              <li>
                <Link to="/suppliers/">Tedarikçiler</Link>
              </li>
              <li>
                <Link to="/contact/">İletişim</Link>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 col-md-3">
            <ul>
              <li>
                <Link to="/">Giriş Yap</Link>
              </li>
              <li>
                <Link to="/">Kayıt Ol</Link>
              </li>
              <li>
                <Link to="/">Sepetim ( 0 )</Link>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 col-md-4">
            <ul>
              <li>
                <Link to="/">Yardım Merkezi</Link>
              </li>
              <li>
                <Link to="/terms-of-use/">Kullanım Koşulları</Link>
              </li>
              <li>
                <Link to="/warrenty-return-contract/">Garanti ve İade</Link>
              </li>
              <li>
                <Link to="/distance-sales-contract/">Satış Sözleşmesi</Link>
              </li>
              <li>
                <Link to="/personal-data-use/">Gizlilik Politikası</Link>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 col-md-2">
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Youtube</li>
              <li>Linkedin</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom-wrapper">
        <div>
          <p>Rapid SSL 100% Güvenli Alışveriş</p>
        </div>
        <div>
          <p>Sitemiz T.C. Gümrük ve Ticaret Bakanlığına Bağlı E.T.B.İ.S. Sistemine Kayıtlıdır.</p>
        </div>
      </div>
    </div>
    /* <DefFooter className="row footer">
      <div className="footer-logo">
        <span className="company-logo">
          <svg.logofooter />
        </span>

        <div className="slogan">Bayi Yönetim Sistemi</div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-6 footer-newsletter">
            <div className="frame">
              <div className="icon">
                <svg.newsletter />
              </div>

              <div className="message">
                <span className="title">E-bülten Aboneliği</span>
                <span className="slogan">
                  E-postanızı yazın yeni ürünler ve kampanyalardan <br /> ilk siz haberdar olun
                </span>
              </div>

              <div className="label">
                <InputGroup className="footer-mail-input">
                  <FormControl
                    className="search-input"
                    placeholder="E-postanızı yazınız..."
                    aria-label="E-postanızı yazın.."
                    aria-describedby="basic-addon2"
                  />
                  <button className="footer-send-mail-button">Gönder</button>
                </InputGroup>
              </div>
            </div>
          </div>

          <div className="col-6 footer-menu">
            <div className="row">
              <div className="list-menu">
                <ul>
                  <li>
                    <Link to="/">Anasayfa</Link>
                  </li>
                  <li>
                    <Link to="/about-us/">Hakkımızda</Link>
                  </li>
                  <li>
                    <Link to="/">Sertifikalar</Link>
                  </li>
                  <li>
                    <Link to="/suppliers/">Tedarikçiler</Link>
                  </li>
                  <li>
                    <Link to="/contact/">İletişim</Link>
                  </li>
                </ul>
              </div>

              <div className="list-menu">
                <ul>
                  <li>
                    <Link to="/">Giriş Yap</Link>
                  </li>
                  <li>
                    <Link to="/">Kayıt Ol</Link>
                  </li>
                  <li>
                    <Link to="/">Sepetim ( 0 )</Link>
                  </li>
                </ul>
              </div>

              <div className="list-menu">
                <ul>
                  <li>
                    <Link to="/">Yardım Merkezi</Link>
                  </li>
                  <li>
                    <Link to="/terms-of-use/">Kullanım Koşulları</Link>
                  </li>
                  <li>
                    <Link to="/warrenty-return-contract/">Garanti ve İade</Link>
                  </li>
                  <li>
                    <Link to="/distance-sales-contract/">Satış Sözleşmesi</Link>
                  </li>
                  <li>
                    <Link to="/personal-data-use/">Gizlilik Politikası</Link>
                  </li>
                </ul>
              </div>

              <div className="list-menu">
                <ul>
                  <li>
                    <a>
                      <awesomeIcon.facebook />
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a>
                      <awesomeIcon.twitter />
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a>
                      <awesomeIcon.instagram />
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a>
                      <awesomeIcon.youtube />
                      Youtube
                    </a>
                  </li>
                  <li>
                    <a>
                      <awesomeIcon.linkedin />
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6 footer-contact">
            <div className="mail">
              <span className="mail-logo">
                <awesomeIcon.faEnvelope className="footer-email-icon" />
              </span>
              <div className="slogan">
                <span>info@vistaoto.com</span>
              </div>
            </div>
            <div className="whatsapp">
              <span className="whatsapp-logo">
                <svg.whatsapp />
              </span>

              <div className="slogan">
                <span>Whatsapp</span>'dan Sor
              </div>
            </div>
            <div className="phone">
              <span className="phone-icon">
                <svg.phone />
              </span>

              <div className="slogan">
                <span className="title">Çağrı Merkezi</span>
                <span className="phone-number">0850 000 00 00</span>
              </div>
            </div>
          </div>

          <div className="col-6 footer-certificate">
            <div className="rapidssl">
              <span className="rapidssl-logo">
                <svg.rapidssl />
              </span>

              <div className="slogan">100% Güvenli Alışveriş</div>
            </div>

            <div className="tc-ministry-of-customs">
              <span className="tc-ministry-of-customs-logo">
                <svg.tcministryLogo />
              </span>

              <div className="slogan">
                Sitemiz T.C. Gümrük ve Ticaret Bakanlığına Bağlı E.T.B.İ.S. Sistemine Kayıtlıdır.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="bottom"></div>
      </div>
    </DefFooter> */
  );
};

export default Footer;
