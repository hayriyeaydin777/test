import React, { memo } from 'react';

const Opportunities = memo(({children, title, className, oppSlider, oppBanner}) => {
    return (
        <section className={className}>
            {children}
            <span className="title">{title}</span>
            <>
                {
                    oppSlider.status
                    && oppSlider.element()

                }
            </>
            <>
                {
                    oppBanner.status
                    && oppBanner.element()

                }
            </>
        </section>
    );
});

export default Opportunities;