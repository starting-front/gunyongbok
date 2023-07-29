import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface ContainerProps {
    children: ReactNode;
}

const InputContainer = styled.div`
    width: 328px;
    height: 164px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
`;

const SignInInputContainer = ({ children }: ContainerProps) => {
    return <InputContainer>{children}</InputContainer>;
};

export default SignInInputContainer;
