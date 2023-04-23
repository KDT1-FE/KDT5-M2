import styled from "styled-components";
import MovieItem from "./MovieItem";

function MoviesList({ movies }) {
  // Render
  return (
    <MovieListContainer>
      <MovieList>
        {movies.map((movie, index) => (
          <MovieItem movie={movie} key={index} />
        ))}
      </MovieList>
    </MovieListContainer>
  );
}

// Style
const MovieListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 20px;
`;

const MovieList = styled.ul`
  background: #fff;
  width: 1280px;
  max-width: 1280px;
  padding: 30px 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  border-radius: 16px;
`;

export default MoviesList;
