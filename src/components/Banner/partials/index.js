import React, { memo } from 'react';

const Banner = memo(({children, className, bannerSlider}) => {
    return (
        <section className={className}>
            {children}
            <>
                {
                    bannerSlider.status 
                    && bannerSlider.element()
                }
            </>
        </section>
    );
});

export default Banner;