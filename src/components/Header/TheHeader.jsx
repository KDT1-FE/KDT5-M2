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
      </nav>
      <nav>
        <a href="/" className={styles.navHome}>
          홈
        </a>
      </nav>
      <nav>
        <NavLink to="/movie/main/tt2194499" className={styles.navMovie}>
          영화
        </NavLink>
      </nav>
      <nav>
        <NavLink to="/about" className={styles.navAbout}>
          더보기
        </NavLink>
      </nav>
    </header>
  );
};

export default TheHeader;
