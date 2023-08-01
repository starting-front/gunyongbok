import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface BoxProps {
    children: ReactNode;
}

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 440px;
    height: 96px;
    padding: 24px 0px;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    background: rgba(255, 255, 255, 0.5);
`;

const SignUpNextBtnBox = ({ children }: BoxProps) => {
    return <Box>{children}</Box>;
};

export default SignUpNextBtnBox;
