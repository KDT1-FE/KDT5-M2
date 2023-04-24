import styled, { css } from "styled-components";
import { FaGithub } from "react-icons/fa";
import { colors } from "../../lib/styles/colors";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useRef } from "react";

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
  const scrollRef = useRef();

  // Function
  const goHome = () => {
    navigate("/");
  };

  const onScroll = () => {
    if (window.scrollY > 70) {
      scrollRef.current.style.background = "rgba(0, 0, 0, 0.7)";
    } else if (window.scrollY === 0) {
      scrollRef.current.style.background = colors.gray[9];
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.addEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  // Render
  return (
    <HeaderContainer ref={scrollRef}>
      <HeaderContent>
        <Logo onClick={goHome}>MovieApp</Logo>
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
  padding: 0 60px;
  background: ${colors.gray[9]};
  position: fixed;
  top: 0;
  z-index: 9999;
  transition: all 0.2s ease-in-out;
`;

const HeaderContent = styled.div`
  max-width: 1280px;
  width: 1280px;
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  @keyframes blink {
    50% {
      opacity: 0;
      transition: all 0.3s ease-in-out;
    }
  }
  font-weight: 300;
  font-size: 24px;
  cursor: pointer;
  color: ${colors.gray[0]};
  &:hover {
    animation: blink 1s infinite;
  }
`;

const StyledNav = styled.nav`
  flex: 1;
  padding: 0 40px;
  display: flex;
`;

const StyledLink = styled(Link)`
  padding: 10px 20px;
  cursor: pointer;
  font-size: 18px;
  color: ${colors.gray[6]};
  transition: all 0.2s ease-in-out;
  border-radius: 8px;
  &:hover {
    color: ${colors.lime[4]};
  }
  ${(props) =>
    props.active &&
    css`
      font-weight: 500;
      background: ${colors.lime[4]};
      color: ${colors.gray[9]};
      &:hover {
        color: ${colors.gray[9]};
      }
    `}
`;

const GithubButton = styled(FaGithub)`
  font-size: 36px;
  color: ${colors.gray[7]};
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${colors.gray[0]};
  }
`;

export default Header;
