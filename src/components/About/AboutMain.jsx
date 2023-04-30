import React from "react";
import styles from "./AboutMain.module.scss";

const AboutMain = () => {
  return (
    <main className={styles.about}>
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutPhoto}>
          <img
            className={styles.aboutKledImg}
            src="https://avatars.githubusercontent.com/u/83483378?v=4"
            alt="Profile"
          ></img>
        </div>
        <div className={styles.aboutProfile}>
          <div className={styles.name}>Kled Yu</div>
          <a href="mailto:1017yu@daum.net">📮 1017yu@daum.net </a>
          <a target="_blank" href="https://github.com/1017yu" rel="noreferrer">
            💻 https://github.com/1017yu
          </a>
          <a target="_blank" href="https://velog.io/@1017yu" rel="noreferrer">
            📗 https://velog.io/@1017yu
          </a>
        </div>
      </div>
    </main>
  );
};

export default AboutMain;
