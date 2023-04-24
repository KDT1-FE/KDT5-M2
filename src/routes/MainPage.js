import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Main from "../components/Main";
import MovieList from "../components/MovieList";
import SearchEmpty from "../components/SearchEmpty";
import SearchForm from "../components/SearchForm";

function MainPage() {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovies = async (searchValue) => {
      setLoading(true);
      try {
        const url = `http://omdbapi.com/?apikey=7035c60c&s=${searchValue}`;
        const res = await fetch(url);
        const resJson = await res.json();
        if (resJson.Search) {
          setMovies(resJson.Search);
        }
      } catch (e) {
        console.error(e);
      }
      setTimeout(() => setLoading(false), 2000);
      clearTimeout(setLoading(false));
    };
    getMovies(searchValue);
  }, [searchValue]);

  return (
    <>
      <Main />
      <SearchForm
        movies={movies}
        searchValue={searchValue}
        setMovies={setMovies}
        setSearchValue={setSearchValue}
      />
      {loading ? (
        <Loading />
      ) : movies.length === 0 ? (
        <SearchEmpty />
      ) : searchValue === "" ? (
        <SearchEmpty />
      ) : (
        <MovieList movies={movies} />
      )}
    </>
  );
}

export default MainPage;
