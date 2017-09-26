import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header/Header';
import App from './components/App';
import SearchResults from './components/SearchResults';
import ProductDetail from './components/ProductDetail';

const Router = (props) => {

  return (
    <div>
      <Header/>
      <Route path="/" exact component={App}/>
      <Route path="/items" exact component={SearchResults}/>
      <Route path="/items/:id" exact component={ProductDetail}/>
    </div>
  )
};

export default Router;
