import { styled } from 'styled-components';
import TeamLogo from '../../assets/logo.svg';
import NewsLogo from '../../assets/breaking_news.svg';
import ProfileLogo from '../../assets/account_circle.svg';

const HeaderBox = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  max-height: 80px;
  padding: 24px 200px 0px 200px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
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
  color: #050505;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

const Header = () => {
  return (
    <HeaderBox>
      <img src={TeamLogo} />
      <BtnBox>
        <SubBtnBox>
          <img src={NewsLogo} />
          <TextBox>내 이력서</TextBox>
        </SubBtnBox>
        <SubBtnBox>
          <img src={ProfileLogo} />
          <TextBox>마이페이지</TextBox>
        </SubBtnBox>
      </BtnBox>
    </HeaderBox>
  );
};

export default Header;
