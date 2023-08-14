import { styled } from 'styled-components';

// Header
import Header from '../../components/Header/Header';
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
`;

const Portfolio = () => {
  return (
    <TopContainer>
      <Header />
      <ProfileWrapper>
        <ProfileColorBox />
        <ProfileContainer />
      </ProfileWrapper>
    </TopContainer>
  );
};

export default Portfolio;
