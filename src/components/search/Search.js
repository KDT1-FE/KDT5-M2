import { memo, useEffect, useState } from "react";
import styled from "styled-components";
import { getMovies } from "src/lib/api/movieAPI";
import { colors } from "src/lib/styles/colors";
import Loading from "src/components/common/Loading";
import SearchItem from "src/components/search/SearchItem";

// Component
function Search({ value, setValue, setMovies, movies }) {
  // Hooks
  const [loading, setLoading] = useState(null);
  const [message, setMessage] = useState(null);

  // Function
  const onInputChange = (event) => {
    setValue(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setValue("");
    setLoading(true);
    const movieData = await getMovies(value, 1);
    setMovies(movieData.Search || []);
    movieData.Search ? setMessage(null) : setMessage("검색결과가 없습니다.");
    setLoading(false);
  };

  const onScroll = async (event) => {
    event.preventDefault(); // event.preventDefault()를 넣어줘도 새로고침 발생
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      const movieData = await getMovies(value, 1);
      setMovies(movieData.Search || []);
      console.log(movieData.Search);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Render
  return (
    <>
      <SearchContainer>
        <SearchForm onSubmit={onSubmit}>
          <SearchInput
            placeholder="영화를 입력하세요"
            onChange={onInputChange}
            value={value}
          />
          {/* <SearchSelect onPage={onPage} page={page} /> */}
          <SearchButton type="submit">검색</SearchButton>
        </SearchForm>
      </SearchContainer>
      <SearchResult>
        {loading ? (
          <Loading />
        ) : (
          <SearchList>
            {message}
            {movies &&
              movies.map((movie, index) => (
                <SearchItem key={index} movie={movie} />
              ))}
          </SearchList>
        )}
      </SearchResult>
    </>
  );
}

// Style
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
  justify-content: center;
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
  padding: 0 60px;
`;

const SearchList = styled.ul`
  width: 1280px;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  border-radius: 16px;
  background: ${colors.gray[8]};
  padding: 20px;
  position: relative;
  font-size: 20px;
  color: ${colors.gray[0]};
  @media all and (min-width: 320px) and (max-width: 1024px) {
    padding: 20px;
  }
`;

export default memo(Search);
