import styled from "styled-components";
import { colors } from "../lib/styles/colors";

function SearchForm({ setSearchValue, searchValue }) {
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <MainContainer>
      <Search>
        <SearchInput
          value={searchValue}
          onChange={handleInputChange}
          placeholder="영화를 입력하세요"
        />
      </Search>
    </MainContainer>
  );
}

const MainContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: 0 20px;
  margin: 60px 0;
`;

const Search = styled.div`
  max-width: 1280px;
  width: 1280px;
  height: 100px;
  background: ${colors.gray[8]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
`;

const SearchInput = styled.input`
background: ${colors.gray[8]};
  border: none;
  border-bottom: 2px solid ${colors.gray[0]};
  font-size: 24px;
  padding: 4px 8px;
  color: ${colors.gray[0]};
  &::placeholder {
    font-size: 20px;
    color: ${colors.gray[0]};
  }
  &:focus {
    outline: none;
  }
`;

export default SearchForm;
