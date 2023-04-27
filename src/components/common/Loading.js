import styled from "styled-components";
import BeatLoader from "react-spinners/BeatLoader";
import { colors } from "src/lib/styles/colors";

function Loading() {
  return (
    <LoadingContainer>
      <BeatLoader size={24} color={colors.gray[0]} />
      <span>잠시만 기다려주세요</span>
    </LoadingContainer>
  );
}

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  span {
    font-size: 20px;
    font-weight: 700;
    color: ${colors.gray[0]};
  }
`;

export default Loading;
