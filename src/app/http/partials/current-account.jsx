import React from 'react';

import Master from '../master';

import CurrentAccountButtons from '../../middleware/current-account/current-account-buttons';
import {default as INCurrentAccount} from '../../middleware/current-account';

const CurrentAccount = props => {
    return (
        <Master>
            <div className="container-fluid main-container">
                {props.children}
                <CurrentAccountButtons/>
                <INCurrentAccount/>
            </div>
        </Master>
    )
};

export default CurrentAccount;