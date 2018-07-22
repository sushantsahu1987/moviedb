import React from 'react';

const Container = (props) => {
  const container = 'container';
  return (
    <div className={container} style={props.style}>
      {props.children}
    </div>
  );
};

export default Container;
