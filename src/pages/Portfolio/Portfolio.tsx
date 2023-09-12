import { styled } from "styled-components";
import { useRef, useState } from "react";

// Header
import Header from "../../components/Header/PortfolioHeader";

// User Info
import ProfileWrapper from "../../components/Wrapper/Portfolio/ProfileWrapper";
import ScrolledProfileWrapper from "./ScrolledProfileWrapper";

import Data from "../../components/Wrapper/Portfolio/portFolioData";

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 599px) {
    width: 100%;
    max-height: 100vh;
  }
`;

interface PortfolioWrapperProps {
  $scroll: boolean | string;
}

const PortfolioWrapper = styled.div<PortfolioWrapperProps>`
  width: 100%;
  max-width: 880px;
  padding: 32px 33px;
  box-sizing: border-box;
  gap: 20px;
  border-radius: 12px;
  border: 1px solid #ccd0dc;
  background: #fff;
  overflow: auto;
  display: flex;
  flex-direction: column;
  height: ${({ $scroll }) => ($scroll ? "600px" : "310px")};
  @media (max-width: 599px) {
    width: 100vw;
    height: ${({ $scroll }) => ($scroll ? "100vh" : "calc(100vh - 314px)")};
    padding: 5% 4%;
    border-radius: 0;
  }
`;

const PortfilioTitle = styled.div`
  color: #303646;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
`;

// 분리
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

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  max-width: 800px;
  @media (max-width: 599px) {
    width: 100%;
  }
`;

const Portfolio = () => {
  const portfolioWrapperRef = useRef<HTMLDivElement | null>(null);
  const [scroll, setScroll] = useState<boolean>(false);

  const handleScroll = () => {
    const scrollTop = portfolioWrapperRef.current?.scrollTop || 0;
    if (scrollTop === 0) {
      setScroll(false);
    } else {
      setScroll(true);
    }
  };

  console.log(scroll);
  return (
    <TopContainer>
      <Header />
      {scroll ? <ScrolledProfileWrapper /> : <ProfileWrapper />}
      <PortfolioWrapper
        ref={portfolioWrapperRef}
        onScroll={handleScroll}
        $scroll={scroll ? "true" : "false"}
      >
        <PortfilioTitle>제 포트폴리오에요</PortfilioTitle>
        <Wrapper>
          {Data.map((item) => (
            <Container key={item.id}>
              <ImgBox src={item.img.Apple} alt="Portfolio Image" />
              <DateBox>{item.date}</DateBox>
              <TitleBox>{item.title}</TitleBox>
            </Container>
          ))}
        </Wrapper>
      </PortfolioWrapper>
    </TopContainer>
  );
};

export default Portfolio;
