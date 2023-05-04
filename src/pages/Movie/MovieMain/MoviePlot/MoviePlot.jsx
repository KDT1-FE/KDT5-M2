import styles from "./MoviePlot.module.scss";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosDetailMovies } from "../../../../core/movieDetailData";
import { NavLink } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

const MoviePlot = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    async function detailMovies() {
      const detail = await axiosDetailMovies(movieId);
      setMovie(detail);
    }

    detailMovies(movieId);
  }, [movieId]);

  // api 호출 전이라면 삼항연산자의 값은 false이기 때문에, isPlot 변수에 false boolean값을 저장
  const isPlot = movie.Plot ? movie.Plot.length : "";

  return (
    <>
      <article className={styles.mainArticle}>
        <div className={styles.detailInfo}>
          {isPlot.length === 0 ? (
            <Skeleton
              variant="rounded"
              sx={{ bgcolor: "grey.900" }}
              width={940}
              height={35}
            />
          ) : (
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
          )}
        </div>
        <div className={styles.articleWrapper}>
          {isPlot.length === 0 ? (
            <Skeleton
              variant="rounded"
              sx={{ bgcolor: "grey.900" }}
              width={940}
              height={440}
            />
          ) : (
            movie.Plot
          )}
          {movie.Plot === "N/A"
            ? "⛔︎ 등록된 주요 정보가 없습니다."
            : movie.Plot}
        </div>
      </article>
    </>
  );
};

export default MoviePlot;
