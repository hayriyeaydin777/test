import React, { memo } from 'react';

const ProductListing = memo(({children, className, title, slider, banner}) => {
    return (
        <section className={className}>
            {children}
            <span className="title">{title}</span>
            <>
                {
                    slider.status
                    && slider.element()

                }
            </>
            <>
                {
                    banner.status
                    && banner.element()

                }
            </>
        </section>
    );
});

export default ProductListing;