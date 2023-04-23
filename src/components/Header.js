import styled, { css } from "styled-components";
import { FaGithub } from "react-icons/fa";
import { colors } from "../lib/styles/colors";
import { useNavigate, Link } from "react-router-dom";

// Data
const categories = [
  {
    name: "검색",
    url: "/",
  },
  {
    name: "영화",
    url: "/movies",
  },
];

// Component
function Header({ category, onMenuSelect }) {
  // Hooks
  const navigate = useNavigate();

  // Function
  const goHome = () => {
    navigate("/");
  };

  // Render
  return (
    <HeaderContainer>
      <HeaderContent>
        <h1 onClick={goHome}>MovieApp</h1>
        <StyledNav>
          {categories.map((c) => (
            <StyledLink
              to={c.url}
              active={category === c.name}
              onClick={() => onMenuSelect(c.name)}
              key={c.name}
            >
              {c.name}
            </StyledLink>
          ))}
        </StyledNav>
        <Link to="https://github.com/KDT1-FE/KDT5-M2/tree/KDT5_KimPilJin">
          <GithubButton />
        </Link>
      </HeaderContent>
    </HeaderContainer>
  );
}

// Style
const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid ${colors.gray[7]};
  background: ${colors.gray[0]};
  position: fixed;
  top: 0;
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
    cursor: pointer;
  }
`;

const StyledNav = styled.nav`
  flex: 1;
  padding: 0 40px;
  display: flex;
  gap: 16px;
`;

const StyledLink = styled(Link)`
  padding: 10px 20px;
  cursor: pointer;
  font-size: 18px;
  color: ${colors.gray[6]};
  transition: all 0.2s ease-in-out;
  border-radius: 8px;
  &:hover {
    color: ${colors.gray[9]};
    background: ${colors.yellow[2]};
  }
  ${(props) =>
    props.active &&
    css`
      font-weight: 500;
      background: ${colors.yellow[5]};
      color: ${colors.gray[9]};
    `}
`;

const GithubButton = styled(FaGithub)`
  font-size: 36px;
  color: ${colors.gray[6]};
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${colors.gray[9]};
  }
`;

export default Header;
