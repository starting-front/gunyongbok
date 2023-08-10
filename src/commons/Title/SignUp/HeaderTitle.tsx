import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface TitleProps {
    children: ReactNode;
}

const Title = styled.div`
    width: 360px;
    height: 64px;
    padding: 20px 16px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #050505;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    background: rgba(255, 255, 255, 0.8);
`;

const HeaderTitle = ({ children }: TitleProps) => {
    return <Title>{children}</Title>;
};

export default HeaderTitle;
