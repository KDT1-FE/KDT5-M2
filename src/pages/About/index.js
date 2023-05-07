import React from "react";
import "./index.scss";

const About = () => {
  return (
    <div className="AboutPage">
      <div className="AboutPage-blurBg"></div>
      <div className="half-block"></div>
      <div className="profile-textBox">
      <div className="profile-img"></div>
        <div className="text-container">
          <div className="text-name">DICEPTED</div>
          <hr />
          <div className="text-info">
            패스트캠퍼스 부트캠프 1개월차 프론트엔드 개발 지망생입니다.
            <br />
            자바스크립트 잘하고 싶습니다 많이 부족하지만 잘부탁드립니다.
          </div>
          <hr />
          <div className="icons">
            <a href="https://github.com/DICEPT">
              <div className="github-icon"></div>
            </a>
            <a href="https://velog.io/@dicepted">
              <div className="blog-icon"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
