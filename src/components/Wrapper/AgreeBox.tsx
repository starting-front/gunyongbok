import { ReactNode } from "react";
import { styled } from "styled-components";

interface AgreeBoxProps {
  padding?: string;
  fontSize?: string;
  border?: string;
  children: ReactNode;
}

const StyledBox = styled.div<AgreeBoxProps>`
  width: 328px;
  height: 56px;
  padding: ${(props) => props.padding || "12px 6px"};
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  border: ${(props) => props.border || "1px solid #ccd0dc"};
  color: #050505;
  font-family: Pretendard;
  font-size: ${(props) => props.fontSize || "14px"};
  font-weight: 600;
`;
const AgreeBox = ({ padding, fontSize, border, children }: AgreeBoxProps) => {
  return (
    <StyledBox padding={padding} fontSize={fontSize} border={border}>
      {children}
    </StyledBox>
  );
};

export default AgreeBox;
