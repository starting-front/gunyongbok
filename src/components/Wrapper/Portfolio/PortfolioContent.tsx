import { styled } from "styled-components";

import Data from "./portFolioData";

import PortfolioPlusWrapper from "./PortfolioPlusWrapper";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  max-width: 800px;
  @media (max-width: 599px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 255px;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 599px) {
    width: 100%;
  }
`;

const ImgBox = styled.img`
  width: 256px;
  height: 192px;
  border-radius: 4px;
  margin-bottom: 12px;
  @media (max-width: 599px) {
    width: 100%;
  }
`;

const DateBox = styled.div`
  width: fit-content;
  color: #626e8e;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 4px;
`;

const TitleBox = styled.div`
  width: fit-content;
  color: #050505;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

const PortfolioContent = () => {
  const isDataLongEnough = Data.length < 6;

  return (
    <Wrapper>
      {Data.map((item) => (
        <Container key={item.id}>
          <ImgBox src={item.img.Apple} alt="Portfolio Image" />
          <DateBox>{item.date}</DateBox>
          <TitleBox>{item.title}</TitleBox>
        </Container>
      ))}
      {isDataLongEnough && <PortfolioPlusWrapper />}
    </Wrapper>
  );
};

export default PortfolioContent;
