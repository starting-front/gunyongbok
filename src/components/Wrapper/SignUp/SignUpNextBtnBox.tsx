import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface BoxProps {
  children: ReactNode;
}

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 96px;
  padding: 24px 0px;
  box-sizing: border-box;
  position: relative;
  bottom: 0;
  background-color: rgba(255, 255, 255);
`;

const SignUpNextBtnBox = ({ children }: BoxProps) => {
  return <Box>{children}</Box>;
};

export default SignUpNextBtnBox;
