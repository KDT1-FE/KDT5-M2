import { useState } from "react";
import styled from "styled-components";
import { getMovies } from "../../lib/api/movieAPI";
import { colors } from "../../lib/styles/colors";
import SearchItem from "./SearchItem";

function Search() {
  const [value, setValue] = useState("");
  const [movies, setMovies] = useState([]);

  const onInputChange = (event) => {
    setValue(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setValue("");
    const movieData = await getMovies(value);
    setMovies(movieData.Search || []);
    console.log(value);
  };

  return (
    <>
      <SearchContainer>
        <SearchForm onSubmit={onSubmit}>
          <SearchInput
            placeholder="영화를 입력하세요"
            onChange={onInputChange}
            value={value}
          />
          <SearchButton type="submit">검색</SearchButton>
        </SearchForm>
      </SearchContainer>
      <SearchResult>
        <SearchList>
          {movies.map((movie) => (
            <SearchItem key={movie.imdbID} movie={movie} />
          ))}
        </SearchList>
      </SearchResult>
    </>
  );
}

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const SearchForm = styled.form`
  padding: 20px 0;
  width: 1280px;
  max-width: 1280px;
  display: flex;
  gap: 20px;
`;

const SearchInput = styled.input`
  font-size: 24px;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  &:focus {
    outline: 4px solid ${colors.lime[4]};
  }
`;

const SearchButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 0 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: ${colors.lime[4]};
  }
`;

const SearchResult = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SearchList = styled.ul`
  width: 1280px;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  @media all and (min-width: 320px) and (max-width: 1024px) {
    padding: 0 20px;
  }
`;

export default Search;
