import { styled } from "styled-components";
import UserInfoBox from "../../components/Profile/UserInfoBox";
import KeyContainer from "../../components/Profile/KeyContainer";

const ScrollProfileWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 139px;
  display: flex;
  flex-direction: column;
  position: relative;
  background: #fff;
  @media (max-width: 599px) {
    display: none;
  }
`;

const ProfileBox = styled.div`
  width: 100%;
  height: 90px;
  max-width: 1280px;
  display: flex;
  padding: 24px 200px 0px 200px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: flex-start;
`;

const TabWrapper = styled.div`
  width: 74px;
  height: 28px;
  gap: 4px;
  position: absolute;
  left: 200px;
  bottom: -3px;
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

const TabIndicator = styled.div`
  width: 74px;
  height: 2px;
  background: #303646;
`;

const ScrolledProfileWrapper = () => {
  return (
    <ScrollProfileWrapper>
      <ProfileBox>
        <UserInfoBox />
        <KeyContainer />
      </ProfileBox>
      <TabWrapper>
        <TabText>포트폴리오</TabText>
        <TabIndicator />
      </TabWrapper>
    </ScrollProfileWrapper>
  );
};

export default ScrolledProfileWrapper;
