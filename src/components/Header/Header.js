import React from "react";
import "./Header.css";
import logo from "../../logo.png";

function Header() {
  const redirectToHomePage = () => {
    window.location.href = "/";
  };

  return (
    <nav>
      <input type="checkbox" id="nav-toggle" />
      <img
        className="logo"
        src={logo}
        alt="Logo"
        style={{ height: "95%", width: "10%" }}
        onClick={redirectToHomePage}
      />
      <ul className="links">
        <li>
          <a href="/">Home</a>
        </li>
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
