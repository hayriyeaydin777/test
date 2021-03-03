import React, { memo } from 'react';

const Campaign = memo(({children, title, className}) => {
    return (
        <section className={className}>
            <span className="title">{title}</span>
            <section className="col">
                {children}
            </section>
        </section>
    );
});

export default Campaign;