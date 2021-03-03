import React from 'react';

const Logo = ({className, element}) => {
    return (
        <>
            <div className={className}>
                {element()}
            </div> 
        </>
    );
}

export default Logo;