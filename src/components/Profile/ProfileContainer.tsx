import { styled } from 'styled-components';
import UserInfoBox from './UserInfoBox';
import KeyContainer from './KeyContainer';

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 880px;
  max-height: 270px;
  padding-left: 40px;
  box-sizing: border-box;
  display: flex;
  gap: 20px;
  position: absolute;
  bottom: 0;
  @media (max-width: 599px) {
    padding: 0;
  }
`;

const InfoWrapper = styled.div`
  width: 456px;
  height: 102px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  position: absolute;
  left: 40px;
  bottom: 48px;
  @media (max-width: 599px) {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 2vh;
    align-items: center;
  }
`;

const TabWrapper = styled.div`
  width: 74px;
  height: 28px;
  gap: 4px;
  position: absolute;
  left: 40px;
  bottom: -3px;
  display: flex;
  flex-direction: column;
  @media (max-width: 599px) {
    display: none;
  }
`;

const TabText = styled.div`
  color: #303646;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
`;

const TabIndicator = styled.div`
  width: 74px;
  height: 2px;
  background: #303646;
`;

const ProfileContainer = () => {
  return (
    <Container>
      <InfoWrapper>
        <UserInfoBox></UserInfoBox>
        <KeyContainer></KeyContainer>
      </InfoWrapper>
      <TabWrapper>
        <TabText>포트폴리오</TabText>
        <TabIndicator />
      </TabWrapper>
    </Container>
  );
};

export default ProfileContainer;
