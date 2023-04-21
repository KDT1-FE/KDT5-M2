import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { useRef, useState } from "react";
import { colors } from "../styles/colors";

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [color, setColor] = useState();
  const scrollRef = useRef();

  const handleSearchOpen = () => {
    setSearchOpen(!searchOpen);
    setColor(!color);
  };

  return (
    <Container>
      <HeaderContent>
        <h1>MovieApp</h1>
        <SearchContainer>
          <SearchButton
            onClick={handleSearchOpen}
            className={color && "btn-active"}
          />
          <Search className={searchOpen && "active"}>
            <select>
              <option value="">1</option>
              <option value="">1</option>
              <option value="">1</option>
              <option value="">1</option>
            </select>
            <input type="text" placeholder="영화를 입력하세요" />
          </Search>
        </SearchContainer>
      </HeaderContent>
    </Container>
  );
}

const Container = styled.header`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid ${colors.gray[7]};
  background: ${colors.gray[0]};
`;

const HeaderContent = styled.div`
  max-width: 1280px;
  width: 1280px;
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-weight: 300;
    font-size: 24px;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Search = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  width: 0;
  visibility: hidden;
  opacity: 0;
  select {
    width: 100px;
    height: 40px;
    border: none;
    margin-right: 10px;
    background: transparent;
    border-bottom: 2px solid ${colors.gray[9]};
  }
  input {
    width: 180px;
    height: 40px;
    border: none;
    background: transparent;
    border-bottom: 2px solid ${colors.gray[9]};
  }
  &.active {
    width: 290px;
    visibility: visible;
    opacity: 1;
  }
`;

const SearchButton = styled(MdSearch)`
  font-size: 36px;
  cursor: pointer;
  color: ${colors.gray[9]};
  &.btn-active {
    color: ${colors.red[6]};
  }
`;

export default Header;
