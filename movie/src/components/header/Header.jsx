import React from "react";
import "./Header.css";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="inner">
      <p className="logo" onClick={() => navigate(`/`)}>
        OMDbAPI<span>.COM</span>
      </p>
      <div className="sub-menu">
        <div className="menu">
          <button className="search" onClick={() => navigate(`/`)}>
            Search
          </button>
          <button className="movie" onClick={() => navigate(`/detail/:id`)}>
            Movie
          </button>
          <button className="about">About</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
