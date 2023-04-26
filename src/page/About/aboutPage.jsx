import React from "react";
import '../../scss/about/about.scss'

function AboutPage () {
  return(
    <div className="AboutContainer">
      <div className="AboutContainer-photo">
        <img src='./src/image/jjang.jpg' alt="selfi"/>
      </div>

      <div className="AboutContainer-box">
        <span>HAHAEUN</span>

        
        <div className="AboutContainer-box__bottom">
        <p> 📨 hahahaday122@gmail.com</p>
        <p> 💻 https://github.com/hahahaday12</p>
        <p> 🎈 https://velog.io/@hahahaday12</p>
        </div>
      </div>
 

    </div>
  )
};
export default AboutPage