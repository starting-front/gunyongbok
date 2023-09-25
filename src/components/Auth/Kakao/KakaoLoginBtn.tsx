// React
import { useNavigate } from "react-router-dom";

// Assets
import Logo from "../../../assets/kakakoLogo.svg";

// CSS
import { styled } from "styled-components";

// Components
import StandardBtn from "../../../commons/Button/StandardBtn";

const LogoBox = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const KakaoLoginBtn = () => {
  const path = useNavigate();
  // 카카오 로그인 Auth CallBack
  const handleKakaoAuth = () => path("/oauth/kakaoCallback");
  return (
    <StandardBtn
      color="#351C1B"
      $background="#FBE54D"
      onClick={handleKakaoAuth}
    >
      <LogoBox src={Logo} alt="logo" /> 카카오로 3초만에 계속하기
    </StandardBtn>
  );
};

export default KakaoLoginBtn;
