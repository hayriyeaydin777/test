import React, { memo } from 'react';

import svg from '../../statics/svg';

//Şimdilik ekliyoruz
import braxis from '../../images/product/braxis.jpg'
import logo from '../../images/product/logo/logo-braxis.png';

const AddBasket = memo(() => {
    return (
        <>
            <div className="see-basket mt-3">
                <div className="row see-basket-row">
                    <div className="col-md-6 product-image">
                        <img src={braxis} alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="row mb-3 mx-auto">
                            <p>Marka: </p>
                            <img src={logo} className="brand-logo" />
                        </div>
                        <p className="subheading">
                            <b>BRAXIS</b> AUDI A3 ÖN FREN BALATA TAKIMI BRAXIS 2013-2016
                    	</p>
                        <p>
                            <b>Stok Durumu:</b> Var
                    	</p>
                        <p>
                            <b>Stok Kodu:</b> 1EJST0000
                    	</p>
                        <p>
                            <b>İskonto:</b> 100.00 TL
                    	</p>
                        <p>
                            <b>KDV'siz Net Fiyat:</b> 100.00
                    	</p>
                        <p>
                            <b>OEM:</b> 100000 10000 1000000 100000 100000
                    	</p>
                        <hr />
                        <div className="row mt-4 mb-4">
                            <span className="mr-2 mt-2">Adet</span>
                            <div className="number shadow text-center">
                                <button className="math-symbols">-</button>
                                <span>1</span>
                                <button className="math-symbols">+</button>
                            </div>
                            <button className="add-basket-button shadow">
                                <svg.basket className="basket-icon" />
											Sepete Ekle
										</button>
                            <button className="delete-button shadow">İptal</button>
                        </div>
                        <hr />
                        <input type="text" placeholder="  Firmaya Not:" className="shadow-lg note-input"></input>
                    </div>
                </div>
            </div>
        </>
    );
});

export default AddBasket;