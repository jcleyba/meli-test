import React from 'react';
import spinner from '../../images/800.gif'

const Spinner = (props) => {
  return <div className="loading">
    <img src={spinner} alt="cargando" className="spinner"/>
  </div>
};

export default Spinner;
