import React from 'react';

import '../.././stylesheets/filters/ChangePage.scss';

const ChangePage = (props) => {
  const { page, handleLess, handleMore } = props;

  return (
    <nav>
      <ul className="arrows">
        <li key="left" className="arrows__containerL" onClick={handleLess}>
          <i className="fas fa-angle-double-left arrows__prev"></i>
          <span className="arrows__text"> Previous page</span>
        </li>
        <span className="arrows__counter">| Page {page} |</span>
        <li key="right" className="arrows__containerR" onClick={handleMore}>
          <p className="arrows__text"> Next page </p>
          <i className="fas fa-angle-double-right arrows__next"></i>
        </li>
      </ul>
    </nav>
  );
};

export default ChangePage;
