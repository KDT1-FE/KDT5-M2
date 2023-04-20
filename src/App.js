import { useState } from "react";
import styled from "styled-components";
import { getMovie } from "./lib/api/movieApi";
import Header from "/src/components/Header";

function App() {
  return (
    <>
      <Header />
      <Space />
    </>
  );
}

const Space = styled.div`
  margin-bottom: 60px;
`;

export default App;
