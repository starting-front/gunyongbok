import { styled } from 'styled-components';

// Header
import Header from '../../components/Header/Header';

// User Info
import ProfileColorBox from '../../components/Profile/ProfileColorBox';
import ProfileContainer from '../../components/Profile/ProfileContainer';

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

const ProfileWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 880px;
  max-height: 310px;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 13px;
  border: 1px solid #ccd0dc;
  background: #fff;
  margin-bottom: 2vh;
  @media (max-width: 599px) {
    width: 100%;
    max-height: 314px;
    border-radius: 0;
    margin-bottom: 0;
  }
`;

const ProfileImg = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background-color: gray;
  position: absolute;
  top: 40px;
  left: 40px;
  z-index: 2;
  @media (max-width: 599px) {
    top: 23%;
    left: 36%;
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
  return (
    <TopContainer>
      <Header />
      <ProfileWrapper>
        <ProfileImg />
        <ProfileColorBox />
        <ProfileContainer />
      </ProfileWrapper>
      <PortfolioWrapper>
        <DemoList></DemoList>
        <DemoList></DemoList>
      </PortfolioWrapper>
    </TopContainer>
  );
};

export default Portfolio;
