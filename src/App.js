import { useCallback, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ErrorPage from "./routes/ErrorPage";
import MainPage from "./routes/MainPage";
import MoviePage from "./routes/MoviePage";
import SearchPage from "./routes/SearchPage";

function App() {
  // Hooks
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState("검색");
  // Function
  /**
    @todo getMovies 함수 모듈화 필요
   */
  const getMovies = async () => {
    try {
      const url = `http://omdbapi.com/?apikey=7035c60c&s=frozen`;
      const res = await fetch(url);
      const json = await res.json();
      if (json.Search) {
        setMovies(json.Search);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const onMenuSelect = useCallback((category) => setCategory(category), []);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Router>
      <Header category={category} onMenuSelect={onMenuSelect} />
      <Routes>
        <Route path="/" element={<MainPage movies={movies} />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
