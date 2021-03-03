import React from 'react';

import HelpPage from '../../middleware/help/help-page';

import Master from '../master';

import Footer from '../../middleware/footer';

const Help = props => {
    return (
        <Master>
            <div className="container-fluid main-container">
                {props.children}
                <HelpPage/>
            </div>
        </Master>
    )
};

export default Help;