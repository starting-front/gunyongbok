import { styled } from "styled-components";

// Header
import Header from "../../components/Header/Header";

// User Info
import ProfileWrapper from "../../components/Wrapper/Portfolio/ProfileWrapper";
import { useRef, useState } from "react";

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1280px;
  max-height: 720px;
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

const PortfolioWrapper = styled.div`
  width: 100%;
  max-width: 880px;
  max-height: 310px;
  padding: 32px 40px;
  box-sizing: border-box;
  gap: 20px;
  border-radius: 12px;
  border: 1px solid #ccd0dc;
  background: #fff;
  overflow: auto;
  @media (max-width: 599px) {
    width: 100vw;
    height: 100%;
    max-height: calc(100vh - 314px);
  }
`;

// 개발용
const DemoList = styled.div`
  width: 100%;
  max-width: 800px;
  height: 226px;
  background-color: yellowgreen;
  @media (max-width: 599px) {
    height: 200vh;
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
      <ProfileWrapper />
      <PortfolioWrapper ref={portfolioWrapperRef} onScroll={handleScroll}>
        <DemoList></DemoList>
        <DemoList></DemoList>
      </PortfolioWrapper>
    </TopContainer>
  );
};

export default Portfolio;
