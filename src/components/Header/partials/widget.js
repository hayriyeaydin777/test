import React from 'react';

const Widget = ({ className, element }) => {
  return <div className={className}>{element()}</div>;
};

export default Widget;
