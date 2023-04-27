import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./TheHeader.module.scss";

const TheHeader = () => {
  return (
    <header>
      <NavLink to="/" className={styles.logo}>
        WUTCHA
      </NavLink>
      <NavLink to="/movie/main/tt2194499" className={styles.movie}>
        영화
      </NavLink>
    </header>
  );
};

export default TheHeader;
