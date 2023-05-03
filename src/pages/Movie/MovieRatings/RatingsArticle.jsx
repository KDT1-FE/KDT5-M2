import styles from "./RatingsArticle.module.scss";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosDetailMovies } from "~/core/movieDetailData";
import { NavLink } from "react-router-dom";

const RatingsArticle = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const imageArr = [
    "data:image/png;base64,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",
    "https://fastcampus-kdt-5-m2.vercel.app/assets/rottenTomatoes-33b0de93.png",
    "https://fastcampus-kdt-5-m2.vercel.app/assets/metacritic-3916a551.png",
  ];

  useEffect(() => {
    async function detailMovies(e) {
      const detail = await axiosDetailMovies(movieId);
      setMovie(detail);
    }
    detailMovies(movieId);
  }, [movieId]);

  // 첫 번째 렌더링 undefined 방지, map 오류 방지 빈 배열 세팅
  const Ratings = movie.Ratings ? movie.Ratings : [];

  return (
    <>
      <article className={styles.mainArticle}>
        <div className={styles.detailInfo}>
          <ul className={styles.tapMenu}>
            <li>
              <NavLink
                to={`/movie/main/${movieId}`}
                className={styles.routeNavLink}
              >
                <span>주요정보</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/movie/ratings/${movieId}`}
                className={styles.routeNavLink}
              >
                <span>평점</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.articleWrapper}>
          {Ratings.map((rating, i) => (
            <div key={rating.Value} className={styles.ratingContianer}>
              <img src={imageArr[i]} alt="rate" className={styles.ratingImg} />
              <span className={styles.ratingScore}>{rating.Value}</span>
            </div>
          ))}
        </div>
      </article>
    </>
  );
};

export default RatingsArticle;
