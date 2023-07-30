import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface BtnProps {
    children: ReactNode;
    background: string;
    color: string;
}

const Btn = styled.button<BtnProps>`
    width: 328px;
    height: 48px;
    padding: 14px 0px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    border: none;
    background: ${(props) => props.background};
    color: ${(props) => props.color};
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
`;

const SignInBtn = ({ background, color, children }: BtnProps) => {
    return (
        <Btn background={background} color={color}>
            {children}
        </Btn>
    );
};

export default SignInBtn;
