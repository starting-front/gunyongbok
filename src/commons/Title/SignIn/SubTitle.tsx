import { styled } from 'styled-components';

interface TitleProps {
    children: String;
}

const Title = styled.div`
    color: #303646;
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
`;

const SubTitle = ({ children }: TitleProps) => {
    return <Title>{children}</Title>;
};

export default SubTitle;
