import React, { memo } from 'react';

const GridTable = memo(props => {
    return (
        <section className="row flex-column search-column">
            {props.children}
        </section>
    );
});

export default GridTable;