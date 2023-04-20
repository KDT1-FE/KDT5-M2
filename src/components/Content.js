import { memo } from "react";
import styled from "styled-components";

function Content() {
  return (
    <ContentWrapper>
      <MovieList>
        <MovieItem>
          <MovieInfoContainer className="info-hover">
            <Movietitle>제목</Movietitle>
            <MovieGenre>
              <span>장르1</span>
              <span>장르2</span>
              <span>장르3</span>
            </MovieGenre>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              efficitur odio est. In eleifend accumsan facilisis. Nulla nec
              sodales dolor. Donec luctus augue metus, vel auctor turpis
              sagittis eu. Nunc vitae odio quam.
            </p>
          </MovieInfoContainer>
        </MovieItem>
      </MovieList>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.section`
  width: 100%;
  background: coral;
  padding: 0 20px;
  display: flex;
  justify-content: center;
`;

const MovieList = styled.ul`
  max-width: 1280px;
  width: 1280px;
  background: cornflowerblue;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 40px 0;
  @media all and (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media all and (min-width: 320px) and (max-width: 768px) {
    grid-template-columns: repeat(1, 400px);
    justify-content: center;
  }
`;

const MovieItem = styled.li`
  background: pink;
  height: 500px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media all and (min-width: 320px) and (max-width: 1024px) {
    height: 500px;
  }
  &:hover {
    .info-hover {
      opacity: 1;
    }
  }
`;

const MovieInfoContainer = styled.div`
  width: 100%;
  padding: 30px;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  border-radius: 0 0 16px 16px;
  color: #fff;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

const Movietitle = styled.h2`
  font-weight: 700;
  font-size: 2rem;
  @media all and (min-width: 320px) and (max-width: 1024px) {
    font-size: 28px;
  }
`;

const MovieGenre = styled.div`
  margin-bottom: 1rem;
  span {
    margin-right: 8px;
    background: #000;
    color: #fff;
    padding: 4px 6px;
    border-radius: 6px;
    font-size: 12px;
  }
`;

export default memo(Content);
