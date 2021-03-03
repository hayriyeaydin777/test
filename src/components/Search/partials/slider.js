import React from 'react';

const Slider = ({className, element}) => {
    return (
        <div className={className}>
            {element()}
        </div>
    );
}

export default Slider;