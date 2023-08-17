import { styled } from 'styled-components';

const Container = styled.div`
  width: fit-content;
  height: 24px;
  display: flex;
  gap: 8px;
`;

const SmallKey = styled.div`
  width: fit-content;
  height: 24px;
  padding: 6px 8px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: #8644ff;
  color: #fff;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
`;

const KeyContainer = () => {
  return (
    <Container>
      <SmallKey>#책임감</SmallKey>
      <SmallKey>#JAVASCRIPT</SmallKey>
      <SmallKey>#SQL</SmallKey>
    </Container>
  );
};

export default KeyContainer;
