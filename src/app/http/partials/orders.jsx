import React from 'react';
import OrderButtons from '../../middleware/order/order-buttons';

import Master from '../master';

const Orders = props => {
    return (
        <Master>
            <div className="container-fluid main-container">
                {props.children}
                <OrderButtons/>
            </div>
        </Master>
    )
};

export default Orders;