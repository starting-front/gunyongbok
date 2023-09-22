import React from "react";
import { styled } from "styled-components";
import TeamLogo from "../../assets/logo.svg";
import NewsLogo from "../../assets/breaking_news.svg";
import ProfileLogo from "../../assets/account_circle.svg";

interface HeaderProps {
  $maxWidth?: string;
}

const HeaderMain = styled.div<HeaderProps>`
  width: 100%;
  max-width: ${(props) => props.$maxWidth || "880px"};
  height: 100%;
  max-height: 80px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding-top: 24px;
  box-sizing: border-box;
  @media (max-width: 599px) {
    display: none;
  }
`;

const BtnBox = styled.div`
  display: flex;
  width: fit-content;
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

const Header: React.FC<HeaderProps> = ({ $maxWidth }) => {
  return (
    <HeaderMain $maxWidth={$maxWidth}>
      <img src={TeamLogo} alt="Team Logo" />
      <BtnBox>
        <SubBtnBox>
          <img src={NewsLogo} alt="News Logo" />
          <TextBox>내 이력서 편집하기</TextBox>
        </SubBtnBox>
        <SubBtnBox>
          <img src={ProfileLogo} alt="Profile Logo" />
          <TextBox>마이페이지</TextBox>
        </SubBtnBox>
      </BtnBox>
    </HeaderMain>
  );
};

export default Header;
