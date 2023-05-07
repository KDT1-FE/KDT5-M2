import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";

const Movie = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();

  async function fetchDetailMovie() {
    const res = await fetch(
      `https://omdbapi.com/?apikey=7035c60c&i=${params.movieId}`
    );
    return await res.json();
  }

  useEffect(() => {
    (async () => {
      setMovie(await fetchDetailMovie());
    })();
  }, []);

  return (
    <div className="MoviePage">
      <div className="bgPoster">
        <img className="bgPosterItem" src={movie.Poster} alt={movie.Title} />
      </div>
      <div className="bgPoster-blackCover" />
      <div className="MoviePage-container">
        <div>
          <div className="posterItem">
            <div className="posterItem-img">
              <img src={movie.Poster} alt={movie.Title} />
            </div>
          </div>
          <div className="item-box">
            <div className="titleItem">{movie.Title}</div>
            <div className="item-line"></div>
            <div className="item">
              <div className="item-text">개봉연도</div>
              <div className="item-info">{movie.Year}</div>
            </div>
            <div className="item">
              <div className="item-text">메타스코어</div>
              <div className="item-info">{movie.Metascore}</div>
            </div>
            <div className="item">
              <div className="item-text">장르</div>
              <div className="item-info">{movie.Genre}</div>
            </div>
            <div className="item">
              <div className="item-text">감독</div>
              <div className="item-info">{movie.Director}</div>
            </div>
            <div className="item">
              <div className="item-text">출연배우</div>
              <div className="item-info">{movie.Actors}</div>
            </div>
            <div className="item">
              <div className="item-text">줄거리</div>
              <div className="item-info">{movie.Plot}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
