import React from 'react';

import BalanceButtons from '../../middleware/balance/balance-buttons';

import Master from '../master';

const Balance = props => {
    return (
        <Master>
            <div className="container-fluid main-container">
                {props.children}
                <BalanceButtons/>
            </div>
        </Master>
    )
};

export default Balance;