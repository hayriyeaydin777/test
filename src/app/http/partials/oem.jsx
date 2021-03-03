import React from 'react';

import OemButtons from '../../middleware/oem/oem-buttons';

import Master from '../master';

const Oem = props => {
    return (
        <Master>
            <div className="container-fluid main-container">
                {props.children}
                <OemButtons/>
            </div>
        </Master>
    )
};

export default Oem;