import { ReactNode } from "react";
import { styled } from "styled-components";

interface BoxProps {
  children: ReactNode;
}

const Box = styled.div`
  width: 360px;
  height: 104px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const SignUpAgreeBox = ({ children }: BoxProps) => {
  return <Box>{children}</Box>;
};

export default SignUpAgreeBox;
