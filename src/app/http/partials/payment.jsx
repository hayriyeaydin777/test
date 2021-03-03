import React from 'react';
import Card from '../../middleware/payment';
import PaymentPage from '../../middleware/payment';

import Master from '../master';

const Payment = props => {
    return (
        <Master>
            <div className="container-fluid main-container">
                {props.children}
                <PaymentPage/>
            </div>
        </Master>
    )
};

export default Payment;