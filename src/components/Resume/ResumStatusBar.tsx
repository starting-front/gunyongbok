import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  position: relative;
  font-family: Pretendard;
`;

const Line = styled.div`
  height: 3px;
  background-color: #e2e4eb;
  margin: 0 auto;
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

const ResumStatusBar = () => {
  return (
    <HeaderContainer>
      <Line />
      <CircleContainer>
        <Circle>1</Circle>
        <Circle>2</Circle>
      </CircleContainer>
      <ResumStatusProfileContainer>
        <ResumStatusProfileText>내 프로필 설정</ResumStatusProfileText>
        <ResumStatusProfileText>포트폴리오 업로드</ResumStatusProfileText>
      </ResumStatusProfileContainer>
    </HeaderContainer>
  );
};

export default ResumStatusBar;
