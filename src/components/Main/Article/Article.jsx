import React from "react";
import styles from "./Article.module.scss";

const Article = () => {
  return (
    <section className={styles.articleSection}>
      <article>
        <div className={styles.contentBig}>발견의 기쁨!</div>
        <div className={styles.contentMedium}>영화 검색을 무제한으로!</div>
        <div className={styles.contentSmall}>모든 영화 정보를 내 손 안에</div>
        <p>
          WUTCHA의 OMDb API는 RESTful 웹 서비스로, 영화 정보를 얻을 수 있도록
          제공됩니다. 이 사이트의 모든 콘텐츠와 이미지는 사용자들에 의해
          기여되고 유지보수됩니다.
        </p>
      </article>
    </section>
  );
};

export default Article;
