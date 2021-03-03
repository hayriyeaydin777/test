import React from 'react';

const ContactPage = () => {
  return (
    <>
      <div className="contact-page-wrapper">
        <h2 className="text-center font-weight-bold contact-title">İLETİŞİM</h2>
        <div className="contact-wrapper">
          <iframe
            className="company-map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12040.180407154267!2d28.8148079!3d41.0242692!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd09cd085be2485c3!2zWcO8Y2UgWWF6xLFsxLFt!5e0!3m2!1sen!2str!4v1610360195029!5m2!1sen!2str"
            frameBorder="0"
            allowFullScreen=""
          ></iframe>
          <div className="col-12 company-contact-footer-wrapper">
            <div className="col-8 col-md-10 company-contact-footer">
              <div className="company-contact-icon-wrapper">
                <div className="col-12 col-md-6 col-lg-6 p-0">
                  <div className="company-contact-icon-item-title">
                    <h5 className="text-uppercase icon-item-title">ADRES</h5>
                  </div>
                  <div className="company-contact-icon-item-desc">
                    <p>
                      Bağlar Mah. Mimar Sinan Caddesi
                      No:35 / 278 Kat:22 Divan 34209
                      <br/> Güneşli / İSTANBUL
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-3 col-lg-6 d-flex justify-content-end">
                  <div className="company-contact-icon-item">
                    <div className="company-contact-icon-item-title">
                      <h5 className="text-uppercase icon-item-title">TELEFON</h5>
                    </div>
                    <div className="company-contact-icon-item-desc">
                      <p> 0850 xxx xxxx - 0212 xxx xx xx</p>
                    </div>
                  </div>
                  <div className="company-contact-icon-item">
                    <div className="company-contact-icon-item-title">

                      <h5 className="text-uppercase icon-item-title">email</h5>
                    </div>
                    <div className="company-contact-icon-item-desc">
                      <p>info@vistaotomativ.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
