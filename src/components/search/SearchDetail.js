import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { colors } from "src/lib/styles/colors";
import ErrorPage from "src/routes/ErrorPage";
import styled from "styled-components";
import { MdStar, MdHideImage } from "react-icons/md";

function SearchDetail() {
  // Hooks
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  // Function
  const onDisableContextMenu = (event) => {
    // 이미지 우클릭 방지
    event.preventDefault();
  };

  // API Call
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

  // etc
  const poster = movie.Poster ? movie.Poster.replace("SX300", "") : ""; // Image Resizing
  const genreSplit = movie.Genre ? movie.Genre.split(",") : []; // String -> Array

  if (!movie) {
    return <ErrorPage />;
  }

  // Debug
  console.log(movie);
  console.log(genreSplit);

  return (
    <>
      <Space />
      <MovieContainer>
        <MovieContent>
          <MoviePoster poster={poster} onContextMenu={onDisableContextMenu}>
            {poster === "N/A" && (
              <>
                <MdHideImage />
                <span>`Oops! 이미지가 없습니다!`</span>
              </>
            )}
          </MoviePoster>
          <MovieInfo>
            <h2>{movie.Title}</h2>
            <Etc>
              <EtcItem>
                <MdStar />
                {movie.imdbRating}
              </EtcItem>
              <EtcItem>{movie.Released}</EtcItem>
            </Etc>
            <Genre>
              {genreSplit.map((genre, index) => (
                <GenreItem key={index}>{genre}</GenreItem>
              ))}
            </Genre>
            <Description>{movie.Plot}</Description>
          </MovieInfo>
        </MovieContent>
      </MovieContainer>
    </>
  );
}

const Space = styled.div`
  margin-top: 60px;
`;

const MovieContainer = styled.div`
  width: 100%;
  padding: 0 60px;
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const MovieContent = styled.div`
  width: 1280px;
  max-width: 1280px;
  display: flex;
  gap: 30px;
  padding: 60px 0;
`;

const MoviePoster = styled.div`
  width: 400px;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: ${colors.gray[2]};
  background-image: url(${(props) => props.poster});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  svg {
    color: ${colors.red[5]};
    font-size: 40px;
  }
  span {
    font-weight: 700;
    font-size: 20px;
  }
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 40px;
    font-weight: 700;
    color: ${colors.gray[0]};
    word-break: break-all;
  }
  span {
    font-size: 12px;
    padding: 8px 16px;
    font-weight: 700;
    border-radius: 8px;
    user-select: none;
    margin-right: 8px;
  }
  p {
    word-break: normal;
    color: ${colors.gray[0]};
    margin-top: 30px;
  }
`;

const Etc = styled.div`
  margin-top: 10px;
  display: flex;
`;

const EtcItem = styled.div`
  font-size: 16px;
  padding: 8px 16px;
  font-weight: 700;
  border-radius: 8px;
  user-select: none;
  margin-right: 8px;
  background: ${colors.lime[4]};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  svg {
    width: 16px;
    height: 16px;
    font-size: 16px;
    font-size: 16px;
    color: ${colors.red[6]};
  }
`;

const Genre = styled.div`
  margin-top: 20px;
`;

const GenreItem = styled.span`
  background: ${colors.gray[4]};
`;

const Description = styled.p`
  width: 700px;
  padding: 16px;
  background: ${colors.gray[8]};
  border-radius: 8px;
  word-break: keep-all;
  color: ${colors.gray[2]};
  @media all and (min-width: 320px) and (max-width: 1024px) {
    width: 300px;
  }
`;

export default SearchDetail;
