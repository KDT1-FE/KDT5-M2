import React, { useState, useRef } from "react";
import "./index.scss";
import { fetchMovies } from "../../core/MoviesApi";
import { Link } from "react-router-dom";
import BackgroundVideo from "../../components/BackgroundVideo";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [movies, setMovies] = useState([]);

  async function pressEnterKey(event) {
    if (event.key === "Enter") {
      const movies = await fetchMovies(inputText);
      setMovies(movies);
      HomeInfos.current.style.display = "none";
      BackVideo.current.style.display = "none";
      BlackBg.current.style.display = "none";
    }
  }

  // 비동기 함수를 만든다. 함수명은 searchBtn이고 매개변수는 event이다. 만약에 매개변수를 호출하면 함수를 실행한다.
  // fetchMovies(inputText) 함수를 할당한 변수 movies를 선언하고 함수 setMovies()안에 setMovies(movies)를 넣어 반환한다.
  async function searchBtn(event) {
    if (event) {
      const movies = await fetchMovies(inputText);
      setMovies(movies);
      HomeInfos.current.style.display = "none";
      BackVideo.current.style.display = "none";
      BlackBg.current.style.display = "none";
    }
  }

  const HomeInfos = useRef(null);
  const BackVideo = useRef(null);
  const BlackBg = useRef(null);

  return (
    <div className="Home-container">
      {/* 백그라운드 비디오 삽입 */}
      <div className="video" ref={BackVideo}>
        <BackgroundVideo />
      </div>
      {/* 백그라운드 비디오를 화면 블러처리할 비디오 상단에 위치한 배경 div요소 */}
      <div className="blackBg" ref={BlackBg}></div>
      <div className="Home-Search">
        <div className="text-box">
          <input
            type="text"
            value={inputText}
            placeholder="검색어를 넣어주세요."
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            onKeyDown={pressEnterKey}
          />
        </div>
        <button onClick={searchBtn}>검색</button>
      </div>
      <div className="Home-info" ref={HomeInfos}>
        <div className="mbase-logo"></div>
        <div className="info-text">영화를 검색해주세요.</div>
      </div>
      <div className="Home-movies">
        <ul>
          {movies.map((movie) => (
            <li key={movie.imdbID}>
              <Link to={`Movie/${movie.imdbID}`}>
                <img src={movie.Poster} alt={movie.Title} />
                <div className="movie-info">{movie.Title}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
