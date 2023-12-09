import "./Header.css";
import React from 'react';

const Header = () => {
  return (
    <header>
    <div className="header_container">
    <button type="button" className="back_button">
        <div className="backimage"><img src="https://www.svgrepo.com/show/101168/go-back-arrow.svg" alt="icon"/></div>
    </button>
    <p className="page_name">HOME</p>
    </div>
    </header>
  );
};

export default Header;
