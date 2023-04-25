import styled from "styled-components";
import { MdOutlineWarningAmber } from "react-icons/md";
import { colors } from "../lib/styles/colors";
import { Link } from "react-router-dom";

// Component
function ErrorPage() {
  // Render
  return (
    <Container>
      <MdOutlineWarningAmber />
      <h1>404 Not Found!</h1>
      <h2>페이지를 찾을 수 없습니다.</h2>
      <Link to="/">홈으로</Link>
    </Container>
  );
}

// Style
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.gray[0]};
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
  a {
    margin-top: 20px;
    color: ${colors.blue[4]};
    font-size: 20px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default ErrorPage;
