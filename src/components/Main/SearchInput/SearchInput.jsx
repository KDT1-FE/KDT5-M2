import styles from "./SearchInput.module.scss";
import React, { useState } from "react";
import { fetchMovies } from "~/core/movieData";

const SearchInput = () => {
  const [inputText, setInputText] = useState("");
  const [movies, setMovies] = useState([]);

  // TitleSearchHandler: input의 value로 들어오는 값을 setInputText로 동적으로 다룬다.
  const TitleSearchHandler = (event) => {
    setInputText(event.target.value);
  };

  // 비동기 처리 함수 pressEnterKey: Enter keydown시 inputText의 값을 fetchMovies의 input값으로 처리, 결과 값(movieList)을 setMovies로 동적으로 다룬다.
  async function pressEnterKey(event) {
    if (event.key === "Enter") {
      // Search Movie
      if (!inputText.trim()) return;
      const movieList = await fetchMovies(inputText);
      setMovies(movieList);
    }
  }
  return (
    <>
      <section>
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={inputText}
            onChange={TitleSearchHandler}
            onKeyDown={pressEnterKey}
            placeholder="검색어를 입력해주세요."
            className={styles}
          />
        </div>
        <div className={styles.searchedMovies}>
          <div className={styles.movies}>
            {movies.map((movie) => (
              <div>
                <a
                  className={styles.movie}
                  href={`/movie/${movie.imdbID}`}
                  style={{ background: `url(${movie.Poster})` }}
                >
                  ''
                </a>
                <p className={styles.movieInfo}>{movie.Title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchInput;
