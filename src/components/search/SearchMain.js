import styled from "styled-components";
import { colors } from "../../lib/styles/colors";

// Component
function Main() {
  // Render
  return (
    <MainContainer>
      <MainItem>
        <MainTitle>
          <span>MovieApp</span>
          <h3>THE OPEN</h3>
          <h3>MOVIE DATABASE</h3>
        </MainTitle>
        <Description>
          The OMDb API is a RESTful web service to obtain movie information, all
          content and images on <br /> the site are contributed and maintained
          by our users. <br /> If you find this service useful, please consider
          making a one-time donation or become a patron.
        </Description>
      </MainItem>
    </MainContainer>
  );
}

// Style
const MainContainer = styled.div`
  width: 100%;
  padding: 0 60px;
  margin-top: 120px;
  display: flex;
  justify-content: center;
`;

const MainItem = styled.div`
  width: 1280px;
  max-width: 1280px;
`;

const MainTitle = styled.div`
  span {
    margin: 20px 0 0;
    font-size: 80px;
    font-weight: 300;
    color: ${colors.lime[4]};
  }
  h3 {
    font-size: 80px;
    font-weight: 300;
    color: ${colors.gray[2]};
    letter-spacing: -2px;
    &:last-child {
      line-height: 30px;
    }
  }
`;

const Description = styled.p`
  margin-top: 60px;
  color: ${colors.gray[5]};
  font-size: 1rem;
  word-spacing: -2px;
`;

export default Main;
