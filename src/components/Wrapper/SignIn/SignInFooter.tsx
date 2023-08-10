import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface FooterProps {
    children: ReactNode;
}

const Footer = styled.div`
    width: 328px;
    height: 30px;
    display: flex;
    align-items: center;
    gap: 5px;
`;

const SignInFooter = ({ children }: FooterProps) => {
    return <Footer>{children}</Footer>;
};

export default SignInFooter;
