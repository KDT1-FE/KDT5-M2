import React, { useContext }  from "react"
import { Link, NavLink } from 'react-router-dom';
import '../../scss/components/common/header.scss'
import PageContext from "../../store/context";


function Header() {

  const { value } = useContext(PageContext);

  return(
    <>
    <div className="header">
      <div className="header-category__box">
        <Link Link to="/" className="header__logo">
          <span>OMDbAPI</span>.COM
        </Link>
        <div className="header-category__nave">
          <NavLink exact to="/" activeClassName="active">Search</NavLink>
          <NavLink to={`/movie/${value}`}>Movie</NavLink>
          <NavLink to="/about" activeClassName="active">About</NavLink>            
        </div> 
      </div>
    </div>
    </>
  )
};
export default Header