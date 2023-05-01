import React from "react";
import { Link } from 'react-router-dom';
import '../../scss/components/common/footer.scss'

function Footer(){
  return(
    <footer>
    <Link to="/" className="Link-box">
      <div className="Link-box__text">
        <span>OMDbAPI</span>.COM
      </div>
      <Link to="/" className="link-button">(c)2023 HAHAI</Link>
    </Link>
    </footer>
  )
};
export default Footer