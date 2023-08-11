import { styled } from 'styled-components';

interface TitleProps {
  text: string;
}

const Title = styled.div`
  color: #303646;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

const SubTitle = ({ text }: TitleProps) => {
  return <Title>{text}</Title>;
};

export default SubTitle;
