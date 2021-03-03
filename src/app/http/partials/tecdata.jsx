import React from 'react';
import TecDataPage from '../../middleware/tecdata/tecdata-page';
import AcordionMenu from '../../middleware/tecdata/tecdata-page/acordion-list';

import Master from '../master';

const TecData = props => {
    return (
        <Master>
            <div className="container-fluid main-container">
                {props.children}
                <TecDataPage />
            </div>
        </Master>
    )
};

export default TecData;