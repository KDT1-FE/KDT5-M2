import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="Header-container">
      <div className="logo"><Link to="/">Home</Link></div>
      <div className="menu">
        <div className="menu-btn"><Link to="/">HOME</Link></div>
        <div className="menu-btn"><Link to="About">ABOUT</Link></div>
      </div>
      <div className="toggle-menu"></div>
    </div>
  );
};

export default Header;
