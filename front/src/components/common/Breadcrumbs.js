import React from 'react';

import './Breadcrumbs.css';
import chevron from '../../images/chevron-right.svg';

const Breadcrumbs = props => {

  const renderBreadcrumbs = list => {
    const breadcrumbs = list.map((item, index) => {
      return (
        <li key={index} className="breadcrumb">
          <div className="name">{item.name}</div>
          <div className="chevron">
            <img src={chevron} alt="chevron"/>
          </div>
        </li>
      )
    });

    return <ol className="breadcrumbs">{breadcrumbs}</ol>
  };
  return renderBreadcrumbs(props.pathFromRoot);
};

export default Breadcrumbs;
