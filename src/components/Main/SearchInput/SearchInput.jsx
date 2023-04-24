import styles from "./SearchInput.module.scss";
import React, { useState } from "react";
import { fetchMovies } from "~/core/movieData";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
  const [inputText, setInputText] = useState("");
  const [movies, setMovies] = useState([]);
  const [message, setMessage] = useState("검색을 해보세요!");
  // const [page, setPage] = useState("1");

  // TitleSearchHandler: input의 value로 들어오는 값을 setInputText로 동적으로 다룬다.movies
  const TitleSearchHandler = (event) => {
    setInputText(event.target.value);
  };

  // 비동기 처리 함수 pressEnterKey: Enter keydown시 inputText의 값을 fetchMovies의 input값으로 처리, 결과 값(movieData.Search)을 setMovies로 동적으로 다룬다.
  async function pressEnterKey(event) {
    if (event.key === "Enter") {
      // Search Movie
      if (!inputText.trim()) return;
      const movieData = await fetchMovies(inputText);
      // ` || [] `:  array.map 오류 방지
      setMovies(movieData.Search || []);
      // 검색 결과가 Truthy면 message를 빈 문자열화, Falsy(= 검색결과 없음)면 검색 결과가 없다는 문자열 출력!
      movieData.Search ? setMessage("") : setMessage("검색 결과가 없습니다.");
    }
  }

  // SearchButton 클릭 시 동일하게 async function으로 movieList 출력 && 추후에 pressEnterKey 함수와 병합 작업 예정
  async function pressSearchButton() {
    if (!inputText.trim()) return;
    const movieData = await fetchMovies(inputText).Search;
    setMovies(movieData.Search || []);
    movieData.Search ? setMessage("") : setMessage("검색 결과가 없습니다.");
  }

  // useEffect(() => {
  //   movies.length ?
  // });

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
          ></input>
          <button className={styles.searchButton} onClick={pressSearchButton}>
            <SearchIcon className={styles.searchIcon} />
          </button>
        </div>

        <div className={styles.searchedMovies}>
          <ul className={styles.moviesWrapper}>
            {message}
            {movies.map((movie) => (
              <li key={movie.imdbID} className={styles.movies}>
                <a
                  className={styles.movie}
                  href={`/movie/${movie.imdbID}`}
                  style={{ background: `url(${movie.Poster})` }}
                >
                  {" "}
                </a>
                <p className={styles.movieInfo}>{movie.Title}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default SearchInput;
