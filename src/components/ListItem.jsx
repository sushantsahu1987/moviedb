import React from 'react';

const ListItem = props => (
    <a href="#" className="list-group-item list-group-item-action">
          {props.children}
    </a>

);

export default ListItem;
