import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./RouteMain.module.scss";

// path를 통해 movieId를 수신
const RouteMovie = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  // useEffect 내에서 async await 함수를 만들고 그 함수(fetchDetailMovie)를 바로 호출
  // useEffect는 항상 함수를 반환해야하는데, 그렇지 않으면 Promise를 반환하게 되어 error 발생
  useEffect(() => {
    async function fetchDetailMovie(movieId) {
      const res = await fetch(
        `https://omdbapi.com/?apikey=7035c60c&i=${movieId}`
      );
      const result = await res.json();
      setMovie(result);
    }
    fetchDetailMovie(movieId);
  }, [movieId]);

  // React.StrictMode를 사용하지 않음에도 useEffect의 영향으로 두번 렌더링하는 현상 발생 -> replace로 리사이징 불가.
  // const bigPoster = movie.Poster.replace("SX300", "SX500")
  console.log(movie.Poster);

  return (
    <main>
      <article className={styles.mainArticle}>
        <div className={styles.movieContainer}>
          <div className={styles.moviePoster}>
            <img className={styles.moviePosterImg} src={movie.Poster} alt="" />
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
