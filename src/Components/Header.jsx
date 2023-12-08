import "./Header.css";
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <header>
    <div className="header_container">
    <button type="button" className="back_button">
        <div className="backimage"><img src="https://www.svgrepo.com/show/101168/go-back-arrow.svg" alt="icon"/></div>
    </button>
    <div className="date">
            <p className="page_name">HOME</p>
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}  <br/>
            {currentTime.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
    </div>
    </header>
  );
};

export default Header;
