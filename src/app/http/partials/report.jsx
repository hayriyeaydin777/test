import React from 'react';

import ReportButtons from '../../middleware/report/report-buttons';

import Master from '../master';


const Report = props => {
    return (
        <Master>
            <div className="container-fluid main-container">
                {props.children}
                <ReportButtons/>
            </div>
        </Master>
    )
};

export default Report;