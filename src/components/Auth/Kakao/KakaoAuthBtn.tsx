import styled from "styled-components";

const Kakao = {
  Button: styled.button`
    width: 100%;
    max-width: 300px;
    height: 35px;
    background-color: #fee500;
    font-size: 17px;
    border: none;
    border-radius: 7px;
    cursor: pointer;
  `,

  Logo: styled.img`
    position: absolute;
    left: 40px;
  `,
};

const logoImage =
  "https://storage.keepgrow.com/admin/campaign/20200611043456590.svg";

const KakaoAuthBtn = () => {
  const CLIENT_ID = "05cf8352947ebf29c675823b563ebde8";
  const REDIRECT_URL = "http://localhost:5173/oauth/kakaoCallback";
  // const CALLBACK_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}`;
  const CALLBACK_URL =
    "https://kauth.kakao.com/oauth/authorize?client_id=596a5a8e48ed5c14a7e953802ef7adb2&redirect_uri=http://3.39.231.172:8080/users/kakao/callback&response_type=code";
  const kakaoOauthCallbackURL = () => (window.location.href = CALLBACK_URL);

  return (
    <Kakao.Button onClick={kakaoOauthCallbackURL}>
      <Kakao.Logo src={logoImage} />
      카카오로 3초만에 계속하기
    </Kakao.Button>
  );
};

export default KakaoAuthBtn;
