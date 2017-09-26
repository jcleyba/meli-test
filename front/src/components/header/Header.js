import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import queryString from 'query-string';

import { fetchItems } from '../../actions/searchActions'

import SearchBar from '../common/SearchBar';

import logo from '../../images/Logo_ML@2x.png.png';
import './Header.css';

const ITEMS_TO_FETCH = 4;

export class Header extends Component {

  getTerm = () => {
    const term = queryString.parse(this.props.location.search);

    return term.search || '';
  };

  searchHandler = (term) => {
    this.props.history.push(`/items?search=${term}`);
    this.props.fetchItems(term, ITEMS_TO_FETCH)
  };

  render() {
    return (
      <header className="meli-header">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="logo" title="logo"/>
          </NavLink>
        </div>
        <SearchBar term={this.getTerm()}
                   onSubmit={this.searchHandler}/>
      </header>
    )
  }
};

export default withRouter(connect(null, {fetchItems})(Header));
