import React from 'react';
import { NavLink } from 'react-router-dom';
import ProgressiveImage from 'react-progressive-image'

import shipping from '../../images/ic_shipping@2x.png.png';
import './ListItem.css';

const ListItem = (props) => {
  const renderThumb = (thumb, title) => {
    const picURI = thumb && thumb.replace('I', 'N');

    // Using progressive image for better UX on loading of images.
    return <ProgressiveImage src={picURI} placeholder={thumb}>
      {(src) => <img src={src} alt={title} title={title} className="product-thumb"/>}
    </ProgressiveImage>
  };

  const renderPrice = (price) => {
    return <span className="amount">$ {price.amount}
    </span>
  };

  const renderShipping = (freeShipping) => {
    return freeShipping && <span className="free-shipping"><img src={shipping} alt="shipping"/></span>

  };

  const renderCard = (itemData) => {
    const {id, title, price, thumbnail, free_shipping, address} = itemData;
    return (
      <div className="list-item">
        <div className="thumbnail">
          <NavLink to={`/items/${id}`}>{renderThumb(thumbnail, title)}</NavLink>
        </div>
        <div className="description">
          <div className="price">
            {renderPrice(price)}
            {renderShipping(free_shipping)}
          </div>
          <div className="title">
            <NavLink to={`/items/${id}`}>{title}</NavLink>
          </div>
        </div>

        <div className="location">
          {address.state_name}
        </div>
      </div>
    )
  };

  return renderCard(props.itemData);
};

export default ListItem;
