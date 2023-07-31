import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface ContainerProps {
    children: ReactNode;
}

const Container = styled.div`
    width: 440px;
    height: 900px;
    padding: 16px 40px 120px 40px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    background: #fff;
`;

const SignUpContainer = ({ children }: ContainerProps) => {
    return <Container>{children}</Container>;
};

export default SignUpContainer;
