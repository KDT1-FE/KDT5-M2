import styled from "styled-components";

function MovieItem({ movie }) {
  return (
    <MovieCard bgPhoto={movie.Poster}>
      <h2>{movie.Title}</h2>
    </MovieCard>
  );
}

const MovieCard = styled.li`
  cursor: pointer;
  background: #fff;
  width: 200px;
  height: 290px;
  border-radius: 16px;
  transition: all 0.3s ease-in-out;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  background-image: url(${(props) => props.bgPhoto});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  h2 {
    transition: all 0.2s ease-in-out;
    width: inherit;
    height: 60px;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    position: absolute;
    bottom: 0;
    border-radius: 0 0 16px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 700;
    opacity: 0;
    font-size: 14px;
  }
  /* Media-Query */
  /* 모바일과 태블릿은 hover 이벤트 불필요 */
  @media all and (min-width: 320px) and (max-width: 1024px) {
    h2 {
      opacity: 1;
    }
  }
  @media all and (min-width: 1024px) {
    &:hover {
      transform: translate(0, -10px);
      h2 {
        opacity: 1;
      }
    }
  }
`;

export default MovieItem;
