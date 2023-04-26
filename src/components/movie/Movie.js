import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { getMovieDetail } from "src/lib/api/movieAPI";
import ErrorPage from "src/routes/ErrorPage";
import styled from "styled-components";

function Movie() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieDetail = async (movieId) => {
      try {
        const url = `http://omdbapi.com/?apikey=7035c60c&i=${movieId}&plot=full`;
        const response = await fetch(url);
        const result = await response.json();
        if (result.Response === "True") {
          setMovie(result);
          return;
        }
      } catch (e) {
        console.error(e, "API 요청에 실패했습니다.");
      }
    };
    getMovieDetail(movieId);
  }, [movieId]);

  if (!movie) {
    return <ErrorPage />;
  }

  return (
    <MovieContainer>
      <h2>{movie.Title}</h2>
    </MovieContainer>
  );
}

const MovieContainer = styled.div`
  width: 100%;
  padding: 0 60px;
  background: coral;
`;

export default Movie;
