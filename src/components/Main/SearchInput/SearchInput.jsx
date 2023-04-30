import styles from "./SearchInput.module.scss";
import React, { useState } from "react";
import { axiosMovies } from "~/core/movieData";
import SearchIcon from "@mui/icons-material/Search";
import Select from "./Select";
import { type, pages, year } from "./Category";
import altImage from "../../../assets/alt-image.jpeg";

const SearchInput = () => {
  const [inputText, setInputText] = useState("");
  const [movies, setMovies] = useState([]);
  const [message, setMessage] = useState("🎬 검색 준비 완료!");
  const [category, setCategory] = useState({
    page: "10",
    year: "All Years",
    type: "movie",
  });
  // TitleSearchHandler: input의 value로 들어오는 값을 setInputText로 동적으로 다룬다.movies
  const TitleSearchHandler = (event) => {
    setInputText(event.target.value);
  };

  const CategoryHandler = (event) => {
    const { name, value } = event.target;
    setCategory({ ...category, [name]: value });
  };

  // 비동기 처리 함수 pressEnterKey: Enter keydown시 inputText의 값을 axiosMovies의 input값으로 처리, 결과 값(movieData.Search)을 setMovies로 동적으로 다룬다.
  async function pressEnterKey(event) {
    // onKeyDown === Enter or OnClick === click
    if (event.key === "Enter" || event.type === "click") {
      // Search Movie
      if (!inputText.trim()) return;
      // movieData의 기본값은 page: 1
      const movieData = await axiosMovies(
        inputText,
        category.year,
        category.type,
        1
      );
      // selected가 20이면, page: 1 Array에 page: 2 Array 요소 push
      if (category.page === "20") {
        const twoData = await axiosMovies(
          inputText,
          category.year,
          category.type,
          2
        );
        // selected가 20이면, page: 2 data 호출
        twoData.Search.map((v) => movieData.Search.push(v));
      }
      // selected가 30이면, page: 1 Array에 page: 2, page: 3 Array 요소 push
      else if (category.page === "30") {
        const twoData = await axiosMovies(
          inputText,
          category.year,
          category.type,
          2
        );
        const threeData = await axiosMovies(
          inputText,
          category.year,
          category.type,
          3
        );
        // selected가 20이면, page: 2 data 호출
        twoData.Search.map((v) => movieData.Search.push(v));
        // selected가 30이면, page: 3 data 호출
        threeData.Search.map((v) => movieData.Search.push(v));
      }
      // ` || [] `:  array.map 오류 방지
      setMovies(movieData.Search || []);

      // 검색 결과가 Truthy면 message를 빈 문자열화, Falsy(= 검색결과 없음)면 검색 결과가 없다는 문자열 출력!
      movieData.Search
        ? setMessage("")
        : setMessage("⚠️ 검색 결과가 없습니다.");
    }
  }

  return (
    <>
      <section className={styles.mainSection}>
        <div className={styles.mainWrapper}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              value={inputText}
              onChange={TitleSearchHandler}
              onKeyDown={pressEnterKey}
              placeholder="검색어를 입력해주세요."
              className={styles}
            ></input>
            <button className={styles.searchButton} onClick={pressEnterKey}>
              <SearchIcon className={styles.searchIcon} />
            </button>
          </div>
          <div className={styles.selectContainer}>
            <Select
              onChange={CategoryHandler}
              options={pages}
              category="page"
            />
            <Select onChange={CategoryHandler} options={type} category="type" />
            <Select onChange={CategoryHandler} options={year} category="year" />
          </div>
        </div>
        <div className={styles.searchedMovies}>
          <ul className={styles.moviesWrapper}>
            {message}
            {movies.map((movie) => (
              <li key={movie.imdbID} className={styles.movies}>
                <a
                  className={styles.movie}
                  href={`/movie/main/${movie.imdbID}`}
                  style={{
                    background: `url(${
                      movie.Poster === "N/A" ? altImage : movie.Poster
                    })`,
                  }}
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
