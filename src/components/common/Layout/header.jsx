import React  from "react"
import { Link, NavLink } from 'react-router-dom';
import '../../../scss/components/common/Layout/header.scss'

function Header() {
  return(
    <>
    <div className="header">
          <div className="header-category__box">
            <Link Link to="/" className="header__logo">
              <span>OMDbAPI</span>.COM
            </Link>

            <div className="header-category__nave">
              <NavLink exact to="/" activeClassName="active">Search</NavLink>
              <NavLink to="/movie" activeClassName="active">Movie</NavLink>
              <NavLink to="/about" activeClassName="active">About</NavLink>            
            </div>
           
          </div>
        </div>
    </>
  )
};
export default Header