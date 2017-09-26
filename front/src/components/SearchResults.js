import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import queryString from 'query-string';
import Helmet from "react-helmet";

import { fetchItems } from '../actions/searchActions';
import ListContainer from './common/List';
import Spinner from './common/Spinner';
import Breadcrumbs from './common/Breadcrumbs';

const ITEMS_TO_FETCH = 4;

export class SearchResults extends Component {

  constructor(props) {
    super(props);
    this.term = queryString.parse(this.props.location.search).search;
  }

  componentWillMount = () => {
    if (!this.props.items.length) {
      this.props.fetchItems(this.term, ITEMS_TO_FETCH);
    }
  };

  renderMetaTitle = () => {
    // Change Meta title for SEO
    return <Helmet title={`${this.term} - ${this.term} en Mercado Libre Argentina`}/>
  }

  renderResults = () => {
    const {isFetching, items} = this.props;

    if (isFetching) {
      return <Spinner/>
    }
    if (!items.length) return <h4>No hay resultados para su busqueda</h4>;
    return <ListContainer products={items}/>
  };

  render() {
    const pathFromRoot = this.props.filters.length && this.props.filters[0].values[0].path_from_root || [];

    return (
      <div className="search-results">
        {this.renderMetaTitle()}
        <Breadcrumbs pathFromRoot={pathFromRoot}/>
        {this.props.error}
        {this.renderResults()}
      </div>
    );
  }
}

const mapStateToProps = ({searchReducer}) => {
  const {items, error, filters, isFetching} = searchReducer;
  return {items, error, isFetching, filters}
};

const routedComponent = withRouter(SearchResults);
export default connect(mapStateToProps, {fetchItems})(routedComponent);
