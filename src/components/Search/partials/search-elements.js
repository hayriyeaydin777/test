import React from 'react';

const SearchElements = ({className, element, children}) => {
    return (
        <div className={className}>
            {element()}
            {children}
        </div>
    );
};

export default SearchElements;