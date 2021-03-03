import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import logo404 from '../images/product/logo/logo-404.png'

import { Link } from 'gatsby';

const NotFound = () => {
  return (
    <section className="not-found-section">
      <div className="not-found-logo w-50 mb-5">
      <img className="img-fluid" src={logo404}/>
      </div>
      <h1>404: Sayfa Bulunamıyor</h1>
      <p>
        <Link className="not-found-to-home" to="/">Anasayfaya dönmek için tıklayın!</Link>
      </p>
    </section>
  );
};

export default NotFound;
