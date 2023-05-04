import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./TheHeader.module.scss";

const TheHeader = () => {
  return (
    <header>
      <nav>
        <NavLink to="/" className={styles.navWutcha}>
          WUTCHA
        </NavLink>

        <a href="/" className={styles.navHome}>
          홈
        </a>

        <NavLink to="/movie/main/tt2194499" className={styles.navMovie}>
          영화
        </NavLink>

        <NavLink to="/about" className={styles.navAbout}>
          나의 정보
        </NavLink>

        <NavLink to="/about" className={styles.navAccount}>
          <img
            src="https://avatars.githubusercontent.com/u/83483378?v=4"
            alt="user "
          />
        </NavLink>
      </nav>
    </header>
  );
};

export default TheHeader;
