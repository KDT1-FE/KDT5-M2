import React from "react";
import styles from "./SearchInput.module.scss";
import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { axiosMovies } from "~/core/movieData";
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from "@mui/material/CircularProgress";
import Select from "./Select";
import { type, pages, year } from "./Category";
import altImage from "../../../assets/alt-image.jpeg";

const SearchInput = () => {
  const [inputText, setInputText] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [finishMessage, setFinishMessage] = useState("");
  const [searchMessage, setSearchMessage] = useState(
    "🎬 검색어를 입력 후 엔터 ⏎ 또는 돋보기 🔍 를 눌러 검색해주세요!"
  );
  const [category, setCategory] = useState({
    title: "",
    page: 10,
    year: "All Years",
    type: "movie",
  });
  ///
  const [posts, setPosts] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const page = useRef(1);
  const [ref, inView] = useInView();

  ///
  // TitleSearchHandler: input의 value로 들어오는 값을 setInputText로 동적으로 다룬다.movies
  const TitleSearchHandler = (event) => {
    setInputText(event.target.value);
  };

  const CategoryHandler = (event) => {
    const { name, value } = event.target;
    setCategory({ ...category, [name]: value });
  };

  // 비동기 처리 함수 apiHandler: Enter keydown시 inputText의 값을 axiosMovies의 input값으로 처리, 결과 값(movieData.Search)을 setMovies로 동적으로 다룬다.
  const apiHandler = async (event) => {
    setLoading(true);

    try {
      // onKeyDown === Enter or OnClick === click
      if (event.key === "Enter" || event.type === "click") {
        if (setLoading) setSearchMessage("");
        // 불필요한 input 공백 체크
        if (!inputText.trim()) return;

        // movieData의 기본값은 page: 1
        const movieData = [];
        category.title = inputText;

        // selected가 20이면, Array에 page: 2 Array 요소를 push
        for (let pageNum = 1; pageNum <= category.page / 10; pageNum++) {
          const movieObj = await axiosMovies(
            category.title,
            category.year,
            category.type,
            pageNum
          );

          movieObj.Search.map((v) => movieData.push(v));
        }

        // ` || [] `:  array.map 오류 방지
        setMovies(movieData || []);

        // 검색 결과가 Truthy면 message를 빈 문자열화, Falsy(= 검색결과 없음)면 검색 결과가 없다는 문자열 출력!
        movieData
          ? setSearchMessage("")
          : setSearchMessage("⚠️ 검색 결과가 없습니다.");

        movieData
          ? setFinishMessage("🎁 검색이 완료되었습니다!")
          : setFinishMessage("");
      }
    } catch (error) {
      console.error(error);
    }

    // API 통신을 마친 후, setLoading(false)로 로딩 스피너 off
    setLoading(false);
  };

  const fetch = useCallback(async (page) => {
    try {
      const { data } = await axios.get(
        `https://omdbapi.com/?apikey=7035c60c&s=${category.title}&y=${category.year}&type=${category.type}&page=${page.current}`
      );
      setHasNextPage(data.Response);

      if (data.Response !== "False") {
        page++;
        setPosts((prevPosts) => [...prevPosts, ...data.Search]);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    if (inView && hasNextPage && !searchMessage.length) {
      page.current++;
      fetch(page);
    } else {
    }
  }, [fetch, hasNextPage, inView]);

  return (
    <>
      <section className={styles.mainSection}>
        <div className={styles.mainWrapper}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              value={inputText}
              onChange={TitleSearchHandler}
              onKeyDown={apiHandler}
              placeholder="검색어를 입력해주세요."
              className={styles}
            ></input>
            <button className={styles.searchButton} onClick={apiHandler}>
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
          {loading && (
            <CircularProgress
              color="secondary"
              className={styles.circularProress}
            />
          )}
          <ul className={styles.moviesWrapper}>
            {searchMessage}
            {movies.map((movie) => (
              <li key={movie.imdbID} className={styles.movies}>
                <a
                  className={styles.movie}
                  href={`/movie/main/${movie.imdbID}`}
                  style={{
                    background: `url(${
                      movie.Poster === "N/A" ? altImage : movie.Poster
                    })`,
                    backgroundSize: `100%`,
                  }}
                >
                  {" "}
                </a>
                <p className={styles.movieInfo}>{movie.Title}</p>
              </li>
            ))}
            {posts?.map((post) => (
              <li key={post.imdbID} className={styles.movies}>
                <a
                  className={styles.movie}
                  href={`/movie/main/${post.imdbID}`}
                  style={{
                    background: `url(${
                      post.Poster === "N/A" ? altImage : post.Poster
                    })`,
                    backgroundSize: `100%`,
                  }}
                >
                  {" "}
                </a>
                <p className={styles.movieInfo}>{post.Title}</p>
              </li>
            ))}
            <div />
          </ul>
        </div>

        <p className={styles.finishMessage} ref={ref}>
          {finishMessage}
        </p>
      </section>
    </>
  );
};
export default SearchInput;
