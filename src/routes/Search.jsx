import { useState } from "react";
import { Link } from "react-router-dom";
import TheHeader from "~/components/TheHeader";
import { fetchMovies } from "~/api/api";
import "../styles/Search.scss";
import TheFooter from "../components/TheFooter";
import xboxImg from "../assets/xbox.png";

export default function Search() {
  const [inputText, setInputText] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [page, setPage] = useState(1);

  async function pressEnterKey(event) {
    if (event.key === "Enter") {
      if (!inputText.trim()) return;
      const movieList = await fetchMovies(inputText, selectedType);
      setMovies(movieList);
    }
  }
  async function PressBtn() {
    const movieList = await fetchMovies(inputText, selectedType);
    setMovies(movieList);
  }
  async function viewMore(event) {
    const pageMore = page + 1;
    const Page = await fetchMovies(inputText, selectedType, pageMore);
    setMovies(Page);
  }
  const onErrorImg = (e) => {
    e.target.src = xboxImg;
  };

  return (
    <>
      <header>
        <TheHeader />
      </header>
      <main className="main">
        <section className="web-intro">
          <p className="web-intro__title">
            Mov<span className="orange">iecu</span> !
          </p>
          <p className="web-intro__content">
            <span>OMDb API THE OPEN MOVIE DATABASE</span>
            <br />
            The OMDb API is a RESTful web service to obtain movie information,
            all content and images on the site are contributed and maintained by
            our users. If you find this service useful, please consider making a
            one-time donation or become a patron.
          </p>
        </section>
        <section className="search-form">
          <input
            type="text"
            value={inputText}
            placeholder="Search for Movies,Series & more :)"
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            onKeyDown={pressEnterKey}
            className="search-form__input"
          />
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="search-form__type"
          >
            <option value="movie">movies</option>
            <option value="series">series</option>
            <option value="episode">episode</option>
          </select>
          <select className="search-form__type">
            <option value="1">10</option>
            <option value="2">20</option>
            <option value="3">30</option>
          </select>
          <button onClick={PressBtn} className="search-form__apply">
            Apply
          </button>
        </section>
        <section className="data-form">
          <ul className="data-form__data">
            {movies?.length < 1 && (
              <div className="data-form__message">Search your Preference !</div>
            )}
            {movies.map((movie) => (
              <li key={movie.imdbID} className="data-form__item">
                <Link to={`/movies/${movie.imdbID}`} key={movie.imdbID}>
                  <img src={movie.Poster} alt="" onError={onErrorImg} />
                  <div className="data-form__container">
                    <div className="data-form__year">{movie.Year}</div>
                    <div className="data-form__title">{movie.Title}</div>
                  </div>
                </Link>
              </li>
            ))}
            {movies?.length > 0 && (
              <li className="data-form__view-more">
                <button
                  className="data-form__btn"
                  value={page}
                  onChange={(e) => setPage(e.target.value)}
                  onClick={viewMore}
                >
                  View more...
                </button>
              </li>
            )}
          </ul>
        </section>
      </main>
      <TheFooter />
    </>
  );
}
