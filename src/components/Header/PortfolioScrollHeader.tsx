import { styled } from "styled-components";
import TeamLogo from "../../assets/logo.svg";
import NewsLogo from "../../assets/breaking_news_white.svg";
import ProfileLogo from "../../assets/account_circle_white.svg";

const TopContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 80px;
  padding: 24px 200px 0px 200px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  background: linear-gradient(91deg, #c89eff 0%, #ff89c2 118.52%);
  @media (max-width: 1280px) {
    padding: 24px 0 0 0;
  }
  @media (max-width: 599px) {
    display: none;
  }
`;

const HeaderMain = styled.div`
  width: 100%;
  max-width: 880px;
  height: 100%;
  max-height: 56px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 599px) {
    display: none;
  }
`;

const BtnBox = styled.div`
  display: flex;
  width: 181px;
  gap: 20px;
`;

const SubBtnBox = styled.div`
  width: fit-content;
  height: 56px;
  padding: 18px 0px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 20px;
  color: #fff;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

const ImgBox = styled.img`
  color: "#fff";
`;

const ScrollHeader = () => {
  return (
    <TopContainer>
      <HeaderMain>
        <ImgBox src={TeamLogo} />
        <BtnBox>
          <SubBtnBox>
            <ImgBox src={NewsLogo} />
            <TextBox>내 이력서</TextBox>
          </SubBtnBox>
          <SubBtnBox>
            <ImgBox src={ProfileLogo} />
            <TextBox>마이페이지</TextBox>
          </SubBtnBox>
        </BtnBox>
      </HeaderMain>
    </TopContainer>
  );
};

export default ScrollHeader;
