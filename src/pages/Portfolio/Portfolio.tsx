import { styled } from "styled-components";
import { useRef, useState } from "react";

// Header
import Header from "../../components/Header/PortfolioHeader";
import ScrollHeader from "../../components/Header/PortfolioScrollHeader";

// User Info
import ProfileWrapper from "../../components/Wrapper/Portfolio/ProfileWrapper";
import ScrolledProfileWrapper from "./ScrolledProfileWrapper";

// Portfolio
import PortfolioContent from "../../components/Wrapper/Portfolio/PortfolioContent";

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
  height: ${({ $scroll }) => ($scroll ? "600px" : "310px")};
  padding: 32px 40px;
  box-sizing: border-box;
  gap: 20px;
  border-radius: ${({ $scroll }) => ($scroll === "true" ? "0" : "12px")};
  border: 1px solid #ccd0dc;
  background: #fff;
  overflow: auto;
  display: flex;
  flex-direction: column;
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

  return (
    <TopContainer>
      {scroll ? <ScrollHeader /> : <Header />}
      {scroll ? <ScrolledProfileWrapper /> : <ProfileWrapper />}
      <PortfolioWrapper
        ref={portfolioWrapperRef}
        onScroll={handleScroll}
        $scroll={scroll ? "true" : "false"}
      >
        <PortfilioTitle>제 포트폴리오에요</PortfilioTitle>
        <PortfolioContent />
      </PortfolioWrapper>
    </TopContainer>
  );
};

export default Portfolio;
