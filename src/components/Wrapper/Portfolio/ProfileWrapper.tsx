import { styled } from "styled-components";
import ProfileColorBox from "../../Profile/ProfileColorBox";
import ProfileContainer from "../../Profile/ProfileContainer";

const Wrapper = styled.div`
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
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ProfileWrapper = () => {
  return (
    <Wrapper>
      <ProfileImg />
      <ProfileColorBox />
      <ProfileContainer />
    </Wrapper>
  );
};

export default ProfileWrapper;
