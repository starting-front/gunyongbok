import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface HeaderProps {
    children: ReactNode;
    marginbottom?: string;
}

const Header = styled.header<HeaderProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-bottom: ${(props) => props.marginbottom || '0'};
`;

const SignInHeader = ({ children, marginbottom }: HeaderProps) => {
    return <Header marginbottom={marginbottom}>{children}</Header>;
};

export default SignInHeader;
