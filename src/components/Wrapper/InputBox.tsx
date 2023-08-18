import { ReactNode } from "react";
import { styled } from "styled-components";

interface BoxProps {
  children: ReactNode;
}

const StyledInputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputBox = ({ children }: BoxProps) => {
  return <StyledInputBox>{children}</StyledInputBox>;
};

export default InputBox;
