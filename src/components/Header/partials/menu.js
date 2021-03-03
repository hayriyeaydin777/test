import React from 'react';

const Menu = ({className, element}) => {
    return (
        <div className={className}>
            {element()}
        </div>
    );
}

export default Menu;