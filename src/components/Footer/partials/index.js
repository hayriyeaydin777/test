import React, { memo } from 'react';

const Footer = memo(({children, className}) => {
    return (
        <footer className={className}>
            {children}
        </footer>
    );
});

export default Footer;