import styled from "styled-components";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

// Header
import SignInHeader from "../../components/Header/SignInHeader";
import MainTitle from "../../commons/Title/SignIn/MainTitle";
import SubTitle from "../../commons/Title/SignIn/SubTitle";

// SignIn
import SignInContainer from "../../components/Wrapper/SignIn/SignInContainer";
import Input from "../../commons/Input/Input";
import BreakLine from "../../commons/Break/SignIn/BreakLine";
import Label from "../../commons/Label/Label";
import InputBox from "../../components/Wrapper/InputBox";

// Error
import ErrorMessage from "../../commons/Text/ErrorMessage";

// Footer
import SignInFooter from "../../components/Wrapper/SignIn/SignInFooter";
import TextBox from "../../commons/Text/TextBox";
import TextBreakLine from "../../commons/Break/SignIn/TextBreakLine";

// LoginBtn
import StandardBtn from "../../commons/Button/StandardBtn";
import KakaoLoginBtn from "../../components/Auth/Kakao/KakaoLoginBtn";

import axios from "axios";

interface FormData {
  email: string;
  password: string;
}

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 599px) {
    height: 100vh;
    max-height: none;
    background-color: #fff;
  }
`;

const MainContainer = styled.div`
  width: 100%;
  max-width: 408px;
  height: 80%;
  border-radius: 8px;
  background-color: #fff;
  padding: 40px;
  box-sizing: border-box;
  box-shadow: 0px 0px 22px 0px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 599px) {
    box-shadow: none;
  }
`;

const SignIn = () => {
  const navigate = useNavigate();
  const serverUrl = import.meta.env.VITE_REACT_APP_DEFAULT_SERVER_URL;
  const [loginError, setLoginError] = useState<boolean>(false);

  const [data, setData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    field: keyof FormData
  ) => {
    setData({ ...data, [field]: event.target.value });
  };

  const handleChangeField = (
    fieldName: keyof FormData,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    handleChange(e, fieldName);
  };

  console.log(data);

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${serverUrl}/users/login`, data);
      console.log(response);
      setLoginError(false);
    } catch (error) {
      setLoginError(true);
      console.log(error);
    }
  };

  return (
    <>
      <TopContainer>
        <MainContainer>
          <SignInHeader $marginbottom="24px">
            <MainTitle text="세상에 없던 이력서"></MainTitle>
            <SubTitle text="나를 잘 표현한 이력서 멘토와 함께 작성해보세요"></SubTitle>
          </SignInHeader>
          <SignInContainer height="164px" $marginbottom="48px">
            <InputBox>
              <Label>이메일</Label>
              <Input
                value={data.email}
                onChange={(e) => handleChangeField("email", e)}
                placeholder="이메일을 입력해주세요"
              />
            </InputBox>
            <InputBox>
              <Label>비밀번호</Label>
              <Input
                type="password"
                value={data.password}
                onChange={(e) => handleChangeField("password", e)}
                placeholder="비밀번호를 입력해주세요"
              />
            </InputBox>
            {loginError && (
              <ErrorMessage text="이메일 또는 비밀번호가 일치하지 않습니다." />
            )}
          </SignInContainer>
          <SignInContainer height="148px" $marginbottom="40px">
            <StandardBtn
              onClick={handleLogin}
              $color="#FFF"
              $background="#8644FF"
            >
              이메일로 로그인 또는 회원가입
            </StandardBtn>
            <BreakLine />
            <KakaoLoginBtn />
          </SignInContainer>
          <SignInFooter>
            <TextBox
              text="회원가입"
              onClick={() => {
                navigate("/signup");
              }}
            ></TextBox>
            <TextBreakLine />
            <TextBox text="이메일찾기"></TextBox>
            <TextBreakLine />
            <TextBox text="비밀번호 찾기"></TextBox>
          </SignInFooter>
        </MainContainer>
      </TopContainer>
    </>
  );
};

export default SignIn;
