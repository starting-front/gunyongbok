// lib
import { HiArrowLeft } from "react-icons/hi";
import {
  MobileResumStatusBar,
  PcResumeStatusBar,
} from "../../MediaQuery/useMediaQuery";

// CSS
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  position: relative;
  font-family: Pretendard;
  margin: 50px auto;
  
  }
`;

const Line = styled.div`
  height: 3px;
  background-color: #e2e4eb;
`;

const CircleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  position: absolute;
  left: 0;
  top: -15px;
`;

const Circle = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8644ff;
  border-radius: 100%;
  color: white;
  font-size: 12px;
  font-weight: bold;
  border: 4px solid white;
`;

const Circle2 = styled(Circle)<{ $backgroundColor?: string }>`
  background-color: ${(props) =>
    props.$backgroundColor === "1" ? "#B3BACB" : "#8644ff"};
`;

const ResumStatusProfileContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const ResumStatusProfileText = styled.div`
  color: #626e8e;
  font-size: 12px;
  line-height: 12px;
`;

const ResumeMobileFlex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  right: 0;
  left: 0;
  max-width: 1024px;
  background-color: white;
  z-index: 10;
`;

const ResumeNextBtn = styled.button<{ $activityBtn: boolean }>`
  color: #8644ff;
  font-size: 17px;
  line-height: 22px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  opacity: ${(props) => (props.$activityBtn ? "1" : "0.5")};
`;

const ResumeLine = styled.div<{ $MobileLineWidth: string }>`
  height: 5px;
  background-color: #e7daff;
  position: fixed;
  top: 60px;
  right: 0;
  left: 0;
  z-index: 10;

  &::before {
    display: block;
    content: "";
    width: ${(props) => props.$MobileLineWidth};
    background-color: #8644ff;
    height: 4px;
    top: 3px;
  }
`;

const ResumStatusBar = ({
  background,
  MobileLineWidth,
  activityBtn,
}: {
  background: string;
  MobileLineWidth: string;
  activityBtn: boolean;
}) => {
  return (
    <>
      <PcResumeStatusBar>
        <HeaderContainer>
          <Line />
          <CircleContainer>
            <Circle>1</Circle>
            <Circle2 $backgroundColor={background}>2</Circle2>
          </CircleContainer>
          <ResumStatusProfileContainer>
            <ResumStatusProfileText>내 프로필 설정</ResumStatusProfileText>
            <ResumStatusProfileText>포트폴리오 업로드</ResumStatusProfileText>
          </ResumStatusProfileContainer>
        </HeaderContainer>
      </PcResumeStatusBar>
      <MobileResumStatusBar>
        <ResumeMobileFlex>
          <div
            style={{
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            <HiArrowLeft style={{ cursor: "pointer", fontSize: "18px" }} />
            <span style={{ marginLeft: "8px" }}>내 프로필 설정</span>
          </div>
          <div>
            <ResumeNextBtn
              $activityBtn={activityBtn}
              disabled={!activityBtn}
              onClick={() => console.log(1)}
            >
              다음
            </ResumeNextBtn>
          </div>
        </ResumeMobileFlex>
        <ResumeLine $MobileLineWidth={MobileLineWidth} />
      </MobileResumStatusBar>
    </>
  );
};

export default ResumStatusBar;
