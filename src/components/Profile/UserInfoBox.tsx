import { styled } from "styled-components";

const InfoBox = styled.div`
  width: 100%;
  height: 66px;
  display: flex;
  max-width: 456px;
  flex-direction: column;
  gap: 8px;
  @media (max-width: 599px) {
    align-items: center;
  }
`;

const NameBox = styled.div`
  width: fit-content;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const NameContent = styled.div`
  color: #050505;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  width: fit-content;
  height: 100%;
`;

const IntroduceText = styled.div`
  color: #050505;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  width: fit-content;
`;

// 수정 예정
const SnsInfo = styled.div`
  width: fit-content;
  gap: 12px;
  display: flex;
`;

// 수정 예정
const SnsBtn = styled.div`
  color: #49526a;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;

const UserInfoBox = () => {
  return (
    <InfoBox>
      <NameBox>
        <NameContent>홍길동</NameContent>
        <NameContent>IT / UXUI 디자인</NameContent>
      </NameBox>
      <IntroduceText>
        안녕하세요. 저는 프론트 디자이너입니다. 잘 부탁드립니다.
      </IntroduceText>
      <SnsInfo>
        <SnsBtn>이메일</SnsBtn>
        <SnsBtn>연락처</SnsBtn>
        <SnsBtn>SNS</SnsBtn>
      </SnsInfo>
    </InfoBox>
  );
};

export default UserInfoBox;
