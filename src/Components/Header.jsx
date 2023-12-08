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
        <div className="image">
            <img src="https://cdn.enfsolar.com/ID/logo/5e2674a1a7550.jpg?v=1" alt="cardImage"/>
        </div>
        <div className="date">{currentTime.toLocaleTimeString()}<br/>
        {currentTime.toDateString()}
        </div>
    </div>
    </header>
  );
};

export default Header;
