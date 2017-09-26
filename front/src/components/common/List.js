import React from 'react';
import ListItem from './ListItem'

import './List.css';

const ListContainer = (props) => {

  const renderItems = (items) => {
    return items.map((item, index) => {
      return <ListItem key={index} itemData={item}/>
    });
  };

  if (!props.products) {
    return <div>No hay resultados</div>
  }

  return (<div className="list-container">
    {renderItems(props.products)}
  </div>)
};

export default ListContainer;
