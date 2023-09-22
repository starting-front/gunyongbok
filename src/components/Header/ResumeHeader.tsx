// CSS
import styled from "styled-components";

const HeaderWrapper = styled.div<{ $paddingBottom?: string }>`
  margin-bottom: 40px;
  box-sizing: border-box;
  padding-top: ${(props) => props.$paddingBottom}px;
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
  paddingBottom?: string;
}
const ResumeHeader = (props: Props) => {
  return (
    <HeaderWrapper $paddingBottom={props.paddingBottom}>
      <MainTitle>{props.MainTitle}</MainTitle>
      <SubTitle>{props.SubTitle}</SubTitle>
    </HeaderWrapper>
  );
};

export default ResumeHeader;
