// React Hooks
import { useEffect, useState } from "react";

// Custom Hooks
import usePathMove from "../../../hooks/usePathMove";
import axios from "axios";

const KakaoCallback = () => {
  const [kakaoToken, setKakaoToken] = useState<string>("");
  const pathMove = usePathMove();
  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const CODE = params.get("code");
    const CLIENT_ID = "05cf8352947ebf29c675823b563ebde8";
    const REDIRECT_URL = "http://localhost:5173/oauth/kakaoCallback";
    const GRANT_TYPE = "authorization_code";
    const Header_Type = {
      "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    };

    const KAKAO_DATA_URL = `https://kauth.kakao.com/oauth/token?grant_type=${GRANT_TYPE}&client_id=${CLIENT_ID}&redirect_url=${REDIRECT_URL}&code=${CODE}`;
    const kakaoData = async () => {
      try {
        const res = await axios.post(
          KAKAO_DATA_URL,
          {},
          {
            headers: Header_Type,
          }
        );
        const { access_token } = res.data;
        setKakaoToken(access_token);
        sessionStorage.setItem("kakao", access_token);
        pathMove("/");
      } catch (error) {
        console.log(error);
      }
    };
    kakaoData();
  }, []);

  return <></>;
};

export default KakaoCallback;
