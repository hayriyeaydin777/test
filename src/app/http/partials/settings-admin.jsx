import React from 'react';
import SettingsAdminPage from '../../middleware/settings-admin/settings-admin-page';

import Master from '../master';


const SettingsAdmin = props => {
    return (
        <Master>
            <div className="container-fluid main-container">
                {props.children}
                <SettingsAdminPage />
            </div>
        </Master>
    )
};

export default SettingsAdmin;