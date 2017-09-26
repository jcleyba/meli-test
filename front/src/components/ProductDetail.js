import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ProgressiveImage from 'react-progressive-image'
import Helmet from "react-helmet";

import { fetchItemById } from '../actions/productsActions';
import Spinner from './common/Spinner';
import Breadcrumbs from './common/Breadcrumbs';

import './ProductDetails.css';

export class ProductDetail extends Component {

  componentWillMount = () => {
    const id = this.props.match.params.id;
    this.props.fetchItemById(id);
  };

  renderDescription = (description) => {
    if (!description) return null;

    if (description.text.length) {
      return <div className="item-description"
                  dangerouslySetInnerHTML={{__html: description.text}}></div>
    }

    return <div className="item-description">{description.plain_text}</div>
  };

  renderImage = (product) => {
    const {title, thumbnail} = product;
    const picURI = thumbnail && thumbnail.replace('I', 'B');

    // Using progressive image for better UX on loading of images.
    return (
      <div className="item-picture">
        <ProgressiveImage src={picURI} placeholder={thumbnail}>
          {(src) => <img src={src} alt={title} title={title} className="product-pic"/>}
        </ProgressiveImage>
      </div>
    );
  };

  renderBuyButton = () => {
    return <button className="buy-btn">Comprar</button>

  };

  renderStatus = (product) => {
    const {condition} = product;
    const used = condition === 'used' ? 'Usado' : 'Nuevo';
    return (
      <div className="item-condition">
        {used} - {`${product.sold_quantity} vendidos`}
      </div>
    );
  };

  renderPrice = (product) => {
    const price = product.price && product.price.amount;
    return <div className="item-price">{`$ ${price}`}</div>
  };

  renderMetaTitle = () => {
    // Change Meta title for SEO
    return <Helmet title={`${this.props.product.title} - Mercado Libre Argentina`}/>
  };

  render() {

    const {isFetching, product, filters} = this.props;
    const pathFromRoot = filters.length && filters[0].values[0].path_from_root || [];

    if (isFetching) {
      return <Spinner/>
    }
    return (
      <div className="product-wrapper">
        {this.renderMetaTitle()}
        <Breadcrumbs pathFromRoot={pathFromRoot}/>
        <div className="product-detail">
          <div className="left">
            {this.renderImage(product)}
            <h2>Descripción del producto</h2>
            {this.renderDescription(product.description)}
          </div>
          <div className="right">
            {this.renderStatus(product)}
            <h1 className="item-title">{product.title}</h1>
            {this.renderPrice(product)}
            {this.renderBuyButton()}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({productsReducer, searchReducer}) => {
  const {isFetching, product, error} = productsReducer;
  const {filters} = searchReducer;

  return {isFetching, product, error, filters};
};

const componentWithRouter = withRouter(ProductDetail);

export default connect(mapStateToProps, {fetchItemById})(componentWithRouter);
