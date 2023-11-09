import React from 'react';
import './Header.css';
import logo from '/Users/patrickeitel/Mod3/twink/src/logo.png'

function Header() {
  return (
    <nav>
      <input type="checkbox" id="nav-toggle" />
      <img className='logo' src={logo} alt="Logo" style={{height: '95%', width: '10%'}}/>
      <ul className="links">
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      <label htmlFor="nav-toggle" className="icon-burger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </label>
    </nav>
  );
}

export default Header;
