import { useState } from "react";
import Movie from "../components/movie/Movie";

function MoviePage() {
  const [movies, setMovies] = useState([]);
  return (
    <>
      <Movie movies={movies} setMovies={setMovies} />
    </>
  );
}

export default MoviePage;
