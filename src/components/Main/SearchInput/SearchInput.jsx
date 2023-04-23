import styles from "./SearchInput.module.scss";
import React, { useState } from "react";
import { fetchMovies } from "~/core/movieData";

const SearchInput = () => {
  const [inputText, setInputText] = useState("");
  const [movies, setMovies] = useState([]);
  const TitleSearchHandler = (e) => {
    setInputText(e.target.value);
  };

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
          <ul>
            {movies.map((movie) => (
              <li key={movie.imdbID}>
                Title: {movie.Title} / Year: {movie.Year}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default SearchInput;
