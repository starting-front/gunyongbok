import { styled } from 'styled-components';

interface TitleProps {
    children: String;
}

const Title = styled.div`
    color: #050505;
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
`;

const MainTitle = ({ children }: TitleProps) => {
    return <Title>{children}</Title>;
};

export default MainTitle;
