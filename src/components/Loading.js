import styled from "styled-components";
import { colors } from "../lib/styles/colors";

/**
 * @description 임시로 만든 Loading 컴포넌트
 */
function Loading() {
  // TODO : spinner 적용
  return (
    <LoadingContainer>
      <LoadingItem>
        <span>잠시만 기다려주세요</span>
      </LoadingItem>
    </LoadingContainer>
  );
}

const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 20px;
`;

const LoadingItem = styled.div`
  max-width: 1280px;
  width: 1280px;
  height: 100px;
  background: ${colors.gray[8]};
  color: ${colors.gray[0]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  span {
    font-size: 20px;
    font-weight: 500;
  }
`;

export default Loading;
