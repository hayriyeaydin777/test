import React from 'react';

import BasketButtons from '../../middleware/basket/basket-buttons';

import Master from '../master';

const Basket = props => {
    return (
        <Master>
            <div className="container-fluid main-container">
                {props.children}
                <BasketButtons/>
            </div>
        </Master>
    )
};

export default Basket;