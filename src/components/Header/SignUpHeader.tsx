import { styled } from "styled-components";
import HeaderTitle from "../../commons/Title/SignUp/HeaderTitle";
import PageBackBtn from "../../commons/Button/PageBackBtn";
import BackArrow from "../../assets/leftArrow.svg";

const HeaderContainer = styled.header`
  width: 100%;
  height: 105px;
  display: flex;
  justify-content: center;
  padding: 40px 40px 0px 40px;
  box-sizing: border-box;
  position: relative;
  top: 0;
  border-bottom: 1px solid #e2e4eb;
  z-index: 1;
  background-color: rgba(255, 255, 255);
`;

const SignUpHeader = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>
        <PageBackBtn src={BackArrow} alt="pageback" />
        회원가입
      </HeaderTitle>
    </HeaderContainer>
  );
};

export default SignUpHeader;
