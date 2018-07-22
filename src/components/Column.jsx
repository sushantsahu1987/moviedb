import React from 'react';
import PropTypes from 'prop-types';

const Column = (props) => {
  const { type, size } = props;
  const col = (size && type) ? `col-${type}-${size}` : 'col';

  return (
    <div className={col} style={props.style}>
      {props.children}
    </div>
  );
};

React.propTypes = {
  type: PropTypes.string,
  size: PropTypes.number,
};


export default Column;
