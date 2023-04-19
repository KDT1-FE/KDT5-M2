import styled from "styled-components";
import colors from "../lib/styles/colors";

const Button = props => <StyledButton {...props} />

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.25rem 1rem;
  outline: none;
  cursor: pointer;
  background: ${colors.black.darker};
  color: #fff;
  &:hover {
    background: ${colors.black.lighter};
  }
`;

export default Button;
