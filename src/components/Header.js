import { useState } from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";

// Styles
const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  background: coral;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 9999;
`;

const HeaderContent = styled.div`
  max-width: 1280px;
  width: 1280px;
  height: inherit;
  background: cornflowerblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-weight: 700;
    font-size: 24px;
  }
`;

const Search = styled.form`
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  svg {
    font-size: 32px;
  }
`;

const Input = styled.input`
  transition: all 0.4s ease-in-out;
  width: 0;
  visibility: hidden;
  height: 30px;
  border: none;
  border-radius: 4px;
  &.active {
    width: 150px;
    visibility: visible;
    margin-left: 8px;
  }
`;

// Component
function Header() {
  // Hooks
  const [searchOpen, setSearchOpen] = useState(false);

  // Function
  const onSearchAnimation = () => {
    setSearchOpen(!searchOpen);
  };

  // Render
  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>MovieApp</h1>
        <nav>
          <Search>
            <MdSearch onClick={onSearchAnimation} />
            <Input
              placeholder="영화를 입력하세요."
              className={searchOpen && "active"}
            />
          </Search>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
