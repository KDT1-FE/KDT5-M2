import { colors } from "src/lib/styles/colors";
import styled from "styled-components";
import { MdHideImage } from "react-icons/md";

function NonImage() {
  return (
    <ImageBox>
      <MdHideImage />
      <span>이미지가 없습니다</span>
    </ImageBox>
  );
}

const ImageBox = styled.div`
  width: 300px;
  height: 450px;
  background: ${colors.lime[4]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  svg {
    color: ${colors.red[5]};
    font-size: 24px;
  }
  span {
    font-size: 18px;
    font-weight: 500;
  }
`;

export default NonImage;
