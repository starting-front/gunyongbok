import { styled } from "styled-components";
import UserInfoBox from "../../components/Profile/UserInfoBox";
import KeyContainer from "../../components/Profile/KeyContainer";

const ScrollProfileWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 139px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #fff;
  @media (max-width: 599px) {
    display: none;
  }
`;

const ScrollProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 880px;
  display: flex;
  flex-direction: column;
`;

const ProfileBox = styled.div`
  width: 100%;
  height: 90px;
  max-width: 880px;
  display: flex;
  padding-top: 24px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: flex-start;
`;

const SelectedContainer = styled.div`
  width: 100%;
  height: 90px;
  max-width: 880px;
  display: flex;
  padding-top: 24px;
  box-sizing: border-box;
  align-items: flex-start;
  gap: 16px;
`;

// 포트폴리오 , 피드백 보기 버튼 활성화 시킬때 분리하고 재사용 컴포넌트로 구성 예정
// 추후에 수정 예정
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

const ScrolledProfileWrapper = () => {
  return (
    <ScrollProfileWrapper>
      <ScrollProfileContainer>
        <ProfileBox>
          <UserInfoBox />
          <KeyContainer />
        </ProfileBox>
        <SelectedContainer>
          <TabWrapper>
            <TabText>포트폴리오</TabText>
            <TabIndicator />
          </TabWrapper>
          <TabWrapper>
            <TabText1>피드백보기</TabText1>
          </TabWrapper>
        </SelectedContainer>
      </ScrollProfileContainer>
    </ScrollProfileWrapper>
  );
};

export default ScrolledProfileWrapper;
