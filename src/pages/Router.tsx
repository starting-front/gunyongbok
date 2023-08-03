import { Routes, Route } from "react-router-dom";
import { useState } from "react";

// OAuth
import KakaoCallback from "../components/Auth/Kakao/KakaoCallback";
import KakaoAuthBtn from "../components/Auth/Kakao/KakaoAuthBtn";

// Components
import Home from "./Home";
import UserTypeSelect from "./UserType/UserTypeSelect";

const Router = () => {
  const [isInLogged, setisInLogged] = useState(true);

  return (
    <>
      {isInLogged ? (
        <Routes>
          <Route path="/" element={<KakaoAuthBtn />} />
          <Route path="/oauth/kakaoCallback" element={<KakaoCallback />} />
          <Route path="/usertype" element={<UserTypeSelect />} />
          <Route path="/*" element={<div></div>} />
        </Routes>
      ) : (
        <Routes>
          <Route />
        </Routes>
      )}
    </>
  );
};

export default Router;
