import React, { memo } from 'react';

const InfoText = memo(({ text, title, icon }) => {
    return (
        <span className="note-message">
            {icon}
            <div className="note-box yellow-background">{text}</div>
        </span>
    );
});

export default InfoText;