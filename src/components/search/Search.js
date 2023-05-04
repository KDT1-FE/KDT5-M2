import { memo, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getMovies } from "src/lib/api/movieAPI";
import { colors } from "src/lib/styles/colors";
import Loading from "src/components/common/Loading";
import SearchItem from "src/components/search/SearchItem";

// Component
function Search() {
  // Hooks
  const [loading, setLoading] = useState(false);
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [more, setMore] = useState(0);
  const [options, setOptions] = useState({
    type: null,
    page: "10",
    year: null,
  });
  const targetRef = useRef(null);

  const { type, page, year = year === "All years" ? null : year } = options;

  // Function
  const onInputChange = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    let pagination = parseInt(page) / 10;
    try {
      setLoading(true);
      const movieData = await getMovies(title, type, year, pagination);
      setMovies(movieData || []);
      setMore(pagination + 1);
      if (movieData === undefined) {
        setMessage("검색결과가 없습니다.");
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const onScroll = async () => {
    let pagination = parseInt(page) / 10;
    try {
      setIsMoreLoading(true);
      const movieData = await getMovies(
        title,
        type,
        year,
        more + pagination,
        more + 1,
      );
      setMovies([...movies, ...movieData]);
      setMore(more + pagination);
      console.log("done");
    } catch (e) {
      console.error(e);
    } finally {
      setIsMoreLoading(false);
    }
  };

  const onSearchOption = (event) => {
    setOptions({ ...options, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    const IO = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && more > 1) {
          onScroll();
        }
      },
      { threshold: 1 },
    );
    if (targetRef.current) {
      IO.observe(targetRef.current);
    }
    return () => {
      IO.disconnect();
    };
  }, [more]);

  // Render
  return (
    <>
      <SearchContainer>
        <SearchForm onSubmit={onSubmit}>
          <SearchInput
            placeholder="영화를 입력하세요"
            onChange={onInputChange}
            value={title}
          />
          <SearchButton type="submit">검색</SearchButton>
        </SearchForm>
      </SearchContainer>
      <SearchResult>
        {loading ? (
          <Loading />
        ) : (
          <SearchList>
            {message}
            {movies.map((movie) => (
              <SearchItem key={movie.imdbID} movie={movie} />
            ))}
            {isMoreLoading && (
              <LoadingLayout>
                <Loading />
              </LoadingLayout>
            )}
          </SearchList>
        )}
      </SearchResult>
      <div ref={targetRef} />
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

const LoadingLayout = styled.div`
  width: inherit;
  margin: 20px auto;
`;

export default memo(Search);
