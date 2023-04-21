import styled from "styled-components";
import Header from "../components/Header";
import Main from "../components/Main";

function MainPage({ movies }) {
  return (
    <>
      <Header />
      <Main movies={movies} />
    </>
  );
}

export default MainPage;
