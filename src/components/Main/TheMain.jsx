import React from "react";
import Article from "./Article/Article";
import SearchInput from "./SearchInput/SearchInput";
import styles from "./TheMain.module.scss";

const TheMain = () => {
  return (
    <main className={styles.theMain}>
      <Article />
      <SearchInput />
    </main>
  );
};

export default TheMain;
