import React from 'react';

import BasketBackgroundImg from '../../../statics/background/gatsby-background/basket-background';

import svg from '../../../statics/svg';

import Slider from "react-slick";
import { element } from 'prop-types';

const BasketsBanner = props => {
    const slider_settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    const sliderItems = [
        {
            id: 1,
            name: "212 Esenyurt Depo",
            item: [],
            cargo: "",
            color: "blue"
        },
        {
            id: 2,
            name: "212 Esenyurt Depo",
            item: [],
            cargo: "",
            color: "blue"
        },
        {
            id: 3,
            name: "212 Esenyurt Depo",
            item: [],
            cargo: "",
            color: "gray"
        },
        {
            id: 4,
            name: "212 Esenyurt Depo",
            item: [],
            cargo: "",
            color: "blue"
        },
        {
            id: 5,
            name: "212 Esenyurt Depo",
            item: [],
            cargo: "",
            color: "gray"
        },
        {
            id: 6,
            name: "212 Esenyurt Depo",
            item: [],
            cargo: "",
            color: "blue"
        }
    ];

    return (
        <div className={props.className}>
            {props.children}
            <div className="col">
                <div className="row">
                    <div className="baskets-banner-container">
                        <div className="slider">
                            <Slider {...slider_settings}>
                                {
                                    sliderItems.map((value, key) => {
                                        return (
                                            <div key={key} className="slider-item">
                                                <section className={`slider-container ${value.color}`}>
                                                <div className="title">{value.name}</div>
                                                    <div className="baskets-container">
                                                        <div className="row flex-row flex-nowrap">
                                                            <div className="col row flex-column">
                                                                <div className="d-flex">
                                                                    <div className="col">Brüt:</div>
                                                                    <div className="col-auto">100TL</div>
                                                                </div>
                                                                <div className="d-flex">
                                                                    <div className="col">İskonto:</div>
                                                                    <div className="col-auto">100TL</div>
                                                                </div>
                                                                <div className="d-flex">
                                                                    <div className="col">Toplam:</div>
                                                                    <div className="col-auto">100TL</div>
                                                                </div>
                                                                <div className="d-flex">
                                                                    <div className="col">KDV:</div>
                                                                    <div className="col-auto">100TL</div>
                                                                </div>
                                                                <div className="d-flex">
                                                                    <div className="col">G.Toplam:</div>
                                                                    <div className="col-auto">100TL</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-auto">
                                                                <div className="d-flex flex-column">
                                                                    <select>
                                                                        <option>Sevkiyat</option>
                                                                    </select>

                                                                    <select>
                                                                        <option>Sevkiyat Adresi</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <textarea defaultValue="Sipariş Mesajı: "></textarea>
                                                    </div>
                                                    <button className="btn">Sepeti Gönder</button>
                                                </section>
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                    <div className="baskets-banner-left">
                        <button className="button">
                            SEPETİ GÖNDER
                            <span className="icon">
                                <svg.sendBox />
                            </span>
                        </button>
                    </div>
                    <div className="baskets-banner-right">
                        <div className="text">
                            <div className="title">SEPET TOPLAM</div>

                            <div className="d-flex">
                                <div className="col">Bürüt:</div>
                                <div className="col-auto">100TL</div>
                            </div>
                            <div className="d-flex">
                                <div className="col">İskonto:</div>
                                <div className="col-auto">100TL</div>
                            </div>
                            <div className="d-flex">
                                <div className="col">Toplam:</div>
                                <div className="col-auto">100TL</div>
                            </div>
                            <div className="d-flex">
                                <div className="col">KDV:</div>
                                <div className="col-auto">100TL</div>
                            </div>
                            <div className="d-flex">
                                <div className="col">G.Toplam:</div>
                                <div className="col-auto">100TL</div>
                            </div>
                            <div className="d-flex">
                                <div className="col">K.Bakiye:</div>
                                <div className="col-auto">100TL</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="basket-button btn">Tüm Sepetleri Gönder</button>
            <BasketBackgroundImg />
        </div>
    );
};

export default BasketsBanner;