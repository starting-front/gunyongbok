import { ReactNode } from "react";
import { styled } from "styled-components";

interface ContainerProps {
  children: ReactNode;
}

const Container = styled.div`
  width: 100%;
  height: 690px;
  padding: 16px 40px 24px 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  background: #fff;
  overflow: auto;
  position: relative;
`;

const SignUpContainer = ({ children }: ContainerProps) => {
  return <Container>{children}</Container>;
};

export default SignUpContainer;
