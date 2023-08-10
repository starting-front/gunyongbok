import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface LabelProps {
    children: ReactNode;
}

const StyledLabel = styled.label`
    width: 328px;
    height: 28px;
    box-sizing: border-box;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #303646;
    font-family: Pretendard;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
`;

const Label = ({ children }: LabelProps) => {
    return <StyledLabel>{children}</StyledLabel>;
};

export default Label;
