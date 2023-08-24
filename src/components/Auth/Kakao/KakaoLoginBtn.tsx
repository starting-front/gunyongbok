import { styled } from "styled-components";

import StandardBtn from "../../../commons/Button/StandardBtn";
import Logo from "../../../assets/kakakoLogo.svg";

const LogoBox = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const KakaoLoginBtn = () => {
  return (
    <StandardBtn color="#351C1B" background="#FBE54D">
      <LogoBox src={Logo} alt="logo" /> 카카오로 3초만에 계속하기
    </StandardBtn>
  );
};

export default KakaoLoginBtn;
