import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

interface IconProps {
  src: string;
  alt?: string;
  path: string;
}

const BackBtn = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 56px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const BackIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const PageBackBtn = ({ src, alt, path }: IconProps) => {
  const navigate = useNavigate();
  return (
    <BackBtn onClick={() => navigate(path)}>
      <BackIcon src={src} alt={alt} />
    </BackBtn>
  );
};

export default PageBackBtn;
