import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorPage from "src/routes/ErrorPage";
import styled from "styled-components";
import { MdHideImage } from "react-icons/md";
import Loading from "src/components/common/Loading";
import { colors } from "src/lib/styles/colors";

const imgData = [
  "https://raw.githubusercontent.com/ParkYoungWoong/vue3-movie-app/master/src/assets/Internet%20Movie%20Database.png",
  "https://raw.githubusercontent.com/ParkYoungWoong/vue3-movie-app/master/src/assets/Rotten%20Tomatoes.png",
  "https://raw.githubusercontent.com/ParkYoungWoong/vue3-movie-app/master/src/assets/Metacritic.png",
];

function SearchDetail() {
  // Hooks
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
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
        setLoading(true);
        const url = `http://omdbapi.com/?apikey=7035c60c&i=${movieId}&plot=full`;
        const response = await fetch(url);
        const result = await response.json();
        if (result.Response === "True") {
          setMovie(result);
          return;
        }
      } catch (e) {
        console.error(e, "API 요청에 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };
    getMovieDetail(movieId);
  }, [movieId]);

  // etc
  const poster = movie.Poster ? movie.Poster.replace("SX300", "") : ""; // Image Resizing
  const genreSplit = movie.Genre ? movie.Genre.split(",") : []; // String -> Array
  const actorSplit = movie.Actors ? movie.Actors.split(",") : []; // String -> Array
  const ratings = movie.Ratings ? movie.Ratings : []; // map 오류 방어 코드

  if (!movie) {
    return <ErrorPage />;
  }

  // Debug
  console.log(movie);
  console.log(ratings);

  // Render
  return (
    <MovieContainer>
      {loading ? (
        <Loading />
      ) : (
        <MovieContent>
          <MoviePoster poster={poster} onContextMenu={onDisableContextMenu}>
            {poster === "N/A" && (
              <>
                <MdHideImage />
                <span>`Oops! 이미지가 없습니다!`</span>
              </>
            )}
          </MoviePoster>
          <MovieTitle>{movie.Title}</MovieTitle>
          <MovieInfoDetail>
            <Description>{movie.Plot}</Description>
            <MovieGenre>
              <h3>Genre</h3>
              {genreSplit.map((genre, index) => (
                <Genre key={index}>{genre}</Genre>
              ))}
            </MovieGenre>
            <Actors>
              <h3>Actor</h3>
              {actorSplit.map((actor, index) => (
                <Actor key={index}>{actor}</Actor>
              ))}
            </Actors>
            <Director>
              <h3>Director</h3>
              <span>{movie.Director}</span>
            </Director>
            <Ratings>
              <h3>Ratings</h3>
              {ratings.map((rating, index) => (
                <Rating key={index}>
                  <img src={imgData[index]} alt="rating" />
                  <span>{rating.Value}</span>
                </Rating>
              ))}
            </Ratings>
          </MovieInfoDetail>
        </MovieContent>
      )}
    </MovieContainer>
  );
}

// Style
const MovieContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 60px;
`;

const MovieContent = styled.div`
  width: 1280px;
  max-width: 1280px;
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MoviePoster = styled.div`
  width: 400px;
  height: 580px;
  background: ${colors.gray[8]};
  background-image: url(${(props) => props.poster});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  svg {
    color: ${colors.red[5]};
    font-size: 80px;
  }
  span {
    font-weight: 700;
    font-size: 20px;
    color: ${colors.gray[0]};
  }
`;

const MovieTitle = styled.h2`
  color: ${colors.gray[0]};
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  margin: 20px 0;
`;

const Description = styled.p`
  padding: 16px;
  background: ${colors.gray[8]};
  color: ${colors.gray[4]};
  border-radius: 20px;
  word-wrap: break-word;
`;

const MovieGenre = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid ${colors.lime[4]};
  h3 {
    background: ${colors.lime[4]};
    padding: 8px 16px;
    border-radius: 8px 8px 0 0;
    font-weight: 700;
    color: ${colors.gray[9]};
  }
`;

const Genre = styled.span`
  color: ${colors.gray[0]};
  font-weight: 700;
  &::after {
    content: ",";
  }
  &:last-child {
    &::after {
      content: "";
    }
  }
`;

const MovieInfoDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

const Actors = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid ${colors.lime[4]};
  h3 {
    background: ${colors.lime[4]};
    padding: 8px 16px;
    border-radius: 8px 8px 0 0;
    font-weight: 700;
    color: ${colors.gray[9]};
  }
`;

const Actor = styled.span`
  color: ${colors.gray[0]};
  font-weight: 700;
  &::after {
    content: ",";
  }
  &:last-child {
    &::after {
      content: "";
    }
  }
`;

const Director = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid ${colors.lime[4]};
  h3 {
    background: ${colors.lime[4]};
    padding: 8px 7px;
    border-radius: 8px 8px 0 0;
    font-weight: 700;
    color: ${colors.gray[9]};
  }
  span {
    color: ${colors.gray[0]};
    font-weight: 700;
  }
`;

const Ratings = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid ${colors.lime[4]};
  h3 {
    background: ${colors.lime[4]};
    padding: 8px 10px;
    border-radius: 8px 8px 0 0;
    font-weight: 700;
    color: ${colors.gray[9]};
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 20%;
    margin-right: 8px;
  }
  span {
    color: ${colors.gray[0]};
    font-weight: 700;
  }
`;

export default SearchDetail;
