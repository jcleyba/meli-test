import React, { Component } from 'react';

import './SearchBar.css';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: this.props.term || ''
    };
  }

  onInputChange = (event) => {
    this.setState({
      term: event.target.value
    })
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term)
  };

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.onSubmit}>
          <input name='search' type="text" className="search-input" placeholder="Nunca dejes de buscar"
                 onChange={this.onInputChange}
                 value={this.state.term}/>
          <button type="submit" className="search-btn"></button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
