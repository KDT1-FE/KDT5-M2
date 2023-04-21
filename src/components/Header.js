import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { useRef, useState } from "react";

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const scrollRef = useRef();
  const handleSearchOpen = () => {
    setSearchOpen(!searchOpen);
  };
  return (
    <Container>
      <HeaderContent>
        <h1>MovieApp</h1>
        <Search>
          <SearchButton onClick={handleSearchOpen} />
          <form className="active">
            <select>
              <option value="">1</option>
              <option value="">1</option>
              <option value="">1</option>
              <option value="">1</option>
            </select>
            <input type="text" />
          </form>
        </Search>
      </HeaderContent>
    </Container>
  );
}

const Container = styled.header`
  height: 60px;
  background: coral;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const HeaderContent = styled.div`
  max-width: 1280px;
  width: 1280px;
  height: inherit;
  background: blueviolet;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-weight: 300;
    font-size: 24px;
  }
`;

const SearchButton = styled(MdSearch)`
  font-size: 36px;
  cursor: pointer;
`;

const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    opacity: 0;
    width: 0;
    .active {
      opacity: 1;
      width: auto;
    }
  }
`;

export default Header;
