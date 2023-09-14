import { styled } from "styled-components";
import UserInfoBox from "./UserInfoBox";
import KeyContainer from "./KeyContainer";

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
    bottom: 8vh;
    align-items: center;
  }
`;

const TabContainer = styled.div`
  display: flex;
  align-items: end;
  position: absolute;
  bottom: -2px;
  width: 100%;
  height: 30px;
  gap: 16px;
  box-sizing: border-box;
  @media (max-width: 599px) {
    padding-left: 16px;
  }
`;

const TabWrapper = styled.div`
  width: 74px;
  height: 28px;
  gap: 4px;
  display: flex;
  flex-direction: column;
`;

const TabText = styled.div`
  color: #303646;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
`;

const TabWrapper1 = styled.div`
  width: 74px;
  height: 28px;
  gap: 4px;
  display: flex;
  flex-direction: column;
`;

// 포트폴리오 , 피드백 보기 버튼 활성화 시킬때 분리하고 재사용 컴포넌트로 구성 예정 - 1
const TabText1 = styled.div`
  color: #b3bacb;
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
        <UserInfoBox />
        <KeyContainer />
      </InfoWrapper>
      <TabContainer>
        <TabWrapper>
          <TabText>포트폴리오</TabText>
          <TabIndicator />
        </TabWrapper>
        <TabWrapper1>
          <TabText1>피드백보기</TabText1>
        </TabWrapper1>
      </TabContainer>
    </Container>
  );
};

export default ProfileContainer;
