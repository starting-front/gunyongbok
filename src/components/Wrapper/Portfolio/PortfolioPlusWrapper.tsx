import styled from "styled-components";
import Plus from "../../../assets/plusBtn.svg";

const Container = styled.div`
  width: 255px;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 599px) {
    width: 100%;
  }
`;

const PlusBox = styled.div`
  width: 256px;
  height: 192px;
  background: #e2e4eb;
  border: 0;
  border-radius: 4px;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 599px) {
    width: 100%;
  }
`;

const DateBox = styled.div`
  width: fit-content;
  color: #626e8e;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 4px;
`;

const TitleBox = styled.div`
  width: fit-content;
  color: #050505;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

const PortfolioPlusWrapper = () => {
  return (
    <Container>
      <PlusBox>
        <img src={Plus} alt="plus" />
      </PlusBox>
      <DateBox>0000.00.00</DateBox>
      <TitleBox>포트폴리오를 업로드 해주세요</TitleBox>
    </Container>
  );
};

export default PortfolioPlusWrapper;
