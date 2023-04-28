import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="inner">
      <p className="logo">
        OMDbAPI<span>.COM</span>
      </p>
      <div className="sub-menu">
        <div className="menu">
          <button className="search">Search</button>
          <button className="movie">Movie</button>
          <button className="about">About</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
