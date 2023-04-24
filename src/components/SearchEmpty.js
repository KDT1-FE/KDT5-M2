import styled from "styled-components";
import { colors } from "../lib/styles/colors";

function SearchEmpty() {
  return (
    <EmptyContainer>
      <Empty>
        <span>검색결과가 없습니다.</span>
      </Empty>
    </EmptyContainer>
  );
}

const EmptyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 20px;
`;

const Empty = styled.div`
  max-width: 1280px;
  width: 1280px;
  height: 100px;
  background: ${colors.gray[0]};
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

export default SearchEmpty;
