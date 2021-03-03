import React, { memo } from 'react';

const SoftText = memo(({ text, children }) => {
    return (
        <>
            {text}
            {children}
        </>
    );
});

export default SoftText;