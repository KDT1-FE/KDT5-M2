import { useState } from "react";
import Search from "../components/search/Search";
import SearchMain from "../components/search/SearchMain";

// Component
function MainPage() {
  // Hooks
  const [value, setValue] = useState("");
  const [movies, setMovies] = useState([]);
  // Render
  return (
    <>
      <SearchMain movies={movies} setMovies={setMovies} />
      <Search
        movies={movies}
        value={value}
        setMovies={setMovies}
        setValue={setValue}
      />
    </>
  );
}

export default MainPage;