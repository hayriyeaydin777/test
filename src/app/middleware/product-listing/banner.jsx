import React, { memo } from 'react';

//bunları şimdilik ekliyoruz...
import logo from '../../../images/product/logo/logo-braxis.png';

const Banner = memo(({className}) => {
    return (
        <div className={`popular-banner ${className}`}>
            <h2 className="text">Mekanik enerjinin oluşması için gerekli olan ısı</h2>
            <div className="logo">
                <span className="disc"><b>%30</b> İndirim</span>
                <img src={logo}></img>
            </div>
            <h4 className="p-title">Yağ filtreleri, kirlenmiş yağları ve motor çalıştığı sürece </h4>
            <a href="#" className="end">www.vistaotomotiv.com.tr</a>
        </div>
    );
});

export default Banner;