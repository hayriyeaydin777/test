import React from 'react';

import Master from '../master';

import OthersButtons from '../../middleware/others/others-buttons.jsx';


const Others = props => {
    return (
        <Master>
            <div className="container-fluid main-container">
                {props.children}
                <OthersButtons/>
            </div>
        </Master>
    )
};

export default Others;