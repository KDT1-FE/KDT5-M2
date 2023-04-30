import React from "react";
import styles from "./TheFooter.module.scss";

const TheFooter = () => {
  return (
    <>
      <footer>
        <div className={styles.footerDiv}>
          <a href="/">
            <span>WUTCHA</span> PEDIA
          </a>
          <a href="/"> (c)2023 Kled </a>
        </div>
      </footer>
    </>
  );
};

export default TheFooter;
