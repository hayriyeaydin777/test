import React, { memo } from 'react';

const CampaignText = memo(({ text, title, background, color, children }) => {
    return (
        <>
            {text}
            <span style={{ background, color, padding: "5px", borderRadius: "15px", fontSize: "8pt", marginLeft: "5px" }}>{title}</span>
            {children}
        </>
    );
});

export default CampaignText;