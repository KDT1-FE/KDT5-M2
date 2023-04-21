import styled from "styled-components";
import { colors } from "../lib/styles/colors";

function Main({ movies }) {
  console.log(movies); // movieApi 연동 완료
  return (
    <MainContainer>
      <MainItem />
    </MainContainer>
  );
}

const MainContainer = styled.section`
  height: 200vh;
  display: flex;
  justify-content: center;
  padding: 0 20px;
  margin: 100px 0;
`;

const MainItem = styled.div`
  max-width: 1280px;
  width: 1280px;
  height: 100px;
  background: ${colors.gray[0]};
`;

export default Main;
