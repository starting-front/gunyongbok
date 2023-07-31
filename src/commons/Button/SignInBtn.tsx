import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

interface BtnProps {
    children: ReactNode;
    background: string;
    color: string;
    navigatePath?: string;
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

const SignInBtn = ({ background, color, children, navigatePath }: BtnProps) => {
    const navigate = useNavigate();

    const MoveToSignUp = () => {
        if (navigatePath) {
            navigate(navigatePath);
        }
    };
    return (
        <Btn onClick={MoveToSignUp} background={background} color={color}>
            {children}
        </Btn>
    );
};

export default SignInBtn;
