import styled from "styled-components";
import { MdOutlineWarningAmber } from "react-icons/md";
import { colors } from "../lib/styles/colors";

function ErrorPage() {
  return (
    <Container>
      <MdOutlineWarningAmber />
      <h1>404 Not Found!</h1>
      <h2>페이지를 찾을 수 없습니다.</h2>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 180px;
    color: ${colors.red[7]};
  }
  h1 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 12px;
  }
  h2 {
    font-size: 20px;
  }
`;

export default ErrorPage;
