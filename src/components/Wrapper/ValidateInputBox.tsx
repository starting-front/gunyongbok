import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface BoxProps {
    children: ReactNode;
}

const Box = styled.div`
    width: 328px;
    height: 48px;
    display: flex;
    gap: 8px;
`;

const ValidateInputBox = ({ children }: BoxProps) => {
    return <Box>{children}</Box>;
};

export default ValidateInputBox;
