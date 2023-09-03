import React, { useState } from "react";

// CSS
import styled from "styled-components";

// Components
import FiledJob from "../../Card/FiledJob";

const ResumeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 47px 0 20px 0;
`;

const ResumeForm = styled.form`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 20px;
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
    width: 85%;
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

const ResumIntroduceTextLength = styled.span<{ $legnthExceed?: boolean }>`
  position: absolute;
  color: ${(props) => (props.$legnthExceed ? "red" : "#303646")};
  bottom: 20px;
  right: 25px;
`;

const ToggleContainer = styled.div<{ $isPublic?: boolean }>`
  position: relative;
  width: 52px;
  height: 20px;
  background-color: ${(props) => (props.$isPublic ? "#8644FF" : "#F7F7F7")};
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.1) inset;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.2s;
  padding: 3px 2px;
  display: flex;
`;

const ToggleSwitch = styled.div<{ $isPublic?: boolean }>`
  position: absolute;
  left: ${(props) => (props.$isPublic ? "30px" : "3px")};
  bottom: 3px;
  width: 20px;
  height: 20px;
  background-color: ${(props) => (props.$isPublic ? "white" : "#8644FF")};
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.1) inset;
  border-radius: 50%;
  transition: 0.2s;
`;

const ResumText = styled.span`
  color: #49526a;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`;

const ResumFooter = styled.div`
  width: 100%;
  height: 80px;
  padding: 20px 200px;
  box-sizing: border-box;
  background-color: #8644ff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 250px;
`;

const ResumFooterTitle = styled.div`
  width: 226px;
  height: 44px;
  adding: 14px 0px;
  cursor: pointer;
  background-color: white;
  border-radius: 56px;
  color: #8644ff;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ResumeSetProfileForm = () => {
  const [isPublicEmail, setIsPublicEmail] = useState(true);
  const [isPublicTel, setisPublicTel] = useState(false);
  const [legnthExceed, setLengthExceed] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [introduce, setIntroduce] = useState("");
  const [myKeywords, setMyKeywords] = useState([""]);

  // 이메일 퍼블릭 버튼
  const togglePublicEmailBtn = () => setIsPublicEmail((prev) => !prev);
  // 전화번호 퍼블릭 버튼
  const togglePublicTelBtn = () => setisPublicTel((prev) => !prev);

  const hasUpdateIntroduce = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setIntroduce(value);
    if (value.length > 30) {
      setLengthExceed(true);
    } else {
      setLengthExceed(false);
    }
  };

  return (
    <>
      <ResumeForm>
        <ResumeContainer>
          <ResumeMainTitle>개인정보 보호</ResumeMainTitle>
          <ResumeSubTitle>
            비공개 정보는 다른 사용자에게 보이지 않습니다.
          </ResumeSubTitle>
        </ResumeContainer>
        <ResumeLabel>이름</ResumeLabel>
        <ResumeInput placeholder="이름을 입력해 주세요" />

        <ResumeLabel>이메일</ResumeLabel>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ResumeInput placeholder="이메일을 입력해 주세요" className="email" />
          <div style={{ display: "flex" }}>
            <ResumText>{isPublicEmail ? "공개" : "비공개"} </ResumText>
            <ToggleContainer
              $isPublic={isPublicEmail}
              onClick={togglePublicEmailBtn}
            >
              <ToggleSwitch $isPublic={isPublicEmail} />
            </ToggleContainer>
          </div>
        </div>

        <ResumeLabel>휴대폰 번호</ResumeLabel>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ResumeInput
            placeholder="휴대폰 번호를 입력해 주세요"
            className="tel"
          />
          <div style={{ display: "flex" }}>
            <ResumText>{isPublicTel ? "공개" : "비공개"}</ResumText>
            <ToggleContainer
              $isPublic={isPublicTel}
              onClick={togglePublicTelBtn}
            >
              <ToggleSwitch $isPublic={isPublicTel} />
            </ToggleContainer>
          </div>
        </div>

        <ResumeLabel>분야 / 직무</ResumeLabel>
        <FiledJob />
        <ResumeLabel>소개글</ResumeLabel>
        <div className="introduce" style={{ position: "relative" }}>
          <ResumeTextarea
            placeholder="나를 잘 표현하는 멋진 소개문구를 적어주세요"
            onChange={hasUpdateIntroduce}
          />
          <ResumIntroduceTextLength $legnthExceed={legnthExceed}>
            ({introduce.length}/30)
          </ResumIntroduceTextLength>
        </div>
        <ResumeLabel>키워드 (최대 5개 입력)</ResumeLabel>
        <ResumeInput placeholder="나를 잘 나타내는 핵심 키워드를 입력해보세요 (최대5개)" />
      </ResumeForm>
      <ResumFooter>
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <ResumFooterTitle>포트폴리오 업로드하러가기</ResumFooterTitle>
        </div>
      </ResumFooter>
    </>
  );
};

export default ResumeSetProfileForm;
