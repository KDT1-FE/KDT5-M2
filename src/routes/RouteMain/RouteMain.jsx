import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./RouteMain.module.scss";

// path를 통해 movieId를 수신
const RouteMovie = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();

  // useEffect 내에서 async await 함수를 만들고 그 함수(fetchDetailMovie)를 바로 호출
  // useEffect는 항상 함수를 반환해야하는데, 그렇지 않으면 Promise를 반환하게 되어 error 발생
  useEffect(() => {
    async function fetchDetailMovie() {
      const res = await fetch(
        `https://omdbapi.com/?apikey=7035c60c&i=${params.movieId}`
      );
      const result = await res.json();
      setMovie(result);
      console.log(result);
    }
    fetchDetailMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <article className={styles.mainArticle}>
        <div className={styles.movieContainer}>
          <div
            className={styles.moviePoster}
            style={{ background: `url(${movie.Poster}) alt=${movie.Title}` }}
          >
            {" "}
          </div>
          <div className={styles.movieInfo}>
            <h2>{movie.Title}</h2>
            <h2>{movie.Plot}</h2>
          </div>
        </div>
      </article>
    </main>
  );
};
export default RouteMovie;
