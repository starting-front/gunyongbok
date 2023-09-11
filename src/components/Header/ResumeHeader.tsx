// CSS
import styled from "styled-components";

const HeaderWrapper = styled.div<{ profile?: boolean }>`
  margin-bottom: 40px;
  padding: 0 20px;
  box-sizing: border-box;
`;

const MainTitle = styled.div`
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  margin-bottom: 8px;
`;

const SubTitle = styled.div`
  color: ##303646;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

interface Props {
  MainTitle: string;
  SubTitle: string;
  profile?: boolean;
}
const ResumeHeader = (props: Props) => {
  return (
    <HeaderWrapper $profile={profile}>
      <MainTitle>{props.MainTitle}</MainTitle>
      <SubTitle>{props.SubTitle}</SubTitle>
    </HeaderWrapper>
  );
};

export default ResumeHeader;
