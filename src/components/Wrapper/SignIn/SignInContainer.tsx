import { ReactNode } from "react";
import { styled } from "styled-components";

interface ContainerProps {
  children: ReactNode;
  marginbottom?: string;
  height: string;
}

const InputContainer = styled.form<ContainerProps>`
  width: 328px;
  height: 164px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: ${(props) => props.marginbottom};
  height: ${(props) => props.height};
`;

const SignInContainer = ({
  children,
  marginbottom,
  height,
}: ContainerProps) => {
  return (
    <InputContainer height={height} marginbottom={marginbottom}>
      {children}
    </InputContainer>
  );
};

export default SignInContainer;
