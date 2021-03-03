import React from 'react';

import CatalogButtons from '../../middleware/catalog/catalog-buttons';

import Master from '../master';

const Catelog = props => {
    return (
        <Master>
            <div className="container-fluid main-container">
                {props.children}
                <CatalogButtons/>
            </div>
        </Master>
    )
};

export default Catelog;