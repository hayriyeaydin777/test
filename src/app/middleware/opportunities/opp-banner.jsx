import React, { memo } from 'react';

//bunları şimdilik ekliyoruz...
import logo from '../../../images/product/logo/logo-braxis.png';

const Banner = memo(({data}) => {
    return (
        <section className="col-auto banner">
            <div className="row">
                <h2 className="opp-text">Mekanik enerjinin oluşması için gerekli olan ısı</h2>
                <div className="opp-logo">
                    <img src={logo}></img>
                    <span className="opp-disc"><b>%30</b> İndirim</span>
                </div>
                <h4 className="opp-title">Yağ filtreleri, kirlenmiş yağları ve motor çalıştığı sürece </h4>
                <a href="#" className="opp-end">www.vistaomotiv.com.tr</a>
            </div>
        </section>
    );
});

export default Banner;