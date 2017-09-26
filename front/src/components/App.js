import React, { Component } from 'react';
import Helmet from "react-helmet";

import './App.css'

const App = props => {
  return (<div className="main">
    <Helmet title="Mercado Libre Argentina"/>
    <h1>Bienvenido a Mercado Libre</h1>
  </div>);
};

export default App;
