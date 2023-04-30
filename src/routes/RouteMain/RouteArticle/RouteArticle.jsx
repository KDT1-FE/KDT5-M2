import styles from "./RouteArticle.module.scss";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosDetailMovies } from "../../../core/movieDetailData";
import { NavLink } from "react-router-dom";

const RouteArticle = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    async function detailMovies() {
      const detail = await axiosDetailMovies(movieId);
      setMovie(detail);
    }

    detailMovies(movieId);
  }, [movieId]);

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
          {movie.Plot === "N/A"
            ? "⛔︎ 등록된 주요 정보가 없습니다."
            : movie.Plot}
        </div>
      </article>
    </>
  );
};

export default RouteArticle;
