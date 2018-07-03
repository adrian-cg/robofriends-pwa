import React from 'react';

const scroll = ({ children }) => {
  return (
    <div style={{height: '600px', overflowY: 'scroll', border: '5px solid black'}}>
      {children}
    </div>
  );
};

export default scroll;