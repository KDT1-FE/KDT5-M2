import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { colors } from "src/lib/styles/colors";

// Component
function Header() {
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
      scrollRef.current.style.background = `${colors.gray[9]}`;
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

const GithubButton = styled(FaGithub)`
  font-size: 36px;
  color: ${colors.gray[7]};
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${colors.gray[0]};
  }
`;

export default Header;
