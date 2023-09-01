import { useState } from "react";

// CSS
import styled from "styled-components";

// Components
import FiledJob from "../../Card/FiledJob";

const ResumeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 47px;
`;

const ResumeMainTitle = styled.div`
  display: flex;
  padding: 6px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #8644ff;
  color: white;
  font-weight: 600;
  font-size: 11px;
`;

const ResumeSubTitle = styled.div`
  color: #8644ff;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px;
`;

const ResumeLabel = styled.label`
  display: block;
  margin: 20px 0px 8px 0px;
  color: #303646;
  font-family: Pretendard;
  font-size: 11px;
  font-weight: 400;
  line-height: 12px;
`;

const ResumeInput = styled.input`
  width: 100%;
  height: 46px;
  padding: 12px 12px 12px 16px;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px solid #626e8e;

  &:hover,
  &:focus {
    border: 1px solid #8644ff;
    outline: none;
  }

  &.email,
  &.tel {
    width: 75%;
  }
`;

const ResumeTextarea = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 12px 12px 12px 16px;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px solid #626e8e;
  resize: none;

  &:hover,
  &:focus {
    border: 1px solid #8644ff;
    outline: none;
  }
`;

const ToggleContainer = styled.div<{ $isPublic?: boolean }>`
  display: inline-block;
  position: relative;
  width: 55px;
  height: 25px;
  background-color: ${(props) => (props.$isPublic ? "#8644FF" : "#ccc")};
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.2s;
  padding: 3px 2px;
`;

const ToggleSwitch = styled.div<{ $isPublic?: boolean }>`
  position: absolute;
  left: ${(props) => (props.$isPublic ? "30px" : "3px")};
  width: 24px;
  height: 24px;
  background-color: #fff;
  border-radius: 50%;
  transition: 0.2s;
`;

const ResumeSetProfileForm = () => {
  const [isPublicEmail, setIsPublicEmail] = useState(false);
  const [isPublicTel, setisPublicTel] = useState(false);

  const togglePublicEmailBtn = () => setIsPublicEmail((prev) => !prev);
  const togglePublicTelBtn = () => setisPublicTel((prev) => !prev);

  return (
    <form>
      <ResumeContainer>
        <ResumeMainTitle>개인정보 보호</ResumeMainTitle>
        <ResumeSubTitle>
          비공개 정보는 다른 사용자에게 보이지 않습니다.
        </ResumeSubTitle>
      </ResumeContainer>
      <ResumeLabel>이름</ResumeLabel>
      <ResumeInput placeholder="이름을 입력해 주세요" />

      <ResumeLabel>이메일</ResumeLabel>
      <ResumeInput placeholder="이메일을 입력해 주세요" className="email" />

      <span>
        {isPublicEmail ? "공개" : "비공개"}
        <ToggleContainer
          $isPublic={isPublicEmail}
          onClick={togglePublicEmailBtn}
        >
          <ToggleSwitch $isPublic={isPublicEmail} />
        </ToggleContainer>
      </span>

      <ResumeLabel>휴대폰 번호</ResumeLabel>
      <ResumeInput placeholder="휴대폰 번호를 입력해 주세요" className="tel" />
      <span>
        {isPublicTel ? "공개" : "비공개"}
        <ToggleContainer $isPublic={isPublicTel} onClick={togglePublicTelBtn}>
          <ToggleSwitch $isPublic={isPublicTel} />
        </ToggleContainer>
      </span>

      <ResumeLabel>분야 / 직무</ResumeLabel>
      <FiledJob />
      <ResumeLabel>소개글</ResumeLabel>
      <ResumeTextarea placeholder="나를 잘 표현하는 멋진 소개문구를 적어주세요" />
      <ResumeLabel>키워드 (최대 5개 입력)</ResumeLabel>
      <ResumeInput placeholder="나를 잘 나타내는 핵심 키워드를 입력해보세요 (최대5개)" />
    </form>
  );
};

export default ResumeSetProfileForm;
