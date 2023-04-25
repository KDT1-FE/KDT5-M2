import styled from "styled-components";
import BeatLoader from "react-spinners/BeatLoader";
import { colors } from "../../lib/styles/colors";

function Loading() {
  return (
    <LoadingContainer>
      <BeatLoader size={24} color={colors.gray[0]} />
    </LoadingContainer>
  );
}

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Loading;
