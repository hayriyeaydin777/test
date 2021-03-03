import React, { memo } from 'react';

const TabComponent = memo(({component, types, children}) => {
    return (
        <>
            {
                component.component &&
                component.component()
            }
            {children}
        </>
    );
});

export default TabComponent;