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
  margin: 80px 0 20px;
`;

const Search = styled.div`
  max-width: 1280px;
  width: 1280px;
  height: 100px;
  background: ${colors.gray[0]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
`;

const SearchInput = styled.input`
  border: none;
  border-bottom: 2px solid ${colors.gray[8]};
  font-size: 24px;
  padding: 4px 8px;
  &::placeholder {
    font-size: 20px;
  }
  &:focus {
    outline: none;
  }
`;

export default SearchForm;
