import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface BoxProps {
    children: ReactNode;
}

const Box = styled.div`
    width: 360px;
    height: 104px;
    padding: 0px 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`;

const SignUpAgreeBox = ({ children }: BoxProps) => {
    return <Box>{children}</Box>;
};

export default SignUpAgreeBox;
