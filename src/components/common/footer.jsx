import React from "react";
import { Link } from 'react-router-dom';
import '../../scss/components/common/footer.scss'

function Footer(){
  return(
    <footer>
    {/* <a href="/" className='router-link-active router-link-exact-active logo'><span>OMDbAPI</span>.COM</a>
    <button type="button" className="link-button"  onClick={() => this.setState({ showSomething: true })} >(c)2023 HEROPY</button> */}
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