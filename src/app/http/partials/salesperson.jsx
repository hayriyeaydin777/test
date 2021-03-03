import React from 'react';

import SalesPersonButtons from '../../middleware/salesperson/salesperson-buttons';

import Master from '../master';

const SalesPerson = props => {
    return (
        <Master>
            <div className="container-fluid main-container">
                {props.children}
                <SalesPersonButtons/>
            </div>
        </Master>
    )
};

export default SalesPerson;